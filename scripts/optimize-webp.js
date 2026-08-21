/**
 * Re-compress existing .webp files that sharp couldn't open via file path
 * Uses readFile + buffer input to bypass Windows file handle issues
 */
import sharp from 'sharp'
import { readdir, readFile, writeFile, stat } from 'fs/promises'
import { join, extname, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMG_DIR   = join(__dirname, '../public/img')

const PRESETS = {
  banner:   { width: 1920, height: 900,  quality: 82 },
  externa:  { width: 1200, height: 900,  quality: 80 },
  bandeiras:{ width: 48,   height: 48,   quality: 85 },
  default:  { width: 1200, height: 900,  quality: 80 },
}

// Only target heavy webp files (> 300 KB)
const MIN_SIZE = 300 * 1024

let totalBefore = 0
let totalAfter  = 0
let count = 0

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.webp') {
      const { size } = await stat(full)
      if (size >= MIN_SIZE) await processFile(full, size)
    }
  }
}

async function processFile(filePath, sizeBefore) {
  const folder = basename(dirname(filePath))
  const preset = PRESETS[folder] || PRESETS.default
  totalBefore += sizeBefore

  try {
    const inputBuf = await readFile(filePath)
    const outputBuf = await sharp(inputBuf)
      .resize(preset.width, preset.height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: preset.quality, effort: 5 })
      .toBuffer()

    // Only write if we actually made it smaller
    if (outputBuf.length < sizeBefore) {
      await writeFile(filePath, outputBuf)
      const saved = (((sizeBefore - outputBuf.length) / sizeBefore) * 100).toFixed(1)
      console.log(`✓ ${filePath.split('public')[1]}  ${kb(sizeBefore)} → ${kb(outputBuf.length)}  (-${saved}%)`)
      totalAfter += outputBuf.length
    } else {
      totalAfter += sizeBefore
      console.log(`= ${filePath.split('public')[1]}  ${kb(sizeBefore)} (already optimal)`)
    }
    count++
  } catch (err) {
    totalAfter += sizeBefore
    console.warn(`✗ ${basename(filePath)}: ${err.message}`)
  }
}

function kb(b) { return (b / 1024).toFixed(0) + ' KB' }

console.log('🔧 Re-compressing large WebP files...\n')
await walk(IMG_DIR)
console.log(`\n✅ ${count} files processed`)
console.log(`   Before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`)
console.log(`   After:  ${(totalAfter  / 1024 / 1024).toFixed(1)} MB`)
console.log(`   Saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`)
