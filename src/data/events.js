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
 * Campos multilíngues (title, shortDescription, description, location.name):
 *   Objetos com chaves: pt | en | es | fr | it | de
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
    title: {
      pt: 'O Gosto de Agosto',
      en: 'The Taste of August',
      es: 'El Sabor de Agosto',
      fr: "Le Goût d'Août",
      it: 'Il Gusto di Agosto',
      de: 'Der Geschmack des Augusts',
    },
    category: 'gastronomia',
    startDate: '2026-08-01',
    endDate:   '2026-08-31',
    location: {
      name: {
        pt: 'Diversos estabelecimentos de Saquarema',
        en: 'Various establishments in Saquarema',
        es: 'Diversos establecimientos de Saquarema',
        fr: 'Divers établissements de Saquarema',
        it: 'Diversi locali di Saquarema',
        de: 'Verschiedene Betriebe in Saquarema',
      },
      address: null,
      mapsUrl: null
    },
    shortDescription: {
      pt: 'Festival gastronômico que reúne restaurantes e estabelecimentos de Saquarema em uma programação especial durante o mês de agosto.',
      en: 'Gastronomic festival bringing together restaurants and establishments in Saquarema for a special programme throughout August.',
      es: 'Festival gastronómico que reúne restaurantes y establecimientos de Saquarema en una programación especial durante el mes de agosto.',
      fr: 'Festival gastronomique réunissant restaurants et établissements de Saquarema dans une programmation spéciale tout au long du mois d\'août.',
      it: 'Festival gastronomico che riunisce ristoranti e locali di Saquarema in un programma speciale durante il mese di agosto.',
      de: 'Gastronomisches Festival, das Restaurants und Betriebe in Saquarema für ein besonderes Programm im August zusammenbringt.',
    },
    description: {
      pt: `O Gosto de Agosto é um festival gastronômico que movimenta Saquarema durante o mês de agosto. A iniciativa reúne estabelecimentos da cidade em uma programação dedicada à gastronomia, convidando moradores e visitantes a conhecer diferentes sabores e experiências locais.

É uma oportunidade para quem visita Saquarema aproveitar a cidade também pela sua gastronomia e conhecer diferentes estabelecimentos participantes.

Os valores podem variar conforme o estabelecimento participante.`,
      en: `The Taste of August is a gastronomic festival that brings Saquarema to life throughout the month of August. The initiative gathers local establishments in a programme dedicated to gastronomy, inviting residents and visitors to discover different flavours and local experiences.

It is an opportunity for those visiting Saquarema to enjoy the city through its gastronomy and to get to know the participating establishments.

Prices may vary depending on the participating establishment.`,
      es: `El Sabor de Agosto es un festival gastronómico que dinamiza Saquarema durante el mes de agosto. La iniciativa reúne establecimientos de la ciudad en una programación dedicada a la gastronomía, invitando a residentes y visitantes a conocer diferentes sabores y experiencias locales.

Es una oportunidad para quienes visitan Saquarema de disfrutar la ciudad también a través de su gastronomía y conocer los diferentes establecimientos participantes.

Los precios pueden variar según el establecimiento participante.`,
      fr: `Le Goût d'Août est un festival gastronomique qui anime Saquarema tout au long du mois d'août. L'initiative rassemble des établissements de la ville dans une programmation dédiée à la gastronomie, invitant habitants et visiteurs à découvrir différentes saveurs et expériences locales.

C'est une occasion pour ceux qui visitent Saquarema de profiter de la ville aussi à travers sa gastronomie et de découvrir les différents établissements participants.

Les prix peuvent varier selon l'établissement participant.`,
      it: `Il Gusto di Agosto è un festival gastronomico che anima Saquarema durante il mese di agosto. L'iniziativa riunisce locali della città in un programma dedicato alla gastronomia, invitando residenti e visitatori a scoprire diversi sapori ed esperienze locali.

È un'opportunità per chi visita Saquarema di godere della città anche attraverso la sua gastronomia e di conoscere i diversi locali partecipanti.

I prezzi possono variare a seconda del locale partecipante.`,
      de: `Der Geschmack des Augusts ist ein gastronomisches Festival, das Saquarema im August belebt. Die Initiative versammelt Betriebe der Stadt in einem der Gastronomie gewidmeten Programm und lädt Einwohner und Besucher ein, verschiedene Aromen und lokale Erlebnisse zu entdecken.

Es ist eine Gelegenheit für Saquarema-Besucher, die Stadt auch durch ihre Gastronomie zu genießen und die teilnehmenden Betriebe kennenzulernen.

Die Preise können je nach teilnehmendem Betrieb variieren.`,
    },
    coverImage: '/img/eventos/ogosto.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 2. KNEEBOARD SURFING WORLD TITLES 2026
  {
    id: '2',
    slug: 'kneeboard-surfing-world-titles-2026',
    title: {
      pt: 'Kneeboard Surfing World Titles 2026',
      en: 'Kneeboard Surfing World Titles 2026',
      es: 'Kneeboard Surfing World Titles 2026',
      fr: 'Kneeboard Surfing World Titles 2026',
      it: 'Kneeboard Surfing World Titles 2026',
      de: 'Kneeboard Surfing World Titles 2026',
    },
    category: 'surf',
    startDate: '2026-08-22',
    endDate:   '2026-08-30',
    location: {
      name: {
        pt: 'Praia de Itaúna — Saquarema/RJ',
        en: 'Praia de Itaúna — Saquarema/RJ',
        es: 'Praia de Itaúna — Saquarema/RJ',
        fr: 'Praia de Itaúna — Saquarema/RJ',
        it: 'Praia de Itaúna — Saquarema/RJ',
        de: 'Praia de Itaúna — Saquarema/RJ',
      },
      address: 'Avenida Oceânica, 1594, Itaúna, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praia+de+Itauna+Saquarema+RJ'
    },
    shortDescription: {
      pt: 'Campeonato Mundial de Surf de Joelhos que reúne atletas de diversos países nas ondas de Itaúna.',
      en: 'Kneeboard Surfing World Championship bringing together athletes from many countries on the waves of Itaúna.',
      es: 'Campeonato Mundial de Surf de Rodillas que reúne atletas de diversos países en las olas de Itaúna.',
      fr: 'Championnat du monde de kneeboard qui réunit des athlètes de nombreux pays sur les vagues d\'Itaúna.',
      it: 'Campionato mondiale di kneeboard surfing che riunisce atleti di vari paesi sulle onde di Itaúna.',
      de: 'Kneeboard-Surf-Weltmeisterschaft, die Athleten aus vielen Ländern auf den Wellen von Itaúna zusammenbringt.',
    },
    description: {
      pt: `Saquarema recebe o Kneeboard Surfing World Titles, campeonato mundial dedicado ao surf de joelhos.

A competição reúne atletas de diferentes países e acontece nas ondas da Praia de Itaúna, um dos principais cenários do surf brasileiro.

O evento reforça a posição de Saquarema como um dos principais destinos mundiais para o surf e para os esportes ligados ao mar.`,
      en: `Saquarema hosts the Kneeboard Surfing World Titles, a world championship dedicated to kneeboard surfing.

The competition brings together athletes from different countries and takes place on the waves of Praia de Itaúna, one of the leading surf destinations in Brazil.

The event reinforces Saquarema's position as one of the world's top destinations for surf and ocean sports.`,
      es: `Saquarema acoge los Kneeboard Surfing World Titles, campeonato mundial dedicado al surf de rodillas.

La competición reúne atletas de diferentes países y se celebra en las olas de la Praia de Itaúna, uno de los principales escenarios del surf brasileño.

El evento refuerza la posición de Saquarema como uno de los principales destinos mundiales para el surf y los deportes marinos.`,
      fr: `Saquarema accueille les Kneeboard Surfing World Titles, championnat mondial dédié au kneeboard surfing.

La compétition rassemble des athlètes de différents pays et se déroule sur les vagues de la Praia de Itaúna, l'un des principaux sites du surf brésilien.

L'événement renforce la position de Saquarema comme l'une des principales destinations mondiales pour le surf et les sports nautiques.`,
      it: `Saquarema ospita i Kneeboard Surfing World Titles, campionato mondiale dedicato al kneeboard surfing.

La competizione riunisce atleti di diversi paesi e si svolge sulle onde della Praia de Itaúna, uno dei principali scenari del surf brasiliano.

L'evento rafforza la posizione di Saquarema come una delle principali destinazioni mondiali per il surf e gli sport legati al mare.`,
      de: `Saquarema ist Gastgeber der Kneeboard Surfing World Titles, einer Weltmeisterschaft im Kneeboard-Surfen.

Der Wettbewerb versammelt Athleten aus verschiedenen Ländern und findet auf den Wellen des Praia de Itaúna statt, einem der bedeutendsten Surforte Brasiliens.

Die Veranstaltung stärkt Saquaremas Position als eines der weltweit führenden Reiseziele für Surfen und Meeressport.`,
    },
    coverImage: '/img/eventos/kneeboard.webp',
    gallery:    [],
    officialUrl: 'https://kneeboardsurfingworldtitles.com/',
    published: true
  },

  // 3. CÍRIO DE NAZARETH
  {
    id: '3',
    slug: 'cirio-de-nazareth-2026',
    title: {
      pt: 'Círio de Nazareth — Festa da Padroeira de Saquarema',
      en: 'Círio de Nazareth — Feast of the Patron Saint of Saquarema',
      es: 'Círio de Nazareth — Fiesta de la Patrona de Saquarema',
      fr: 'Círio de Nazareth — Fête de la Patronne de Saquarema',
      it: 'Círio de Nazareth — Festa della Patrona di Saquarema',
      de: 'Círio de Nazareth — Fest der Schutzpatronin von Saquarema',
    },
    category: 'religioso',
    startDate: '2026-09-04',
    endDate:   '2026-09-08',
    location: {
      name: {
        pt: 'Igreja Matriz de Nossa Senhora de Nazareth — Centro de Saquarema',
        en: 'Igreja Matriz de Nossa Senhora de Nazareth — Downtown Saquarema',
        es: 'Igreja Matriz de Nossa Senhora de Nazareth — Centro de Saquarema',
        fr: 'Igreja Matriz de Nossa Senhora de Nazareth — Centre de Saquarema',
        it: 'Igreja Matriz de Nossa Senhora de Nazareth — Centro di Saquarema',
        de: 'Igreja Matriz de Nossa Senhora de Nazareth — Stadtzentrum Saquarema',
      },
      address: 'Centro, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Igreja+Nossa+Senhora+Nazareth+Saquarema'
    },
    shortDescription: {
      pt: 'Uma das celebrações religiosas mais tradicionais de Saquarema, reunindo missas, procissões e manifestações culturais em homenagem à padroeira da cidade.',
      en: 'One of the most traditional religious celebrations in Saquarema, bringing together masses, processions and cultural events in honour of the city\'s patron saint.',
      es: 'Una de las celebraciones religiosas más tradicionales de Saquarema, con misas, procesiones y manifestaciones culturales en honor a la patrona de la ciudad.',
      fr: 'L\'une des célébrations religieuses les plus traditionnelles de Saquarema, réunissant messes, processions et manifestations culturelles en l\'honneur de la patronne de la ville.',
      it: 'Una delle celebrazioni religiose più tradizionali di Saquarema, con messe, processioni e manifestazioni culturali in onore della patrona della città.',
      de: 'Eine der traditionsreichsten religiösen Feierlichkeiten in Saquarema, mit Messen, Prozessionen und kulturellen Veranstaltungen zu Ehren der Stadtpatronin.',
    },
    description: {
      pt: `O Círio de Nazareth é uma das festas mais tradicionais de Saquarema e faz parte da identidade histórica e religiosa do município.

A programação reúne celebrações religiosas, procissões e atividades que movimentam o Centro da cidade durante os dias de festividade.

O dia 8 de setembro, dedicado à Nossa Senhora de Nazareth, é o ponto alto da celebração, atraindo moradores, visitantes e peregrinos.

Para quem visita Saquarema nesse período, o Círio também é uma oportunidade de conhecer uma das tradições mais marcantes da cidade.

As celebrações públicas e religiosas são de acesso aberto à comunidade.`,
      en: `The Círio de Nazareth is one of the most traditional festivals in Saquarema and is part of the historical and religious identity of the municipality.

The programme includes religious celebrations, processions and activities that bring the city centre to life during the festive days.

The 8th of September, dedicated to Our Lady of Nazareth, is the highlight of the celebration, attracting residents, visitors and pilgrims.

For those visiting Saquarema during this period, the Círio is also an opportunity to experience one of the city's most meaningful traditions.

The public and religious celebrations are open to the community.`,
      es: `El Círio de Nazareth es una de las fiestas más tradicionales de Saquarema y forma parte de la identidad histórica y religiosa del municipio.

El programa reúne celebraciones religiosas, procesiones y actividades que dinamizan el centro de la ciudad durante los días de festividad.

El 8 de septiembre, dedicado a Nuestra Señora de Nazareth, es el punto culminante de la celebración, atrayendo a residentes, visitantes y peregrinos.

Para quienes visitan Saquarema en ese período, el Círio también es una oportunidad de conocer una de las tradiciones más significativas de la ciudad.

Las celebraciones públicas y religiosas son de acceso abierto a la comunidad.`,
      fr: `Le Círio de Nazareth est l'une des fêtes les plus traditionnelles de Saquarema et fait partie de l'identité historique et religieuse de la commune.

La programmation réunit célébrations religieuses, processions et activités qui animent le centre-ville pendant les jours de fête.

Le 8 septembre, dédié à Notre-Dame de Nazareth, est le point culminant de la célébration, attirant résidents, visiteurs et pèlerins.

Pour ceux qui visitent Saquarema pendant cette période, le Círio est aussi une occasion de découvrir l'une des traditions les plus marquantes de la ville.

Les célébrations publiques et religieuses sont ouvertes à la communauté.`,
      it: `Il Círio de Nazareth è una delle feste più tradizionali di Saquarema e fa parte dell'identità storica e religiosa del comune.

Il programma riunisce celebrazioni religiose, processioni e attività che animano il centro della città durante i giorni di festa.

L'8 settembre, dedicato alla Madonna di Nazareth, è il momento clou della celebrazione, che attira residenti, visitatori e pellegrini.

Per chi visita Saquarema in questo periodo, il Círio è anche un'opportunità per conoscere una delle tradizioni più significative della città.

Le celebrazioni pubbliche e religiose sono aperte alla comunità.`,
      de: `Das Círio de Nazareth ist eines der traditionsreichsten Feste in Saquarema und Teil der historischen und religiösen Identität der Gemeinde.

Das Programm umfasst religiöse Feiern, Prozessionen und Aktivitäten, die das Stadtzentrum während der Festtage beleben.

Der 8. September, dem Unsere Liebe Frau von Nazareth gewidmet ist, ist der Höhepunkt der Feier und zieht Einwohner, Besucher und Pilger an.

Für Besucher Saquaremas in dieser Zeit ist das Círio auch eine Gelegenheit, eine der bedeutendsten Traditionen der Stadt kennenzulernen.

Die öffentlichen und religiösen Feiern stehen der Gemeinschaft offen.`,
    },
    coverImage: '/img/eventos/cirio.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 4. REMA WSL SAQUAREMA SURF FESTIVAL
  {
    id: '4',
    slug: 'rema-wsl-saquarema-surf-festival-2026',
    title: {
      pt: 'REMA WSL Saquarema Surf Festival',
      en: 'REMA WSL Saquarema Surf Festival',
      es: 'REMA WSL Saquarema Surf Festival',
      fr: 'REMA WSL Saquarema Surf Festival',
      it: 'REMA WSL Saquarema Surf Festival',
      de: 'REMA WSL Saquarema Surf Festival',
    },
    category: 'surf',
    startDate: '2026-09-14',
    endDate:   '2026-09-20',
    location: {
      name: {
        pt: 'Praia de Itaúna — Saquarema/RJ',
        en: 'Praia de Itaúna — Saquarema/RJ',
        es: 'Praia de Itaúna — Saquarema/RJ',
        fr: 'Praia de Itaúna — Saquarema/RJ',
        it: 'Praia de Itaúna — Saquarema/RJ',
        de: 'Praia de Itaúna — Saquarema/RJ',
      },
      address: 'Praia de Itaúna, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praia+de+Itauna+Saquarema+RJ'
    },
    shortDescription: {
      pt: 'Festival que reúne surf, esporte e cultura na Praia de Itaúna, um dos principais picos de surf do Brasil.',
      en: 'Festival bringing together surf, sport and culture at Praia de Itaúna, one of Brazil\'s top surf breaks.',
      es: 'Festival que reúne surf, deporte y cultura en la Praia de Itaúna, uno de los principales picos de surf de Brasil.',
      fr: 'Festival réunissant surf, sport et culture à la Praia de Itaúna, l\'un des principaux spots de surf du Brésil.',
      it: 'Festival che riunisce surf, sport e cultura alla Praia de Itaúna, uno dei principali spot di surf del Brasile.',
      de: 'Festival, das Surfen, Sport und Kultur am Praia de Itaúna, einem der besten Surf-Spots Brasiliens, zusammenbringt.',
    },
    description: {
      pt: `O REMA WSL Saquarema Surf Festival é um dos grandes eventos ligados ao surf em Saquarema.

Realizado na Praia de Itaúna, o festival reúne competições de surf e atividades relacionadas à cultura e ao estilo de vida do esporte.

O evento reforça a posição de Saquarema como um dos principais destinos brasileiros para o surf e atrai atletas, familiares, torcedores e visitantes interessados em acompanhar as competições.`,
      en: `The REMA WSL Saquarema Surf Festival is one of the major surf events in Saquarema.

Held at Praia de Itaúna, the festival brings together surf competitions and activities related to the culture and lifestyle of the sport.

The event reinforces Saquarema's position as one of Brazil's top surf destinations and attracts athletes, families, fans and visitors keen to follow the competitions.`,
      es: `El REMA WSL Saquarema Surf Festival es uno de los grandes eventos de surf en Saquarema.

Celebrado en la Praia de Itaúna, el festival reúne competiciones de surf y actividades relacionadas con la cultura y el estilo de vida del deporte.

El evento refuerza la posición de Saquarema como uno de los principales destinos brasileños para el surf y atrae atletas, familiares, aficionados y visitantes interesados en seguir las competiciones.`,
      fr: `Le REMA WSL Saquarema Surf Festival est l'un des grands événements liés au surf à Saquarema.

Organisé à la Praia de Itaúna, le festival rassemble des compétitions de surf et des activités liées à la culture et au mode de vie du sport.

L'événement renforce la position de Saquarema comme l'une des principales destinations brésiliennes pour le surf et attire athlètes, familles, supporters et visiteurs désireux de suivre les compétitions.`,
      it: `Il REMA WSL Saquarema Surf Festival è uno dei grandi eventi legati al surf a Saquarema.

Svoltosi alla Praia de Itaúna, il festival riunisce gare di surf e attività legate alla cultura e allo stile di vita dello sport.

L'evento rafforza la posizione di Saquarema come una delle principali destinazioni brasiliane per il surf e attira atleti, famiglie, tifosi e visitatori interessati a seguire le competizioni.`,
      de: `Das REMA WSL Saquarema Surf Festival ist eines der größten Surf-Events in Saquarema.

Das am Praia de Itaúna ausgetragene Festival bringt Surf-Wettkämpfe und Aktivitäten rund um Kultur und Lifestyle des Sports zusammen.

Die Veranstaltung stärkt Saquaremas Position als eines der führenden brasilianischen Surf-Reiseziele und zieht Athleten, Familien, Fans und Besucher an, die die Wettkämpfe verfolgen möchten.`,
    },
    coverImage: '/img/eventos/rema-wsl.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 5. SAQUAREMA GOSPEL
  {
    id: '5',
    slug: 'saquarema-gospel-2026',
    title: {
      pt: 'Saquarema Gospel',
      en: 'Saquarema Gospel',
      es: 'Saquarema Gospel',
      fr: 'Saquarema Gospel',
      it: 'Saquarema Gospel',
      de: 'Saquarema Gospel',
    },
    category: 'musica',
    startDate: '2026-09-18',
    endDate:   '2026-09-19',
    location: {
      name: {
        pt: 'Saquarema/RJ',
        en: 'Saquarema/RJ',
        es: 'Saquarema/RJ',
        fr: 'Saquarema/RJ',
        it: 'Saquarema/RJ',
        de: 'Saquarema/RJ',
      },
      address: null,
      mapsUrl: null
    },
    shortDescription: {
      pt: 'Evento de música gospel que reúne apresentações musicais e momentos de celebração religiosa em Saquarema.',
      en: 'Gospel music event bringing together musical performances and moments of religious celebration in Saquarema.',
      es: 'Evento de música gospel que reúne actuaciones musicales y momentos de celebración religiosa en Saquarema.',
      fr: 'Événement de musique gospel réunissant des performances musicales et des moments de célébration religieuse à Saquarema.',
      it: 'Evento di musica gospel che riunisce esibizioni musicali e momenti di celebrazione religiosa a Saquarema.',
      de: 'Gospel-Musikveranstaltung mit musikalischen Darbietungen und religiösen Feierlichkeiten in Saquarema.',
    },
    description: {
      pt: `O Saquarema Gospel reúne música, fé e cultura em uma programação que recebe artistas e apresentações de música gospel.

O evento faz parte do calendário cultural da cidade e reúne moradores, visitantes e famílias em momentos de música e celebração.`,
      en: `Saquarema Gospel brings together music, faith and culture in a programme featuring artists and gospel music performances.

The event is part of the city's cultural calendar and gathers residents, visitors and families for moments of music and celebration.`,
      es: `El Saquarema Gospel reúne música, fe y cultura en una programación que acoge artistas y actuaciones de música gospel.

El evento forma parte del calendario cultural de la ciudad y reúne a residentes, visitantes y familias en momentos de música y celebración.`,
      fr: `Le Saquarema Gospel réunit musique, foi et culture dans une programmation accueillant artistes et performances de musique gospel.

L'événement fait partie du calendrier culturel de la ville et rassemble résidents, visiteurs et familles autour de moments de musique et de célébration.`,
      it: `Il Saquarema Gospel riunisce musica, fede e cultura in un programma che ospita artisti ed esibizioni di musica gospel.

L'evento fa parte del calendario culturale della città e riunisce residenti, visitatori e famiglie in momenti di musica e celebrazione.`,
      de: `Saquarema Gospel vereint Musik, Glauben und Kultur in einem Programm mit Künstlern und Gospel-Musikdarbietungen.

Die Veranstaltung ist Teil des kulturellen Kalenders der Stadt und bringt Einwohner, Besucher und Familien zu Momenten der Musik und Feier zusammen.`,
    },
    coverImage: '/img/eventos/saqua-gospel.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 6. SAQUAREMA BEER FEST
  {
    id: '6',
    slug: 'saquarema-beer-fest-2026',
    title: {
      pt: 'Saquarema Beer Fest',
      en: 'Saquarema Beer Fest',
      es: 'Saquarema Beer Fest',
      fr: 'Saquarema Beer Fest',
      it: 'Saquarema Beer Fest',
      de: 'Saquarema Beer Fest',
    },
    category: 'gastronomia',
    startDate: '2026-10-09',
    endDate:   '2026-10-11',
    location: {
      name: {
        pt: 'Praça do Coração — Centro de Saquarema',
        en: 'Praça do Coração — Downtown Saquarema',
        es: 'Praça do Coração — Centro de Saquarema',
        fr: 'Praça do Coração — Centre de Saquarema',
        it: 'Praça do Coração — Centro di Saquarema',
        de: 'Praça do Coração — Stadtzentrum Saquarema',
      },
      address: 'Praça do Coração, Centro, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Praça+do+Coração+Saquarema'
    },
    shortDescription: {
      pt: 'Festival que reúne cervejas artesanais, gastronomia e música em uma das principais praças do Centro de Saquarema.',
      en: 'Festival bringing together craft beers, gastronomy and music in one of the main squares of downtown Saquarema.',
      es: 'Festival que reúne cervezas artesanales, gastronomía y música en una de las principales plazas del centro de Saquarema.',
      fr: 'Festival réunissant bières artisanales, gastronomie et musique sur l\'une des principales places du centre de Saquarema.',
      it: 'Festival che riunisce birre artigianali, gastronomia e musica in una delle principali piazze del centro di Saquarema.',
      de: 'Festival mit Craft-Bieren, Gastronomie und Musik auf einem der wichtigsten Plätze im Stadtzentrum von Saquarema.',
    },
    description: {
      pt: `O Saquarema Beer Fest combina gastronomia, cervejas artesanais e música em uma programação voltada para moradores e visitantes.

O festival faz parte do calendário turístico de Saquarema e reúne cervejarias, gastronomia, atrações musicais e público de diferentes cidades da Região dos Lagos.

É uma opção interessante para quem quer conhecer Saquarema fora da alta temporada e aproveitar uma programação gastronômica e musical durante o fim de semana.`,
      en: `The Saquarema Beer Fest combines gastronomy, craft beers and music in a programme aimed at residents and visitors alike.

The festival is part of Saquarema's tourism calendar and brings together breweries, food, musical acts and audiences from different cities in the Lagos Region.

It is an interesting option for those who want to discover Saquarema outside the peak season and enjoy a gastronomic and musical programme over the weekend.`,
      es: `El Saquarema Beer Fest combina gastronomía, cervezas artesanales y música en una programación dirigida a residentes y visitantes.

El festival forma parte del calendario turístico de Saquarema y reúne cervecerías, gastronomía, atracciones musicales y público de diferentes ciudades de la Región de los Lagos.

Es una opción interesante para quienes quieren conocer Saquarema fuera de la temporada alta y disfrutar de una programación gastronómica y musical durante el fin de semana.`,
      fr: `Le Saquarema Beer Fest associe gastronomie, bières artisanales et musique dans une programmation destinée aux résidents et aux visiteurs.

Le festival fait partie du calendrier touristique de Saquarema et réunit brasseries, gastronomie, animations musicales et public venant de différentes villes de la Région des Lagos.

C'est une option intéressante pour ceux qui souhaitent découvrir Saquarema hors saison et profiter d'une programmation gastronomique et musicale le week-end.`,
      it: `Il Saquarema Beer Fest unisce gastronomia, birre artigianali e musica in un programma rivolto a residenti e visitatori.

Il festival fa parte del calendario turistico di Saquarema e riunisce birrifici, gastronomia, attrazioni musicali e pubblico proveniente da diverse città della Regione dei Laghi.

È un'opzione interessante per chi vuole scoprire Saquarema fuori dalla alta stagione e godersi un programma gastronomico e musicale nel fine settimana.`,
      de: `Das Saquarema Beer Fest verbindet Gastronomie, Craft-Biere und Musik in einem Programm für Einwohner und Besucher.

Das Festival ist Teil des Tourismuskalenders von Saquarema und bringt Brauereien, Gastronomie, Musikacts und Publikum aus verschiedenen Städten der Lagos-Region zusammen.

Es ist eine interessante Option für alle, die Saquarema außerhalb der Hochsaison kennenlernen und am Wochenende ein gastronomisches und musikalisches Programm genießen möchten.`,
    },
    coverImage: '/img/eventos/beer-fest.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 7. TRÍPLICE COROA SAQUAREMA DE SURF
  {
    id: '7',
    slug: 'triplice-coroa-saquarema-2026',
    title: {
      pt: 'Tríplice Coroa Saquarema de Surf',
      en: 'Saquarema Triple Crown of Surf',
      es: 'Triple Corona Saquarema de Surf',
      fr: 'Triple Couronne Saquarema de Surf',
      it: 'Triplice Corona Saquarema di Surf',
      de: 'Saquarema Triple Crown des Surfens',
    },
    category: 'surf',
    startDate: '2026-10-24',
    endDate:   '2026-10-25',
    location: {
      name: {
        pt: 'Saquarema/RJ',
        en: 'Saquarema/RJ',
        es: 'Saquarema/RJ',
        fr: 'Saquarema/RJ',
        it: 'Saquarema/RJ',
        de: 'Saquarema/RJ',
      },
      address: null,
      mapsUrl: null
    },
    shortDescription: {
      pt: 'Circuito de surf que reúne atletas de diferentes categorias em competições realizadas nas praias de Saquarema.',
      en: 'Surf circuit bringing together athletes from different categories in competitions held on the beaches of Saquarema.',
      es: 'Circuito de surf que reúne atletas de diferentes categorías en competiciones celebradas en las playas de Saquarema.',
      fr: 'Circuit de surf réunissant des athlètes de différentes catégories dans des compétitions organisées sur les plages de Saquarema.',
      it: 'Circuito di surf che riunisce atleti di diverse categorie in gare tenute sulle spiagge di Saquarema.',
      de: 'Surf-Circuit, der Athleten verschiedener Kategorien zu Wettkämpfen an den Stränden von Saquarema zusammenbringt.',
    },
    description: {
      pt: `A Tríplice Coroa Saquarema é um circuito tradicional do surf local, reunindo atletas de diferentes categorias e valorizando a formação e o desenvolvimento do esporte na cidade.

As competições fazem parte do calendário esportivo de Saquarema e ajudam a movimentar as praias e o cenário local do surf.`,
      en: `The Saquarema Triple Crown is a traditional local surf circuit, bringing together athletes from different categories and promoting the growth and development of the sport in the city.

The competitions are part of Saquarema's sports calendar and help to energise the beaches and the local surf scene.`,
      es: `La Triple Corona Saquarema es un circuito tradicional del surf local, que reúne atletas de diferentes categorías y fomenta la formación y el desarrollo del deporte en la ciudad.

Las competiciones forman parte del calendario deportivo de Saquarema y contribuyen a dinamizar las playas y la escena local del surf.`,
      fr: `La Triple Couronne Saquarema est un circuit traditionnel du surf local, réunissant des athlètes de différentes catégories et valorisant la formation et le développement du sport dans la ville.

Les compétitions font partie du calendrier sportif de Saquarema et contribuent à animer les plages et la scène locale du surf.`,
      it: `La Triplice Corona Saquarema è un circuito tradizionale del surf locale, che riunisce atleti di diverse categorie e valorizza la formazione e lo sviluppo dello sport in città.

Le gare fanno parte del calendario sportivo di Saquarema e contribuiscono ad animare le spiagge e la scena locale del surf.`,
      de: `Die Saquarema Triple Crown ist ein traditioneller lokaler Surf-Circuit, der Athleten verschiedener Kategorien zusammenbringt und die Ausbildung und Entwicklung des Sports in der Stadt fördert.

Die Wettkämpfe sind Teil des Sportkalenders von Saquarema und tragen dazu bei, die Strände und die lokale Surf-Szene zu beleben.`,
    },
    coverImage: '/img/eventos/surf-img-1.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 8. FLIS — FEIRA LITERÁRIA INTERNACIONAL DE SAQUAREMA
  {
    id: '8',
    slug: 'flis-2026',
    title: {
      pt: 'FLIS — Feira Literária Internacional de Saquarema',
      en: 'FLIS — International Literary Fair of Saquarema',
      es: 'FLIS — Feria Literaria Internacional de Saquarema',
      fr: 'FLIS — Foire Littéraire Internationale de Saquarema',
      it: 'FLIS — Fiera Letteraria Internazionale di Saquarema',
      de: 'FLIS — Internationale Literaturmesse von Saquarema',
    },
    category: 'cultural',
    startDate: '2026-11-11',
    endDate:   '2026-11-20',
    location: {
      name: {
        pt: 'Campo de Aviação — Saquarema/RJ',
        en: 'Campo de Aviação — Saquarema/RJ',
        es: 'Campo de Aviação — Saquarema/RJ',
        fr: 'Campo de Aviação — Saquarema/RJ',
        it: 'Campo de Aviação — Saquarema/RJ',
        de: 'Campo de Aviação — Saquarema/RJ',
      },
      address: 'Campo de Aviação, Saquarema/RJ',
      mapsUrl: 'https://www.google.com/maps/search/Campo+de+Aviacao+Saquarema'
    },
    shortDescription: {
      pt: 'Feira literária que reúne literatura, cultura, música, arte e atividades para diferentes públicos durante dez dias.',
      en: 'Literary fair bringing together literature, culture, music, art and activities for diverse audiences over ten days.',
      es: 'Feria literaria que reúne literatura, cultura, música, arte y actividades para diferentes públicos durante diez días.',
      fr: 'Foire littéraire réunissant littérature, culture, musique, art et activités pour différents publics pendant dix jours.',
      it: 'Fiera letteraria che riunisce letteratura, cultura, musica, arte e attività per pubblici diversi per dieci giorni.',
      de: 'Literaturmesse, die über zehn Tage Literatur, Kultur, Musik, Kunst und Aktivitäten für verschiedene Zielgruppen zusammenbringt.',
    },
    description: {
      pt: `A FLIS — Feira Literária Internacional de Saquarema — transforma a cidade em um grande espaço dedicado à literatura, cultura e arte.

Durante os dias de programação, o público encontra atividades literárias, apresentações culturais, música, encontros e ações voltadas para diferentes públicos.

O evento se tornou um dos principais acontecimentos culturais de Saquarema e atrai visitantes interessados em literatura e programação cultural.`,
      en: `The FLIS — International Literary Fair of Saquarema — transforms the city into a vast space dedicated to literature, culture and art.

During the programme days, audiences find literary activities, cultural performances, music, talks and initiatives aimed at different groups.

The event has become one of Saquarema's leading cultural happenings and attracts visitors interested in literature and cultural programming.`,
      es: `La FLIS — Feria Literaria Internacional de Saquarema — transforma la ciudad en un gran espacio dedicado a la literatura, la cultura y el arte.

Durante los días de programación, el público encuentra actividades literarias, presentaciones culturales, música, encuentros y acciones dirigidas a diferentes públicos.

El evento se ha convertido en uno de los principales acontecimientos culturales de Saquarema y atrae a visitantes interesados en literatura y programación cultural.`,
      fr: `La FLIS — Foire Littéraire Internationale de Saquarema — transforme la ville en un grand espace dédié à la littérature, à la culture et à l'art.

Pendant les jours de programmation, le public trouve des activités littéraires, des spectacles culturels, de la musique, des rencontres et des actions destinées à différents publics.

L'événement est devenu l'un des principaux événements culturels de Saquarema et attire des visiteurs intéressés par la littérature et la programmation culturelle.`,
      it: `La FLIS — Fiera Letteraria Internazionale di Saquarema — trasforma la città in un grande spazio dedicato alla letteratura, alla cultura e all'arte.

Durante i giorni di programmazione, il pubblico trova attività letterarie, spettacoli culturali, musica, incontri e iniziative rivolte a diversi pubblici.

L'evento è diventato uno dei principali avvenimenti culturali di Saquarema e attira visitatori interessati alla letteratura e alla programmazione culturale.`,
      de: `Die FLIS — Internationale Literaturmesse von Saquarema — verwandelt die Stadt in einen großen Raum, der der Literatur, Kultur und Kunst gewidmet ist.

Während der Programm-Tage finden die Besucher literarische Aktivitäten, kulturelle Darbietungen, Musik, Begegnungen und Aktionen für verschiedene Zielgruppen.

Die Veranstaltung ist zu einem der wichtigsten Kulturereignisse in Saquarema geworden und zieht Besucher an, die sich für Literatur und Kulturprogramme interessieren.`,
    },
    coverImage: '/img/eventos/flis.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 9. NATAL LUZ DE SAQUAREMA
  {
    id: '9',
    slug: 'natal-luz-saquarema-2026',
    title: {
      pt: 'Natal Luz de Saquarema',
      en: 'Saquarema Christmas Lights',
      es: 'Navidad Luz de Saquarema',
      fr: 'Noël Lumière de Saquarema',
      it: 'Natale Luce di Saquarema',
      de: 'Saquarema Weihnachtslichter',
    },
    category: 'cultural',
    startDate: '2026-11-14',
    endDate:   null,
    location: {
      name: {
        pt: 'Diversos pontos de Saquarema',
        en: 'Various locations in Saquarema',
        es: 'Diversos puntos de Saquarema',
        fr: 'Divers endroits de Saquarema',
        it: 'Vari punti di Saquarema',
        de: 'Verschiedene Orte in Saquarema',
      },
      address: null,
      mapsUrl: null
    },
    shortDescription: {
      pt: 'Programação natalina que transforma diferentes espaços de Saquarema com iluminação, decoração e atrações especiais.',
      en: 'Christmas programme that transforms various spaces in Saquarema with lighting, decoration and special attractions.',
      es: 'Programación navideña que transforma diferentes espacios de Saquarema con iluminación, decoración y atracciones especiales.',
      fr: 'Programme de Noël qui transforme différents espaces de Saquarema avec illuminations, décorations et attractions spéciales.',
      it: 'Programma natalizio che trasforma diversi spazi di Saquarema con illuminazioni, decorazioni e attrazioni speciali.',
      de: 'Weihnachtsprogramm, das verschiedene Orte in Saquarema mit Beleuchtung, Dekoration und besonderen Attraktionen verwandelt.',
    },
    description: {
      pt: `O Natal Luz transforma Saquarema durante o período de fim de ano, levando iluminação, decoração e programação cultural para diferentes pontos da cidade.

A iniciativa se tornou uma das principais atrações do calendário turístico de Saquarema e contribui para movimentar a cidade durante o período de Natal.

É uma opção especialmente interessante para famílias e visitantes que desejam conhecer Saquarema durante o fim do ano.`,
      en: `Saquarema Christmas Lights transforms the city during the year-end period, bringing illumination, decoration and cultural programming to different parts of town.

The initiative has become one of the highlights of Saquarema's tourism calendar and helps to bring the city to life during the Christmas season.

It is an especially appealing option for families and visitors who wish to experience Saquarema at the end of the year.`,
      es: `El Natal Luz transforma Saquarema durante el período de fin de año, llevando iluminación, decoración y programación cultural a diferentes puntos de la ciudad.

La iniciativa se ha convertido en una de las principales atracciones del calendario turístico de Saquarema y contribuye a dinamizar la ciudad durante la temporada navideña.

Es una opción especialmente interesante para familias y visitantes que desean conocer Saquarema durante el fin de año.`,
      fr: `Le Noël Lumière transforme Saquarema pendant la période de fin d'année, apportant illuminations, décorations et programmation culturelle dans différents endroits de la ville.

L'initiative est devenue l'une des principales attractions du calendrier touristique de Saquarema et contribue à animer la ville pendant la période de Noël.

C'est une option particulièrement intéressante pour les familles et les visiteurs qui souhaitent découvrir Saquarema en fin d'année.`,
      it: `Il Natale Luce trasforma Saquarema durante il periodo di fine anno, portando illuminazioni, decorazioni e programmazione culturale in diversi punti della città.

L'iniziativa è diventata una delle principali attrazioni del calendario turistico di Saquarema e contribuisce ad animare la città durante il periodo natalizio.

È un'opzione particolarmente interessante per famiglie e visitatori che desiderano scoprire Saquarema durante le festività di fine anno.`,
      de: `Die Saquarema Weihnachtslichter verwandeln die Stadt zur Jahresendzeit, bringen Beleuchtung, Dekoration und Kulturprogramm an verschiedene Orte der Stadt.

Die Initiative ist zu einer der Hauptattraktionen des Tourismuskalenders von Saquarema geworden und belebt die Stadt während der Weihnachtszeit.

Sie ist besonders attraktiv für Familien und Besucher, die Saquarema zum Jahresende kennenlernen möchten.`,
    },
    coverImage: '/img/eventos/natal.webp',
    gallery:    [],
    officialUrl: null,
    published: true
  },

  // 10. RÉVEILLON SAQUAREMA 2027
  {
    id: '10',
    slug: 'reveillon-saquarema-2027',
    title: {
      pt: 'Réveillon Saquarema 2027',
      en: 'Saquarema New Year\'s Eve 2027',
      es: 'Nochevieja Saquarema 2027',
      fr: 'Réveillon Saquarema 2027',
      it: 'Capodanno Saquarema 2027',
      de: 'Silvester Saquarema 2027',
    },
    category: 'musica',
    startDate: '2026-12-29',
    endDate:   '2026-12-31',
    location: {
      name: {
        pt: 'Saquarema/RJ',
        en: 'Saquarema/RJ',
        es: 'Saquarema/RJ',
        fr: 'Saquarema/RJ',
        it: 'Saquarema/RJ',
        de: 'Saquarema/RJ',
      },
      address: null,
      mapsUrl: null
    },
    shortDescription: {
      pt: 'Festa de Réveillon de Saquarema com shows, programação musical e celebração da virada do ano.',
      en: 'Saquarema New Year\'s Eve celebration with shows, musical programming and the countdown to the new year.',
      es: 'Fiesta de Nochevieja de Saquarema con shows, programación musical y celebración del año nuevo.',
      fr: 'Fête du Réveillon de Saquarema avec des spectacles, une programmation musicale et la célébration du Nouvel An.',
      it: 'Festa di Capodanno di Saquarema con spettacoli, programmazione musicale e celebrazione dell\'anno nuovo.',
      de: 'Silvesterfeier in Saquarema mit Shows, Musikprogramm und dem Countdown ins neue Jahr.',
    },
    description: {
      pt: `O Réveillon é um dos períodos de maior movimento turístico em Saquarema.

A programação tradicionalmente reúne shows e atrações em diferentes pontos do município, além da celebração da virada do ano.

A cidade recebe moradores e turistas para celebrar a chegada do novo ano, tornando o período uma das épocas mais movimentadas do calendário turístico local.`,
      en: `New Year's Eve is one of the busiest tourist periods in Saquarema.

The programme traditionally brings together shows and attractions at different points around the municipality, alongside the New Year countdown celebration.

The city welcomes residents and tourists to celebrate the arrival of the new year, making this one of the busiest times in the local tourism calendar.`,
      es: `La Nochevieja es uno de los períodos de mayor movimiento turístico en Saquarema.

La programación reúne tradicionalmente shows y atracciones en diferentes puntos del municipio, además de la celebración de la llegada del año nuevo.

La ciudad recibe a residentes y turistas para celebrar la llegada del nuevo año, convirtiéndose en una de las épocas más activas del calendario turístico local.`,
      fr: `Le Réveillon est l'une des périodes de plus forte activité touristique à Saquarema.

La programmation réunit traditionnellement spectacles et attractions dans différents points de la commune, en plus de la célébration du passage à la nouvelle année.

La ville accueille résidents et touristes pour célébrer l'arrivée de la nouvelle année, faisant de cette période l'une des plus animées du calendrier touristique local.`,
      it: `Il Capodanno è uno dei periodi di maggiore movimento turistico a Saquarema.

Il programma riunisce tradizionalmente spettacoli e attrazioni in diversi punti del comune, oltre alla celebrazione del conto alla rovescia per il nuovo anno.

La città accoglie residenti e turisti per celebrare l'arrivo del nuovo anno, rendendo questo periodo uno dei più movimentati del calendario turistico locale.`,
      de: `Silvester ist eine der touristisch belebtesten Zeiten in Saquarema.

Das Programm versammelt traditionell Shows und Attraktionen an verschiedenen Punkten der Gemeinde sowie die Feier zum Jahreswechsel.

Die Stadt empfängt Einwohner und Touristen, um das neue Jahr zu begrüßen, und macht diese Zeit zu einer der belebtesten im lokalen Tourismuskalender.`,
    },
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
 *   title: {
 *     pt: '',  en: '',  es: '',  fr: '',  it: '',  de: '',
 *   },
 *   category:    'surf' | 'gastronomia' | 'cultural' | 'religioso' | 'musica' | 'esporte' | 'reveillon',
 *   startDate:   'YYYY-MM-DD',
 *   endDate:     'YYYY-MM-DD',   // null = sem data final definida
 *   location: {
 *     name: {
 *       pt: '',  en: '',  es: '',  fr: '',  it: '',  de: '',
 *     },
 *     address:   'Endereço completo',   // null se não confirmado
 *     mapsUrl:   'https://...',         // null se não confirmado
 *   },
 *   shortDescription: {
 *     pt: '',  en: '',  es: '',  fr: '',  it: '',  de: '',
 *   },
 *   description: {
 *     pt: ``,  en: ``,  es: ``,  fr: ``,  it: ``,  de: ``,
 *   },
 *   coverImage:  '/img/eventos/nome-cover.webp',
 *   gallery:     [],
 *   officialUrl: 'https://...',    // null se não confirmado
 *   published:   true
 * }
 * ────────────────────────────────────────────────────────────────────────────
 */
