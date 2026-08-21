/**
 * Image optimization script
 * Converts all JPG/PNG/WebP in public/img to optimized WebP
 * Run once: node scripts/optimize-images.js
 */

import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import { join, extname, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMG_DIR   = join(__dirname, '../public/img')

// Max dimensions per folder context
const PRESETS = {
  banner:            { width: 1920, height: 900,  quality: 82 }, // hero full-bleed
  externa:           { width: 1200, height: 900,  quality: 80 },
  externaNoite:      { width: 1200, height: 900,  quality: 80 },
  internaTerreo:     { width: 1200, height: 900,  quality: 80 },
  internaSegundoAndar: { width: 1200, height: 900, quality: 80 },
  instalacoes:       { width: 900,  height: 675,  quality: 78 },
  eventos:           { width: 900,  height: 506,  quality: 78 }, // 16:9 cover
  bandeiras:         { width: 48,   height: 48,   quality: 85 },
  default:           { width: 1200, height: 900,  quality: 80 },
}

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp'])

let totalBefore = 0
let totalAfter  = 0
let count       = 0

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  // Process sequentially to avoid too many open file handles
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else if (entry.isFile() && SUPPORTED.has(extname(entry.name).toLowerCase())) {
      await processFile(full)
    }
  }
}

async function processFile(filePath) {
  const ext      = extname(filePath).toLowerCase()
  const folder   = basename(dirname(filePath))
  const preset   = PRESETS[folder] || PRESETS.default
  const outPath  = filePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp')

  const { size: before } = await stat(filePath)
  totalBefore += before

  try {
    const buf = await sharp(filePath)
      .resize(preset.width, preset.height, {
        fit:                'inside',   // never upscale, keep ratio
        withoutEnlargement: true,
      })
      .webp({ quality: preset.quality, effort: 5 })
      .toBuffer()

    totalAfter += buf.length

    // Write new webp (may overwrite if already .webp)
    const { writeFile } = await import('fs/promises')
    await writeFile(outPath, buf)

    // Remove original if it was jpg/jpeg/png (not already webp)
    if (ext !== '.webp') {
      const { unlink } = await import('fs/promises')
      await unlink(filePath)
    }

    const savedPct = (((before - buf.length) / before) * 100).toFixed(1)
    console.log(`✓ ${filePath.split('public')[1]}  ${kb(before)} → ${kb(buf.length)}  (-${savedPct}%)`)
    count++
  } catch (err) {
    console.warn(`✗ Skipped ${basename(filePath)}: ${err.message}`)
  }
}

function kb(bytes) {
  return (bytes / 1024).toFixed(0) + ' KB'
}

console.log('🔧 Optimizing images...\n')
await walk(IMG_DIR)
console.log(`\n✅ ${count} images processed`)
console.log(`   Before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`)
console.log(`   After:  ${(totalAfter  / 1024 / 1024).toFixed(1)} MB`)
console.log(`   Saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`)
