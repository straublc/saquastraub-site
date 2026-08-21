/**
 * SaquaStraub — Cadastro de Eventos
 *
 * Regras:
 * - Um evento aparece no site público apenas quando:
 *     published === true  &&  endDate >= hoje
 * - Eventos vencidos desaparecem automaticamente — NÃO são apagados
 * - Ordenação automática por startDate (cronológica)
 * - endDate: null → evento continua aparecendo até ser atualizado manualmente
 *
 * Imagens disponíveis em public/img/eventos/:
 *   ogosto.webp, surf-img-1.webp, saqua-img-1.webp, rema-wsl.webp,
 *   saqua-img-2.webp, beer-fest.webp, placeholder.svg
 */

export const events = [

  // 1. O GOSTO DE AGOSTO
  {
    id: '1',
    slug: 'gosto-de-agosto-2026',
    title: 'O Gosto de Agosto',
    category: 'gastronomia',
    startDate: '2026-08-01',
    endDate:   '2026-08-31',
    location: {
      name:    'Diversos estabelecimentos de Saquarema',
      address: null,
      mapsUrl: null
    },
    shortDescription: 'Festival gastronômico que reúne restaurantes e estabelecimentos de Saquarema em uma programação especial durante o mês de agosto.',
    description: `O Gosto de Agosto é um festival gastronômico que movimenta Saquarema durante o mês de agosto. A iniciativa reúne estabelecimentos da cidade em uma programação dedicada à gastronomia, convidando moradores e visitantes a conhecer diferentes sabores e experiências locais.

É uma oportunidade para quem visita Saquarema aproveitar a cidade também pela sua gastronomia e conhecer diferentes estabelecimentos participantes.

Os valores podem variar conforme o estabelecimento participante.`,
    coverImage: '/img/eventos/ogosto.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 2. KNEEBOARD SURFING WORLD TITLES 2026
  {
    id: '2',
    slug: 'kneeboard-surfing-world-titles-2026',
    title: 'Kneeboard Surfing World Titles 2026',
    category: 'surf',
    startDate: '2026-08-22',
    endDate:   '2026-08-30',
    location: {
      name:    'Praia de Itaúna — Saquarema/RJ',
      address: 'Avenida Oceânica, 1594, Itaúna, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praia+de+Itauna+Saquarema+RJ'
    },
    shortDescription: 'Campeonato Mundial de Surf de Joelhos que reúne atletas de diversos países nas ondas de Itaúna.',
    description: `Saquarema recebe o Kneeboard Surfing World Titles, campeonato mundial dedicado ao surf de joelhos.

A competição reúne atletas de diferentes países e acontece nas ondas da Praia de Itaúna, um dos principais cenários do surf brasileiro.

O evento reforça a posição de Saquarema como um dos principais destinos mundiais para o surf e para os esportes ligados ao mar.`,
    coverImage: '/img/eventos/kneeboard.webp',
    gallery:    [],
    officialUrl: 'https://kneeboardsurfingworldtitles.com/',
    published: true
  },

  // 3. CÍRIO DE NAZARETH
  {
    id: '3',
    slug: 'cirio-de-nazareth-2026',
    title: 'Círio de Nazareth — Festa da Padroeira de Saquarema',
    category: 'religioso',
    startDate: '2026-09-04',
    endDate:   '2026-09-08',
    location: {
      name:    'Igreja Matriz de Nossa Senhora de Nazareth — Centro de Saquarema',
      address: 'Centro, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Igreja+Nossa+Senhora+Nazareth+Saquarema'
    },
    shortDescription: 'Uma das celebrações religiosas mais tradicionais de Saquarema, reunindo missas, procissões e manifestações culturais em homenagem à padroeira da cidade.',
    description: `O Círio de Nazareth é uma das festas mais tradicionais de Saquarema e faz parte da identidade histórica e religiosa do município.

A programação reúne celebrações religiosas, procissões e atividades que movimentam o Centro da cidade durante os dias de festividade.

O dia 8 de setembro, dedicado à Nossa Senhora de Nazareth, é o ponto alto da celebração, atraindo moradores, visitantes e peregrinos.

Para quem visita Saquarema nesse período, o Círio também é uma oportunidade de conhecer uma das tradições mais marcantes da cidade.

As celebrações públicas e religiosas são de acesso aberto à comunidade.`,
    coverImage: '/img/eventos/cirio.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 4. REMA WSL SAQUAREMA SURF FESTIVAL
  {
    id: '4',
    slug: 'rema-wsl-saquarema-surf-festival-2026',
    title: 'REMA WSL Saquarema Surf Festival',
    category: 'surf',
    startDate: '2026-09-14',
    endDate:   '2026-09-20',
    location: {
      name:    'Praia de Itaúna — Saquarema/RJ',
      address: 'Praia de Itaúna, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praia+de+Itauna+Saquarema+RJ'
    },
    shortDescription: 'Festival que reúne surf, esporte e cultura na Praia de Itaúna, um dos principais picos de surf do Brasil.',
    description: `O REMA WSL Saquarema Surf Festival é um dos grandes eventos ligados ao surf em Saquarema.

Realizado na Praia de Itaúna, o festival reúne competições de surf e atividades relacionadas à cultura e ao estilo de vida do esporte.

O evento reforça a posição de Saquarema como um dos principais destinos brasileiros para o surf e atrai atletas, familiares, torcedores e visitantes interessados em acompanhar as competições.`,
    coverImage: '/img/eventos/rema-wsl.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 5. SAQUAREMA GOSPEL
  {
    id: '5',
    slug: 'saquarema-gospel-2026',
    title: 'Saquarema Gospel',
    category: 'musica',
    startDate: '2026-09-18',
    endDate:   '2026-09-19',
    location: {
      name:    'Saquarema/RJ',
      address: null,
      mapsUrl: null
    },
    shortDescription: 'Evento de música gospel que reúne apresentações musicais e momentos de celebração religiosa em Saquarema.',
    description: `O Saquarema Gospel reúne música, fé e cultura em uma programação que recebe artistas e apresentações de música gospel.

O evento faz parte do calendário cultural da cidade e reúne moradores, visitantes e famílias em momentos de música e celebração.`,
    coverImage: '/img/eventos/saqua-gospel.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 6. SAQUAREMA BEER FEST
  {
    id: '6',
    slug: 'saquarema-beer-fest-2026',
    title: 'Saquarema Beer Fest',
    category: 'gastronomia',
    startDate: '2026-10-09',
    endDate:   '2026-10-11',
    location: {
      name:    'Praça do Coração — Centro de Saquarema',
      address: 'Praça do Coração, Centro, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praça+do+Coração+Saquarema'
    },
    shortDescription: 'Festival que reúne cervejas artesanais, gastronomia e música em uma das principais praças do Centro de Saquarema.',
    description: `O Saquarema Beer Fest combina gastronomia, cervejas artesanais e música em uma programação voltada para moradores e visitantes.

O festival faz parte do calendário turístico de Saquarema e reúne cervejarias, gastronomia, atrações musicais e público de diferentes cidades da Região dos Lagos.

É uma opção interessante para quem quer conhecer Saquarema fora da alta temporada e aproveitar uma programação gastronômica e musical durante o fim de semana.`,
    coverImage: '/img/eventos/beer-fest.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 7. TRÍPLICE COROA SAQUAREMA DE SURF
  {
    id: '7',
    slug: 'triplice-coroa-saquarema-2026',
    title: 'Tríplice Coroa Saquarema de Surf',
    category: 'surf',
    startDate: '2026-10-24',
    endDate:   '2026-10-25',
    location: {
      name:    'Saquarema/RJ',
      address: null,
      mapsUrl: null
    },
    shortDescription: 'Circuito de surf que reúne atletas de diferentes categorias em competições realizadas nas praias de Saquarema.',
    description: `A Tríplice Coroa Saquarema é um circuito tradicional do surf local, reunindo atletas de diferentes categorias e valorizando a formação e o desenvolvimento do esporte na cidade.

As competições fazem parte do calendário esportivo de Saquarema e ajudam a movimentar as praias e o cenário local do surf.`,
    coverImage: '/img/eventos/surf-img-1.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 8. FLIS — FEIRA LITERÁRIA INTERNACIONAL DE SAQUAREMA
  {
    id: '8',
    slug: 'flis-2026',
    title: 'FLIS — Feira Literária Internacional de Saquarema',
    category: 'cultural',
    startDate: '2026-11-11',
    endDate:   '2026-11-20',
    location: {
      name:    'Campo de Aviação — Saquarema/RJ',
      address: 'Campo de Aviação, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Campo+de+Aviacao+Saquarema'
    },
    shortDescription: 'Feira literária que reúne literatura, cultura, música, arte e atividades para diferentes públicos durante dez dias.',
    description: `A FLIS — Feira Literária Internacional de Saquarema — transforma a cidade em um grande espaço dedicado à literatura, cultura e arte.

Durante os dias de programação, o público encontra atividades literárias, apresentações culturais, música, encontros e ações voltadas para diferentes públicos.

O evento se tornou um dos principais acontecimentos culturais de Saquarema e atrai visitantes interessados em literatura e programação cultural.`,
    coverImage: '/img/eventos/flis.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 9. NATAL LUZ DE SAQUAREMA
  {
    id: '9',
    slug: 'natal-luz-saquarema-2026',
    title: 'Natal Luz de Saquarema',
    category: 'cultural',
    startDate: '2026-11-14',
    endDate:   null,
    location: {
      name:    'Diversos pontos de Saquarema',
      address: null,
      mapsUrl: null
    },
    shortDescription: 'Programação natalina que transforma diferentes espaços de Saquarema com iluminação, decoração e atrações especiais.',
    description: `O Natal Luz transforma Saquarema durante o período de fim de ano, levando iluminação, decoração e programação cultural para diferentes pontos da cidade.

A iniciativa se tornou uma das principais atrações do calendário turístico de Saquarema e contribui para movimentar a cidade durante o período de Natal.

É uma opção especialmente interessante para famílias e visitantes que desejam conhecer Saquarema durante o fim do ano.`,
    coverImage: '/img/eventos/natal.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 10. RÉVEILLON SAQUAREMA 2027
  {
    id: '10',
    slug: 'reveillon-saquarema-2027',
    title: 'Réveillon Saquarema 2027',
    category: 'musica',
    startDate: '2026-12-29',
    endDate:   '2026-12-31',
    location: {
      name:    'Saquarema/RJ',
      address: null,
      mapsUrl: null
    },
    shortDescription: 'Festa de Réveillon de Saquarema com shows, programação musical e celebração da virada do ano.',
    description: `O Réveillon é um dos períodos de maior movimento turístico em Saquarema.

A programação tradicionalmente reúne shows e atrações em diferentes pontos do município, além da celebração da virada do ano.

A cidade recebe moradores e turistas para celebrar a chegada do novo ano, tornando o período uma das épocas mais movimentadas do calendário turístico local.`,
    coverImage: '/img/eventos/revellion.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  }

]

/*
 * ─── MODELO PARA NOVOS EVENTOS ──────────────────────────────────────────────
 *
 * {
 *   id:          'ID único',
 *   slug:        'nome-do-evento-ano',
 *   title:       'Nome do Evento',
 *   category:    'surf' | 'gastronomia' | 'cultural' | 'religioso' | 'musica' | 'esporte' | 'reveillon',
 *   startDate:   'YYYY-MM-DD',
 *   endDate:     'YYYY-MM-DD',   // null = sem data final definida
 *   location: {
 *     name:      'Local do evento',
 *     address:   'Endereço completo',   // null se não confirmado
 *     mapsUrl:   'https://...',         // null se não confirmado
 *   },
 *   shortDescription: 'Uma linha.',
 *   description:      `Texto completo.`,
 *   coverImage:  '/img/eventos/nome-cover.webp',
 *   gallery:     [],
 *   officialUrl: 'https://...',    // null se não confirmado
 *   published:   true
 * }
 * ────────────────────────────────────────────────────────────────────────────
 */
