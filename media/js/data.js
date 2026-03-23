// Celestial Cartographer - Countries Data
window.COUNTRIES_DATA = {

  "italy": {
    id: "italy",
    name: "Italy",
    region: "Southern Europe",
    coordinates: "41.8719° N, 12.5674° E",
    lat: 41.8719,
    lng: 12.5674,
    heroImage: "https://source.unsplash.com/3840x2160/?italy,tuscany,landscape,travel",
    description: "Italy is a land of timeless beauty where ancient ruins stand alongside Renaissance masterpieces and sun-drenched coastlines. From the canals of Venice to the volcanic slopes of Sicily, every region offers its own distinct culture, cuisine, and scenery.",
    terrain: "Alpine / Apennine / Coastal",
    climate: "Mediterranean Csa/Csb",
    biodiversity: "Mediterranean Maquis & Alpine Meadows",
    destinations: [
      {
        id: "colosseum",
        name: "The Colosseum",
        location: "Rome, Lazio",
        category: "Historic Landmark",
        heroImage: "https://source.unsplash.com/3840x2160/?colosseum,rome,ancient,amphitheatre",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?colosseum,rome,aerial,architecture",
          "https://source.unsplash.com/1200x1600/?colosseum,interior,arches,ruins"
        ],
        description: "The world's largest ancient amphitheatre, a symbol of Imperial Rome's engineering genius.",
        longDescription: "Commissioned by Emperor Vespasian of the Flavian dynasty around AD 70–72 and completed by his son Titus in AD 80, the Colosseum could hold between 50,000 and 80,000 spectators who gathered to watch gladiatorial contests, animal hunts, and public spectacles. Its elliptical design, four-storey façade, and sophisticated system of vaults and arches set the template for sports stadia that endures to this day.\n\nVisitors today can explore the arena floor where gladiators once fought, descend into the hypogeum — the underground network of tunnels and cages — and ascend upper tiers for sweeping views across the Roman Forum. The site is most magical at golden hour, when the travertine stone glows amber against the evening sky.",
        details: {
          "Built By": "Emperors Vespasian & Titus",
          "Completed": "80 AD",
          "Material": "Travertine, Tuff & Brick",
          "Original Capacity": "50,000–80,000 Spectators",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 19:00",
        price: "€16.00",
        coordinates: "41.8902° N, 12.4922° E",
        tip: "Book tickets online in advance to skip queues. Arrive at opening time for the best light and fewest crowds. Combo tickets include the Roman Forum and Palatine Hill."
      },
      {
        id: "venice-canals",
        name: "Venice Canals",
        location: "Venice, Veneto",
        category: "Cultural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?venice,grand-canal,gondola,italy",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?venice,canal,bridge,architecture",
          "https://source.unsplash.com/1200x1600/?venice,gondola,rialto,reflection"
        ],
        description: "A miraculous city built on water, where 177 canals thread between palaces, churches, and piazzas.",
        longDescription: "Venice was founded by refugees fleeing Attila the Hun in the 5th century, who discovered that the lagoon's mudflats offered natural protection. Over centuries the city rose from wooden pilings driven into the seafloor, eventually becoming the most powerful maritime republic in the Mediterranean, its palaces and churches adorned with treasures looted and traded from across the known world.\n\nToday visitors glide along the sinuous Grand Canal by vaporetto or gondola, discovering Gothic facades draped in morning mist, the breathtaking Piazza San Marco, the ornate Doge's Palace, and countless neighbourhood calli (alleys) that seem to have barely changed since Canaletto painted them in the 18th century.",
        details: {
          "Founded": "~421 AD",
          "Total Canals": "177",
          "Total Bridges": "~391",
          "Main Waterway": "Grand Canal (3.8 km)",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Open 24 hours (canals)",
        price: "Free (vaporetto from €9.50)",
        coordinates: "45.4408° N, 12.3155° E",
        tip: "Take the vaporetto Line 1 the full length of the Grand Canal at dawn. Avoid peak summer midday. Explore Dorsoduro and Cannaregio districts for a less touristy experience."
      },
      {
        id: "amalfi-coast",
        name: "Amalfi Coast",
        location: "Positano, Campania",
        category: "Scenic Coastline",
        heroImage: "https://source.unsplash.com/3840x2160/?amalfi-coast,positano,cliffs,italy",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?amalfi,positano,colourful,village",
          "https://source.unsplash.com/1200x1600/?amalfi,coast,sea,lemon,terrace"
        ],
        description: "A UNESCO-listed stretch of dramatic cliffs cascading into turquoise waters, dotted with colourful villages.",
        longDescription: "The Amalfi Coast stretches 50 kilometres along the southern edge of the Sorrentine Peninsula in Campania, where vertiginous limestone cliffs plunge directly into the Tyrrhenian Sea. Terraced lemon groves cling to the slopes between the pastel-coloured villages of Positano, Amalfi, and Ravello, each one a labyrinth of steep staircases and flower-draped archways with panoramic sea views.\n\nVisitors wind along the narrow coastal road by bus or hired scooter, stopping to swim from hidden pebble coves, eat freshly caught seafood, and sip limoncello made from the region's famous sfusato lemons. The hilltop town of Ravello hosts a celebrated music festival each summer against a backdrop of clifftop gardens overlooking the sea.",
        details: {
          "Coastline Length": "50 km",
          "Main Villages": "Positano, Amalfi, Ravello",
          "Designated": "UNESCO World Heritage 1997",
          "Best Season": "May–June, September–October",
          "Key Product": "Sfusato Amalfitano Lemon"
        },
        hours: "Always accessible",
        price: "Free (boat hire from €80/day)",
        coordinates: "40.6340° N, 14.6027° E",
        tip: "Stay in Praiano to avoid the worst crowds. Take ferries between towns rather than the congested road. Visit in May or September for ideal weather and fewer tourists."
      },
      {
        id: "florence-cathedral",
        name: "Florence Cathedral (Duomo)",
        location: "Florence, Tuscany",
        category: "Religious Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?florence,duomo,cathedral,tuscany",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?florence,duomo,brunelleschi,dome,aerial",
          "https://source.unsplash.com/1200x1600/?florence,cathedral,interior,fresco"
        ],
        description: "Brunelleschi's magnificent terracotta dome dominates the Florentine skyline and changed the course of architecture.",
        longDescription: "Construction of the Cattedrale di Santa Maria del Fiore began in 1296 under Arnolfo di Cambio and took 140 years to complete, culminating in Filippo Brunelleschi's revolutionary double-shell dome — at 44.8 metres in diameter, the largest masonry dome ever built and a feat of engineering that had not been attempted since antiquity. The exterior is clad in white Carrara marble, green Prato serpentine, and pink Maremma marble in geometric patterns.\n\nClimbing the 463 steps to the top of the dome rewards visitors with extraordinary panoramic views over Florence's terracotta rooftops and the rolling Tuscan hills beyond. The adjacent Baptistery of San Giovanni, with its gilded bronze doors that Michelangelo called the 'Gates of Paradise', and Giotto's elegant Campanile complete one of the world's great architectural ensembles.",
        details: {
          "Architect": "Arnolfo di Cambio & Brunelleschi",
          "Construction": "1296–1436",
          "Dome Diameter": "44.8 Metres",
          "Dome Height": "114.5 Metres",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Cathedral: 10:00 — 17:00 | Dome: 08:30 — 19:00",
        price: "Cathedral Free | Dome €30.00",
        coordinates: "43.7731° N, 11.2560° E",
        tip: "Book dome tickets weeks in advance — they sell out fast. Start at 08:30 when the dome opens to beat the heat and crowds. The view from Piazzale Michelangelo at sunset rivals the climb."
      },
      {
        id: "the-dolomites",
        name: "The Dolomites",
        location: "South Tyrol, Trentino",
        category: "Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?dolomites,mountains,italy,alpine,peaks",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?dolomites,tre-cime,sunrise,alps",
          "https://source.unsplash.com/1200x1600/?dolomites,valley,autumn,reflection"
        ],
        description: "Jagged pale limestone towers soaring above emerald meadows and alpine lakes in northeast Italy.",
        longDescription: "The Dolomites — named after the French geologist Déodat de Dolomieu — form one of the most spectacular mountain landscapes on Earth, with sheer vertical walls of pale rose-grey rock rising abruptly from the valley floors of Trentino-Alto Adige and the Veneto. The UNESCO World Heritage site encompasses nine mountain groups, including the iconic Tre Cime di Lavaredo, the Marmolada glacier, and the Sella Group.\n\nIn summer, hundreds of kilometres of hiking trails wind through wildflower meadows and past alpine rifugios (mountain huts) serving hearty Tyrolean cuisine. In winter the region transforms into one of Europe's premier ski destinations, with the Dolomiti Superski network linking 12 valleys and 1,200 kilometres of pistes.",
        details: {
          "Highest Peak": "Marmolada 3,343 m",
          "UNESCO Status": "World Natural Heritage 2009",
          "Area": "141,903 Hectares",
          "Ski Pistes": "1,200 km (Dolomiti Superski)",
          "Rock Type": "Pale Dolomite Limestone"
        },
        hours: "Always accessible",
        price: "Free (ski passes from €65/day)",
        coordinates: "46.4102° N, 11.8440° E",
        tip: "The Tre Cime di Lavaredo loop (9.5 km) is the iconic hike — start at sunrise from Rifugio Auronzo. In autumn the larch trees turn gold, making October one of the best months to visit."
      },
      {
        id: "pompeii",
        name: "Pompeii",
        location: "Naples, Campania",
        category: "Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?pompeii,ruins,vesuvius,ancient,italy",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?pompeii,street,ruins,archaeology",
          "https://source.unsplash.com/1200x1600/?pompeii,fresco,mosaic,ancient-rome"
        ],
        description: "A Roman city frozen in time by the catastrophic eruption of Vesuvius in 79 AD.",
        longDescription: "On 24 August 79 AD, Mount Vesuvius unleashed a cataclysmic eruption that buried the thriving Roman city of Pompeii under six metres of volcanic ash and pumice, perfectly preserving its streets, buildings, frescoes, and the plaster casts of its inhabitants in their final moments. Systematic excavation since the 18th century has revealed an extraordinary snapshot of Roman urban life: bakeries with carbonised loaves still in the ovens, taverns with menus painted on the walls, and grand villas adorned with vivid mythological frescoes.\n\nVisiting the 44-hectare archaeological park is a profoundly moving experience. The Forum, the Lupanare, the House of the Faun, the amphitheatre, and the haunting casts of victims frozen in ash combine to create an unparalleled encounter with the ancient world, with Vesuvius still looming visibly on the horizon.",
        details: {
          "Destroyed": "24 August 79 AD",
          "Eruption": "Mount Vesuvius",
          "Area Excavated": "44 Hectares",
          "Population (79 AD)": "~11,000 Inhabitants",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 19:00 (Apr–Oct) | 09:00 — 17:00 (Nov–Mar)",
        price: "€16.00",
        coordinates: "40.7510° N, 14.4869° E",
        tip: "Wear comfortable shoes — the ancient cobblestones are uneven. Hire an audio guide or a licensed guide to bring the ruins to life. Visit the National Archaeological Museum in Naples to see the finest artefacts."
      },
      {
        id: "cinque-terre",
        name: "Cinque Terre",
        location: "Liguria, Northwest Italy",
        category: "Scenic Coastline",
        heroImage: "https://source.unsplash.com/3840x2160/?cinque-terre,manarola,liguria,italy,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cinque-terre,vernazza,harbour,village",
          "https://source.unsplash.com/1200x1600/?cinque-terre,hiking,trail,sea,cliffs"
        ],
        description: "Five centuries-old fishing villages clinging to dramatic cliffsides above the Italian Riviera.",
        longDescription: "The Cinque Terre — Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore — are five ancient fishing villages strung along a rugged 15-kilometre stretch of the Ligurian coast, their brightly painted houses stacked in tiers above rocky harbours and terraced vineyards that drop steeply to the sea. The entire coastline has been a UNESCO World Heritage Site since 1997 and is protected within a national park.\n\nThe famous Sentiero Azzurro (Blue Trail) links the five villages on foot, offering dramatic clifftop vistas at every turn. Local specialities include pesto genovese made with the fragrant Ligurian basil, freshly caught anchovies, and the crisp local Sciacchetrà passito wine produced from grapes grown on the precipitous terraces.",
        details: {
          "Number of Villages": "5",
          "Coastline": "15 km",
          "UNESCO Status": "World Heritage Site 1997",
          "Local Wine": "Sciacchetrà Passito",
          "Trail": "Sentiero Azzurro (Blue Trail)"
        },
        hours: "Always accessible",
        price: "Cinque Terre Card from €7.50",
        coordinates: "44.1461° N, 9.6439° E",
        tip: "Manarola and Vernazza are the most photogenic villages. Avoid July–August peak season. The trail between Monterosso and Vernazza is the most spectacular section. Take the train between villages to save your legs."
      }
    ]
  },

  "france": {
    id: "france",
    name: "France",
    region: "Western Europe",
    coordinates: "46.2276° N, 2.2137° E",
    lat: 46.2276,
    lng: 2.2137,
    heroImage: "https://source.unsplash.com/3840x2160/?france,paris,eiffel-tower,travel",
    description: "France captivates with its unmatched cultural heritage, from Parisian haute cuisine and Impressionist art to the vineyards of Bordeaux and the lavender fields of Provence. It is the world's most visited country, blending sophistication and natural splendour in equal measure.",
    terrain: "Plains / Massif Central / Alpine",
    climate: "Oceanic Cfb / Mediterranean Csa",
    biodiversity: "Atlantic Forest & Garrigue Scrubland",
    destinations: [
      {
        id: "eiffel-tower",
        name: "Eiffel Tower",
        location: "Paris, Île-de-France",
        category: "Iconic Landmark",
        heroImage: "https://source.unsplash.com/3840x2160/?eiffel-tower,paris,night,lights,france",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?eiffel-tower,paris,sunset,golden-hour",
          "https://source.unsplash.com/1200x1600/?eiffel-tower,iron,lattice,structure,close-up"
        ],
        description: "The iron lady of Paris, a 330-metre wrought-iron lattice tower that has become the world's most recognised monument.",
        longDescription: "Designed by Gustave Eiffel and erected in 1889 for the Exposition Universelle commemorating the centennial of the French Revolution, the Eiffel Tower was initially controversial — mocked by critics as an 'iron eyesore' — but quickly became the defining symbol of Paris and modern engineering ambition. Standing 330 metres tall and weighing 10,000 tonnes, it held the record as the world's tallest man-made structure for 41 years.\n\nToday roughly seven million visitors ascend the tower each year by lift or stairs to its three platforms, with the summit offering extraordinary 360° panoramas across Paris on clear days. After dark, the tower sparkles with 20,000 gold light bulbs for five minutes every hour, a spectacle visible from across the city.",
        details: {
          "Designer": "Gustave Eiffel",
          "Completed": "1889",
          "Height": "330 Metres",
          "Weight": "10,100 Tonnes",
          "Annual Visitors": "~7 Million"
        },
        hours: "09:00 — 00:45 (last lift 23:30)",
        price: "€29.40 (summit lift)",
        coordinates: "48.8584° N, 2.2945° E",
        tip: "Book tickets online months in advance — walk-up queues can exceed 2 hours. Visit at dusk to experience both the golden-hour view and the evening light show. The Trocadéro gardens offer the best classic photograph angle."
      },
      {
        id: "louvre-museum",
        name: "Louvre Museum",
        location: "Paris, Île-de-France",
        category: "World-Class Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?louvre,paris,museum,glass-pyramid,france",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?louvre,interior,grand-gallery,paintings",
          "https://source.unsplash.com/1200x1600/?louvre,pyramid,night,reflection"
        ],
        description: "The world's largest art museum, home to 35,000 works including the Mona Lisa and Venus de Milo.",
        longDescription: "Originally a medieval fortress built by Philip II in 1190, the Louvre evolved into a royal palace before opening as a public museum in 1793 following the French Revolution. Today it occupies 72,735 square metres of exhibition space across three wings — the Richelieu, Sully, and Denon — and houses one of the most comprehensive art collections ever assembled, spanning 5,000 years from ancient Mesopotamia to 19th-century Europe.\n\nThe museum's most celebrated works include Leonardo da Vinci's Mona Lisa, the Hellenistic Venus de Milo, the Winged Victory of Samothrace, and Delacroix's Liberty Leading the People. I.M. Pei's iconic glass pyramid, added in 1989, serves as the main entrance and has itself become a Parisian landmark.",
        details: {
          "Founded": "1793",
          "Collection Size": "~480,000 Objects",
          "Exhibition Space": "72,735 m²",
          "Annual Visitors": "~9 Million",
          "Architect (Pyramid)": "I.M. Pei (1989)"
        },
        hours: "09:00 — 18:00 (Wed & Fri until 21:45) | Closed Tuesday",
        price: "€22.00",
        coordinates: "48.8606° N, 2.3376° E",
        tip: "Pre-book timed entry online. Focus on one wing per visit — trying to see everything in a day leads to 'museum fatigue'. The Mona Lisa is best viewed weekday mornings; go straight there first."
      },
      {
        id: "versailles",
        name: "Palace of Versailles",
        location: "Versailles, Île-de-France",
        category: "Royal Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?versailles,palace,gardens,france,baroque",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?versailles,hall-of-mirrors,golden,chandeliers",
          "https://source.unsplash.com/1200x1600/?versailles,gardens,fountain,formal,landscape"
        ],
        description: "The ultimate expression of French royal grandeur — a palace of 700 rooms surrounded by 800 hectares of formal gardens.",
        longDescription: "Louis XIV transformed his father's hunting lodge into the largest palace in the world between 1661 and 1710, relocating the French court and government to Versailles to project absolute monarchical power. The palace's 700 rooms, including the dazzling 73-metre Hall of Mirrors lined with 357 mirrors and 20,000 candles, set the European standard for Baroque royal architecture for a century.\n\nThe formal gardens designed by André Le Nôtre extend over 800 hectares with 50 fountains, 200,000 trees, and the Grand Canal stretching 1.6 kilometres. Beyond the main palace, the Petit Trianon and Marie Antoinette's Hamlet — her fantasy rustic village — offer fascinating insights into the private world of France's last queen.",
        details: {
          "Built By": "Louis XIV",
          "Construction": "1661–1710",
          "Rooms": "2,300 (700 open to public)",
          "Gardens Area": "800 Hectares",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 17:30 (Tue–Sun) | Closed Monday",
        price: "€21.50 (palace) | Gardens free (€9.50 fountain days)",
        coordinates: "48.8049° N, 2.1204° E",
        tip: "Arrive at opening to beat tour groups in the Hall of Mirrors. Budget a full day: palace in the morning, gardens in the afternoon. Fountain shows run Tuesday, Saturday, and Sunday from April to October."
      },
      {
        id: "mont-saint-michel",
        name: "Mont-Saint-Michel",
        location: "Normandy, Northwest France",
        category: "Historic Island Abbey",
        heroImage: "https://source.unsplash.com/3840x2160/?mont-saint-michel,normandy,island,abbey,france",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?mont-saint-michel,reflection,tide,dawn",
          "https://source.unsplash.com/1200x1600/?mont-saint-michel,abbey,gothic,interior"
        ],
        description: "A medieval island abbey rising from tidal mudflats on the Normandy coast, one of France's most iconic silhouettes.",
        longDescription: "Rising 92 metres from the tidal flats of the Bay of Mont-Saint-Michel, this rocky island has been a site of Christian pilgrimage since the 8th century when the Archangel Michael reportedly appeared to the Bishop of Avranches. The Benedictine abbey that crowns the summit, begun in 966, is a marvel of medieval engineering, its soaring Gothic spires added in the 13th century visible for 50 kilometres across the surrounding bay.\n\nThe surrounding bay has the highest tidal range in continental Europe, with sea levels rising up to 14 metres between low and high tide. At high tide the island becomes completely surrounded by water, re-creating the dramatic isolation that made it a near-impregnable fortress for centuries. Today a causeway and new pedestrian bridge connect the island to the mainland.",
        details: {
          "Island Height": "92 Metres",
          "Abbey Founded": "966 AD",
          "Tidal Range": "Up to 14 Metres",
          "Annual Visitors": "~3.5 Million",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Abbey: 09:00 — 19:00 (May–Aug) | 09:30 — 18:00 (Sep–Apr)",
        price: "Abbey €13.00 | Island free",
        coordinates: "48.6361° N, 1.5115° W",
        tip: "Check tide tables before visiting — high tide creates the iconic island silhouette. Stay overnight on the island to experience the magic after day-trippers leave. The 'Bay Walk' guided tours cross the mudflats at low tide."
      },
      {
        id: "french-riviera",
        name: "French Riviera",
        location: "Nice, Provence-Alpes-Côte d'Azur",
        category: "Coastal Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?french-riviera,nice,cote-dazur,mediterranean,sea",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?nice,promenade,beach,blue-sea",
          "https://source.unsplash.com/1200x1600/?eze,village,riviera,cliff,france"
        ],
        description: "The glamorous sun-soaked coastline stretching from Menton to Saint-Tropez, playground of artists and jet-setters.",
        longDescription: "The Côte d'Azur — Azure Coast — stretches for 115 kilometres along the Mediterranean from the Italian border at Menton to Saint-Tropez, taking in the city of Nice with its ochre Old Town and famous Promenade des Anglais, the royal principality of Monaco, the hill villages of Èze and Gourdon, and the yacht-filled harbours of Antibes and Cannes. The region's extraordinary quality of light attracted Picasso, Matisse, Chagall, and Renoir, all of whom painted here.\n\nToday the Riviera offers a heady mix of pebble beaches and azure sea, Michelin-starred restaurants, luxury boutiques, and world-famous events including the Cannes Film Festival in May and the Monaco Grand Prix. The hilltop Fondation Maeght in Saint-Paul-de-Vence houses one of Europe's finest collections of 20th-century art.",
        details: {
          "Coastline Length": "115 km",
          "Main Cities": "Nice, Cannes, Monaco, Antibes",
          "Famous Event": "Cannes Film Festival (May)",
          "Average Sun": "300 Days per Year",
          "Notable Artists": "Picasso, Matisse, Chagall"
        },
        hours: "Always accessible",
        price: "Free (beach access varies)",
        coordinates: "43.7102° N, 7.2620° E",
        tip: "Visit Nice's Cours Saleya market on Tuesday–Sunday mornings. The Corniche Inférieure coastal road offers spectacular driving. Avoid August if possible — the region is extremely crowded and expensive."
      },
      {
        id: "notre-dame-cathedral",
        name: "Notre-Dame Cathedral",
        location: "Paris, Île-de-France",
        category: "Religious Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?notre-dame,paris,cathedral,gothic,france",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?notre-dame,gargoyle,paris,facade",
          "https://source.unsplash.com/1200x1600/?notre-dame,interior,rose-window,gothic"
        ],
        description: "The supreme masterpiece of Gothic architecture, rising from the heart of the Île de la Cité on the Seine.",
        longDescription: "Construction of Notre-Dame de Paris began in 1163 under Bishop Maurice de Sully and took nearly 200 years to complete. The cathedral's innovative use of flying buttresses allowed its walls to be opened up with vast stained-glass windows, flooding the interior with coloured light — a revolutionary departure from the thick walls of Romanesque architecture that preceded it. Its twin towers, rose windows, and forest of carved stone gargoyles established the Gothic style that spread across medieval Europe.\n\nDamaged by the catastrophic fire of April 2019 that destroyed the medieval spire and much of the roof, Notre-Dame has undergone an extraordinary restoration effort. The cathedral reopened to the public in December 2024, with its restored interior even more radiant than before. The towers and treasury reopened in phases through 2025, making this a unique moment to witness a medieval masterpiece reborn.",
        details: {
          "Construction": "1163–1345",
          "Style": "French Gothic",
          "Height (Towers)": "69 Metres",
          "Rose Windows": "3 (North, South, West)",
          "Reopened": "December 2024 (post-restoration)"
        },
        hours: "08:00 — 18:45 (Mon–Fri) | 08:00 — 19:15 (Sat–Sun)",
        price: "Free entry | Towers €14.00",
        coordinates: "48.8530° N, 2.3499° E",
        tip: "Join the free guided tours offered in English daily. The towers (when open) offer close-up views of the gargoyles and a stunning panorama over central Paris. The square in front is perfect for photos at sunrise."
      }
    ]
  },

  "spain": {
    id: "spain",
    name: "Spain",
    region: "Southern Europe",
    coordinates: "40.4637° N, 3.7492° W",
    lat: 40.4637,
    lng: -3.7492,
    heroImage: "https://source.unsplash.com/3840x2160/?spain,barcelona,architecture,travel",
    description: "Spain's passionate culture, searing landscapes, and architectural treasures span the legacy of Romans, Moors, and Renaissance kings. From the fiery flamenco of Seville to the avant-garde cuisine of the Basque Country, the country rewards exploration at every turn.",
    terrain: "Meseta Plateau / Pyrenees / Mediterranean Coast",
    climate: "Mediterranean Csa / Semi-Arid BSk",
    biodiversity: "Iberian Scrubland & Montane Oak Forest",
    destinations: [
      {
        id: "sagrada-familia",
        name: "Sagrada Família",
        location: "Barcelona, Catalonia",
        category: "Architectural Masterpiece",
        heroImage: "https://source.unsplash.com/3840x2160/?sagrada-familia,barcelona,gaudi,cathedral,spain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?sagrada-familia,towers,barcelona,sunset",
          "https://source.unsplash.com/1200x1600/?sagrada-familia,interior,light,columns,gaudi"
        ],
        description: "Antoni Gaudí's unfinished masterpiece — a soaring Modernista basilica that has been under construction since 1882.",
        longDescription: "The Basílica i Temple Expiatori de la Sagrada Família is the life's work of Catalan architect Antoni Gaudí, who took over the project in 1883 and devoted his final 40 years entirely to it, famously stating 'My client is not in a hurry.' Combining Gothic verticality with Art Nouveau organic forms inspired by nature — tree-like columns branching into vaulted ceilings, facades encrusted with stone foliage and religious symbolism — it is like no other building on Earth.\n\nGaudí died in 1926 having completed only about 15–25% of the basilica. Construction has continued for over a century guided by his models and drawings, with the final towers expected to be completed around 2026. The interior, flooded with multicoloured light through 128 stained-glass windows, is one of the most transcendent architectural experiences in Europe.",
        details: {
          "Architect": "Antoni Gaudí",
          "Construction Began": "1882 (ongoing)",
          "Style": "Catalan Modernisme",
          "Height (Central Tower)": "172.5 Metres (planned)",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 20:00 (Apr–Sep) | 09:00 — 18:00 (Oct–Mar)",
        price: "€26.00 (basic) | €36.00 (with tower access)",
        coordinates: "41.4036° N, 2.1744° E",
        tip: "Book tickets weeks in advance — they often sell out. Arrive at 09:00 for the best light through the east-facing Nativity facade windows. Combine with Park Güell (same day ticket discounts available)."
      },
      {
        id: "alhambra",
        name: "The Alhambra",
        location: "Granada, Andalusia",
        category: "Moorish Palace Complex",
        heroImage: "https://source.unsplash.com/3840x2160/?alhambra,granada,moorish,palace,spain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?alhambra,court-of-lions,fountain,intricate",
          "https://source.unsplash.com/1200x1600/?alhambra,nasrid-palace,tiles,geometric,arabic"
        ],
        description: "The pinnacle of Moorish art and architecture — a hilltop palace and fortress complex of breathtaking intricacy.",
        longDescription: "The Alhambra was built during the Nasrid dynasty (1238–1492), the last Muslim rulers of the Iberian Peninsula, as a complete city-palace crowning a forested hilltop above Granada with the snow-capped Sierra Nevada as a backdrop. Its name derives from the Arabic al-qal'a al-ḥamra — 'the red fortress' — for the reddish hue of its sun-dried mud brick walls. Inside, the Nasrid Palaces represent the zenith of Islamic decorative arts: stalactite muqarnas ceilings, walls carpeted in geometric tilework, and the serene Court of the Lions with its 12 marble lions spouting water from a central fountain.\n\nComplementing the royal palaces is the Generalife summer residence with its tiered garden terraces and fountained courtyards, and the Renaissance Palacio de Carlos V inserted into the complex by the Holy Roman Emperor in 1527 — a jarring yet magnificent contrast of styles.",
        details: {
          "Constructed": "1238–1492 (Nasrid Dynasty)",
          "Style": "Moorish / Nasrid",
          "Palaces": "Nazaríes, Comares & Leones",
          "Gardens": "Generalife (13th century)",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "08:00 — 20:00 (Apr–Oct) | 08:00 — 18:00 (Nov–Mar)",
        price: "€19.09",
        coordinates: "37.1760° N, 3.5881° W",
        tip: "Book Nasrid Palace tickets months in advance — daily numbers are strictly limited. Evening visits (after 20:00, Oct–Mar: after 18:00) offer atmospheric lighting. Explore the Albaicín quarter opposite for the best overall views of the complex."
      },
      {
        id: "seville-cathedral",
        name: "Seville Cathedral",
        location: "Seville, Andalusia",
        category: "Religious Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?seville,cathedral,giralda,spain,gothic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?seville,giralda,tower,orange-trees",
          "https://source.unsplash.com/1200x1600/?seville,cathedral,interior,gold,altarpiece"
        ],
        description: "The world's largest Gothic cathedral, built on the site of a great mosque whose minaret became the famous Giralda tower.",
        longDescription: "When the Christian reconquest of Seville was completed in 1248, the great Almohad mosque was left standing for a century before being demolished to make way for a cathedral so ambitious that, according to legend, the canons declared 'Let us build a church so large that those who see it finished will think we were mad.' The result, completed in 1528, is the largest Gothic cathedral in the world by volume, its interior a forest of soaring pillars leading to the richest altarpiece ever made — a gilded carved retablo 27 metres high.\n\nThe graceful Giralda tower, the mosque's original minaret dating from 1198, was incorporated as the cathedral's bell tower and remains Seville's most iconic landmark. The cathedral also contains the tomb of Christopher Columbus, whose remains were brought from Cuba in 1899.",
        details: {
          "Construction": "1402–1528",
          "Style": "Gothic (Largest by Volume)",
          "Giralda Height": "104 Metres",
          "Columbus Tomb": "Present since 1899",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "10:30 — 17:00 (Mon) | 11:00 — 17:00 (Sun) | 10:30 — 18:00 (Tue–Sat)",
        price: "€12.00",
        coordinates: "37.3861° N, 6.0019° W",
        tip: "Climb the Giralda via its ramp (no steps — designed for horses) for panoramic views over Seville. Visit the Real Alcázar royal palace next door on the same day — both UNESCO listed. Book online to avoid long queues."
      },
      {
        id: "park-guell",
        name: "Park Güell",
        location: "Barcelona, Catalonia",
        category: "Architectural Park",
        heroImage: "https://source.unsplash.com/3840x2160/?park-guell,barcelona,gaudi,mosaic,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?park-guell,dragon-staircase,lizard,tiles",
          "https://source.unsplash.com/1200x1600/?park-guell,terrace,barcelona,panorama,sea"
        ],
        description: "Gaudí's fantastical garden park of mosaic terraces, gingerbread gatehouses, and a serpentine tiled bench.",
        longDescription: "Commissioned by the industrialist Eusebi Güell as a luxury housing estate, Park Güell was designed by Antoni Gaudí between 1900 and 1914, though the residential project ultimately failed and the city of Barcelona acquired it as a public park in 1926. What remains is one of the most joyfully inventive public spaces ever created — a hillside park where Gaudí's structural engineering and nature-inspired ornament merge seamlessly.\n\nThe monumental zone at the park's entrance is the ticketed highlight, featuring the iconic dragon staircase, two mosaic gatehouses, and the hypostyle Hall of a Hundred Columns whose undulating roof forms the famous serpentine terrace bench, clad in broken ceramic tile (trencadís) and offering sweeping views across Barcelona to the sea.",
        details: {
          "Designed By": "Antoni Gaudí",
          "Construction": "1900–1914",
          "Opened as Park": "1926",
          "Style": "Catalan Modernisme",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "08:00 — 20:30 (Apr–Oct) | 08:00 — 18:00 (Nov–Mar)",
        price: "€10.00 (Monumental Zone)",
        coordinates: "41.4145° N, 2.1527° E",
        tip: "Book timed entry online — the Monumental Zone has a strict visitor cap. Visit at opening time or in the last hour before closing. The free outer park areas are lovely and less crowded than the ticketed zone."
      },
      {
        id: "prado-museum",
        name: "Museo del Prado",
        location: "Madrid, Community of Madrid",
        category: "World-Class Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?prado,madrid,museum,spain,art",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?prado-museum,velazquez,las-meninas,painting",
          "https://source.unsplash.com/1200x1600/?prado,madrid,neoclassical,exterior"
        ],
        description: "Spain's national art museum and one of the world's greatest galleries, housing masterworks by Velázquez, Goya, and El Greco.",
        longDescription: "The Museo Nacional del Prado, opened to the public in 1819, holds one of the finest collections of European art in the world, assembled over centuries by the Spanish Crown. Its 9,000-work collection includes the most complete holdings of paintings by Diego Velázquez — including Las Meninas, widely considered the greatest painting ever made — Francisco Goya's harrowing Black Paintings and the Third of May 1808, and masterpieces by Titian, Rubens, El Greco, Bosch, and Raphael.\n\nThe Prado's collection reflects the breadth of the Spanish Empire's patronage, with exceptional Flemish and Italian holdings alongside its Spanish core. Hieronymus Bosch's The Garden of Earthly Delights — Philip II's favourite painting — alone justifies a visit, its bizarre medieval panorama of paradise, earth, and hell endlessly surprising even in the age of digital media.",
        details: {
          "Opened": "1819",
          "Collection": "~9,000 Works",
          "Star Pieces": "Las Meninas, Goya's Black Paintings",
          "Architects": "Juan de Villanueva (1785)",
          "Annual Visitors": "~3 Million"
        },
        hours: "10:00 — 20:00 (Mon–Sat) | 10:00 — 19:00 (Sun)",
        price: "€15.00 | Free 18:00–20:00 (Mon–Sat)",
        coordinates: "40.4138° N, 3.6921° W",
        tip: "Go for the free evening session (18:00) if budget is tight. The museum requires at least three hours. Focus on Rooms 12 (Velázquez) and 64-67 (Goya) for the highlights. Audioguides add enormously to the experience."
      },
      {
        id: "san-sebastian",
        name: "San Sebastián",
        location: "Basque Country, Northern Spain",
        category: "Coastal City",
        heroImage: "https://source.unsplash.com/3840x2160/?san-sebastian,concha-bay,basque,spain,beach",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?san-sebastian,pintxos,bar,basque,food",
          "https://source.unsplash.com/1200x1600/?san-sebastian,old-town,colourful,architecture"
        ],
        description: "The gastronomic capital of the world — a Belle Époque seaside city with more Michelin stars per capita than anywhere on Earth.",
        longDescription: "San Sebastián (Donostia in Basque) curves around the perfect crescent of La Concha Bay, one of Europe's most beautiful urban beaches, its elegant Belle Époque promenade backed by forested hills. The city boasts the highest concentration of Michelin-starred restaurants per capita on the planet, led by legendary chefs like Juan Mari Arzak and Martín Berasategui who pioneered New Basque Cuisine in the 1970s.\n\nThe Parte Vieja (Old Town) is the heartbeat of the city's food culture, its narrow streets lined wall-to-wall with pintxos bars where elaborately topped bread slices and skewered morsels are washed down with chilled txakoli white wine. The city also hosts the prestigious San Sebastián International Film Festival each September, attracting global cinema royalty.",
        details: {
          "Michelin Stars": "Most per Capita Globally",
          "Beach": "La Concha (Rated Europe's Best)",
          "Key Cuisine": "Pintxos & New Basque Cuisine",
          "Film Festival": "September (Since 1953)",
          "Language": "Basque (Euskara) & Spanish"
        },
        hours: "Always accessible",
        price: "Free (pintxos from €2.50 each)",
        coordinates: "43.3183° N, 1.9812° W",
        tip: "Pintxos hopping in the Old Town is best from 19:00–22:00. Avoid using a plate — just eat at the bar. La Bretxa market is excellent on weekend mornings. Book fine-dining restaurants many months in advance."
      }
    ]
  },

  "greece": {
    id: "greece",
    name: "Greece",
    region: "Southern Europe",
    coordinates: "39.0742° N, 21.8243° E",
    lat: 39.0742,
    lng: 21.8243,
    heroImage: "https://source.unsplash.com/3840x2160/?greece,santorini,aegean,blue-domes,travel",
    description: "The cradle of Western civilisation, Greece offers an intoxicating combination of ancient ruins, dazzling island landscapes, and Mediterranean warmth. From the Parthenon on its rocky hill above Athens to the volcanic caldera of Santorini, the country is inexhaustibly rewarding.",
    terrain: "Mountainous / Archipelagic / Coastal",
    climate: "Mediterranean Csa",
    biodiversity: "Phrygana Scrubland & Olympus Alpine Zone",
    destinations: [
      {
        id: "acropolis",
        name: "The Acropolis",
        location: "Athens, Attica",
        category: "Ancient Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?acropolis,athens,parthenon,greece,ancient",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?parthenon,columns,marble,sunset,athens",
          "https://source.unsplash.com/1200x1600/?acropolis,athens,aerial,night,lights"
        ],
        description: "The ancient citadel above Athens, crowned by the Parthenon — the most perfect Doric temple ever built.",
        longDescription: "The Acropolis of Athens — 'the high city' — is a flat-topped limestone outcrop rising 156 metres above the city, occupied by humans since the Neolithic period and crowned with its greatest monuments during the age of Pericles in the 5th century BC. The Parthenon, dedicated to Athena Parthenos and completed in 432 BC under the supervision of sculptor Pheidias, is considered the apotheosis of the Doric order: its columns lean inward by 6 centimetres to correct optical illusion, creating the impression of perfect straightness.\n\nThe sacred precinct also contains the elegant Erechtheion with its famous Porch of the Caryatids, the Temple of Athena Nike, and the monumental Propylaea gateway. The purpose-built Acropolis Museum at the hill's base houses the finest surviving sculptures, including original Parthenon frieze sections, providing essential context for the stones above.",
        details: {
          "Parthenon Completed": "432 BC",
          "Architect": "Iktinos & Kallikrates",
          "Hill Height": "156 Metres",
          "UNESCO Status": "World Heritage Site 1987",
          "Key Feature": "Optical Corrections in Columns"
        },
        hours: "08:00 — 20:00 (Apr–Oct) | 08:00 — 17:00 (Nov–Mar)",
        price: "€20.00 (combined site ticket)",
        coordinates: "37.9715° N, 23.7257° E",
        tip: "Arrive at 08:00 to beat both crowds and Athenian summer heat. The combined ticket includes 6 archaeological sites valid for 5 days — excellent value. The Acropolis Museum is a superb companion visit the same day."
      },
      {
        id: "santorini",
        name: "Santorini",
        location: "Cyclades, South Aegean",
        category: "Volcanic Island",
        heroImage: "https://source.unsplash.com/3840x2160/?santorini,oia,blue-domes,caldera,sunset,greece",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?santorini,oia,white-houses,blue-dome,cliff",
          "https://source.unsplash.com/1200x1600/?santorini,caldera,volcano,sea,view"
        ],
        description: "A crescent of white-washed villages clinging to the rim of a submerged volcanic caldera in the southern Aegean.",
        longDescription: "Santorini (ancient Thera) sits atop the caldera of one of history's most catastrophic volcanic eruptions, which occurred around 1600 BC and may have contributed to the collapse of the Minoan civilisation. Today the island's clifftop villages of Fira and Oia cascade down the caldera walls in a cascade of white cubic architecture, blue-domed churches, and infinity pools overlooking a sea of extraordinary deep blue.\n\nThe village of Oia at the island's northern tip is world-famous for its sunsets — crowds gather nightly on the battlements to applaud as the sun sinks into the sea beyond the caldera. Below the cliffs, the unique volcanic soil produces the island's distinctive Assyrtiko white wine, grown from ungrafted pre-phylloxera vines trained in a distinctive basket shape to protect against the fierce meltemi winds.",
        details: {
          "Origin": "Minoan Volcanic Eruption ~1600 BC",
          "Caldera Width": "12 km",
          "Highest Village": "Fira (260 m)",
          "Local Wine": "Assyrtiko (Indigenous Variety)",
          "Best Sunset Point": "Oia Castle"
        },
        hours: "Always accessible",
        price: "Free access (ferry from €35)",
        coordinates: "36.3932° N, 25.4615° E",
        tip: "Stay in Imerovigli for caldera views without Oia's crowds. Book accommodation 6+ months ahead for July–August. Rent an ATV to explore the island — the southern beach of Perivolos and ancient Akrotiri are unmissable."
      },
      {
        id: "meteora",
        name: "Meteora",
        location: "Thessaly, Central Greece",
        category: "Monastic Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?meteora,monasteries,rocks,greece,pillars",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?meteora,monastery,sunset,dramatic,rocks",
          "https://source.unsplash.com/1200x1600/?meteora,fog,mist,landscape,morning"
        ],
        description: "Medieval monasteries perched impossibly atop soaring sandstone pillars in the heart of Thessaly.",
        longDescription: "Meteora — 'suspended in the air' in Greek — is one of the most extraordinary inhabited landscapes on Earth. Twenty-four monasteries were built atop sheer sandstone pillars rising up to 400 metres from the Thessalian plain, beginning in the 14th century when hermit monks sought inaccessible retreats from the chaos of Byzantine decline. Originally accessible only by nets and rope ladders hauled up by the inhabitants, six monasteries remain active today and are reachable by carved stone staircases.\n\nThe complex is a UNESCO World Heritage Site jointly for its natural and cultural significance. The Great Meteoron (Monastery of the Transfiguration), founded around 1340, is the largest and most visited, with superb frescoes depicting early Christian martyrdoms. The landscape is equally spectacular at dawn when mist fills the valleys between the pillars, and in summer when the rock faces glow deep amber at sunset.",
        details: {
          "Monasteries Originally": "24 (6 Active Today)",
          "Tallest Pillar": "~400 Metres",
          "Founded": "14th–16th Century",
          "UNESCO Status": "World Heritage Site 1988",
          "Nearest Town": "Kalambaka"
        },
        hours: "09:00 — 17:00 (varies by monastery) | Closed certain weekdays",
        price: "€3.00 per monastery",
        coordinates: "39.7217° N, 21.6307° E",
        tip: "Visit at least 3 monasteries — they each have different characters and frescoes. Sunrise from the valley (before the tourist buses arrive) is magical. Modest dress required: trousers/skirts, covered shoulders."
      },
      {
        id: "delphi",
        name: "Delphi",
        location: "Central Greece, Phocis",
        category: "Ancient Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?delphi,oracle,ancient,greece,mount-parnassus",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?delphi,temple-apollo,ruins,columns",
          "https://source.unsplash.com/1200x1600/?delphi,theatre,ancient,mountains,landscape"
        ],
        description: "The ancient sanctuary of Apollo and oracle of the ancient world, dramatically sited on the slopes of Mount Parnassus.",
        longDescription: "For nearly a thousand years (8th century BC to 4th century AD), Delphi was considered the centre of the world — the omphalos or 'navel' of the Earth — and the most important oracle in the ancient Greek world. Kings, generals, and city-states sent delegations bearing gifts to consult the Pythia, the priestess of Apollo who delivered cryptic prophecies from the adyton of the Temple of Apollo while breathing volcanic vapours rising from a fissure in the rock.\n\nThe Sacred Way winds uphill through the sanctuary past the treasuries of various Greek city-states to the Temple of Apollo, the theatre with its extraordinary mountain panoramas, and the stadium — the best preserved in Greece — where the Pythian Games were held every four years. The Delphi Archaeological Museum houses the magnificent bronze Charioteer (478 BC) and the hypnotic Sphinx of Naxos.",
        details: {
          "Oracle Active": "8th Century BC – 390 AD",
          "Dedicated To": "Apollo",
          "Elevation": "570 Metres",
          "UNESCO Status": "World Heritage Site 1987",
          "Key Artefact": "The Charioteer of Delphi (478 BC)"
        },
        hours: "08:00 — 20:00 (Apr–Oct) | 08:30 — 15:30 (Nov–Mar)",
        price: "€12.00 (site + museum combo)",
        coordinates: "38.4824° N, 22.5010° E",
        tip: "Combine the archaeological site and museum in a single visit — the museum gives essential context. Morning visits avoid coach tours. Stay overnight in Delphi town for magical views across the olive-tree valley to the Gulf of Corinth."
      },
      {
        id: "mykonos",
        name: "Mykonos",
        location: "Cyclades, South Aegean",
        category: "Island Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?mykonos,greece,windmills,white,aegean",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?mykonos,little-venice,colourful,sea",
          "https://source.unsplash.com/1200x1600/?mykonos,narrow-street,flowers,white-walls"
        ],
        description: "The cosmopolitan jewel of the Cyclades — whitewashed alleyways, iconic windmills, and world-famous nightlife.",
        longDescription: "Mykonos is the most glamorous of the Cycladic islands, its main town (Chora) a maze of dazzling white cubic buildings, narrow flagstone lanes designed to confuse pirates, and over 600 churches tucked into improbable corners. The row of 16th-century windmills on the hill above Alefkandra (Little Venice) have become the defining image of the island, their sails silhouetted against a perpetual Aegean blue sky.\n\nWhile famous as a party destination, Mykonos rewards those who venture beyond the beach clubs. The adjacent sacred island of Delos — just 30 minutes by ferry and the mythological birthplace of Apollo and Artemis — is one of Greece's most important archaeological sites, an entirely uninhabited island of marble ruins and ancient lion statues.",
        details: {
          "Area": "85.5 km²",
          "Key Landmark": "Kato Myli Windmills (16th C.)",
          "Nearby Site": "Delos Archaeological Island",
          "Known For": "Nightlife, Beaches & Celebrities",
          "Best Beach": "Paradise & Super Paradise"
        },
        hours: "Always accessible",
        price: "Free access (ferry from €20)",
        coordinates: "37.4467° N, 25.3289° E",
        tip: "Visit Delos on a morning boat trip — it closes at 15:00. Sunset from Little Venice is spectacular. Book accommodation and beach club sunbeds well in advance for July–August."
      },
      {
        id: "rhodes-old-town",
        name: "Rhodes Old Town",
        location: "Rhodes, South Aegean",
        category: "Medieval Walled City",
        heroImage: "https://source.unsplash.com/3840x2160/?rhodes,old-town,medieval,walls,greece",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rhodes,street-of-knights,medieval,cobblestones",
          "https://source.unsplash.com/1200x1600/?rhodes,palace-grand-master,courtyard,architecture"
        ],
        description: "The best-preserved medieval walled city in Europe, built by the Knights Hospitaller in the 14th century.",
        longDescription: "The walled city of Rhodes was built by the Knights of St John (Hospitallers) following their conquest of the island in 1309, and represents the finest surviving example of a medieval fortified city anywhere in the world. Four kilometres of walls up to 12 metres thick encircle a complete medieval urban fabric: the cobblestoned Street of the Knights lined with the Inns of the different national tongues, the Grand Master's Palace with its mosaic floors, the bustling bazaar streets of the Turkish Quarter, and the Byzantine-era Archaeological Museum.\n\nThe island is steeped in mythology: according to legend it rose from the sea as a gift from Zeus to Helios, the sun god — and the ancient Colossus of Rhodes, one of the Seven Wonders of the Ancient World, once stood at its harbour. Today the island's 300 days of annual sunshine make it one of Greece's most popular resorts.",
        details: {
          "Walls Constructed": "14th–15th Century",
          "Wall Length": "4 km",
          "Built By": "Knights of St John",
          "UNESCO Status": "World Heritage Site 1988",
          "Annual Sun": "~300 Days"
        },
        hours: "Old Town: always accessible | Palace: 08:00–20:00",
        price: "Old Town Free | Palace €8.00",
        coordinates: "36.4447° N, 28.2241° E",
        tip: "Stay inside the walls for an immersive medieval experience. Walk the full circuit of the walls early morning. Explore beyond the main tourist streets — the Jewish Quarter (Evraiki) and Byzantine churches are less visited."
      }
    ]
  },

  "germany": {
    id: "germany",
    name: "Germany",
    region: "Central Europe",
    coordinates: "51.1657° N, 10.4515° E",
    lat: 51.1657,
    lng: 10.4515,
    heroImage: "https://source.unsplash.com/3840x2160/?germany,bavaria,neuschwanstein,landscape,travel",
    description: "Germany combines fairytale medieval towns and romantic castle-studded river valleys with world-class museums, engineering marvels, and a vibrant contemporary culture. From the Bavarian Alps to the Baltic coast, the country's diversity continually surprises.",
    terrain: "Northern Plains / Central Highlands / Alpine",
    climate: "Oceanic Cfb / Continental Dfb",
    biodiversity: "Temperate Deciduous Forest & Alpine Meadow",
    destinations: [
      {
        id: "neuschwanstein-castle",
        name: "Neuschwanstein Castle",
        location: "Bavaria, Southwest Germany",
        category: "Fairytale Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?neuschwanstein,castle,bavaria,germany,fairytale",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?neuschwanstein,autumn,forest,lake,reflection",
          "https://source.unsplash.com/1200x1600/?neuschwanstein,interior,throne-room,byzantine"
        ],
        description: "Ludwig II's fantastical 19th-century castle rising from Alpine forests — the inspiration for Disney's Sleeping Beauty Castle.",
        longDescription: "Commissioned by the eccentric Bavarian King Ludwig II as a personal retreat and homage to the operas of Richard Wagner, Neuschwanstein Castle was begun in 1869 but remained unfinished at Ludwig's mysterious death in 1886, by which time it had already bankrupted the royal treasury. Perched on a rugged clifftop above the village of Hohenschwangau at 965 metres, with the Alpsee lake shimmering below and the Alps rising behind, its silhouette of pale limestone towers and turrets is among the most recognisable in the world.\n\nThe lavishly decorated interior — only 14 of the planned 200 rooms were completed — is a fairy-tale fantasy of Romanesque arches, Byzantine throne rooms, and painted murals depicting scenes from Wagner's operas. The castle received over 1.4 million visitors in its first year of opening to the public in 1886, just six weeks after Ludwig's death.",
        details: {
          "Commissioned By": "King Ludwig II of Bavaria",
          "Construction": "1869–1886 (unfinished)",
          "Height": "65 Metres",
          "Completed Rooms": "14 of 200 Planned",
          "Annual Visitors": "~1.3 Million"
        },
        hours: "09:00 — 18:00 (Apr–Oct) | 10:00 — 16:00 (Nov–Mar)",
        price: "€15.00",
        coordinates: "47.5576° N, 10.7498° E",
        tip: "Book tickets online months in advance — they sell out completely in peak season. The Marienbrücke bridge offers the classic castle photograph. Arrive early to walk up rather than taking the overpriced bus."
      },
      {
        id: "brandenburg-gate",
        name: "Brandenburg Gate",
        location: "Berlin, Brandenburg",
        category: "Historic Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?brandenburg-gate,berlin,germany,night,landmark",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?brandenburg-gate,berlin,sunrise,golden-light",
          "https://source.unsplash.com/1200x1600/?berlin,checkpoint-charlie,wall,history"
        ],
        description: "Berlin's neoclassical triumphal arch and the ultimate symbol of German reunification.",
        longDescription: "The Brandenburg Gate was built between 1788 and 1791 by order of Prussian King Frederick William II, designed by architect Carl Gotthard Langhans in the Doric neoclassical style inspired by the Propylaea gateway of the Athenian Acropolis. The 26-metre structure is crowned by the Quadriga, a chariot driven by the goddess of victory pulled by four horses, which Napoleon infamously took to Paris as a trophy before its return in 1814.\n\nFor 28 years after 1961, the gate stood in no-man's land between East and West Berlin, a painful symbol of division. Its most defining modern moment came on 9 November 1989 when the Berlin Wall fell and hundreds of thousands of Berliners streamed through it in tearful jubilation. Today it stands at the heart of reunified Berlin's governmental district, a few steps from the Memorial to the Murdered Jews of Europe.",
        details: {
          "Built": "1788–1791",
          "Architect": "Carl Gotthard Langhans",
          "Style": "Doric Neoclassical",
          "Height": "26 Metres",
          "Significance": "Symbol of German Reunification"
        },
        hours: "Open 24 hours",
        price: "Free",
        coordinates: "52.5163° N, 13.3777° E",
        tip: "Visit at night when the gate is dramatically lit. Combine with the Holocaust Memorial (5 minutes' walk), the Reichstag (book dome tours online), and Checkpoint Charlie. Tiergarten park is ideal for a morning walk."
      },
      {
        id: "cologne-cathedral",
        name: "Cologne Cathedral",
        location: "Cologne, North Rhine-Westphalia",
        category: "Gothic Cathedral",
        heroImage: "https://source.unsplash.com/3840x2160/?cologne,cathedral,dom,gothic,germany",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cologne-cathedral,interior,stained-glass,gothic",
          "https://source.unsplash.com/1200x1600/?cologne,cathedral,rhine,bridge,aerial"
        ],
        description: "The tallest twin-spired cathedral in the world, a Gothic masterpiece 632 years in the making.",
        longDescription: "Construction of Kölner Dom began in 1248 to house the Shrine of the Three Kings — the claimed relics of the Magi brought from Milan in 1164 — but stalled in 1473 with only the choir and south tower partially built, leaving a crane on top for 400 years as a symbol of Cologne. Work resumed in 1842 using the original medieval plans, and was finally completed in 1880 when the twin spires were finished at 157 metres, making it briefly the world's tallest structure.\n\nThe cathedral survived World War II largely intact despite Cologne being virtually destroyed by Allied bombing — local legend says Allied pilots used the spires as navigation landmarks and spared them deliberately. Inside, the medieval Gero Crucifix (975 AD) is the oldest large crucifix in the Western world, and the 14th-century windows of the Chapel of the Three Magi glow with jewel-like colour.",
        details: {
          "Construction": "1248–1880 (632 Years)",
          "Tower Height": "157 Metres",
          "Style": "High Gothic",
          "Key Relic": "Shrine of the Three Kings",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "06:00 — 21:00 daily | Tower: 09:00 — 18:00",
        price: "Cathedral Free | Tower €6.00",
        coordinates: "50.9413° N, 6.9583° E",
        tip: "Climb the 533 steps of the south tower for a magnificent view over the Rhine. The treasury (Domschatzkammer) holds superb medieval goldsmithwork. Visit early morning before coach tour groups arrive."
      },
      {
        id: "rhine-valley",
        name: "Rhine Valley",
        location: "Rhineland, West Germany",
        category: "Scenic River Valley",
        heroImage: "https://source.unsplash.com/3840x2160/?rhine-valley,germany,castles,river,vineyard",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rhine,valley,castle,ruin,hill",
          "https://source.unsplash.com/1200x1600/?rhine,river-cruise,germany,landscape,autumn"
        ],
        description: "A 65-kilometre UNESCO stretch of the Rhine lined with medieval castles, terraced vineyards, and legendary Riesling wines.",
        longDescription: "The Upper Middle Rhine Valley between Koblenz and Bingen is one of the most intensely cultivated and historic river landscapes in Europe, its steep valley walls terraced with slate-soil Riesling vineyards since Roman times and punctuated by more than 40 medieval castles, many perched on near-vertical rocky spurs above the river. The valley's strategic importance as the main north-south artery of medieval Europe made it the setting for centuries of toll-charging, warfare, and legend — including the mythological Lorelei rock where a siren lured Rhine boatmen to their deaths.\n\nToday the valley is best explored by river cruise between Rüdesheim and Koblenz, admiring the panoramic succession of castle ruins and vine-covered slopes. Stops in wine villages like Bacharach, Boppard, and Oberwesel allow visitors to taste the world's finest Rieslings in the cellar restaurants of local vignerons.",
        details: {
          "UNESCO Stretch": "65 km (Koblenz–Bingen)",
          "Number of Castles": "~40",
          "Key Wine": "Spätlese & Auslese Riesling",
          "Famous Legend": "The Lorelei",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Always accessible",
        price: "Free | River cruise from €17",
        coordinates: "50.2590° N, 7.5890° E",
        tip: "Take the KD Rhine cruise from Rüdesheim to Koblenz (4.5 hours) for the full panorama. The Marksburg Castle near Braubach is the only Rhine castle never destroyed. The wine harvest festivals in September are magical."
      },
      {
        id: "black-forest",
        name: "Black Forest",
        location: "Baden-Württemberg, Southwest Germany",
        category: "Natural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?black-forest,germany,fir-trees,misty,landscape",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?black-forest,triberg-waterfall,germany",
          "https://source.unsplash.com/1200x1600/?black-forest,traditional-house,germany,folk"
        ],
        description: "Germany's largest contiguous forest — a landscape of dense fir-covered ridges, spa towns, and legendary cuckoo clocks.",
        longDescription: "The Schwarzwald (Black Forest) covers 11,100 square kilometres of the southwest corner of Germany, rising to 1,493 metres at the Feldberg summit. Its name derives from the dense canopy of silver fir and Norway spruce that historically cast the forest floor into near-perpetual shade. This is the landscape of the Brothers Grimm fairy tales — deep, mysterious, and full of clearings where half-timbered farmhouses shelter beneath enormous hip roofs sweeping almost to the ground.\n\nThe northern Black Forest around Baden-Baden offers elegant spa culture in Europe's most fashionable 19th-century resort town, while the southern region around Titisee-Neustadt is prime hiking and skiing country. The region is the birthplace of the cuckoo clock and the Black Forest gateau, and produces some of Germany's finest Pinot Noir wines on its sun-facing western slopes.",
        details: {
          "Area": "11,100 km²",
          "Highest Peak": "Feldberg 1,493 m",
          "Key Resort": "Baden-Baden (Spa Town)",
          "Culinary Fame": "Black Forest Gateau & Cuckoo Clocks",
          "Best Season": "May–June & December"
        },
        hours: "Always accessible",
        price: "Free | Black Forest Card from €69 (3 days)",
        coordinates: "48.0000° N, 8.1500° E",
        tip: "The Schwarzwald Hochstraße (High Road, B500) is a spectacular scenic drive. Triberg has Germany's highest waterfall. Baden-Baden's Caracalla Spa is perfect after a day's hiking. Visit in snow for fairy-tale winter atmosphere."
      },
      {
        id: "marienplatz",
        name: "Marienplatz & Frauenkirche",
        location: "Munich, Bavaria",
        category: "Historic City Centre",
        heroImage: "https://source.unsplash.com/3840x2160/?munich,marienplatz,neues-rathaus,germany,bavaria",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?munich,frauenkirche,towers,beer-garden",
          "https://source.unsplash.com/1200x1600/?munich,marienplatz,glockenspiel,crowd"
        ],
        description: "The vibrant heart of Munich — a grand medieval square anchored by a Gothic town hall with a famous carillon.",
        longDescription: "Marienplatz has been the civic centre of Munich since the city's founding in 1158. The square is dominated by the Neo-Gothic Neues Rathaus (New Town Hall), built between 1867 and 1908, whose 85-metre tower houses the famous Glockenspiel carillon — a set of 43 bells and 32 life-sized figures that re-enact two stories from Munich's 16th-century history in a 15-minute performance at 11:00 and 12:00 daily.\n\nTwo minutes' walk away, the twin onion-domed towers of the Frauenkirche (Cathedral of Our Lady, completed 1488) serve as Munich's skyline landmark — no building in the old city is permitted to exceed their 99-metre height. The English Garden (Englischer Garten) behind the Residenz palace is larger than Central Park and hosts the famous river surfing wave on the Eisbach stream, an extraordinary year-round spectacle.",
        details: {
          "Marienplatz Founded": "1158",
          "Neues Rathaus Built": "1867–1908",
          "Glockenspiel Bells": "43 Bells",
          "Frauenkirche Completed": "1488",
          "Nearby": "English Garden (3.7 km²)"
        },
        hours: "Square: always open | Town Hall Tower: 10:00–19:00",
        price: "Free | Tower lift €4.00",
        coordinates: "48.1374° N, 11.5755° E",
        tip: "Watch the Glockenspiel at 11:00 from the square. Climb the tower for views over the twin Frauenkirche domes and Alps. October visits coincide with Oktoberfest (Theresienwiese, 2 km away) — book accommodation a year ahead."
      }
    ]
  },

  "united-kingdom": {
    id: "united-kingdom",
    name: "United Kingdom",
    region: "Northwestern Europe",
    coordinates: "55.3781° N, 3.4360° W",
    lat: 55.3781,
    lng: -3.4360,
    heroImage: "https://source.unsplash.com/3840x2160/?united-kingdom,london,big-ben,thames,travel",
    description: "The United Kingdom's layered history spans Roman roads, Norman castles, Tudor palaces, and Georgian cities, all set within landscapes ranging from the wild Scottish Highlands to the chalk cliffs of the English Channel coast. It remains one of the world's great cultural powerhouses.",
    terrain: "Rolling Hills / Highlands / Coastal Cliffs",
    climate: "Oceanic Cfb",
    biodiversity: "Atlantic Oak Woodland & Upland Moorland",
    destinations: [
      {
        id: "big-ben",
        name: "Big Ben & Houses of Parliament",
        location: "London, England",
        category: "Historic Landmark",
        heroImage: "https://source.unsplash.com/3840x2160/?big-ben,london,parliament,thames,westminster",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?big-ben,london,night,reflection,thames",
          "https://source.unsplash.com/1200x1600/?houses-of-parliament,westminster,gothic,aerial"
        ],
        description: "The iconic Gothic clock tower and Victorian Gothic parliament building on the north bank of the Thames.",
        longDescription: "The Palace of Westminster has been the seat of the British Parliament since the 13th century, though the current Victorian Gothic Revival building was rebuilt after a catastrophic fire in 1834, designed by Charles Barry with Gothic detailing by Augustus Pugin. The Elizabeth Tower (popularly known as Big Ben — actually the name of the 13.8-tonne bell within) was completed in 1859 and its four-faced clock, with dials 7 metres in diameter, kept time for the nation's radio broadcasts for over a century.\n\nThe palace sits on the north bank of the Thames opposite Lambeth, its reflection shimmering in the river from Westminster Bridge — the vantage point chosen by Wordsworth for his sonnet 'Composed upon Westminster Bridge, September 3, 1802'. Tours of the parliamentary chambers, the medieval Westminster Hall (1099), and the gilded royal ceremonial spaces are available when Parliament is not sitting.",
        details: {
          "Palace Built": "1840–1876",
          "Architects": "Charles Barry & Augustus Pugin",
          "Elizabeth Tower Height": "96 Metres",
          "Bell Weight (Big Ben)": "13.8 Tonnes",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Exterior always visible | Tours: Sat & recess periods",
        price: "Exterior Free | Tours from £25.00",
        coordinates: "51.4994° N, 0.1248° W",
        tip: "The view from Westminster Bridge (especially at dusk) is iconic and free. Book parliamentary tours far in advance. Combine with Westminster Abbey and St James's Park for a full day in SW1."
      },
      {
        id: "stonehenge",
        name: "Stonehenge",
        location: "Wiltshire, England",
        category: "Prehistoric Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?stonehenge,wiltshire,england,prehistoric,sunrise",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?stonehenge,sunset,silhouette,dramatic,sky",
          "https://source.unsplash.com/1200x1600/?stonehenge,aerial,circle,landscape,plain"
        ],
        description: "The world's most famous prehistoric monument — a ring of massive standing stones aligned with the summer solstice sunrise.",
        longDescription: "Stonehenge was constructed in several phases between approximately 3000 BC and 1500 BC, its builders using sarsen sandstone blocks weighing up to 25 tonnes transported from Marlborough Downs 25 miles away, and smaller bluestones brought from the Preseli Hills of Wales over 200 miles distant. Its precise alignment with the midsummer sunrise and midwinter sunset suggests a sophisticated understanding of astronomy and an intention to mark the passage of seasons, likely in connection with ancestor worship and funeral rites.\n\nThe monument sits within a wider prehistoric ceremonial landscape designated a UNESCO World Heritage Site, which includes the enormous Avebury stone circle (larger but less dramatic), the Woodhenge timber circle, and hundreds of Bronze Age burial mounds. English Heritage manages the site with an award-winning visitor centre displaying artefacts from nearby excavations and life-size reconstructions of Neolithic life.",
        details: {
          "Construction Period": "~3000–1500 BC",
          "Largest Stones": "Sarsen Sandstone (25 tonnes)",
          "Bluestone Origin": "Preseli Hills, Wales (~200 miles)",
          "Solstice Alignment": "Midsummer Sunrise",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:30 — 19:00 (summer) | 09:30 — 17:00 (winter)",
        price: "£24.00",
        coordinates: "51.1789° N, 1.8262° W",
        tip: "Book the 'Stone Circle Experience' (outside normal hours, small groups inside the stones) for an unforgettable close-up visit. Summer solstice (21 June) is free and open all night — but expect 20,000+ people. Avebury (20 miles north) is free and equally impressive."
      },
      {
        id: "edinburgh-castle",
        name: "Edinburgh Castle",
        location: "Edinburgh, Scotland",
        category: "Historic Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?edinburgh-castle,scotland,rock,skyline,fortress",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?edinburgh,castle,night,lights,old-town",
          "https://source.unsplash.com/1200x1600/?edinburgh-castle,interior,great-hall,scottish"
        ],
        description: "Scotland's most visited attraction — a volcanic castle rock commanding the Edinburgh skyline since the 12th century.",
        longDescription: "Edinburgh Castle occupies the summit of Castle Rock, a 340-million-year-old volcanic plug rising 80 metres above the city, fortified since at least the 12th century and the site of the city's first settlement. The castle has witnessed most of Scotland's turbulent history: Mary Queen of Scots gave birth to the future James VI (James I of England) here in 1566, and it withstood 26 known sieges — more than any other castle in Britain.\n\nThe castle houses Scotland's Crown Jewels (the Honours of Scotland — older than the English regalia), the Stone of Destiny (returned from Westminster in 1996), the Scottish National War Memorial, and the medieval Great Hall. The One O'Clock Gun has been fired from the battlements every day except Sunday since 1861, giving ships in the Firth of Forth a time signal.",
        details: {
          "Castle Rock Age": "340 Million Years",
          "First Fortification": "12th Century",
          "Crown Jewels": "Honours of Scotland (oldest in UK)",
          "One O'Clock Gun": "Daily Since 1861",
          "Annual Visitors": "~2 Million"
        },
        hours: "09:30 — 18:00 (Apr–Sep) | 09:30 — 17:00 (Oct–Mar)",
        price: "£19.50",
        coordinates: "55.9486° N, 3.1999° W",
        tip: "Book online to save £2 and skip queues. Allow 2–3 hours minimum. The view from the Half Moon Battery over the Old Town is exceptional. Combine with a walk down the Royal Mile to the Palace of Holyroodhouse."
      },
      {
        id: "windsor-castle",
        name: "Windsor Castle",
        location: "Berkshire, England",
        category: "Royal Residence",
        heroImage: "https://source.unsplash.com/3840x2160/?windsor-castle,royal,england,berkshire,towers",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?windsor-castle,long-walk,avenue,royalty",
          "https://source.unsplash.com/1200x1600/?windsor,st-georges-chapel,interior,gothic"
        ],
        description: "The world's largest and oldest inhabited castle, a royal residence for 40 successive monarchs over 1,000 years.",
        longDescription: "Windsor Castle was founded by William the Conqueror in the 1070s as part of a ring of defensive fortresses around London and has been the principal residence of British monarchs ever since, making it the longest-continuously-inhabited royal palace in the world. Its distinctive Round Tower, raised on an artificial motte, has dominated the Thames valley skyline for 900 years, while the Lower Ward's St George's Chapel (begun 1475) is among the finest Perpendicular Gothic buildings in England and the burial place of ten monarchs.\n\nThe State Apartments, richly furnished with Old Masters from the Royal Collection and armour from the Royal Armoury, are open to visitors when the monarch is not in residence. The Changing of the Guard ceremony at Windsor — less crowded than at Buckingham Palace — takes place at 11:00 Monday, Wednesday, Friday, and Sunday.",
        details: {
          "Founded": "1070s (William the Conqueror)",
          "Area": "~13 Hectares",
          "St George's Chapel": "1475–1528",
          "Monarchs Buried": "10 (incl. Henry VIII, George VI)",
          "Classification": "Official Royal Residence"
        },
        hours: "10:00 — 17:15 (Mar–Oct) | 10:00 — 16:15 (Nov–Feb)",
        price: "£32.00",
        coordinates: "51.4839° N, 0.6044° W",
        tip: "Take the train from London Paddington or Waterloo (35–50 min). The Long Walk — a 4.8-km tree-lined avenue to the castle — is free and superb. Visit on Guard Change days (Mon/Wed/Fri/Sun) for the full pomp."
      },
      {
        id: "lake-district",
        name: "Lake District",
        location: "Cumbria, Northwest England",
        category: "National Park",
        heroImage: "https://source.unsplash.com/3840x2160/?lake-district,cumbria,england,mountains,lake,reflection",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?windermere,lake-district,boat,morning,mist",
          "https://source.unsplash.com/1200x1600/?scafell-pike,summit,clouds,england"
        ],
        description: "England's largest national park — a landscape of glacial lakes, craggy fells, and stone-walled valleys that inspired the Romantic poets.",
        longDescription: "The Lake District National Park encompasses 2,362 square kilometres of the most dramatic upland landscape in England, its valleys scoured by glaciers into the characteristic long narrow lakes (Windermere, Ullswater, Coniston Water) that give the region its name. The fells — rounded volcanic mountains reaching 978 metres at Scafell Pike, England's highest summit — are connected by a network of 3,000 kilometres of rights of way codified by the legendary fell-walker Alfred Wainwright in his seven-volume Pictorial Guide series.\n\nThe region inspired the Romantic Movement — Wordsworth, Coleridge, and Southey all lived here — and is the setting of Beatrix Potter's beloved children's tales, her Hill Top Farm at Near Sawrey preserved as a National Trust property. The market towns of Ambleside, Keswick, and Grasmere provide welcoming bases for exploring on foot, by bicycle, or by steamer on Windermere.",
        details: {
          "Area": "2,362 km²",
          "Highest Peak": "Scafell Pike 978 m",
          "Largest Lake": "Windermere (17 km)",
          "UNESCO Status": "World Heritage Site 2017",
          "Famous Resident": "William Wordsworth"
        },
        hours: "Always accessible",
        price: "Free | Car parking from £6/day",
        coordinates: "54.4609° N, 3.0886° W",
        tip: "Stay in Grasmere or Ambleside as a base. The Fairfield Horseshoe is the best moderate fell walk. Avoid bank holiday weekends when the A591 road becomes gridlocked. Wild swimming in Ullswater is a quintessential Lake District experience."
      },
      {
        id: "roman-baths",
        name: "Roman Baths",
        location: "Bath, Somerset, England",
        category: "Roman Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?roman-baths,bath,england,ancient,thermal",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?roman-baths,green-water,interior,columns",
          "https://source.unsplash.com/1200x1600/?bath,england,royal-crescent,georgian,architecture"
        ],
        description: "Europe's best-preserved Roman bathing complex, fed by Britain's only natural hot spring, in the Georgian city of Bath.",
        longDescription: "The thermal spring at Bath has been sacred since prehistoric times, and when the Romans arrived in 43 AD they built one of the most elaborate bathing complexes in the empire around it, dedicating the waters to the goddess Sulis Minerva. The Great Bath — a lead-lined pool 1.6 metres deep fed by 1.17 million litres of hot spring water daily at a constant 46°C — is the centrepiece of a complex that also included a temple, sauna, steam rooms, and cold plunge pools.\n\nThe baths are embedded within the Georgian spa city of Bath, itself a UNESCO World Heritage Site of unsurpassed elegance. The honey-coloured Bath stone terraces of the Royal Crescent and the Circus, designed by John Wood the Elder and Younger in the 1760s, represent the apogee of 18th-century urban planning.",
        details: {
          "Roman Complex Built": "~70 AD",
          "Spring Temperature": "46°C (constant)",
          "Flow Rate": "1.17 Million Litres/Day",
          "Museum Collection": "12,000+ Roman Artefacts",
          "Status": "UNESCO World Heritage Site (City)"
        },
        hours: "09:00 — 18:00 (09:00 — 21:00 Jul–Aug)",
        price: "£20.00",
        coordinates: "51.3812° N, 2.3596° W",
        tip: "Combine with Thermae Bath Spa next door (Britain's only rooftop open-air thermal pool) for a full spa day. Arrive at opening to avoid school groups. The Jane Austen Centre and Sally Lunn's bakehouse are nearby."
      }
    ]
  },

  "portugal": {
    id: "portugal",
    name: "Portugal",
    region: "Southern Europe",
    coordinates: "39.3999° N, 8.2245° W",
    lat: 39.3999,
    lng: -8.2245,
    heroImage: "https://source.unsplash.com/3840x2160/?portugal,lisbon,tiles,alfama,travel",
    description: "Portugal's melancholic soul — expressed in the haunting fado music, azulejo tile-covered facades, and the Age of Discovery monuments along its Atlantic coast — is matched by the warmth of its people and the extraordinary quality of its wine, seafood, and golden light.",
    terrain: "Atlantic Coastal Plains / Douro Valley / Algarve Cliffs",
    climate: "Mediterranean Csa / Oceanic Cfb",
    biodiversity: "Atlantic Cork Oak & Cistus Scrubland",
    destinations: [
      {
        id: "tower-of-belem",
        name: "Tower of Belém",
        location: "Lisbon, Estremadura",
        category: "Historic Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?belem-tower,lisbon,portugal,tagus,manuelino",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?belem-tower,sunset,tagus,reflection,portugal",
          "https://source.unsplash.com/1200x1600/?belem,tower,detail,carving,stone"
        ],
        description: "A jewel of Manueline architecture — a fortified tower on the Tagus estuary that was the gateway to Portugal's Age of Discovery.",
        longDescription: "Built between 1516 and 1521 during the reign of Manuel I, the Torre de Belém served as both a ceremonial gateway to Lisbon and a defensive fortification at the mouth of the Tagus estuary, guarding the approach to the city and symbolising Portugal's maritime empire. Its architect, Francisco de Arruda, clad the tower in extraordinary Manueline ornamentation — a uniquely Portuguese late-Gothic style incorporating maritime motifs: twisted ropes in stone, armillary spheres, coral branches, and the Cross of the Order of Christ.\n\nStanding on the spot from which Vasco da Gama departed for India in 1497 and to which Columbus considered sailing for Spain, the tower is both historically resonant and architecturally exquisite. The nearby Jerónimos Monastery, built from the same profits of the spice trade, completes a magnificent ensemble of Manueline architecture in Belém.",
        details: {
          "Built": "1516–1521",
          "Architect": "Francisco de Arruda",
          "Style": "Manueline (Portuguese Late Gothic)",
          "Height": "35 Metres",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "10:00 — 18:30 (Oct–Apr) | 10:00 — 18:30 (May–Sep, closed Mon)",
        price: "€6.00",
        coordinates: "38.6916° N, 9.2160° W",
        tip: "Combine with the Jerónimos Monastery (500 metres away) on the same day — a joint ticket is available. The waterfront esplanade at sunset is superb. Visit the Pastéis de Belém bakery nearby for the original pastel de nata custard tart."
      },
      {
        id: "pena-palace",
        name: "Pena Palace",
        location: "Sintra, Lisbon District",
        category: "Royal Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?pena-palace,sintra,portugal,colourful,romantic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?pena-palace,yellow-red,towers,fog,sintra",
          "https://source.unsplash.com/1200x1600/?sintra,forest,palace,mist,morning"
        ],
        description: "A fairy-tale palace of clashing colours and eclectic architecture rising from the misty Serra de Sintra.",
        longDescription: "Palácio da Pena was commissioned by King Ferdinand II of Portugal between 1842 and 1854 as a Romantic royal retreat on the site of a ruined 16th-century monastery. Ferdinand, a German prince of the House of Saxe-Coburg and Gotha and an accomplished watercolourist, designed an extraordinary eclectic building that combines Moorish, Gothic, Manueline, and Renaissance elements in vivid yellow and red render, studded with mythological statuary and surrounded by a 200-hectare park of exotic trees from Portugal's former colonies.\n\nSintra is a UNESCO Cultural Landscape, its wooded serra dotted with palaces, quintas, and a Moorish castle — the Castelo dos Mouros — all within walking distance of Pena. On clear days the palace commands views from the Atlantic to Lisbon 29 kilometres away.",
        details: {
          "Commissioned By": "King Ferdinand II",
          "Built": "1842–1854",
          "Style": "Romantic Eclectic",
          "Park Area": "200 Hectares",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:30 — 20:00 (Jun–Sep) | 10:00 — 18:00 (Oct–May)",
        price: "€17.50 (Palace) | €8.00 (Park only)",
        coordinates: "38.7878° N, 9.3906° W",
        tip: "Buy tickets online to avoid long queues. Combine with Quinta da Regaleira and the Moorish Castle for a full Sintra day. Take the train from Lisbon Rossio station (40 min). Morning visits are best as afternoon cloud often obscures the views."
      },
      {
        id: "douro-valley",
        name: "Douro Valley",
        location: "Porto, Douro Region",
        category: "Wine Region",
        heroImage: "https://source.unsplash.com/3840x2160/?douro-valley,portugal,vineyards,terraces,river",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?douro,valley,terraced-vineyards,portugal,harvest",
          "https://source.unsplash.com/1200x1600/?porto,ribeira,rabelo-boat,douro,wine"
        ],
        description: "The world's first designated wine region — a spectacular landscape of terraced schist vineyards plunging to the Douro River.",
        longDescription: "The Upper Douro Valley, designated a Protected Designation of Origin for Port wine by the Marquis of Pombal in 1756 — making it the world's first formally delimited wine region — is one of the most beautiful and dramatic landscapes in Europe. Terraced vineyards of Touriga Nacional, Tinta Roriz, and dozens of other indigenous varieties cascade down near-vertical schist hillsides to the glittering Douro River 500 metres below, the terraces carved laboriously by hand over centuries and held in place by dry-stone walls.\n\nThe classic way to experience the valley is aboard a traditional rabelo boat cruise from Porto or the riverside town of Pinhão, watching the terraces slip past in the afternoon light. Many quinta estates offer tours, tastings, and accommodation during the September–October harvest when the valley resonates with the sound of treading grapes in stone lagares.",
        details: {
          "Designation": "World's First Wine PDO (1756)",
          "Key Wine": "Port & Douro DOC",
          "Main Town": "Pinhão",
          "UNESCO Status": "World Heritage Site 2001",
          "Harvest Season": "Late September–October"
        },
        hours: "Always accessible",
        price: "Free | Quinta tours from €15",
        coordinates: "41.1875° N, 7.5410° W",
        tip: "Take the Linha do Douro scenic railway from Porto (book early: the window seats fill fast). The stretch from Pinhão to Tua is the most dramatic. Stay at a quinta during harvest for the most immersive experience."
      },
      {
        id: "algarve-cliffs",
        name: "Algarve Cliffs",
        location: "Algarve, Southern Portugal",
        category: "Scenic Coastline",
        heroImage: "https://source.unsplash.com/3840x2160/?algarve,cliffs,portugal,ocean,golden,beach",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?algarve,ponta-piedade,lagos,sea-caves",
          "https://source.unsplash.com/1200x1600/?algarve,benagil-cave,arch,turquoise,sea"
        ],
        description: "Sculpted ochre limestone sea cliffs, hidden grottos, and turquoise waters along Portugal's spectacular southern coast.",
        longDescription: "The western Algarve coastline between Lagos and Sagres presents some of the most dramatically sculpted coastal scenery in Europe — towering amber limestone cliffs (Rocha Dourada — Golden Rock) riddled with sea caves, natural arches, and secluded coves accessible only by boat or hidden staircases. The famous Ponta da Piedade headland near Lagos, where stacked rock formations rise from vivid turquoise water, and the sea cave beaches of Praia de Benagil — accessible through a cathedral arch in the cliff face — are among Portugal's most photographed landscapes.\n\nThe far southwestern tip at Cabo de São Vicente was historically considered the end of the known world — the most southwestern point of continental Europe, where Atlantic rollers batter wild cliffs and the sunset over the open ocean is extraordinary.",
        details: {
          "Cliff Material": "Jurassic Limestone",
          "Iconic Sites": "Ponta da Piedade & Benagil Cave",
          "Most SW Point": "Cabo de São Vicente",
          "Best Beaches": "Praia de Marinha, Praia do Camilo",
          "Best Season": "May–June & September"
        },
        hours: "Always accessible",
        price: "Free | Boat tours from €25",
        coordinates: "37.0892° N, 8.6698° W",
        tip: "Hire a kayak or take a small boat tour from Lagos to access the Benagil Cave and hidden beaches. Visit Ponta da Piedade at sunset for extraordinary golden light on the cliffs. Avoid July–August peak crowds."
      },
      {
        id: "jeronimos-monastery",
        name: "Jerónimos Monastery",
        location: "Belém, Lisbon",
        category: "Religious Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?jeronimos-monastery,lisbon,portugal,manueline,white",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?jeronimos,cloister,arches,columns,portugal",
          "https://source.unsplash.com/1200x1600/?jeronimos,interior,gothic,vault,lisbon"
        ],
        description: "The supreme masterpiece of Manueline architecture, built from the riches of the spice trade in the Age of Discovery.",
        longDescription: "The Mosteiro dos Jerónimos was commissioned by King Manuel I around 1501 to give thanks for Vasco da Gama's successful voyage to India in 1498, built on the site where da Gama and his crew spent the night in prayer before their departure. Financed by the 5% royal tax on all spices imported from Guinea and India (the vintena da pimenta — the pepper fifth), it took a century to complete and represents the zenith of Manueline architecture.\n\nThe south portal, carved by João de Castilho in an explosion of maritime motifs, saints, and royal heraldry, is considered the finest decorative doorway in Portugal. Inside, the church's soaring nave is supported by palm-tree columns dissolving into a fan-vaulted ceiling of extraordinary delicacy, and the monastery cloisters are a two-storey wonderland of twisted stone colonettes, armillary spheres, and Cross of Christ symbols.",
        details: {
          "Construction": "1501–16th Century",
          "Style": "Manueline",
          "Patron": "King Manuel I",
          "Tomb": "Vasco da Gama & Luís de Camões",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "10:00 — 18:30 (May–Sep) | 10:00 — 17:30 (Oct–Apr) | Closed Monday",
        price: "€10.00",
        coordinates: "38.6979° N, 9.2068° W",
        tip: "The church (where Vasco da Gama is buried) is free on Sunday mornings until 14:00. Allow at least an hour for the cloister. Combine with Belém Tower and the Discoveries Monument for a full Belém half-day."
      },
      {
        id: "obidos-castle",
        name: "Óbidos Medieval Town",
        location: "Óbidos, Leiria District",
        category: "Medieval Walled Town",
        heroImage: "https://source.unsplash.com/3840x2160/?obidos,portugal,medieval,castle,white-walls",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?obidos,cobbled-street,flowers,portugal,village",
          "https://source.unsplash.com/1200x1600/?obidos,walls,castle,ramparts,portugal"
        ],
        description: "A perfectly preserved medieval walled town of whitewashed houses draped in bougainvillea, presented to the queens of Portugal as a wedding gift.",
        longDescription: "The walled town of Óbidos has been continuously inhabited since prehistoric times, but its present form — a 13th-century Moorish castle and circuit of whitewashed walls enclosing a labyrinth of flower-draped cobbled streets — dates from the post-Reconquista Portuguese medieval period. The tradition of gifting Óbidos to the queens of Portugal as a wedding gift was begun by King Dinis I who gave it to Queen Isabel in 1282, a practice continued for five centuries.\n\nThe town is famous for its unique tradition of bookshops in unexpected locations — a wine shop, a church, and a medieval dungeon — and for ginjinha de Óbidos, a sour cherry liqueur traditionally served in an edible chocolate cup. Walking the full circuit of the 13th-century town walls offers spectacular views across the silver olive groves of the Óbidos lagoon.",
        details: {
          "Castle Built": "13th Century",
          "Town Walls": "1.6 km Circuit",
          "Royal Tradition": "Queen's Wedding Gift 1282–1833",
          "Local Speciality": "Ginjinha in Chocolate Cup",
          "Festival": "Medieval Market (July)"
        },
        hours: "Town: always open | Castle: 09:00–18:00",
        price: "Town Free | Castle €2.00",
        coordinates: "39.3607° N, 9.1574° W",
        tip: "Walk the full circuit of the town walls (free, no handrails in places — take care). Visit in the evening when day-trippers have left. The Medieval Market in July is one of Portugal's best cultural festivals."
      }
    ]
  },

  "switzerland": {
    id: "switzerland",
    name: "Switzerland",
    region: "Central Europe",
    coordinates: "46.8182° N, 8.2275° E",
    lat: 46.8182,
    lng: 8.2275,
    heroImage: "https://source.unsplash.com/3840x2160/?switzerland,alps,matterhorn,landscape,travel",
    description: "Switzerland distils the essence of Alpine grandeur into a compact, prosperous nation of four languages and extraordinary natural beauty. Pristine glaciers, cerulean lakes, and precision-engineered mountain railways share the landscape with chocolate-box villages and cosmopolitan cities.",
    terrain: "Alpine / Jura / Mittelland Plateau",
    climate: "Continental Dfb / Alpine ET",
    biodiversity: "Alpine Meadow, Glacial & Subalpine Forest",
    destinations: [
      {
        id: "matterhorn",
        name: "The Matterhorn",
        location: "Zermatt, Valais",
        category: "Iconic Mountain Peak",
        heroImage: "https://source.unsplash.com/3840x2160/?matterhorn,zermatt,switzerland,alpine,peak",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?matterhorn,reflection,riffelsee,sunrise",
          "https://source.unsplash.com/1200x1600/?zermatt,village,matterhorn,winter,snow"
        ],
        description: "The world's most photographed mountain — a near-perfect pyramid of rock soaring 4,478 metres above the car-free village of Zermatt.",
        longDescription: "The Matterhorn (Monte Cervino in Italian; Mont Cervin in French) is the iconic pyramid of the Alps, its four near-symmetrical faces oriented to the cardinal points and rising from a base at 1,620 metres to a summit at 4,478 metres in a sheer 3,000-metre rock wall. Its first ascent by Edward Whymper's party on 14 July 1865 — followed by the catastrophic fall that killed four of the seven climbers on the descent — became one of the most dramatic events in mountaineering history.\n\nThe resort town of Zermatt at the mountain's foot is car-free, accessible only by electric taxi and the cog railway from Täsch. The Gornergrat rack railway (3,089 m) and Matterhorn Glacier Paradise cable car (3,883 m) offer extraordinary panoramas over 38 surrounding four-thousanders, while in summer more than 400 kilometres of hiking trails explore the flower-carpeted alpine pastures below the glaciers.",
        details: {
          "Height": "4,478 Metres",
          "First Ascent": "Edward Whymper, 14 July 1865",
          "Shape": "Four-Sided Pyramid",
          "Nearest Resort": "Zermatt (car-free)",
          "Gondola Altitude": "Glacier Paradise 3,883 m"
        },
        hours: "Mountain always visible | Gondolas 08:00–16:30",
        price: "Viewpoint free | Glacier Paradise cable car from CHF 108",
        coordinates: "45.9763° N, 7.6586° E",
        tip: "Stay in Zermatt for at least two nights — the first day is often cloudy, the second reveals the mountain. The Riffelsee (2,757 m) hike offers the classic Matterhorn reflection. Hire a guide for the Hörnli Ridge climb."
      },
      {
        id: "jungfraujoch",
        name: "Jungfraujoch",
        location: "Bernese Oberland, Bern Canton",
        category: "Alpine Rail Experience",
        heroImage: "https://source.unsplash.com/3840x2160/?jungfraujoch,switzerland,alps,glacier,snow",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?jungfrau,aletsch-glacier,aerial,ice",
          "https://source.unsplash.com/1200x1600/?eiger,monch,jungfrau,north-face,alpine"
        ],
        description: "The 'Top of Europe' — a high-altitude railway station at 3,454 metres offering access to the vast Aletsch Glacier.",
        longDescription: "The Jungfraujoch is reached by the Jungfrau Railway, which tunnels through the Eiger and Mönch from the Kleine Scheidegg saddle (2,061 m) to its terminus at 3,454 metres — the highest railway station in Europe — in a journey of engineering audacity begun in 1896 and completed in 1912. The views from the station's Sphinx Observatory over the 23-kilometre Aletsch Glacier (the longest in the Alps and a UNESCO World Heritage Site) and south to the peaks of Italy are immense.\n\nThe ice palace carved into the glacier, the Plateau Restaurant at 3,571 metres, and various outdoor terraces allow visitors to experience high-alpine conditions year-round. On clear summer days the temperature can still drop well below zero and UV levels are extreme — sun protection is essential.",
        details: {
          "Altitude": "3,454 Metres (Highest European Station)",
          "Railway Opened": "1912",
          "Tunnel Length": "7.3 km",
          "Aletsch Glacier": "23 km (Longest in Alps)",
          "UNESCO": "Swiss Alps Jungfrau-Aletsch"
        },
        hours: "First train ~08:00 | Last return ~17:45 (seasonal)",
        price: "From CHF 145.80 (return from Grindelwald)",
        coordinates: "46.5474° N, 7.9853° E",
        tip: "Check the webcam before departing — cloud cover can obscure everything. Go on a weekday to avoid overwhelming crowds. The Good Morning Ticket (first train) costs less. Dress in warm layers regardless of valley weather."
      },
      {
        id: "lake-geneva",
        name: "Lake Geneva",
        location: "Lausanne, Vaud",
        category: "Alpine Lake",
        heroImage: "https://source.unsplash.com/3840x2160/?lake-geneva,lausanne,switzerland,alps,vineyard",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?leman,lake,montreaux,castle-chillon,reflection",
          "https://source.unsplash.com/1200x1600/?lavaux,vineyard,terraces,lake-geneva,sunset"
        ],
        description: "Western Europe's largest alpine lake, flanked by UNESCO-listed terraced vineyards and the French Alps.",
        longDescription: "Lac Léman (Lake Geneva) stretches 73 kilometres along the border of Switzerland and France between the cities of Geneva and Montreux, with a depth of 310 metres and a surface area of 580 square kilometres that creates its own microclimate, keeping the northern (Swiss) shore warmer and sunnier than the surrounding region. The lakeside Lavaux wine region, where Chasselas vines have been cultivated on terraced hillsides above the lake since the 11th century, is a UNESCO World Heritage Site of great beauty.\n\nThe eastern tip of the lake at Montreux hosts one of the world's greatest jazz festivals each July, and the medieval Château de Chillon (1248) — inspiration for Byron's poem 'The Prisoner of Chillon' — stands on a rocky island just offshore. Geneva at the western end offers the International Red Cross Museum, the 140-metre Jet d'Eau fountain, and the historic Old Town.",
        details: {
          "Length": "73 km",
          "Surface Area": "580 km²",
          "Maximum Depth": "310 Metres",
          "Lavaux Vineyards": "UNESCO World Heritage Site",
          "Château de Chillon": "1248 (Medieval Castle)"
        },
        hours: "Always accessible | Chillon 09:00–19:00",
        price: "Free access | Chillon CHF 13.50",
        coordinates: "46.4500° N, 6.5000° E",
        tip: "Take the CGN vintage paddle steamer between Lausanne and Montreux (2 hours). Walk the Lavaux vineyard trail from Lutry to Cully in harvest season. Combine Chillon Castle with an afternoon in Montreux's old town."
      },
      {
        id: "grindelwald",
        name: "Grindelwald & First",
        location: "Bernese Oberland, Bern Canton",
        category: "Alpine Village",
        heroImage: "https://source.unsplash.com/3840x2160/?grindelwald,switzerland,eiger,alps,village",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?grindelwald,first,cliff-walk,eiger,hike",
          "https://source.unsplash.com/1200x1600/?grindelwald,winter,ski,village,church"
        ],
        description: "The most dramatic village in the Bernese Alps, sitting directly beneath the sheer north face of the Eiger.",
        longDescription: "Grindelwald sits in a glacial valley at 1,034 metres with the 3,970-metre Eiger's murderous north face (the Nordwand — 'murder wall' in climbers' parlance) rising directly above the village rooftops, creating one of the most dramatic inhabited settings in the Alps. From the village, the Gondelbahn First cable car ascends to 2,168 metres where the First Cliff Walk — a steel walkway bolted into the cliff face — offers vertiginous views straight down to the valley 400 metres below.\n\nIn summer, Grindelwald is the gateway to some of the finest walks in the Alps: the Bachsee (2,265 m) trail passes a mirror lake reflecting the Wetterhorn and Schreckhorn; the Grosse Scheidegg road crosses to Meiringen over a 1,962-metre alpine pass. In winter it forms part of the Jungfrau ski region with 213 kilometres of prepared pistes.",
        details: {
          "Altitude": "1,034 Metres",
          "Eiger North Face Height": "1,800 m Vertical",
          "First Cliff Walk": "2,168 Metres",
          "Ski Area": "Jungfrau Region (213 km pistes)",
          "Best Hike": "Bachsee (2,265 m)"
        },
        hours: "Village always accessible | First gondola 08:30–17:00",
        price: "Free | First gondola from CHF 38",
        coordinates: "46.6244° N, 8.0412° E",
        tip: "The Bachalpsee hike from First (2 hours return) is one of the Alps' best easy walks. Stay in the village for sunrise on the Eiger face. Rent an e-bike in summer for the panoramic Grosse Scheidegg road."
      },
      {
        id: "lucerne-chapel-bridge",
        name: "Chapel Bridge & Old Town",
        location: "Lucerne, Central Switzerland",
        category: "Historic City Centre",
        heroImage: "https://source.unsplash.com/3840x2160/?lucerne,chapel-bridge,switzerland,lake,old-town",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?lucerne,kapellbrucke,night,reflection,lights",
          "https://source.unsplash.com/1200x1600/?lucerne,lake,mount-pilatus,panorama"
        ],
        description: "Switzerland's most visited city — a perfectly preserved medieval old town spanning the turquoise Reuss with its iconic covered wooden bridge.",
        longDescription: "The Kapellbrücke (Chapel Bridge) crossing the Reuss River is a 14th-century covered wooden footbridge adorned with triangular tower paintings (painted c.1600-1620) depicting scenes from Swiss history — making it the world's oldest surviving wooden bridge with an art programme. The octagonal Water Tower beside it, which has variously served as a treasury, archive, prison, and torture chamber, completes one of Europe's most photogenic urban waterscapes.\n\nLucerne's old town on both banks of the Reuss is an exceptional ensemble of frescoed Baroque facades, medieval fountains, and traffic-free squares, backed by Mount Pilatus (2,132 m) to the south and Mount Rigi (1,798 m) to the east. The Swiss Museum of Transport (Verkehrshaus) is the most visited museum in Switzerland, and the Rosengart Collection houses magnificent Picasso and Klee works.",
        details: {
          "Kapellbrücke Built": "1365",
          "Bridge Length": "204 Metres",
          "Tower Paintings": "~45 Surviving (of original 158)",
          "Lake Area": "113 km² (Lake Lucerne)",
          "Nearby Peak": "Mount Pilatus 2,132 m"
        },
        hours: "Bridge always open | Picasso Museum 10:00–18:00",
        price: "Bridge free | Museum CHF 12",
        coordinates: "47.0505° N, 8.3063° E",
        tip: "Photograph the bridge at blue hour (30 min after sunset) when it is lit up. Take the cog railway and cable car combination to Pilatus summit. The weekly Saturday market by the Reuss is vibrant and colourful."
      },
      {
        id: "rhine-falls",
        name: "Rhine Falls",
        location: "Schaffhausen, Northern Switzerland",
        category: "Natural Waterfall",
        heroImage: "https://source.unsplash.com/3840x2160/?rhine-falls,schaffhausen,switzerland,waterfall,river",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rhinefall,aerial,mist,power,water",
          "https://source.unsplash.com/1200x1600/?rhine-falls,boat,castle-laufen,switzerland"
        ],
        description: "The largest waterfall in Europe by volume — 600,000 litres of Rhine water per second crashing over a 23-metre basalt lip.",
        longDescription: "The Rheinfall at Neuhausen am Rheinfall near Schaffhausen is the most powerful waterfall in Europe, with an average flow of 600,000 litres per second (rising to 1.25 million at peak spring snowmelt) crashing 23 metres over a curtain of jagged Jurassic basalt in a thunderous cloud of spray visible from kilometres away. The falls were formed at the end of the last Ice Age when the Rhine was deflected by glacial debris into its current channel.\n\nSmall boats take visitors from both banks of the river directly to the base of the falls and to a rocky islet in the middle where a Swiss flag flies defiantly in the permanent mist and the sound is deafening. The medieval Schloss Laufen castle perches on the cliff directly above the south bank, its gardens and viewing platforms offering dramatic overhead perspectives.",
        details: {
          "Average Flow": "600,000 Litres/Second",
          "Width": "150 Metres",
          "Height": "23 Metres",
          "Origin": "Post-Glacial (10,000 Years Ago)",
          "Nearby Castle": "Schloss Laufen (Medieval)"
        },
        hours: "Always visible | Boat tours 10:00–17:30 (Apr–Oct)",
        price: "Free | Boat to rock CHF 5",
        coordinates: "47.6779° N, 8.6159° E",
        tip: "Visit in late May–June when snowmelt maximises the flow. The boat trip to the central rock is thrilling and inexpensive. Combine with Schaffhausen's beautifully preserved medieval old town (15 min by bus). The Swiss National Day fireworks here (1 August) are spectacular."
      }
    ]
  },

  "austria": {
    id: "austria",
    name: "Austria",
    region: "Central Europe",
    coordinates: "47.5162° N, 14.5501° E",
    lat: 47.5162,
    lng: 14.5501,
    heroImage: "https://source.unsplash.com/3840x2160/?austria,vienna,schoenbrunn,imperial,travel",
    description: "Austria's imperial grandeur — the palaces, opera houses, and coffeehouses of Vienna — is complemented by the soaring Alpine landscapes of the Tyrol and Salzburg, the birthplace of Mozart and setting of The Sound of Music. Few countries pack so much beauty into so small a space.",
    terrain: "Alpine / Danube Valley / Eastern Plains",
    climate: "Continental Dfb / Alpine ET",
    biodiversity: "Alpine Meadow, Beech Forest & Pannonian Steppe",
    destinations: [
      {
        id: "schonbrunn-palace",
        name: "Schönbrunn Palace",
        location: "Vienna, Austria",
        category: "Imperial Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?schoenbrunn,palace,vienna,austria,imperial",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?schoenbrunn,gardens,gloriette,fountain,aerial",
          "https://source.unsplash.com/1200x1600/?schoenbrunn,interior,marie-antoinette,room,gold"
        ],
        description: "The 1,441-room summer palace of the Habsburg emperors — one of the most significant Baroque complexes in Europe.",
        longDescription: "Schönbrunn Palace was the principal summer residence of the Habsburg imperial family for nearly three centuries, remodelled in its current Baroque form by Empress Maria Theresa between 1743 and 1763 in a programme of works that also created the formal French gardens stretching 900 metres uphill to the Gloriette colonnade. The six-year-old Mozart performed here for Empress Maria Theresa in 1762, and Napoleon used it as his headquarters in both 1805 and 1809.\n\nThe 40 state rooms open to visitors — including Maria Theresa's bedroom, the Grand Gallery with its frescoed ceilings and crystal chandeliers, and the Chinese Cabinets — are opulently furnished in Rococo style, their walls hung with Gobelins tapestries and family portraits. The palace zoo (Tiergarten, 1752) in the grounds is the world's oldest, and the labyrinthine palace gardens include Europe's first hedge maze.",
        details: {
          "Construction": "1696–1780 (Habsburg)",
          "Rooms": "1,441 (40 Open to Public)",
          "Gardens Area": "1.17 km²",
          "Famous Resident": "Empress Maria Theresa & Franz Joseph",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "08:30 — 17:30 (Nov–Mar) | 08:30 — 18:30 (Apr–Jun) | 08:30 — 19:00 (Jul–Sep)",
        price: "Grand Tour €22.00",
        coordinates: "48.1845° N, 16.3122° E",
        tip: "Buy the Grand Tour ticket (40 rooms) over the Classic (22 rooms) — well worth the difference. The Gloriette terrace café offers wonderful views back to the palace and Vienna. Combine with Belvedere Palace and the Kunsthistorisches Museum for a full Viennese day."
      },
      {
        id: "hallstatt-village",
        name: "Hallstatt",
        location: "Salzkammergut, Upper Austria",
        category: "UNESCO Village",
        heroImage: "https://source.unsplash.com/3840x2160/?hallstatt,village,lake,austria,reflection,alps",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hallstatt,dawn,mist,lake,church,reflection",
          "https://source.unsplash.com/1200x1600/?hallstatt,colourful-houses,austria,mountain"
        ],
        description: "The world's most photographed lakeside village — a cluster of pastel houses squeezed between the Dachstein massif and the Hallstättersee.",
        longDescription: "Hallstatt's history stretches back 7,000 years to when the Celts began mining the salt deposits in the mountains above the lake — so significant that the entire Iron Age period (800–450 BC) is named the 'Hallstatt Culture' after this village. The settlement is so narrow, compressed between sheer mountain walls and the lake, that its 780 residents live in houses stacked vertically up the cliff face, connected by staircases rather than roads.\n\nToday Hallstatt is one of the most visited places in Austria, its photogenic lakeside cluster of painted houses, Gothic church, and backdrop of snowy peaks drawing visitors from around the world, particularly from East Asia where it inspired a full-scale replica village in Guangdong, China. The Skywalk viewing platform (350 m above the village) and the 7,000-year-old salt mine tour are outstanding additions to the scenic lake experience.",
        details: {
          "History": "7,000 Years of Salt Mining",
          "Iron Age Culture": "'Hallstatt Culture' Named After Village",
          "Residents": "~780",
          "UNESCO Status": "Salzkammergut World Heritage Site 1997",
          "Salt Mine Tour": "World's Oldest Salt Mine"
        },
        hours: "Always accessible | Salt Mine 09:00–16:30",
        price: "Free | Salt Mine €37.00",
        coordinates: "47.5622° N, 13.6493° E",
        tip: "Stay overnight (the day-trippers leave at 17:00, transforming the village). Take the funicular to the salt mine and Skywalk. The early morning boat from Hallstatt Lahn to the village dock is magical. Park at Lahn (southern end) or take the ferry from Hallstatt Bahnhof."
      },
      {
        id: "vienna-opera",
        name: "Vienna State Opera",
        location: "Vienna, Austria",
        category: "Cultural Venue",
        heroImage: "https://source.unsplash.com/3840x2160/?vienna-opera,staatsoper,austria,night,facade",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?vienna-opera,interior,chandelier,gold,auditorium",
          "https://source.unsplash.com/1200x1600/?vienna,ringstrasse,opera-house,architecture"
        ],
        description: "One of the world's leading opera houses — a neo-Renaissance temple of music at the heart of the Ringstraße.",
        longDescription: "The Wiener Staatsoper was built between 1863 and 1869 as the first major public building on Emperor Franz Joseph's new Ringstraße boulevard. Designed by August Sicard von Sicardsburg and Eduard van der Nüll in the Italian neo-Renaissance style, it opened with a performance of Mozart's Don Giovanni attended by the Emperor himself. Largely destroyed by Allied bombs in March 1945, it was meticulously rebuilt and reopened in 1955 with Beethoven's Fidelio, a performance that carried enormous symbolism for war-ravaged Austria.\n\nThe opera stages around 300 performances per year across its September–June season, under musical directors who have included Gustav Mahler, Herbert von Karajan, and Claudio Abbado. Standing-room tickets at the rear of the house — the Stehplatz — have been sold since the building opened and remain a Vienna tradition, available for €3–4 on the day of the performance, attracting opera devotees of all ages.",
        details: {
          "Built": "1863–1869",
          "Style": "Italian Neo-Renaissance",
          "Capacity": "2,284 Seats",
          "Annual Performances": "~300",
          "Standing Tickets": "From €3.00"
        },
        hours: "Guided tours daily | Performances Sep–Jun 19:00/19:30",
        price: "Tour €9.00 | Stehplatz from €3.00 | Seats from €10.00",
        coordinates: "48.2030° N, 16.3695° E",
        tip: "Queue for Stehplatz standing tickets (available 80 min before curtain) for an authentic and affordable experience. The Vienna Philharmonic plays in the opera pit — check if VPO is performing. The New Year's Eve Gala tickets require a ballot entry submitted in August."
      },
      {
        id: "grossglockner",
        name: "Grossglockner Alpine Road",
        location: "Carinthia / Salzburg, Austria",
        category: "Scenic Alpine Drive",
        heroImage: "https://source.unsplash.com/3840x2160/?grossglockner,austria,alpine-road,glacier,mountain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?grossglockner,pasterze-glacier,panorama,summit",
          "https://source.unsplash.com/1200x1600/?grossglockner,road,hairpin-bend,alpine"
        ],
        description: "Austria's most spectacular mountain road — 48 kilometres of switchbacks reaching 2,571 metres with views of Austria's highest peak.",
        longDescription: "The Großglockner Hochalpenstraße is Austria's most famous scenic road, a 48-kilometre toll highway built between 1930 and 1935 climbing from Bruck an der Glocknerstraße (755 m) in Salzburg state to Heiligenblut (1,288 m) in Carinthia, crossing the main Alpine ridge at the 2,571-metre Hochtor tunnel. The road features 36 hairpin bends, 14 tunnels, and 16 bridges, and was engineered with extraordinary care to integrate naturally into the landscape.\n\nThe Franz-Josefs-Höhe spur road (2,369 m) terminates at a visitor centre overlooking the Pasterze Glacier — Austria's largest at 8.5 kilometres — and the 3,798-metre summit of the Großglockner, Austria's highest mountain. In summer, ibex and marmots graze the verges of the road and golden eagles circle overhead.",
        details: {
          "Length": "48 km",
          "Highest Point": "Hochtor 2,571 m",
          "Hairpin Bends": "36",
          "Franz-Josefs-Höhe": "2,369 m",
          "Austria's Highest Peak": "Grossglockner 3,798 m"
        },
        hours: "Open May–October (weather dependent) | 05:00–22:00",
        price: "Car toll €38.00 (return)",
        coordinates: "47.0747° N, 12.6988° E",
        tip: "Go on a clear morning — afternoon clouds frequently obscure the glacier and summit. Drive south to north (Heiligenblut start) for the most dramatic initial impact. Bring warm clothing even in summer — temperatures at the top can be 15°C cooler than the valley."
      },
      {
        id: "salzburg-fortress",
        name: "Salzburg Fortress & Old Town",
        location: "Salzburg, Austria",
        category: "Medieval Fortress",
        heroImage: "https://source.unsplash.com/3840x2160/?salzburg,hohensalzburg,fortress,austria,mozart",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?salzburg,old-town,baroque,mirabell,gardens",
          "https://source.unsplash.com/1200x1600/?hohensalzburg,fortress,interior,medieval"
        ],
        description: "Central Europe's largest intact medieval castle towers over Mozart's Baroque birthplace — a UNESCO-listed city of music.",
        longDescription: "Hohensalzburg Fortress, perched 120 metres above the city on the Festungsberg, was begun by Archbishop Gebhard of Salzburg in 1077 and continuously expanded until the 17th century, making it the largest fully preserved medieval castle in Central Europe. It commanded the city for centuries during the Prince-Archbishop's rule, and its vaulted state rooms — the Goldene Stube and Goldene Kammer — are among Austria's finest medieval interiors.\n\nThe old city below is a UNESCO World Heritage Site of extraordinary Baroque coherence, its cathedral, Residenz palace, Mirabell gardens, and tight network of Altstadt alleyways forming the setting in which Wolfgang Amadeus Mozart was born in 1756 (at Getreidegasse 9) and in which much of The Sound of Music was filmed in 1964. The Salzburg Festival (July–August) is one of the world's premier classical music events.",
        details: {
          "Fortress Founded": "1077",
          "Classification": "Largest Intact Medieval Castle in Central Europe",
          "Mozart Born": "27 January 1756 (Getreidegasse 9)",
          "UNESCO Status": "World Heritage Site 1996",
          "Salzburg Festival": "July–August (since 1920)"
        },
        hours: "Fortress: 09:00–19:00 (May–Sep) | 09:00–17:00 (Oct–Apr)",
        price: "Fortress €15.20 | Old Town Free",
        coordinates: "47.7959° N, 13.0471° E",
        tip: "Take the funicular to the fortress (included in ticket). Walk the entire circuit of the fortress walls for panoramic views. Visit Mozart's Geburtshaus (birthplace) early — it gets very crowded. The Mirabell Garden is free and beautifully maintained."
      },
      {
        id: "swarovski-crystal-worlds",
        name: "Swarovski Crystal Worlds",
        location: "Wattens, Tyrol",
        category: "Unique Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?swarovski,crystal-worlds,austria,installation,art",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?swarovski,crystal,interior,art-installation,glitter",
          "https://source.unsplash.com/1200x1600/?wattens,swarovski,giant-face,entrance,tyrol"
        ],
        description: "A fantastical underground world of crystal art installations created by global artists for the birthplace of Swarovski.",
        longDescription: "Swarovski Crystal Worlds (Kristallwelten) was created in 1995 to mark the 100th anniversary of the Swarovski crystal company, founded by Daniel Swarovski in the nearby town of Wattens in 1895. Entered through a giant green moss-covered face from whose mouth a waterfall flows, the underground chambers (Wunderkammern — Chambers of Wonder) are commissioned art installations by artists including Brian Eno, Tord Boontje, and Yoko Ono, all using Swarovski crystal in ways ranging from the intimate to the overwhelming.\n\nThe original chamber — the Crystal Dome — carpets walls, ceiling, and floor entirely in 600 mirrors and 12 million Swarovski crystals, creating a vertiginous sensation of infinite space. Above ground, the Kristallgarten and designer village with boutiques, restaurants, and a crystal cloud playground make it a full-day destination.",
        details: {
          "Founded": "1995 (Swarovski Centenary)",
          "Chambers": "17 Wunderkammern",
          "Crystal Dome": "12 Million Crystals",
          "Company Founded": "1895 by Daniel Swarovski",
          "Location": "Near Innsbruck (20 km)"
        },
        hours: "09:00 — 19:30 daily",
        price: "€21.00",
        coordinates: "47.2925° N, 11.5919° E",
        tip: "Allow 2–3 hours minimum. The shuttle bus from Innsbruck main station is convenient (45 min return included in some ticket packages). Photography is permitted and encouraged — the crystal dome requires a wide-angle lens."
      }
    ]
  },

  "netherlands": {
    id: "netherlands",
    name: "Netherlands",
    region: "Northwestern Europe",
    coordinates: "52.1326° N, 5.2913° E",
    lat: 52.1326,
    lng: 5.2913,
    heroImage: "https://source.unsplash.com/3840x2160/?netherlands,tulips,windmill,amsterdam,travel",
    description: "The Netherlands has reclaimed a quarter of its land from the sea, creating a flat, meticulously ordered landscape of canals, polders, and windmills. Amsterdam's Golden Age canal houses, Vermeer's Delft, and the tulip fields of South Holland make it one of Europe's most distinctive cultural destinations.",
    terrain: "Flat Lowland / Polders / Delta",
    climate: "Oceanic Cfb",
    biodiversity: "Lowland Peat Bog, Dune & River Delta",
    destinations: [
      {
        id: "keukenhof-gardens",
        name: "Keukenhof Gardens",
        location: "Lisse, South Holland",
        category: "Gardens",
        heroImage: "https://source.unsplash.com/3840x2160/?keukenhof,tulips,netherlands,flowers,spring",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?keukenhof,tulip-fields,colourful,rows,netherlands",
          "https://source.unsplash.com/1200x1600/?keukenhof,park,daffodils,pathway,bloom"
        ],
        description: "The world's largest flower garden — 32 hectares of seven million tulips, daffodils, and hyacinths blooming for eight weeks each spring.",
        longDescription: "Keukenhof (Kitchen Garden) occupies the wooded estate of a 15th-century castle and has been the world's premier flower garden since 1950, when a group of bulb growers established it to showcase Dutch flower-growing expertise to an international audience. Each year 30 bulb suppliers plant seven million bulbs across 32 hectares of landscaped gardens, pathways, and glasshouses, creating an ever-changing carpet of colour over the eight-week season from late March to mid-May.\n\nThe garden is visited by over 1.5 million people during its brief spring season, making it one of the most visited tourist sites in Europe. Surrounding the garden, the Bollenstreek (Bulb District) stretches for 30 kilometres between Haarlem and Leiden, its flat agricultural fields striped with commercial tulip rows in every conceivable colour.",
        details: {
          "Area": "32 Hectares",
          "Bulbs Planted": "7 Million per Year",
          "Season": "Late March–Mid May (8 Weeks)",
          "Annual Visitors": "~1.5 Million",
          "Founded": "1950"
        },
        hours: "08:00 — 19:30 (season only)",
        price: "€22.50",
        coordinates: "52.2699° N, 4.5469° E",
        tip: "Buy tickets online well in advance — the car park sells out early too. The surrounding Bollenstreek tulip fields (free, accessed by bicycle) are as spectacular as the garden itself. Rent a bike from Lisse station and cycle the fields at dawn before Keukenhof opens."
      },
      {
        id: "kinderdijk-windmills",
        name: "Kinderdijk Windmills",
        location: "South Holland, Netherlands",
        category: "UNESCO Industrial Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?kinderdijk,windmills,netherlands,water,reflection",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?kinderdijk,windmill,canal,evening,light",
          "https://source.unsplash.com/1200x1600/?kinderdijk,windmills-row,polder,netherlands"
        ],
        description: "Nineteen 18th-century windmills standing in two rows beside a canal — the most concentrated windmill site in the world.",
        longDescription: "The 19 windmills of Kinderdijk were built between 1738 and 1740 to drain the Alblasserwaard polder, a large area of reclaimed land 3 metres below sea level, by pumping water from the polders into the River Noord and ultimately to the sea. They represent the pinnacle of Dutch hydraulic engineering and the ingenious human response to the perpetual challenge of living below sea level in a river delta prone to catastrophic flooding.\n\nThe mills stand in two parallel rows beside a canal stretching into the distance, their reflection in the still water creating an iconic Dutch landscape image. Four of the mills are open to visit, including one where a miller's family lived on the working floor — a cramped, fascinating existence in a constantly rotating wooden machine. On Saturday evenings in July and August, all mills are set in motion simultaneously at sunset.",
        details: {
          "Mills Built": "1738–1740",
          "Number of Mills": "19",
          "Purpose": "Draining the Alblasserwaard Polder",
          "Polder Depth": "3 Metres Below Sea Level",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 17:30 daily (Mills open to visit)",
        price: "€12.50",
        coordinates: "51.8851° N, 4.6318° E",
        tip: "Arrive by water taxi from Rotterdam for the full Dutch experience. Visit on a Saturday evening in July–August when all mills turn simultaneously at sunset. Hire a bicycle at the site to explore all 19 mills along the towpath."
      },
      {
        id: "anne-frank-house",
        name: "Anne Frank House",
        location: "Amsterdam, North Holland",
        category: "Historic Memorial",
        heroImage: "https://source.unsplash.com/3840x2160/?anne-frank-house,amsterdam,canal,netherlands,history",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?amsterdam,canal-house,anne-frank,facade,heritage",
          "https://source.unsplash.com/1200x1600/?amsterdam,wartime,jewish,memorial,history"
        ],
        description: "The secret annex where Anne Frank and her family hid for 761 days during the Nazi occupation of Amsterdam.",
        longDescription: "At Prinsengracht 263, behind a revolving bookcase concealing a hidden door, Anne Frank and seven other Jewish people hid in the 'Secret Annex' from July 1942 until their betrayal and arrest in August 1944. During this period the 13-year-old Anne kept the diary that would become one of the most widely read and translated books in history, a uniquely personal testimony to the horror of the Holocaust from the perspective of one of its youngest victims.\n\nThe house is now a museum preserving the annex as Anne described it, emptied of furniture on the orders of the Nazi authorities but with fragments of Anne's movie-star and Dutch royal family magazine cut-outs still visible on the walls of her tiny room. The experience is quietly devastating, the narrow rooms and blocked windows making the 761-day confinement viscerally imaginable.",
        details: {
          "Hidden Period": "6 July 1942 – 4 August 1944",
          "Days in Hiding": "761",
          "Persons Hidden": "8",
          "Anne's Age (entry)": "13 Years",
          "Diary Published": "1947 (by Otto Frank)"
        },
        hours: "09:00 — 22:00 (Mon–Fri) | 09:00 — 22:00 (Sat–Sun)",
        price: "€16.00",
        coordinates: "52.3752° N, 4.8840° E",
        tip: "Book tickets online weeks in advance — sold exclusively online with no walk-in access. Evening visits (after 18:00) are less crowded. The museum now includes interactive digital elements alongside the preserved annex."
      },
      {
        id: "rijksmuseum",
        name: "Rijksmuseum",
        location: "Amsterdam, North Holland",
        category: "World-Class Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?rijksmuseum,amsterdam,netherlands,museum,gothic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rijksmuseum,night-watch,rembrandt,painting,gallery",
          "https://source.unsplash.com/1200x1600/?rijksmuseum,interior,atrium,architecture,amsterdam"
        ],
        description: "The Netherlands' premier museum of art and history, housing masterpieces of the Dutch Golden Age.",
        longDescription: "The Rijksmuseum contains the world's greatest collection of Dutch Golden Age paintings, including Rembrandt van Rijn's 'The Night Watch' (1642) — at 363 x 437 cm the largest painting in the museum's collection and arguably the most celebrated Dutch painting ever made — as well as 34 other Rembrandts, 21 Vermeers including 'The Milkmaid' and 'Woman Reading a Letter', and works by Frans Hals, Jan Steen, and Pieter de Hooch.\n\nThe building itself — a monumental neo-Gothic and neo-Renaissance red-brick palace by Pierre Cuypers, opened in 1885 — was extensively renovated between 2003 and 2013, reopening with its magnificent Entrance Hall and Gallery of Honour restored to their original glory. The museum's collection of 8,000 objects on display spans the full breadth of Dutch and Flemish cultural history from the Middle Ages to the 20th century.",
        details: {
          "Opened": "1885",
          "Star Work": "The Night Watch, Rembrandt (1642)",
          "Rembrandts": "34",
          "Vermeers": "21",
          "Annual Visitors": "~2.5 Million"
        },
        hours: "09:00 — 17:00 daily",
        price: "€22.50",
        coordinates: "52.3600° N, 4.8852° E",
        tip: "Go straight to The Night Watch on arrival (Room 2.22) before crowds gather. Allow 3 hours minimum. The Museumplein square outside is free and great for cycling, picnics, and the I Amsterdam letters. Pre-book timed entry online."
      },
      {
        id: "amsterdam-canals",
        name: "Amsterdam Canal Ring",
        location: "Amsterdam, North Holland",
        category: "UNESCO Cultural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?amsterdam,canals,canal-houses,netherlands,boats",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?amsterdam,canal,bridge,evening,lights,reflection",
          "https://source.unsplash.com/1200x1600/?amsterdam,houseboats,jordaan,canal,bicycles"
        ],
        description: "The 17th-century concentric canal ring that transformed Amsterdam into the wealthiest city in the world.",
        longDescription: "Amsterdam's Canal Ring was constructed during the Dutch Golden Age (1610–1670) as part of a planned expansion of the city, creating a semicircular system of concentric canals — the Herengracht (Gentleman's Canal), Keizersgracht (Emperor's Canal), and Prinsengracht (Prince's Canal) — lined with more than 1,500 monumental 17th-century merchants' houses built for the trading elite of the Dutch East India Company world. The narrow-fronted houses, typically five to seven storeys tall with distinctive gabled façades, lean slightly forward to allow goods to be hoisted up to the upper-floor storage warehouses.\n\nToday the canal ring is a UNESCO World Heritage Site and a living city neighbourhood where 2,500 houseboats are moored in the canals alongside tourist canal boats, kayaks, and the bicycles of the 900,000 Amsterdammers who cycle 2 million kilometres per day through the city.",
        details: {
          "Constructed": "1610–1670",
          "Canal Length": "100 km total",
          "Golden Age Houses": "~1,550",
          "Houseboats": "~2,500",
          "UNESCO Status": "World Heritage Site 2010"
        },
        hours: "Always accessible",
        price: "Free | Canal boat tour from €15",
        coordinates: "52.3676° N, 4.9041° E",
        tip: "Rent a bicycle and cycle the canal ring early on a Sunday morning before the crowds. A canal boat tour by dusk is magical. The Jordaan neighbourhood (west of Prinsengracht) has the best brown cafés (bruine kroegen) for local beer."
      },
      {
        id: "giethoorn-village",
        name: "Giethoorn",
        location: "Overijssel, Northeast Netherlands",
        category: "Canal Village",
        heroImage: "https://source.unsplash.com/3840x2160/?giethoorn,netherlands,canals,thatched-roof,village",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?giethoorn,boat,canal,thatched,farm-house",
          "https://source.unsplash.com/1200x1600/?giethoorn,punting,whisper-boat,reflection,flowers"
        ],
        description: "The 'Venice of the Netherlands' — a village of thatched farmhouses accessible only by boat on 8 kilometres of canals.",
        longDescription: "Giethoorn was founded around 1230 and developed organically along peat-cutting canals with no roads connecting the island farmsteads — only the canals and 176 wooden bridges. Today the village of 2,700 residents retains this character almost entirely, its thatched-roof farmhouses rising from the water's edge, connected by narrow cycle paths and footbridges but principally navigated by the flat-bottomed 'whisper boats' (fluisterbootjes) rented by visitors.\n\nThe 8 kilometres of canals thread through the nature reserve of Weerribben-Wieden, the largest reed marsh in northwest Europe, where bitterns, marsh harriers, and kingfishers inhabit an almost unchanged medieval wetland landscape. The entire village moves at a whisper-boat pace — there are no cars and no noise except water lapping and birds singing.",
        details: {
          "Founded": "~1230",
          "Canal Length": "8 km",
          "Bridges": "176",
          "Nature Reserve": "Weerribben-Wieden National Park",
          "Transport": "Whisper Boats & Bicycles Only"
        },
        hours: "Always accessible",
        price: "Free | Whisper boat rental from €12/hour",
        coordinates: "52.7228° N, 6.0742° E",
        tip: "Visit midweek to avoid weekend crowds. Rent a whisper boat for 2 hours to explore at your own pace. Combine with the Weerribben-Wieden nature reserve cycle route. Stay overnight in one of the B&Bs for the magical dusk experience."
      }
    ]
  },

  "czech-republic": {
    id: "czech-republic",
    name: "Czech Republic",
    region: "Central Europe",
    coordinates: "49.8175° N, 15.4730° E",
    lat: 49.8175,
    lng: 15.4730,
    heroImage: "https://source.unsplash.com/3840x2160/?prague,charles-bridge,czech-republic,old-town,travel",
    description: "Bohemia and Moravia contain some of Central Europe's most beautifully preserved medieval and Baroque architecture, from the Gothic spires of Prague to the Renaissance squares of Telč and the castle-town of Český Krumlov. Czech beer, ranked among the world's best, flows freely in ancient cellar pubs.",
    terrain: "Bohemian Massif / Moravian Lowlands",
    climate: "Continental Dfb",
    biodiversity: "Temperate Mixed Forest & River Meadow",
    destinations: [
      {
        id: "charles-bridge",
        name: "Charles Bridge",
        location: "Prague, Bohemia",
        category: "Historic Bridge",
        heroImage: "https://source.unsplash.com/3840x2160/?charles-bridge,prague,czech-republic,statues,gothic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?charles-bridge,sunrise,fog,mist,prague",
          "https://source.unsplash.com/1200x1600/?charles-bridge,statues,saints,baroque,detail"
        ],
        description: "Prague's medieval stone bridge over the Vltava, lined with 30 Baroque statues of saints and crowned by Gothic towers.",
        longDescription: "Charles Bridge (Karlův most) was commissioned by King Charles IV of Bohemia in 1357 and completed around 1402, replacing the earlier Judith Bridge swept away by a flood in 1342. The 516-metre bridge of sandstone arches connected the Old Town with Malá Strana (Lesser Town) and Prague Castle, and for centuries was the only crossing of the Vltava in the city. The 30 Baroque statues of saints — mostly added in the early 18th century — include the famous gilded statue of St John of Nepomuk, touched by passing pilgrims for luck since 1683.\n\nThe bridge is best experienced at dawn when it is nearly empty and the Gothic towers glow amber in the early light, the castle rising above the morning mist on the hill opposite. By mid-morning it fills with street musicians, artists, and tourists creating a festive atmosphere that Kafka, who was born 200 metres away, would barely recognise.",
        details: {
          "Construction": "1357–1402",
          "Length": "516 Metres",
          "Arches": "16",
          "Statues": "30 Baroque Saints",
          "Commissioned By": "King Charles IV"
        },
        hours: "Open 24 hours",
        price: "Free | Tower entry CZK 150",
        coordinates: "50.0865° N, 14.4114° E",
        tip: "Arrive at 06:00–07:00 for a virtually empty bridge in magical light. Climb the Old Town Bridge Tower for the best elevated view of the bridge and castle. The bridge is most atmospheric in fog and at night when lit up."
      },
      {
        id: "prague-castle",
        name: "Prague Castle",
        location: "Prague, Bohemia",
        category: "Castle Complex",
        heroImage: "https://source.unsplash.com/3840x2160/?prague-castle,hradcany,czech-republic,gothic,towers",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?prague-castle,st-vitus-cathedral,interior,stained-glass",
          "https://source.unsplash.com/1200x1600/?prague,castle-district,golden-lane,cobblestones"
        ],
        description: "The world's largest ancient castle complex — a hilltop city of palaces, cathedrals, and galleries spanning 1,000 years of history.",
        longDescription: "Prague Castle (Pražský hrad) is the largest coherent castle complex in the world by area, covering 70,000 square metres of interconnected courts, churches, and palaces on a promontory above the Vltava. Continuously occupied since the 9th century by Bohemian rulers, Habsburg emperors, and presidents of the Czech Republic (it remains the seat of the Czech head of state), the castle complex contains within its walls the magnificent Gothic Cathedral of St Vitus — begun 1344, completed 1929 — whose stained-glass windows include a masterpiece by Alphonse Mucha.\n\nOld Royal Palace, St George's Basilica (Romanesque, 10th century), the Golden Lane (a row of tiny artisans' houses built into the castle wall, inhabited for a time by Franz Kafka), and panoramic gardens combine to make a visit here a substantial half-day at minimum.",
        details: {
          "Area": "70,000 m² (World's Largest)",
          "Occupied Since": "9th Century",
          "St Vitus Cathedral": "Begun 1344, Completed 1929",
          "Famous Resident": "Franz Kafka (Golden Lane)",
          "Current Use": "Presidential Seat"
        },
        hours: "Castle: 06:00–22:00 | Monuments: 09:00–17:00 (Nov–Mar) / 09:00–18:00 (Apr–Oct)",
        price: "Circuit A: CZK 400",
        coordinates: "50.0902° N, 14.4016° E",
        tip: "Visit St Vitus Cathedral first (most dramatic). Buy the full Circuit A ticket. Evening light over the city from the castle terrace gardens is unmissable. Changing of the Guard happens at noon with fanfare."
      },
      {
        id: "cesky-krumlov",
        name: "Český Krumlov",
        location: "South Bohemia, Czech Republic",
        category: "UNESCO Medieval Town",
        heroImage: "https://source.unsplash.com/3840x2160/?cesky-krumlov,castle,czech-republic,medieval,river",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cesky-krumlov,old-town,rooftops,vltava,meander",
          "https://source.unsplash.com/1200x1600/?cesky-krumlov,castle-tower,baroque,theatre"
        ],
        description: "A UNESCO-listed fairy-tale town enclosed by a dramatic Vltava meander, dominated by the Czech Republic's second-largest castle.",
        longDescription: "Český Krumlov is one of the best-preserved medieval and Baroque towns in Central Europe, its historic centre sitting on a neck of rock almost entirely surrounded by a dramatic S-bend of the upper Vltava river. The castle complex — second in size only to Prague Castle in Bohemia — rises on a high promontory above the town, its round tower (from which the city takes its name) and five castle courts spanning six centuries of construction from the 13th to the 18th.\n\nThe castle contains one of the best-preserved Baroque theatres in Europe (1681–1683), complete with original stage machinery, costumes, and painted scenery still in working order. The town below is a labyrinth of arched passages, Renaissance facades, and Baroque fountains, the whole ensemble inscribed as a UNESCO World Heritage Site in 1992.",
        details: {
          "Castle Founded": "13th Century",
          "UNESCO Status": "World Heritage Site 1992",
          "Baroque Theatre": "1681 (Original Stage Machinery)",
          "Town Population": "~13,000",
          "River": "Upper Vltava (S-bend meander)"
        },
        hours: "Castle: 09:00–18:00 (Apr–Oct) | Closed Nov–Mar",
        price: "Castle Tour CZK 320",
        coordinates: "48.8127° N, 14.3175° E",
        tip: "Stay overnight — day-trippers dominate 10:00–16:00. Kayak or raft the Vltava from Vyšší Brod through town (5-hour journey). Book castle theatre performances in advance — rare but extraordinary. Explore the castle gardens for a free alternative to the paid tour."
      },
      {
        id: "old-town-square",
        name: "Old Town Square & Astronomical Clock",
        location: "Prague, Bohemia",
        category: "Historic Square",
        heroImage: "https://source.unsplash.com/3840x2160/?prague,old-town-square,astronomical-clock,czech,gothic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?prague,orloj,astronomical-clock,detail,medieval",
          "https://source.unsplash.com/1200x1600/?prague,old-town-square,night,christmas-market,lights"
        ],
        description: "Prague's medieval heart — a square of Gothic, Baroque, and Romanesque facades centred on the world's oldest functioning astronomical clock.",
        longDescription: "Prague's Old Town Square (Staroměstské náměstí) has been the centre of Prague's public life since the 12th century, when it served as the main market of Bohemia and the site of public executions and proclamations. The medieval square is ringed by the Kinský Palace (Rococo), the Church of Our Lady Before Týn (Gothic, 14th century) with its twin spires rising 80 metres, the Romanesque St Nicholas Church, and the Renaissance Ungelt mansion complex.\n\nThe Old Town Hall's Astronomical Clock (Orloj, 1410) is the world's oldest working astronomical clock, performing a mechanical procession of the 12 Apostles emerging from two small doors every hour. The lower clock face is a calendar showing the months with zodiac signs and scenes of rural life painted by Josef Mánes in the 19th century.",
        details: {
          "Market Founded": "12th Century",
          "Orloj (Clock) Built": "1410 (Oldest Working Astronomical Clock)",
          "Týn Church Towers": "80 Metres",
          "Annual Event": "Christmas Market (Advent)",
          "Nearby": "Jewish Quarter (Josefov)"
        },
        hours: "Square always open | Clock Tower 09:00–21:00",
        price: "Square Free | Clock Tower CZK 250",
        coordinates: "50.0875° N, 14.4213° E",
        tip: "Watch the clock performance at any hour but the crowd disperses almost immediately after — don't stress about being perfect. The adjacent Týn church interior is dramatically Gothic and usually less crowded. The Jewish Quarter (Josefov) is 5 minutes' walk north."
      },
      {
        id: "karlovy-vary",
        name: "Karlovy Vary",
        location: "West Bohemia, Czech Republic",
        category: "Spa Town",
        heroImage: "https://source.unsplash.com/3840x2160/?karlovy-vary,spa,colonnade,czech-republic,springs",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?karlovy-vary,colonnade,art-nouveau,mineral-spring",
          "https://source.unsplash.com/1200x1600/?karlovy-vary,valley,architecture,czech,colorful"
        ],
        description: "Central Europe's most celebrated spa town — a valley of Neo-Baroque colonnades fed by 13 natural hot mineral springs.",
        longDescription: "Karlovy Vary (Karlsbad) was allegedly founded by Emperor Charles IV after he discovered its hot springs while hunting in 1358, and by the 19th century had become the most fashionable spa resort in the world, attracting Beethoven, Goethe, Schiller, Chopin, Brahms, Kafka, Marx, and Peter the Great to its elegant colonnaded promenades. Today the town's 13 thermal springs (temperatures between 30°C and 73°C) feed five elegant colonnades where visitors stroll sipping mineral water from traditional spouted drinking cups (lázeňský pohár).\n\nThe valley-enclosed town retains its Belle Époque character almost entirely, its hillsides of yellow and ochre Neo-Baroque hotels and treatment houses mirrored in the Teplá river below. The local products — Becherovka herbal liqueur and the wafer-thin spa oblátky — are tasted at every stop.",
        details: {
          "Legend Founded": "1358 (Charles IV)",
          "Springs": "13 (30°C–73°C)",
          "Colonnades": "5",
          "Famous Visitors": "Beethoven, Goethe, Chopin",
          "Local Drink": "Becherovka Herbal Liqueur"
        },
        hours: "Colonnades: always accessible | Springs: 06:00–19:00",
        price: "Free | Drinking cup CZK 80",
        coordinates: "50.2319° N, 12.8714° E",
        tip: "Buy a lázeňský pohár (spouted drinking cup) and sample all 13 springs — they vary dramatically in taste and temperature. The funicular to Diana Viewpoint offers the best town panorama. The International Film Festival (early July) draws global directors."
      },
      {
        id: "telc-historic-center",
        name: "Telč Historic Centre",
        location: "Vysočina Region, Czech Republic",
        category: "UNESCO Historic Town",
        heroImage: "https://source.unsplash.com/3840x2160/?telc,czech-republic,renaissance,square,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?telc,arcaded-houses,square,renaissance,facades",
          "https://source.unsplash.com/1200x1600/?telc,castle,ponds,czech,aerial"
        ],
        description: "A Renaissance gem hidden in the Moravian Highlands — a perfectly preserved arcaded town square declared a UNESCO World Heritage Site.",
        longDescription: "Telč is one of the best-preserved Renaissance towns in Central Europe, its main square (Náměstí Zachariáše z Hradce) lined with arcaded townhouses built in a unified Renaissance style after a fire destroyed the medieval town in 1530. The rebuilding was carried out under the enlightened patronage of nobleman Zacharias of Hradec, who invited Italian architects to create an ensemble of graceful arcades, gabled roofs, and painted facades that has remained virtually unchanged for 500 years.\n\nThe town is ringed by artificial fish ponds — Starý Pond and Ulický Pond — creating an island-like setting that amplifies its fairy-tale character. The Telč Castle, transformed in the same period into a late-Gothic and Renaissance palace with exceptional interiors, overlooks the square from its northern end. The entire historic core was inscribed as a UNESCO World Heritage Site in 1992.",
        details: {
          "Square Rebuilt": "After 1530 Fire",
          "Style": "Unified Renaissance",
          "Patron": "Zacharias of Hradec",
          "UNESCO Status": "World Heritage Site 1992",
          "Water Setting": "Surrounded by Artificial Fish Ponds"
        },
        hours: "Square always open | Castle 09:00–17:00 (seasonal)",
        price: "Square Free | Castle Tour CZK 200",
        coordinates: "49.1830° N, 15.4533° E",
        tip: "Telč is 2 hours from Prague by car — combine with a night's stay to experience the square in the morning light. The castle chapel has extraordinary painted ceilings. Visit on a weekday to have the square almost to yourself."
      }
    ]
  },

  "hungary": {
    id: "hungary",
    name: "Hungary",
    region: "Central Europe",
    coordinates: "47.1625° N, 19.5033° E",
    lat: 47.1625,
    lng: 19.5033,
    heroImage: "https://source.unsplash.com/3840x2160/?budapest,hungary,parliament,danube,travel",
    description: "Budapest stands among Europe's most magnificent capitals, its neo-Gothic parliament and thermal bath culture reflecting Hungary's rich and turbulent history at the heart of the former Habsburg Empire. Beyond the capital, the Great Hungarian Plain, Lake Balaton, and the wine country of Eger and Tokaj beckon.",
    terrain: "Great Plain / Northern Highlands / Danube Bend",
    climate: "Continental Dfb",
    biodiversity: "Pannonian Steppe & Danubian Floodplain",
    destinations: [
      {
        id: "hungarian-parliament",
        name: "Hungarian Parliament",
        location: "Budapest, Hungary",
        category: "Architectural Landmark",
        heroImage: "https://source.unsplash.com/3840x2160/?hungarian-parliament,budapest,danube,night,gothic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?budapest,parliament,sunset,reflection,danube",
          "https://source.unsplash.com/1200x1600/?hungarian-parliament,interior,crown-jewels,dome"
        ],
        description: "The grandest parliament building in the world by floor area — a Neo-Gothic masterpiece mirrored in the Danube.",
        longDescription: "The Hungarian Parliament Building (Országház) was built between 1885 and 1904 to celebrate the millennium of the Magyar conquest of the Carpathian Basin, designed by Imre Steindl in the English Gothic Revival style. It is the third largest parliament building in the world by floor area (18,000 m²), with 691 rooms, 29 staircases, and a central dome rising 96 metres — the same height as St Stephen's Basilica, both representing the 896 AD date of the Magyar arrival.\n\nThe building is best viewed from the Buda side of the Danube, where its 268-metre façade reflected in the river creates one of Europe's most celebrated cityscape panoramas, especially dramatic at night when the building is illuminated in gold. The interior tours reach the magnificent domed Main Staircase, the National Assembly Hall with its Gothic gilded vaulting, and the secure room displaying Hungary's Crown Jewels — the Holy Crown of St Stephen (c.1000 AD).",
        details: {
          "Built": "1885–1904",
          "Architect": "Imre Steindl",
          "Floor Area": "18,000 m² (3rd Largest)",
          "Dome Height": "96 Metres",
          "Crown": "Holy Crown of St Stephen (~1000 AD)"
        },
        hours: "Tours: 08:00–18:00 (Apr–Oct) | 08:00–16:00 (Nov–Mar)",
        price: "€14.00 (EU citizens free)",
        coordinates: "47.5072° N, 19.0453° E",
        tip: "Book the English-language guided tour online — the interior is only accessible with a guide. Photograph the façade from Batthyány Square on the Buda bank for the classic reflection shot. Sunset and night visits are the most photogenic."
      },
      {
        id: "fishermans-bastion",
        name: "Fisherman's Bastion",
        location: "Budapest, Buda",
        category: "Historic Viewpoint",
        heroImage: "https://source.unsplash.com/3840x2160/?fishermans-bastion,budapest,hungary,white-towers,buda",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?fishermans-bastion,budapest,panorama,parliament,sunrise",
          "https://source.unsplash.com/1200x1600/?fishermans-bastion,turrets,neo-romanesque,detail"
        ],
        description: "A Neo-Romanesque terrace of seven white towers offering Budapest's most celebrated panorama over the Danube and Parliament.",
        longDescription: "The Halászbástya (Fisherman's Bastion) was built between 1895 and 1902 as a purely decorative terrace on the Buda Castle Hill overlooking the Danube, designed by Frigyes Schulek in the Neo-Romanesque style to complement the adjacent Matthias Church. Its seven conical towers represent the seven Magyar chieftains who led their tribes to the Carpathian Basin in 895 AD. The name derives from the fishermen's guild that defended this section of the medieval town walls.\n\nThe view from the bastion's upper terrace — across the gleaming Danube, the Pest embankment, the chain bridge, and the floodlit Parliament — is considered one of the finest urban panoramas in Europe, particularly at sunrise when the Parliament building glows gold in the early light. The equestrian statue of Stephen I (St Stephen, Hungary's first king) stands between the bastion and Matthias Church.",
        details: {
          "Built": "1895–1902",
          "Architect": "Frigyes Schulek",
          "Towers": "7 (Symbolising 7 Magyar Tribes)",
          "Adjacent": "Matthias Church (14th Century)",
          "Best Time": "Sunrise (Parliament Illuminated)"
        },
        hours: "09:00 — 23:00 daily (upper terraces ticketed)",
        price: "Lower level free | Upper terraces €2.00",
        coordinates: "47.5018° N, 19.0344° E",
        tip: "Arrive at 06:30 for the most magical sunrise panorama with almost nobody else there. The upper terraces are worth the small fee. Combine with Matthias Church (interior) and the Castle District for a full Buda morning."
      },
      {
        id: "budapest-thermal-baths",
        name: "Budapest Thermal Baths",
        location: "Budapest, Hungary",
        category: "Thermal Spa",
        heroImage: "https://source.unsplash.com/3840x2160/?budapest,szechenyi-baths,thermal,yellow,hungary",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?szechenyi,bath,steam,chess,thermal-pool",
          "https://source.unsplash.com/1200x1600/?gellert-bath,budapest,art-nouveau,interior,mosaic"
        ],
        description: "Budapest sits on 125 thermal springs — its Neo-Baroque and Art Nouveau bathhouses are a defining feature of city life.",
        longDescription: "Budapest is unique in Europe for having more than 125 natural thermal springs within its city limits, a geological gift of the volcanic activity along the Buda Hills fault line that has been exploited since Roman times. The city's most iconic bathhouse, the Széchenyi (1913), is a grand Neo-Baroque yellow palace in City Park whose outdoor pools steam in all seasons — even in snowfall — and whose chess-playing regulars floating on rubber rings have become an image of Budapest worldwide.\n\nThe Gellért Baths (1918), with their exquisite Art Nouveau mosaic interiors, ornate main pool, and outdoor wave pool, are arguably the most beautiful bathhouse interior in Europe. Other notable baths include the 16th-century Turkish Rudas, Kiraly, and Veli Bej baths — domed Ottoman hammams fed by the same hot springs since the Turkish occupation of Hungary (1541–1686).",
        details: {
          "Natural Springs": "125 within city limits",
          "Széchenyi Built": "1913 (Neo-Baroque)",
          "Gellért Built": "1918 (Art Nouveau)",
          "Turkish Baths": "16th Century (Ottoman Period)",
          "Temperature Range": "21°C–78°C"
        },
        hours: "06:00 — 22:00 daily (Széchenyi)",
        price: "From HUF 8,600 (~€22.00)",
        coordinates: "47.5185° N, 19.0830° E",
        tip: "Széchenyi is the most atmospheric (outdoor pools, social atmosphere). Gellért is the most beautiful architecturally. Book in advance for weekend visits. Bring flip-flops. Rent a locker and bath sheet on arrival."
      },
      {
        id: "lake-balaton",
        name: "Lake Balaton",
        location: "Transdanubia, Hungary",
        category: "Lake Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?lake-balaton,hungary,summer,wine,beach",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?balaton,badacsony,vineyard,lake,volcano",
          "https://source.unsplash.com/1200x1600/?lake-balaton,sunset,reed,fishing,reflect"
        ],
        description: "Central Europe's largest lake — a 77-kilometre freshwater sea ringed by volcanic hills, wineries, and spa resorts.",
        longDescription: "Lake Balaton stretches 77 kilometres across the Transdanubian region of Hungary, covering 594 square kilometres with an average depth of just 3.2 metres — making it extremely warm in summer (often reaching 26°C), shallow enough for children to wade far from shore, and prone to dramatic storms that turn its normally placid surface to chaos within minutes. Hungarians call it the 'Hungarian Sea' — for many Budapesters, Balaton is synonymous with summer.\n\nThe northern shore is the wine shore, with the volcanic basalt stump of Badacsony rising from the lake's edge and its Olaszrizling and Kéknyelű vines producing distinctive mineral white wines. The southern shore is flatter and more resort-oriented, with the lido town of Siófok as its capital. The historic town of Keszthely at the western tip contains the magnificent Festetics Palace (18th century).",
        details: {
          "Length": "77 km",
          "Area": "594 km²",
          "Average Depth": "3.2 Metres",
          "Max Summer Temp": "26°C",
          "Northern Shore": "Wine Country (Badacsony)"
        },
        hours: "Always accessible",
        price: "Beach entry from HUF 1,500",
        coordinates: "46.8382° N, 17.7270° E",
        tip: "Stay on the northern (wine) shore — Badacsony and Tihany are charming and less commercialised than the south. The Tihany peninsula with its 11th-century abbey is the most scenic spot on the lake. Visit in June or September rather than peak July–August."
      },
      {
        id: "eger-castle",
        name: "Eger Castle & Wine Region",
        location: "Eger, Northern Hungary",
        category: "Historic Castle & Wine",
        heroImage: "https://source.unsplash.com/3840x2160/?eger,castle,hungary,baroque,wine",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?eger,castle,walls,town,panorama",
          "https://source.unsplash.com/1200x1600/?eger,valley-of-beautiful-women,wine-cellar,barrels"
        ],
        description: "A magnificent Baroque city with a castle that repelled the Ottoman siege of 1552 and the legendary Bull's Blood wine region.",
        longDescription: "Eger is the most attractive Baroque city in Hungary outside Budapest, its hilltop castle, cathedral, minaret (the northernmost Ottoman minaret surviving in Europe), and pastel-coloured Baroque palaces all within walking distance of each other. The castle is famous for the 1552 Siege of Eger, when 2,000 Hungarian defenders under Captain István Dobó held the fortress against a 40,000-strong Ottoman army for 38 days — a triumph celebrated in Géza Gárdonyi's novel 'Eclipse of the Crescent Moon.'\n\nThe Egri Bikavér (Bull's Blood) wine — a robust red blend named allegedly from the 1552 siege — is Hungary's most famous wine appellation, produced from Kadarka, Kékfrankos, and Merlot grapes in the surrounding hills. The wine cellar street at Szépasszony-völgy (Valley of Beautiful Women) offers dozens of dimly lit underground cellars for tasting.",
        details: {
          "Castle Origin": "13th Century",
          "Famous Siege": "1552 (vs. Ottoman Army)",
          "Northernmost Ottoman Minaret": "In Eger (1596)",
          "Local Wine": "Egri Bikavér (Bull's Blood)",
          "Wine Cellar Street": "Szépasszony-völgy"
        },
        hours: "Castle 08:00–22:00 | Wine cellars from 10:00",
        price: "Castle HUF 1,800 | Wine tasting HUF 2,000",
        coordinates: "47.9035° N, 20.3764° E",
        tip: "Visit the Valley of Beautiful Women in the evening for a convivial wine tasting experience in candlelit cellars. Climb the castle for panoramic views. Combine with a soak in Eger's thermal baths for the perfect Hungarian day."
      },
      {
        id: "pecs-cathedral",
        name: "Pécs & Early Christian Necropolis",
        location: "Pécs, Southern Hungary",
        category: "UNESCO Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?pecs,cathedral,hungary,four-towers,architecture",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?pecs,cathedral,interior,romanesque",
          "https://source.unsplash.com/1200x1600/?pecs,gazi-kasim-mosque,converted,hungary,minaret"
        ],
        description: "Hungary's cultural southern capital — a city of four-towered Romanesque cathedral, Ottoman mosques, and 4th-century Christian catacombs.",
        longDescription: "Pécs (Roman Sopianae) has been continuously inhabited for over 2,000 years and contains the most remarkable concentration of historical monuments in provincial Hungary. Its four-towered Romanesque Cathedral of St Peter — rebuilt multiple times but retaining its 11th-century foundations — dominates the city centre, while the former Ottoman Gázi Kászim Mosque (1580), now a Christian church but retaining its full Arabic mihrab and interior calligraphy, testifies to a century and a half of Ottoman rule (1543–1686).\n\nBeneath the city, the UNESCO-listed Early Christian Necropolis contains elaborately frescoed 4th-century Roman burial chambers — the largest surviving Roman mausoleum complex outside Rome and Italy, with painted scenes from the Old and New Testaments in remarkable condition.",
        details: {
          "Roman Name": "Sopianae",
          "Cathedral": "Four Towers (11th Century)",
          "Ottoman Mosque": "1580 (Now Christian Church)",
          "UNESCO Necropolis": "4th-Century Roman Frescoes",
          "Status": "UNESCO World Heritage Site (Necropolis)"
        },
        hours: "Necropolis 10:00–18:00 (Apr–Oct) | Cathedral 09:00–17:00",
        price: "Necropolis HUF 2,600",
        coordinates: "46.0750° N, 18.2250° E",
        tip: "The Early Christian Necropolis is genuinely extraordinary and rarely crowded. Pécs has an excellent dining scene — Hungarian-Mediterranean cuisine influenced by the city's southern location. The Pécs National Theatre building is an Art Nouveau gem."
      }
    ]
  },

  "poland": {
    id: "poland",
    name: "Poland",
    region: "Central Europe",
    coordinates: "51.9194° N, 19.1451° E",
    lat: 51.9194,
    lng: 19.1451,
    heroImage: "https://source.unsplash.com/3840x2160/?krakow,wawel-castle,poland,old-town,travel",
    description: "Poland's turbulent history — of royal grandeur, partition, and 20th-century catastrophe — is woven into its magnificent castles, cobbled old towns, and sombre memorials. From the medieval splendour of Kraków to the primeval Białowieża Forest, Poland offers profound and beautiful travel experiences.",
    terrain: "Northern Plains / Central Lowlands / Tatra Mountains",
    climate: "Continental Dfb",
    biodiversity: "Temperate Deciduous Forest & Primeval Old-Growth",
    destinations: [
      {
        id: "wieliczka-salt-mine",
        name: "Wieliczka Salt Mine",
        location: "Kraków, Lesser Poland",
        category: "UNESCO Industrial Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?wieliczka,salt-mine,poland,underground,chapel",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?wieliczka,st-kinga-chapel,carved-salt,crystal-chandelier",
          "https://source.unsplash.com/1200x1600/?wieliczka,underground-lake,mine,poland,dark"
        ],
        description: "A 700-year-old working salt mine turned underground world of carved chambers, cathedrals, and artwork — all in salt.",
        longDescription: "The Wieliczka Salt Mine has been continuously worked since the 13th century, making it the world's oldest salt mine in continuous operation, and was one of the first UNESCO World Heritage Sites designated in 1978. Descending 135 metres over nine levels and 300 kilometres of passages, the mine contains an extraordinary underground world created over centuries by miners who carved their working environment into art: corridors, chapels, and altars fashioned entirely from the green-grey rock salt, including the magnificent St Kinga's Chapel — a full-size cathedral 54 metres long and 18 metres high with carved relief panels, chandeliers of salt crystals, and larger-than-life statues of Polish saints.\n\nThe underground microclimate at 15°C with high humidity was used as a therapeutic spa for respiratory conditions in the 20th century, and a saline treatment centre still operates in the deeper levels. The standard tourist route covers 3.5 kilometres of passages and chambers.",
        details: {
          "Operating Since": "13th Century",
          "Depth": "135 Metres (9 Levels)",
          "Total Passages": "300 km",
          "St Kinga Chapel": "54 m Long, 18 m High (All Salt)",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 17:00 daily",
        price: "PLN 89.00",
        coordinates: "49.9834° N, 20.0550° E",
        tip: "Book tickets online — the mine sells out on peak days. The tour is entirely underground and guided (no independent access). Bring a light jacket — it is 15°C year-round. The Chapel of St Kinga is genuinely breathtaking."
      },
      {
        id: "wawel-castle",
        name: "Wawel Castle",
        location: "Kraków, Lesser Poland",
        category: "Royal Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?wawel,castle,krakow,poland,royal,cathedral",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?wawel-cathedral,golden-dome,chapel,krakow",
          "https://source.unsplash.com/1200x1600/?wawel,courtyard,renaissance,arcades,poland"
        ],
        description: "Poland's royal seat for five centuries — a hilltop castle and cathedral on the Vistula that houses Poland's crown jewels and royal crypts.",
        longDescription: "Wawel Hill has been the symbolic heart of Poland since the 10th century, and the castle complex of royal chambers, cathedral, and fortifications that crowns it served as the official residence of Polish kings from the 11th century until the capital was moved to Warsaw in 1596. The current Renaissance castle, built under Sigismund I (1507–1548), is considered the finest Renaissance royal residence in northern Europe, its arcaded courtyard inspired by Italian models brought north by the king's Italian queen, Bona Sforza.\n\nThe adjacent Wawel Cathedral is the coronation and burial church of Polish kings and queens — 41 monarchs are interred here — its gilded Sigismund Chapel (1519–1533), modelled on the Florentine Renaissance, considered the most beautiful sacral building in Poland. The Sigismund Bell (1520), Poland's largest historic bell, hangs in the cathedral tower and is rung only on major national occasions.",
        details: {
          "Royal Seat": "10th–16th Century",
          "Current Castle": "Renaissance (1507–1548)",
          "Cathedral Burials": "41 Polish Kings & Queens",
          "Sigismund Chapel": "1519–1533 (Finest Renaissance in Poland)",
          "Crown Jewels": "Royal Treasury"
        },
        hours: "Castle 09:30–17:00 (Tue–Fri) | Cathedral 09:00–17:00",
        price: "State Rooms PLN 35 | Crown Treasury PLN 35",
        coordinates: "50.0540° N, 19.9351° E",
        tip: "Buy separate tickets for State Rooms, Crown Treasury, and Cathedral — each is worthwhile. The Cathedral roof and the Sigismund Bell tower require a separate climb. Arrive at opening to beat tour groups from the salt mine."
      },
      {
        id: "auschwitz-memorial",
        name: "Auschwitz-Birkenau Memorial",
        location: "Oświęcim, Lesser Poland",
        category: "Historic Memorial",
        heroImage: "https://source.unsplash.com/3840x2160/?auschwitz,memorial,poland,holocaust,history",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?auschwitz,entrance-gate,arbeit-macht-frei,historic",
          "https://source.unsplash.com/1200x1600/?birkenau,ruins,chimneys,memorial,landscape"
        ],
        description: "The largest Nazi concentration and extermination camp — a UNESCO World Heritage Site and essential memorial to the Holocaust.",
        longDescription: "Auschwitz-Birkenau was the largest and most lethal of the Nazi concentration and extermination camps, established in occupied Poland in 1940 and expanded progressively until the liberation by Soviet forces on 27 January 1945. At least 1.1 million people — overwhelmingly Jews from across occupied Europe — were murdered here by gassing, shooting, starvation, and forced labour between 1940 and 1944. The twin camps of Auschwitz I (the original camp) and Auschwitz II-Birkenau (the massive extermination complex 3 km away) were designated a UNESCO World Heritage Site in 1979 as a permanent warning to humanity.\n\nThe memorial museum preserves the physical remains of the camps with minimal alteration: the original barracks, crematoria ruins, the 'Arbeit Macht Frei' gate, and the exhibition rooms housing the belongings of victims — mountains of shoes, suitcases, and hair — with an effect that is devastating and irreplaceable.",
        details: {
          "Established": "1940 by Nazi Germany",
          "Victims": "At Least 1.1 Million",
          "Liberation": "27 January 1945 (Soviet Army)",
          "UNESCO Status": "World Heritage Site 1979",
          "Annual Visitors": "~2.3 Million"
        },
        hours: "08:00 — 18:00 (Jun–Aug) | 08:00 — 16:00 (Dec–Feb)",
        price: "Free (guided tour PLN 90)",
        coordinates: "50.0341° N, 19.1784° E",
        tip: "Book a guided tour in advance — they fill months ahead and entry for independent visits requires advance time-slot booking. Allow a full day for both Auschwitz I and Birkenau. The experience demands time, respect, and silence. Lunch in Oświęcim town before or after visiting."
      },
      {
        id: "warsaw-old-town",
        name: "Warsaw Old Town",
        location: "Warsaw, Masovia",
        category: "UNESCO Historic Centre",
        heroImage: "https://source.unsplash.com/3840x2160/?warsaw,old-town,poland,colourful,market-square",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?warsaw,stare-miasto,castle,square,rebuild",
          "https://source.unsplash.com/1200x1600/?warsaw,royal-castle,interior,baroque"
        ],
        description: "A miraculous resurrection — Warsaw's Old Town was entirely rebuilt after being 85% destroyed in World War II, and is now a UNESCO World Heritage Site.",
        longDescription: "Warsaw's historic centre was systematically dynamited to rubble by German forces following the Warsaw Uprising of 1944 — a deliberate act of cultural annihilation intended to erase the Polish capital from history. What makes Warsaw's Old Town unique in the world is that it was rebuilt from 1945 with extraordinary fidelity using pre-war photographs, architectural drawings, and the 18th-century vedute paintings of Bernardo Bellotto, recreating the colour, detail, and character of the original buildings.\n\nThe UNESCO World Heritage Site citation of 1980 recognised this act of collective cultural memory and physical reconstruction as itself an 'outstanding universal value' — the only instance of a historic centre being listed primarily for its rebuilding. The Royal Castle, gutted by the Nazis and rebuilt 1971–1984, houses the Bellotto paintings that were used as blueprints for its own reconstruction — a poignant circularity.",
        details: {
          "Original Construction": "Medieval–18th Century",
          "Destroyed": "1944 (German Forces, post-Uprising)",
          "Rebuilt": "1945–1980",
          "Reconstruction Model": "Bellotto's 18th-century Vedute Paintings",
          "UNESCO Status": "World Heritage Site 1980"
        },
        hours: "Old Town always open | Royal Castle 10:00–18:00",
        price: "Old Town free | Royal Castle PLN 35",
        coordinates: "52.2498° N, 21.0122° E",
        tip: "Visit the Warsaw Rising Museum (separate from Old Town) for essential historical context — it is one of Europe's best historical museums. Walk to Nowy Świat for excellent cafés after the Old Town. The Royal Castle Bellotto paintings should not be missed."
      },
      {
        id: "bialowieza-forest",
        name: "Białowieża Forest",
        location: "Podlaskie, Northeast Poland",
        category: "UNESCO Natural Heritage",
        heroImage: "https://source.unsplash.com/3840x2160/?bialowieza,primeval-forest,poland,trees,ancient",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?bialowieza,european-bison,wisent,forest",
          "https://source.unsplash.com/1200x1600/?bialowieza-forest,old-growth,moss,trees,primeval"
        ],
        description: "The last primeval old-growth forest in Europe, home to the continent's largest land animal — the European bison.",
        longDescription: "The Białowieża Forest straddles the Polish-Belarusian border and is the last remnant of the vast primeval forest that once covered the entire European lowland plain, never having been cleared for agriculture or systematically logged. Some of the oak trees are over 500 years old; the forest floor is layered with deep moss, fallen ancient trunks, and a biodiversity found nowhere else in Central Europe.\n\nThe European bison (żubr) — the continent's heaviest land animal, weighing up to 900 kg — was hunted to extinction in the wild in 1919, with the last individual shot in Białowieża. A captive breeding programme restored the species to the wild in the 1950s, and today around 700 bison roam the forest in Poland alone. Guided tours of the strictly protected core zone are the only way to see the old-growth forest's most ancient sections.",
        details: {
          "Type": "Last Primeval European Lowland Forest",
          "Area (Poland)": "62,500 Hectares",
          "Oldest Trees": "500+ Year Old Oaks",
          "European Bison": "~700 in Polish Forest",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Core Zone: guided tours only | Buffer zone: dawn–dusk",
        price: "Guided tour PLN 120",
        coordinates: "52.7048° N, 23.8616° E",
        tip: "Book a licenced guide for the strict protection zone — independent access is prohibited. The European bison reserve near the village allows guaranteed bison sightings. Spring (May) for wildflowers and autumn (October) for fungi are the best seasons."
      },
      {
        id: "malbork-castle",
        name: "Malbork Castle",
        location: "Pomerania, Northern Poland",
        category: "Medieval Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?malbork,castle,poland,teutonic,brick,medieval",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?malbork,castle,nogat-river,reflection,poland",
          "https://source.unsplash.com/1200x1600/?malbork,interior,grand-master-hall,gothic"
        ],
        description: "The world's largest castle by area — a massive Gothic brick fortress built by the Teutonic Knights in the 13th century.",
        longDescription: "Malbork Castle (Marienburg) was built from 1274 by the Teutonic Knights, a German crusading military order that conquered and Christianised the Baltic Prussian tribes, and served as the Grand Master's seat from 1309 when the order moved its headquarters here from Venice. The castle grew over two centuries into the world's largest fortified Gothic complex by land area (52 hectares), a self-contained city of three interconnected castles — the High, Middle, and Low Castles — all built of distinctive red-orange brick.\n\nPoland acquired Malbork from the Teutonic Knights in 1457 after the Thirteen Years' War, and the castle subsequently served as a residence of Polish kings. Heavily damaged in World War II and painstakingly restored over decades, Malbork is now a UNESCO World Heritage Site whose restored interiors display the finest collection of amber art in the world.",
        details: {
          "Construction Began": "1274",
          "Teutonic Knight HQ": "From 1309",
          "Area": "52 Hectares (World's Largest by Area)",
          "Material": "Gothic Red Brick",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "09:00 — 19:00 (May–Sep) | 10:00 — 15:00 (Oct–Apr)",
        price: "PLN 69.50",
        coordinates: "54.0396° N, 19.0272° E",
        tip: "Audio guides are excellent here — rent one at the gate. Allow 3–4 hours minimum for the full castle. Accessible by direct train from Gdańsk (40 min). Combine with the charming city of Gdańsk for a two-day Pomerania trip."
      }
    ]
  },

  "sweden": {
    id: "sweden",
    name: "Sweden",
    region: "Northern Europe",
    coordinates: "60.1282° N, 18.6435° E",
    lat: 60.1282,
    lng: 18.6435,
    heroImage: "https://source.unsplash.com/3840x2160/?sweden,lapland,aurora,northern-lights,travel",
    description: "Sweden's landscapes range from the cosmopolitan medieval streets of Gamla Stan to the frozen wilderness of Lapland, where the aurora borealis dances above reindeer herds. The country's design culture, progressive values, and extraordinary natural environments make it one of Europe's most rewarding destinations.",
    terrain: "Northern Taiga / Scandinavian Mountains / Baltic Coast",
    climate: "Subarctic Dfc / Oceanic Cfb",
    biodiversity: "Boreal Forest, Tundra & Coastal Archipelago",
    destinations: [
      {
        id: "gamla-stan",
        name: "Gamla Stan",
        location: "Stockholm, Sweden",
        category: "Historic Old Town",
        heroImage: "https://source.unsplash.com/3840x2160/?gamla-stan,stockholm,sweden,old-town,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?gamla-stan,narrow-street,cobblestones,stockholm",
          "https://source.unsplash.com/1200x1600/?stockholm,royal-palace,gamla-stan,sunset"
        ],
        description: "Stockholm's medieval old town — a warren of cobbled alleys and ochre facades on an island at the heart of the city.",
        longDescription: "Gamla Stan (The Old Town) occupies the island of Stadsholmen between Lake Mälaren and the Baltic Sea inlet, and has been Stockholm's historical core since the city was founded in 1252. Its medieval street pattern — narrow lanes radiating from the German Church and the Royal Palace — survives almost intact, with 17th and 18th-century painted facades in terracotta, yellow, and mustard lining alleys barely wide enough for two people to pass.\n\nThe Royal Palace (Kungliga Slottet), with 1,430 rooms the largest royal palace in the world still used for its official functions, dominates the island's northern end, and the daily changing of the guard is one of Stockholm's most-watched ceremonies. The Nobel Museum on Stortorget (the Great Square, site of the Stockholm Bloodbath of 1520) tells the story of every Nobel Prize ever awarded.",
        details: {
          "Founded": "1252",
          "Island": "Stadsholmen",
          "Royal Palace Rooms": "1,430",
          "Famous Square": "Stortorget (Bloodbath 1520)",
          "Nobel Museum": "Stortorget"
        },
        hours: "Old Town always accessible | Palace 10:00–17:00",
        price: "Old Town free | Palace SEK 180",
        coordinates: "59.3251° N, 18.0711° E",
        tip: "Explore the alleys around Mårten Trotzigs gränd (Stockholm's narrowest street at 90 cm) early morning. The view from Riddarholmen across the water to Gamla Stan at golden hour is magnificent. Combine with Djurgården island (Vasa Museum, ABBA Museum) on the same day."
      },
      {
        id: "swedish-lapland-aurora",
        name: "Swedish Lapland & Aurora",
        location: "Lapland, Northern Sweden",
        category: "Arctic Experience",
        heroImage: "https://source.unsplash.com/3840x2160/?swedish-lapland,aurora-borealis,northern-lights,snow,sweden",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?lapland,icehotel,kiruna,sweden,winter",
          "https://source.unsplash.com/1200x1600/?lapland,reindeer,snow,sami,arctic"
        ],
        description: "The Swedish Arctic — a vast wilderness of frozen rivers, dog-sled trails, and the legendary ICEHOTEL under curtains of northern lights.",
        longDescription: "Swedish Lapland stretches above the Arctic Circle in the far north, a wilderness of spruce forests, frozen river valleys, and treeless fells where the Sami people have herded reindeer for thousands of years. In winter the region offers some of Europe's most extraordinary experiences: dog-sledding across frozen lakes, snowmobiling through birch forests, sleeping in a reindeer-skin sleeping bag on an ice bed in the famous ICEHOTEL in Jukkasjärvi (rebuilt from scratch each October from Torne River ice), and scanning the dark sky for the aurora borealis.\n\nAbisko National Park on the shore of Lake Torneträsk is Sweden's premier aurora-viewing location, its position in a rain shadow creating reliably clear skies during the aurora season (September–March). The nearby Aurora Sky Station cable car (900 m) removes most light pollution for unobstructed views.",
        details: {
          "Aurora Season": "September–March",
          "ICEHOTEL": "Jukkasjärvi (rebuilt annually)",
          "Best Aurora Spot": "Abisko National Park",
          "Midnight Sun": "June–July above Arctic Circle",
          "Sami Culture": "Indigenous Arctic Reindeer Herders"
        },
        hours: "Always accessible",
        price: "ICEHOTEL from SEK 3,000/night",
        coordinates: "68.3549° N, 18.8293° E",
        tip: "Book ICEHOTEL in September for the best winter selection. Stay minimum 3 nights to maximise aurora chances. Dog-sledding day trips from Kiruna are bookable locally. The Sami cultural experiences at Nutti Sámi Siida are authentic and moving."
      },
      {
        id: "visby-medieval-town",
        name: "Visby Medieval Town",
        location: "Gotland, Baltic Sea",
        category: "Medieval Walled City",
        heroImage: "https://source.unsplash.com/3840x2160/?visby,gotland,sweden,medieval,walls,roses",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?visby,city-walls,towers,medieval,sweden",
          "https://source.unsplash.com/1200x1600/?visby,cobblestones,roses,old-town,sweden"
        ],
        description: "A perfectly preserved Hanseatic medieval city on the Baltic island of Gotland — the 'City of Roses and Ruins'.",
        longDescription: "Visby was one of the most important trading cities of the medieval Baltic world, a Hanseatic League hub whose merchants grew extraordinarily wealthy in the 12th and 13th centuries from the trade in furs, amber, and herring. The city's 3.5-kilometre circuit of limestone walls (13th–14th century), with 44 towers, is among the best-preserved medieval fortifications in Scandinavia, and within them lie 13 ruined medieval churches and the remarkably intact Cathedral of St Mary.\n\nThe island of Gotland blooms with wild roses in early summer, giving Visby its nickname 'the City of Roses and Ruins'. Every August the town stages the medieval week (Medeltidsveckan), one of Scandinavia's largest historical festivals, when the entire town dresses in medieval costume for a week of tournaments, markets, and fire shows.",
        details: {
          "City Walls": "3.5 km, 44 Towers (13th–14th C.)",
          "Hanseatic Peak": "12th–13th Century",
          "Ruined Churches": "13 within walls",
          "UNESCO Status": "World Heritage Site 1995",
          "Medieval Festival": "Medeltidsveckan (August)"
        },
        hours: "Always accessible",
        price: "Free",
        coordinates: "57.6348° N, 18.2948° E",
        tip: "Fly or take the overnight ferry from Stockholm. Visit during Medeltidsveckan (early August) for an unmissable festival atmosphere. Rent a bicycle to explore the Gotland countryside — prehistoric burial monuments, limestone sea stacks (raukar), and 100 medieval churches dot the island."
      },
      {
        id: "gota-canal",
        name: "Göta Canal",
        location: "Östergötland, Sweden",
        category: "Historic Waterway",
        heroImage: "https://source.unsplash.com/3840x2160/?gota-canal,sweden,boat,locks,trees",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?gota-canal,lock,canal-boat,sweden,summer",
          "https://source.unsplash.com/1200x1600/?gota-canal,reflections,birch-trees,waterway"
        ],
        description: "Sweden's 'Blue Ribbon' — a 190-kilometre canal linking the North Sea to the Baltic through the Swedish heartland.",
        longDescription: "The Göta Canal, completed in 1832 after 22 years of construction by 60,000 workers (many of them soldiers), connects Gothenburg on the west coast to Stockholm on the east via a 190-kilometre waterway of 58 locks, three lakes (Vänern, Vättern, and Roxen), and the Göta River. It was called 'the greatest work of Sweden' at its completion by King Carl XIV Johan, though it was commercially obsolete almost immediately after the arrival of the railways.\n\nToday the canal is a leisure waterway, its gentle pace and pastoral Swedish landscape of wildflower meadows, manor houses, and birch-lined towpaths making it one of Europe's finest slow-travel experiences. Traditional canal steamers make the 3-day journey in summer; independent boats can navigate all 58 locks with hired crew assistance.",
        details: {
          "Completed": "1832",
          "Length": "190 km",
          "Locks": "58",
          "Lakes Crossed": "Vänern, Vättern, Roxen",
          "Journey Time": "3–4 Days (Full Route)"
        },
        hours: "Canal season: May–September",
        price: "Cruise from SEK 4,500 (3-day)",
        coordinates: "58.5950° N, 15.1000° E",
        tip: "Book a cabin on a traditional M/S Juno (1874) or Diana (1931) canal steamer for the most authentic experience. The stretch through Östergötland around Berg locks is the most scenic. Berg's 7-lock staircase is spectacular to watch."
      },
      {
        id: "abba-museum",
        name: "ABBA The Museum",
        location: "Stockholm, Sweden",
        category: "Pop Culture Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?stockholm,djurgarden,abba-museum,sweden,pop-music",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?abba,costumes,glitter,disco,music",
          "https://source.unsplash.com/1200x1600/?stockholm,djurgarden,museum,culture"
        ],
        description: "An immersive tribute to the world's best-selling pop group, housed on Stockholm's Djurgården island.",
        longDescription: "ABBA The Museum, opened in 2013 on Djurgården island alongside the Vasa and Nordic museums, is the world's most visited dedicated music museum, celebrating the career of Agnetha Björk, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad — the four Swedish musicians who formed ABBA in 1972 and became the best-selling pop group in history, with over 385 million records sold worldwide.\n\nThe interactive exhibits include original costumes (the outrageously glittery stage outfits are even more extraordinary in person), recording equipment, gold and platinum records, and a live holographic performance experience that places visitors on stage with the ABBA avatars. A direct telephone line connects the museum to the real Björn and Benny, who occasionally pick up.",
        details: {
          "Opened": "2013",
          "Records Sold": "~385 Million",
          "Active Years": "1972–1982",
          "Location": "Djurgården Island",
          "Special Feature": "Holographic Stage Performance"
        },
        hours: "10:00 — 18:00 (Mon–Fri) | 10:00 — 20:00 (Sat–Sun)",
        price: "SEK 295",
        coordinates: "59.3275° N, 18.1050° E",
        tip: "Book in advance for summer — it sells out. Combine with the Vasa Museum (200 m away, the extraordinary 17th-century warship) for a full Djurgården day. The Skansen open-air museum nearby is excellent for children."
      },
      {
        id: "vadstena-castle",
        name: "Vadstena Castle & Abbey",
        location: "Östergötland, Sweden",
        category: "Renaissance Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?vadstena,castle,sweden,lake-vattern,renaissance",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?vadstena,abbey,birgittine,medieval,sweden",
          "https://source.unsplash.com/1200x1600/?vadstena,castle,reflection,moat,towers"
        ],
        description: "A perfectly preserved Renaissance castle and the mother church of the Birgittine order on the shores of Lake Vättern.",
        longDescription: "Vadstena Castle, built by King Gustav Vasa between 1545 and 1620 on the shores of Lake Vättern, is one of the best-preserved Renaissance fortresses in Scandinavia, its four cylindrical towers and deep moat still intact. Originally designed as a defensive fortification against Danish attack, the castle later served as a royal residence and state prison before becoming the tourist landmark it is today.\n\nMore significant historically is Vadstena Abbey, founded in 1346 by St Birgitta (Bridget of Sweden) as the mother church of the Birgittine religious order she created, one of the most influential women of medieval Europe. The abbey church contains St Birgitta's silver reliquary and the remains of King Magnus Eriksson; the convent buildings next door house a still-active Birgittine community of nuns.",
        details: {
          "Castle Built": "1545–1620",
          "Builder": "King Gustav Vasa",
          "Abbey Founded": "1346 (St Birgitta)",
          "Lake": "Vättern (2nd Largest in Sweden)",
          "Birgittine Order": "Mother Church"
        },
        hours: "Castle 10:00–18:00 (Jun–Aug) | Abbey daily",
        price: "Castle SEK 90 | Abbey free",
        coordinates: "58.4481° N, 14.8880° E",
        tip: "Vadstena is a perfect stop on the Göta Canal route. The lakeside promenade at dusk, with the castle reflected in Vättern, is spectacular. Visit on 23 July (St Birgitta's Day) for the annual pilgrimage festival."
      }
    ]
  },

  "norway": {
    id: "norway",
    name: "Norway",
    region: "Northern Europe",
    coordinates: "60.4720° N, 8.4689° E",
    lat: 60.4720,
    lng: 8.4689,
    heroImage: "https://source.unsplash.com/3840x2160/?norway,fjord,geirangerfjord,mountains,travel",
    description: "Norway's dramatic fjord landscapes — carved by glaciers and plunging thousands of metres to sea level — represent some of the most awe-inspiring scenery on Earth. Add the midnight sun, northern lights, and Viking heritage, and Norway becomes an unforgettable destination.",
    terrain: "Fjordland / Scandinavian Mountains / Arctic Tundra",
    climate: "Subarctic Dfc / Oceanic Cfb",
    biodiversity: "Norwegian Spruce Forest, Alpine Tundra & Coastal Fjord",
    destinations: [
      {
        id: "geirangerfjord",
        name: "Geirangerfjord",
        location: "Møre og Romsdal, Norway",
        category: "UNESCO Fjord",
        heroImage: "https://source.unsplash.com/3840x2160/?geirangerfjord,norway,fjord,waterfalls,green",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?geirangerfjord,seven-sisters-waterfall,cruise-ship",
          "https://source.unsplash.com/1200x1600/?geirangerfjord,aerial,mountains,norway,blue"
        ],
        description: "Norway's most celebrated fjord — a 15-kilometre branch of Sunnylvsfjorden flanked by cascading waterfalls and sheer 1,400-metre walls.",
        longDescription: "Geirangerfjord is widely considered the most beautiful fjord in the world, its 15-kilometre arm cutting into the Norwegian interior between walls of near-vertical rock rising 1,400 metres, with waterfalls plunging in long white threads from hanging valleys above. The Seven Sisters falls — seven parallel streams dropping 250 metres from a plateau — and the Suitor waterfall opposite them are the most iconic features of a fjord that has been inspiring artists and writers since the Romantic era.\n\nThe village of Geiranger at the fjord's head, accessible by the Ørnesvingen (Eagle Road) hairpin road or by ferry from Hellesylt, receives over 700,000 visitors annually plus dozens of cruise ships that anchor in the mirror-calm water. Along with Nærøyfjord, it was designated a UNESCO World Heritage Site in 2005.",
        details: {
          "Fjord Length": "15 km",
          "Wall Height": "Up to 1,400 Metres",
          "Famous Waterfalls": "The Seven Sisters (250 m)",
          "UNESCO Status": "West Norwegian Fjords 2005",
          "Access": "Ferry or Eagle Road (11 Hairpins)"
        },
        hours: "Always accessible | Ferry seasonal (May–Oct)",
        price: "Free | Ferry from NOK 120",
        coordinates: "62.1040° N, 7.2060° E",
        tip: "Take the ferry between Geiranger and Hellesylt (1 hour) for the most dramatic perspective. Drive the Geiranger–Trollstigen route in a single day for a legendary Norwegian road trip. Book accommodation in Geiranger village months in advance."
      },
      {
        id: "preikestolen",
        name: "Preikestolen (Pulpit Rock)",
        location: "Rogaland, Norway",
        category: "Natural Rock Formation",
        heroImage: "https://source.unsplash.com/3840x2160/?preikestolen,pulpit-rock,norway,fjord,cliff",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?preikestolen,cliff,lysefjord,aerial,norway",
          "https://source.unsplash.com/1200x1600/?preikestolen,hiker,summit,norway,viewpoint"
        ],
        description: "A flat-topped cliff rising 604 metres vertically above Lysefjord — Norway's most visited hiking destination.",
        longDescription: "Preikestolen (Pulpit Rock) is a near-perfectly flat clifftop of 25 x 25 metres rising 604 metres straight up from the surface of Lysefjord below, created when a glacier pressed into a crack in the cliff face and the frozen meltwater expanded to break away a clean vertical slab. The hike to the top — 4 kilometres and 334 metres ascent from the Preikestolen Mountain Lodge — is Norway's most popular mountain hike, walked by 300,000 people per year.\n\nThe view from the edge (there are no barriers — hikers sit with their legs dangling above a 600-metre drop) looks directly down into the luminous blue-green water of Lysefjord far below, with the glacially sculpted fjord walls extending 42 kilometres to the sea. At peak summer weekends the plateau can hold 1,000 simultaneous visitors.",
        details: {
          "Height": "604 Metres Above Lysefjord",
          "Plateau Size": "25 x 25 Metres",
          "Hike": "4 km, 334 m Ascent (2–3 Hours Return)",
          "Annual Visitors": "~300,000",
          "Fjord Below": "Lysefjord (42 km)"
        },
        hours: "Always accessible",
        price: "Free | Car park NOK 300",
        coordinates: "58.9864° N, 6.1867° E",
        tip: "Start before 08:00 to reach the top before the crowds. The plateau can be icy until May — check conditions. Combine with Kjeragbolten (a boulder wedged in a crevasse 1,000 m above the fjord) for a longer Lysefjord day. Book the car park in advance."
      },
      {
        id: "flam-railway",
        name: "Flåm Railway",
        location: "Sognefjord, Norway",
        category: "Scenic Railway",
        heroImage: "https://source.unsplash.com/3840x2160/?flam-railway,norway,train,waterfall,mountain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?flamsbana,kjosfossen-waterfall,train,mist",
          "https://source.unsplash.com/1200x1600/?flam,sognefjord,village,reflections,norway"
        ],
        description: "One of the world's most breathtaking train journeys — 20 kilometres descending 863 metres through waterfalls and gorges to Sognefjord.",
        longDescription: "The Flåmsbana (Flåm Railway) is one of the steepest standard-gauge railway lines in the world, descending 863 metres over 20 kilometres from Myrdal on the Bergen–Oslo mountain railway to the tiny fjord village of Flåm on Aurlandsfjord, a branch of Sognefjord (the longest and deepest fjord in Norway at 204 km and 1,308 m depth). Construction began in 1923 and took 20 years, requiring 20 tunnels totalling nearly 6 kilometres.\n\nThe 1-hour journey passes through 20 hand-dug tunnels, past thundering waterfalls (the train stops at Kjosfossen falls for passengers to photograph and sometimes hear the Huldra folk legend enacted by a singing figure on the rocks), over steep mountain ledges, and through the deep Flåm valley before arriving at the fjordside village. It is consistently rated among the most beautiful railway journeys in the world.",
        details: {
          "Length": "20 km",
          "Altitude Drop": "863 Metres",
          "Gradient": "Up to 5.5%",
          "Construction": "1923–1940",
          "Tunnels": "20 (Total 6 km)"
        },
        hours: "Multiple daily departures, seasonal",
        price: "From NOK 420 one way",
        coordinates: "60.8642° N, 7.1145° E",
        tip: "Sit on the right side travelling downhill (Myrdal → Flåm) for the best waterfall views. Book online in advance in summer. Combine with a Sognefjord cruise from Flåm village and the Norway in a Nutshell tour from Bergen or Oslo."
      },
      {
        id: "bergen-bryggen",
        name: "Bergen & Bryggen Wharf",
        location: "Bergen, Hordaland",
        category: "UNESCO Historic Wharf",
        heroImage: "https://source.unsplash.com/3840x2160/?bergen,bryggen,norway,colourful,wharf",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?bryggen,wooden-houses,hanseatic,wharf,norway",
          "https://source.unsplash.com/1200x1600/?bergen,funicular,mount-floyen,panorama"
        ],
        description: "Norway's most charming city — a row of colourful Hanseatic wooden wharfhouses reflected in Bergen harbour.",
        longDescription: "Bergen was Norway's most important city for five centuries from its founding in 1070, growing wealthy as a Hanseatic League trading post through which Bergen merchants (and German Hanseatic factors resident in the Bryggen) controlled the dried fish trade from the Arctic fishing villages of northern Norway. The Bryggen (meaning 'the Wharf') is a row of 58 surviving wooden gabled warehouses from the 14th to 18th centuries, rebuilt repeatedly after the fires that afflicted the wooden city but always restored to the same medieval ground plan.\n\nBergen today is the 'gateway to the fjords', its compact city centre ringed by seven mountains accessible by funicular (Fløibanen) and cable car (Ulriken). The famous Fish Market (Fisketorget) on the harbour sells the freshest seafood in Norway, from whole king crabs to Atlantic salmon.",
        details: {
          "Founded": "1070",
          "Bryggen Houses": "58 Surviving (Medieval Ground Plan)",
          "Hanseatic Period": "1360–1754",
          "UNESCO Status": "World Heritage Site 1979",
          "Seven Mountains": "Fløyen (320 m) via funicular"
        },
        hours: "Bryggen always accessible | Funicular 08:00–23:00",
        price: "Bryggen free | Funicular NOK 100 return",
        coordinates: "60.3975° N, 5.3243° E",
        tip: "Take the Fløibanen funicular to Fløyen summit for panoramic views at sunset. Explore the narrow passages behind Bryggen for the full medieval atmosphere. Try the fish soup (fiskesuppe) at the Fish Market. Bergen averages 239 rain days/year — bring waterproofs."
      },
      {
        id: "northern-lights-tromso",
        name: "Tromsø Northern Lights",
        location: "Tromsø, Troms",
        category: "Arctic Experience",
        heroImage: "https://source.unsplash.com/3840x2160/?tromso,northern-lights,aurora,arctic,norway",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?tromso,aurora-borealis,green,city,fjord",
          "https://source.unsplash.com/1200x1600/?tromso,arctic-cathedral,night,lights,norway"
        ],
        description: "Norway's Arctic capital — the world's most accessible aurora-hunting destination, 350 kilometres above the Arctic Circle.",
        longDescription: "Tromsø, at 69°N, is the largest city above the Arctic Circle and is positioned in the heart of the auroral oval — the ring around the magnetic pole where aurora activity is most concentrated. The aurora season runs from late September to late March (when it is dark enough to see), with the period around the equinoxes (September and March) statistically most active. Guided aurora chase tours in minibuses or on snowshoes search the area around Tromsø for clear sky windows in the frequent cloud.\n\nBeyond the aurora, Tromsø offers extraordinary Arctic experiences: dog-sled safaris, reindeer sleigh rides with Sami families, snowmobile tours, and the midnight sun (69 days of continuous daylight from 20 May to 26 July). The dramatic Arctic Cathedral (1965), designed to evoke a Sami tent and an iceberg, is the city's architectural landmark.",
        details: {
          "Latitude": "69°N (350 km above Arctic Circle)",
          "Aurora Season": "Late September–Late March",
          "Midnight Sun": "20 May–26 July (69 Days)",
          "Arctic Cathedral": "1965 (Iconic Architecture)",
          "Dog Sled": "Available November–April"
        },
        hours: "Always accessible",
        price: "Aurora tour from NOK 1,200",
        coordinates: "69.6492° N, 18.9553° E",
        tip: "Book a guided aurora chase (they drive to find clear sky, greatly improving your chances). Stay minimum 4 nights to maximise aurora opportunities. The Fjellheisen cable car to 421 m gives a city panorama and is an excellent aurora viewing platform."
      },
      {
        id: "lofoten-islands",
        name: "Lofoten Islands",
        location: "Nordland, Norway",
        category: "Island Archipelago",
        heroImage: "https://source.unsplash.com/3840x2160/?lofoten,norway,red-houses,mountains,fjord",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?lofoten,rorbuer,fishing-village,norway,dramatic",
          "https://source.unsplash.com/1200x1600/?lofoten,beach,turquoise,mountains,arctic"
        ],
        description: "A chain of dramatic Arctic islands with impossibly picturesque fishing villages, white sand beaches, and jagged peaks.",
        longDescription: "The Lofoten archipelago extends 160 kilometres into the Norwegian Sea at 68°N, yet enjoys a climate far milder than its latitude suggests, thanks to the Gulf Stream warming the surrounding waters. The islands' landscape is one of the most dramatic on Earth: vertical granite peaks rising straight from the water to over 1,000 metres, separated by narrow sounds and dotted with traditional rorbuer (red and yellow fishermen's cabins on stilts over the water) in the villages of Reine, Henningsvær, and Å.\n\nLofoten has been one of the world's richest fishing grounds since the Viking age, with the annual winter cod migration from the Barents Sea attracting fleets from across Norway still today. In summer the midnight sun illuminates the turquoise waters and white sand beaches; in winter the dark fjords are ideal for aurora viewing. The E10 road connecting the main islands end-to-end is one of Europe's most spectacular drives.",
        details: {
          "Archipelago Length": "160 km",
          "Latitude": "68°N (yet mild climate)",
          "Highest Peak": "Higravstinden 1,146 m",
          "Iconic Villages": "Reine, Henningsvær, Å",
          "Best Season": "June–August & January–February"
        },
        hours: "Always accessible",
        price: "Free | Ferry connections",
        coordinates: "68.1565° N, 13.9986° E",
        tip: "Drive or cycle the E10 from Svolvær to Å (the village literally named with the last letter of the Norwegian alphabet). Hike Reinebringen above Reine for the iconic summit view. Stay in a rorbu (fishermen's cabin) for authentic atmosphere. Summer midnight sun photography is extraordinary."
      }
    ]
  },

  "croatia": {
    id: "croatia",
    name: "Croatia",
    region: "Southeast Europe",
    coordinates: "45.1000° N, 15.2000° E",
    lat: 45.1000,
    lng: 15.2000,
    heroImage: "https://source.unsplash.com/3840x2160/?croatia,dubrovnik,adriatic,old-town,travel",
    description: "Croatia's Adriatic coastline — a thousand islands, turquoise waters, and medieval walled cities — has made it one of Europe's fastest-rising travel destinations. From the waterfalls of Plitvice to the Roman ruins of Split, the country's natural and cultural heritage is exceptional.",
    terrain: "Dalmatian Coast / Karst / Dinaric Alps",
    climate: "Mediterranean Csa / Continental Dfb",
    biodiversity: "Dalmatian Macchia & Karst Spring Ecosystem",
    destinations: [
      {
        id: "plitvice-lakes",
        name: "Plitvice Lakes National Park",
        location: "Lika, Central Croatia",
        category: "UNESCO Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?plitvice-lakes,croatia,turquoise,waterfalls,national-park",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?plitvice,waterfall,lake,boardwalk,autumn",
          "https://source.unsplash.com/1200x1600/?plitvice-lakes,terraced,travertine,blue-green"
        ],
        description: "A cascade of 16 terraced turquoise lakes connected by 92 waterfalls — Croatia's most spectacular natural wonder.",
        longDescription: "Plitvice Lakes National Park contains one of the world's most extraordinary freshwater landscapes: 16 terraced lakes descending 133 metres through a karst canyon, connected by 92 waterfalls and linked by boardwalk paths and boat crossings. The turquoise, green, and blue colours of the lakes change with the seasons and the angle of light, determined by the precise concentration of dissolved minerals and microorganisms in the water.\n\nThe lake terraces are formed by living travertine (tufa) — a calcium carbonate sediment deposited continuously by the water as it flows over underwater plants and mosses, building dams that have been growing for thousands of years. The process is so delicate that swimming is prohibited and visitors must stay on the wooden boardwalks. In autumn the surrounding beech and hornbeam forest turns gold and crimson, creating the most spectacular season.",
        details: {
          "Lakes": "16 Terraced",
          "Waterfalls": "92",
          "Height Difference": "133 Metres",
          "Lake Formation": "Living Travertine (Tufa)",
          "UNESCO Status": "World Heritage Site 1979"
        },
        hours: "07:00 — 20:00 (summer) | 08:00 — 16:00 (winter)",
        price: "From €10 (low season) to €40 (high season)",
        coordinates: "44.8803° N, 15.6158° E",
        tip: "Visit in spring for maximum waterfall flow or autumn for foliage colour. Arrive at opening — the park reaches capacity quickly in July/August. Do Programme H (the full loop, 4–6 hours) rather than the shorter routes for the complete experience."
      },
      {
        id: "dubrovnik-old-city",
        name: "Dubrovnik Old City",
        location: "Dubrovnik, Dalmatia",
        category: "UNESCO Walled City",
        heroImage: "https://source.unsplash.com/3840x2160/?dubrovnik,old-city,adriatic,walls,croatia",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?dubrovnik,city-walls,sea,rooftops,croatia",
          "https://source.unsplash.com/1200x1600/?dubrovnik,stradun,limestone,evening,people"
        ],
        description: "The 'Pearl of the Adriatic' — a perfectly preserved medieval city enclosed by massive limestone walls above a deep-blue sea.",
        longDescription: "Dubrovnik (the medieval Republic of Ragusa) was for centuries one of the Mediterranean's most sophisticated trading republics, its diplomats skilled enough to maintain independence between Venice and the Ottoman Empire for 450 years through a combination of trade, tribute, and brilliant statecraft. The city's limestone walls — between 4 and 6 metres thick, with towers and bastions — were built between the 12th and 17th centuries and remain one of the finest surviving medieval fortification systems in the world.\n\nThe famous Stradun (Placa), a 300-metre limestone pedestrian street polished to a mirror by centuries of footsteps, connects the Pile Gate to the old harbour, flanked by Baroque palaces and churches rebuilt after the catastrophic earthquake of 1667. Today Dubrovnik is additionally famous as the filming location for King's Landing in Game of Thrones.",
        details: {
          "Walls Built": "12th–17th Century",
          "Wall Thickness": "Up to 6 Metres",
          "Old City Area": "1.3 km²",
          "UNESCO Status": "World Heritage Site 1979",
          "Game of Thrones": "King's Landing Location"
        },
        hours: "Walls: 08:00–19:30 (summer) | City always accessible",
        price: "City walls €35 | Old city free",
        coordinates: "42.6407° N, 18.1077° E",
        tip: "Walk the city walls at opening time (08:00) for the best light and fewest crowds. Buy a Dubrovnik Card for walls + cable car + museum access. Stay inside the old city walls (pricey but magical after 19:00 when day visitors leave)."
      },
      {
        id: "diocletians-palace",
        name: "Diocletian's Palace",
        location: "Split, Dalmatia",
        category: "Roman Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?split,diocletian-palace,croatia,roman,adriatic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?split,peristyle,roman-columns,cathedral,croatia",
          "https://source.unsplash.com/1200x1600/?diocletian,palace,basement,vaults,roman"
        ],
        description: "A 4th-century Roman emperor's retirement palace turned living city — 3,000 people still live within its ancient walls.",
        longDescription: "Emperor Diocletian built his retirement palace between 295 and 305 AD on the Dalmatian coast of his homeland, a vast fortified complex of 215 x 180 metres incorporating imperial apartments, temples, mausoleum, barracks, and warehouses within defensive walls 2 metres thick. After Diocletian's death, the palace fell into disuse; when the nearby Roman city of Salona was sacked in the 7th century, its refugees moved into the empty palace and converted it into a city — the origin of modern Split.\n\nToday 3,000 people live within the palace walls, their apartments, restaurants, bars, and shops built into and on top of the Roman structures. The Peristyle courtyard, the Cathedral of St Domnius (converted from Diocletian's mausoleum — uniquely, a Roman emperor's tomb that became a Christian church), and the basement vaults (substructure) are the most visited parts of this extraordinary living archaeological site.",
        details: {
          "Built": "295–305 AD",
          "Builder": "Emperor Diocletian",
          "Dimensions": "215 x 180 Metres",
          "Current Residents": "~3,000 People",
          "Status": "UNESCO World Heritage Site"
        },
        hours: "Palace always accessible | Basement 09:00–21:00",
        price: "Palace free | Basement €9",
        coordinates: "43.5081° N, 16.4402° E",
        tip: "Explore the labyrinthine basement vaults for the best sense of the original Roman structure. The rooftop bar above the Peristyle is one of Croatia's best dining views. Combine Split with a day trip to Hvar island (fast ferry 1 hour)."
      },
      {
        id: "krka-waterfalls",
        name: "Krka National Park",
        location: "Šibenik, Dalmatia",
        category: "Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?krka,waterfalls,croatia,national-park,turquoise",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?skradinski-buk,waterfall,krka,croatia,swim",
          "https://source.unsplash.com/1200x1600/?krka,river,canyon,green,dalmatia"
        ],
        description: "Seven stepped waterfalls on the Krka River canyon, with the famous travertine falls of Skradinski Buk once open for swimming.",
        longDescription: "Krka National Park protects a 45-kilometre stretch of the Krka River gorge from its source near Knin to its estuary near Šibenik, encompassing seven waterfalls — of which Skradinski Buk is the largest, a 45-metre-high stepped travertine cascade 800 metres wide. The falls are formed by the same living travertine process as Plitvice Lakes, the calcium-rich karst water continuously depositing calcium carbonate over moss and aquatic plants to build barriers that divert the river into ever more elaborate patterns.\n\nBeyond Skradinski Buk, the park contains the island monastery of Visovac (1445) on a lake above the falls, the Franciscan monastery of Krka, and the ruins of several Roman and Byzantine fortresses in the canyon walls. The medieval town of Šibenik (15 minutes from the park entrance) contains UNESCO-listed St James's Cathedral (1431–1555).",
        details: {
          "Park Area": "142 km²",
          "Waterfalls": "7",
          "Skradinski Buk": "45 m High, 800 m Wide",
          "Island Monastery": "Visovac (1445)",
          "Nearby UNESCO": "Šibenik Cathedral (1431)"
        },
        hours: "08:00 — 20:00 (Jul–Aug) | 09:00 — 18:00 (shoulder season)",
        price: "€30 (Jul–Aug) | €20 (shoulder)",
        coordinates: "43.8029° N, 15.9652° E",
        tip: "Visit in May–June before peak season crowds. Take the boat excursion to Visovac Island monastery. Note: swimming at Skradinski Buk is no longer permitted (banned 2021) — but the views remain spectacular."
      },
      {
        id: "hvar-island",
        name: "Hvar Island",
        location: "Dalmatia, Croatia",
        category: "Island Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?hvar,island,croatia,lavender,adriatic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hvar,town,harbour,fortress,yachts",
          "https://source.unsplash.com/1200x1600/?hvar,lavender-fields,croatia,purple,summer"
        ],
        description: "Croatia's sunniest island — a fragrant landscape of lavender fields, pine forests, and fashionable harbours on the Adriatic.",
        longDescription: "Hvar island, 68 kilometres long and one of the sunniest places in Europe (2,726 sunshine hours per year), combines extraordinary natural beauty with sophisticated island culture. The town of Hvar, one of the best-preserved Venetian towns on the Dalmatian coast, commands a horseshoe harbour below the 16th-century Spanish Fortress with its panoramic views, and is surrounded by the fortified walls of a Venetian town that competed with Dubrovnik for Mediterranean trade.\n\nThe central valley of the island is carpeted with lavender fields, olive groves, and vineyards producing the indigenous Plavac Mali red wine, while the southern coast offers secluded pebble coves accessible only by boat. The Pakleni Islands just offshore from Hvar town provide sheltered anchorages for the luxury yachts that make Hvar the most fashionable Croatian island.",
        details: {
          "Length": "68 km",
          "Sunshine Hours": "2,726/Year (Among Europe's Most)",
          "Town Walls": "Venetian (13th Century)",
          "Local Wine": "Plavac Mali (Indigenous Grape)",
          "Pakleni Islands": "Offshore Anchorage & Beaches"
        },
        hours: "Always accessible",
        price: "Ferry from Split ~€5",
        coordinates: "43.1729° N, 16.4413° E",
        tip: "Take the Jadrolinija catamaran from Split to Hvar town (1 hour) rather than the car ferry. Rent a scooter to explore the lavender valley in June. Visit Stari Grad (the island's oldest town, Greek-founded 384 BC) for a quieter alternative to Hvar town."
      },
      {
        id: "rovinj",
        name: "Rovinj",
        location: "Istria, Croatia",
        category: "Coastal Town",
        heroImage: "https://source.unsplash.com/3840x2160/?rovinj,istria,croatia,harbour,old-town,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rovinj,old-town,boats,harbour,evening",
          "https://source.unsplash.com/1200x1600/?rovinj,st-euphemia-church,tower,sea"
        ],
        description: "The most romantic town on the Istrian coast — a Venetian-flavoured hilltop old town on a peninsula jutting into the Adriatic.",
        longDescription: "Rovinj (Rovigno in Italian) was a Venetian island town connected to the Istrian mainland by land reclamation in the 18th century, and retains the compressed, vertical character of an island settlement: tall narrow houses rising six and seven storeys on a rocky peninsula, their laundry strung between windows across alleyways barely wide enough for a bicycle. The church of St Euphemia (1736), with its 60-metre campanile modelled on St Mark's in Venice, crowns the highest point of the peninsula.\n\nRowinj is Croatia's best-preserved Venetian coastal town, its ambiance a blend of Italian and Croatian cultures that reflects Istria's complex history of shifting sovereignty. The surrounding Zlatni Rt (Golden Cape) nature park protects a forested peninsula with crystal-clear rocky coves, and the Brijuni Islands National Park (former Yugoslav president Tito's private retreat) is accessible by boat from Rovinj.",
        details: {
          "Venetian Period": "1283–1797",
          "St Euphemia Tower": "60 m (Modelled on Venice's campanile)",
          "Nature Park": "Zlatni Rt (Golden Cape)",
          "Nearby": "Brijuni National Park (Tito's island)",
          "Language": "Croatian & Italian spoken"
        },
        hours: "Always accessible",
        price: "Free",
        coordinates: "45.0814° N, 13.6386° E",
        tip: "Sunrise from the harbour is exceptional — the old town reflected in still water. Rent a kayak to explore the sea caves around the peninsula. Take a boat to Brijuni for the extraordinary African safari animals Tito received as diplomatic gifts (now descendants roam freely)."
      }
    ]
  },

  "iceland": {
    id: "iceland",
    name: "Iceland",
    region: "Northern Europe",
    coordinates: "64.9631° N, 19.0208° W",
    lat: 64.9631,
    lng: -19.0208,
    heroImage: "https://source.unsplash.com/3840x2160/?iceland,aurora,lava,volcanic,landscape,travel",
    description: "Iceland is a raw volcanic island on the Mid-Atlantic Ridge where geology is still in progress — geysers erupt, lava fields steam, and glaciers calve into lagoons. Its sparse population and almost entirely uninhabited interior make it one of the world's most otherworldly landscapes.",
    terrain: "Volcanic / Glacial / Geothermal",
    climate: "Subarctic ET / Oceanic Cfb (coast)",
    biodiversity: "Sub-Arctic Tundra, Lava Field & Glacial Outwash",
    destinations: [
      {
        id: "blue-lagoon",
        name: "Blue Lagoon",
        location: "Reykjanes Peninsula, Iceland",
        category: "Geothermal Spa",
        heroImage: "https://source.unsplash.com/3840x2160/?blue-lagoon,iceland,geothermal,milky-blue,spa",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?blue-lagoon,iceland,steam,silica,people",
          "https://source.unsplash.com/1200x1600/?blue-lagoon,lava-rocks,mist,iceland,serene"
        ],
        description: "The world's most famous geothermal spa — a milky-blue silica-rich pool on a black lava field, fed by runoff from a nearby power plant.",
        longDescription: "The Blue Lagoon's distinctive milky-blue water is not a natural hot spring but the by-product of the Svartsengi geothermal power plant, which pumps superheated water from 2,000 metres below the surface; the silica-rich outflow, too mineral-rich to be reinjected, was initially discharged onto the surrounding lava field, where workers at the plant noticed in the 1980s that the pools had formed and found the water beneficial for skin conditions. The silica mud, algae, and mineral salts remain the basis of the Blue Lagoon's luxury skincare line.\n\nLocated just 20 minutes from Keflavík International Airport, the Blue Lagoon is many visitors' first and last experience of Iceland. The steaming milky-blue pool at 37–39°C, set against black lava rock, Arctic sky, and occasional snow, is genuinely otherworldly, and the premium experience includes access to private lagoon sections, in-water bar service, and silica mask application.",
        details: {
          "Water Temperature": "37–39°C",
          "Water Type": "Geothermal Runoff (Silica-Rich)",
          "Distance from Airport": "20 Minutes",
          "Area": "~5,000 m²",
          "Key Benefit": "Silica & Algae for Skin Conditions"
        },
        hours: "08:00 — 22:00 daily (seasonal variations)",
        price: "From ISK 9,990 (~€65)",
        coordinates: "63.8804° N, 22.4495° W",
        tip: "Book tickets months in advance — it sells out completely. Visit in winter for the dramatic combination of steam, snow, and possible aurora overhead. The premium comfort tickets include a towel and drink — worth the upgrade. Allow 2.5–3 hours."
      },
      {
        id: "geysir-hot-springs",
        name: "Geysir Hot Springs",
        location: "Golden Circle, South Iceland",
        category: "Geothermal Area",
        heroImage: "https://source.unsplash.com/3840x2160/?geysir,strokkur,iceland,geyser,eruption",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?strokkur,geyser,eruption,water,column,iceland",
          "https://source.unsplash.com/1200x1600/?geysir,geothermal,hot-springs,steam,landscape"
        ],
        description: "The original geyser that gave its name to all others — an active geothermal field where Strokkur erupts every 5–10 minutes.",
        longDescription: "The Geysir (Great Geysir) itself — the hot spring that gave its Old Norse name to all geysers worldwide — has been mostly dormant since a major eruption in 2000, though it can be triggered by earthquakes. The main active attraction is the adjacent Strokkur geyser, which erupts reliably every 5–10 minutes to heights of 15–40 metres in a dramatic column of superheated water and steam, audible from 200 metres away.\n\nThe Haukadalur geothermal field around Geysir contains hundreds of hot springs, mud pots, and fumaroles, the ground warm and colourfully mineralised with silica sinter deposits in white, orange, and yellow. The site is a key stop on Iceland's famous Golden Circle — the roughly 300-kilometre loop from Reykjavík visiting Þingvellir, Geysir, and Gullfoss — that is Iceland's most popular day trip.",
        details: {
          "Geysir Name": "Origin of the Word 'Geyser'",
          "Strokkur Interval": "Every 5–10 Minutes",
          "Strokkur Height": "15–40 Metres",
          "Field Name": "Haukadalur",
          "Golden Circle": "With Þingvellir & Gullfoss"
        },
        hours: "Always accessible",
        price: "Free",
        coordinates: "64.3117° N, 20.3021° W",
        tip: "Stand downwind of Strokkur and watch the blue dome form before each eruption — the eruption pattern is predictable. Visit at dawn or dusk for dramatic low-angle light. Combine with Gullfoss and Þingvellir on the same Golden Circle day trip."
      },
      {
        id: "gullfoss-waterfall",
        name: "Gullfoss Waterfall",
        location: "Golden Circle, South Iceland",
        category: "Natural Waterfall",
        heroImage: "https://source.unsplash.com/3840x2160/?gullfoss,iceland,waterfall,golden,canyon",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?gullfoss,winter,ice,waterfall,frozen",
          "https://source.unsplash.com/1200x1600/?gullfoss,rainbow,mist,canyon,iceland"
        ],
        description: "The 'Golden Falls' — a two-tiered glacial waterfall that appears to plunge into a fissure in the Earth.",
        longDescription: "Gullfoss (Golden Falls) is Iceland's most famous waterfall, fed by meltwater from the Langjökull glacier via the Hvítá River, which cascades in two tiers — the upper 11 metres and lower 21 metres — into a narrow basalt canyon 70 metres deep and 2.5 kilometres long that runs at right angles to the flow, giving the illusion that the river is disappearing into the Earth. The volume of water (average 140 m³/second, rising to 2,000 m³/s in glacial outburst floods) creates a permanent cloud of spray that forms rainbows on sunny days.\n\nGullfoss was nearly harnessed for hydroelectric power in the 1920s; it was saved partly through the efforts of Sigríður Tómasdóttir, daughter of the landowner, who threatened to throw herself into the falls if the development went ahead. The falls were eventually gifted to the Icelandic state and protected in 1979.",
        details: {
          "Total Drop": "32 Metres (Two Tiers: 11 m + 21 m)",
          "Canyon Depth": "70 Metres",
          "Average Flow": "140 m³/Second",
          "Source": "Langjökull Glacier",
          "Protected": "1979 (State Ownership)"
        },
        hours: "Always accessible",
        price: "Free",
        coordinates: "64.3270° N, 20.1200° W",
        tip: "Walk down to the lower viewing platform for the most dramatic close-up view (expect to get wet from spray). In winter the falls partially freeze into extraordinary ice formations — one of Iceland's most dramatic winter sights. Visit late afternoon for the best light angle."
      },
      {
        id: "northern-lights-iceland",
        name: "Reykjavík Northern Lights",
        location: "Reykjavík, Iceland",
        category: "Natural Phenomenon",
        heroImage: "https://source.unsplash.com/3840x2160/?reykjavik,northern-lights,aurora,iceland,city",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?iceland,aurora-borealis,green,sky,countryside",
          "https://source.unsplash.com/1200x1600/?reykjavik,hallgrimskirkja,church,night,lights"
        ],
        description: "Iceland's capital is one of the world's best aurora-hunting bases, with dark countryside just minutes from the city centre.",
        longDescription: "Reykjavík (population 130,000) is the world's northernmost national capital and sits at 64°N within the auroral zone, making it one of the most accessible aurora destinations on Earth. The aurora season runs from late August to mid-April, with the dark months of November–February offering the longest windows of darkness. Iceland's rapidly changeable weather means clear skies can arrive suddenly — the key strategy is to be ready to drive out of the city into the dark countryside at short notice.\n\nBeyond the aurora, Reykjavík is a compact and culturally rich city: the rocket-ship Hallgrímskirkja church (75 m, panoramic view from the tower), the Harpa concert hall (a biomorphic glass facade on the harbour), the National Museum, and one of the world's most concentrated small-city bar and restaurant scenes make the city a destination in its own right.",
        details: {
          "Latitude": "64°N (Within Auroral Zone)",
          "Aurora Season": "Late August–Mid April",
          "Best Months": "November–February",
          "Hallgrímskirkja Height": "75 Metres",
          "City Population": "~130,000"
        },
        hours: "City always accessible",
        price: "Aurora tour from ISK 10,000",
        coordinates: "64.1355° N, 21.8954° W",
        tip: "Download the Vedur.is aurora forecast app and set alerts for KP 3+. Drive 15 minutes from the city to dark countryside for the best views. Book a guided aurora minibus tour (they chase clear weather across the country) for the best success rate."
      },
      {
        id: "jokulsarlon-glacial-lagoon",
        name: "Jökulsárlón Glacial Lagoon",
        location: "Southeast Iceland",
        category: "Glacial Lagoon",
        heroImage: "https://source.unsplash.com/3840x2160/?jokulsarlon,iceland,glacial-lagoon,icebergs,blue",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?jokulsarlon,iceberg,float,blue-ice,iceland",
          "https://source.unsplash.com/1200x1600/?diamond-beach,iceland,ice,black-sand,ocean"
        ],
        description: "A black-sand lagoon filled with drifting blue icebergs calving from the Breiðamerkurjökull glacier — Iceland's most surreal landscape.",
        longDescription: "Jökulsárlón (Glacier River Lagoon) formed around 1934 when the Breiðamerkurjökull outlet glacier of the Vatnajökull ice cap began retreating rapidly, melting into the glacial valley and creating a deepening lagoon. Today the lagoon is around 18 square kilometres and 300 metres deep, filled with slowly revolving blue, white, and black-streaked icebergs calved from the glacier's 20-metre-high face. Seals swim between the icebergs catching Arctic char.\n\nThe icebergs slowly drift through a short channel to the open Atlantic, where they wash up on Diamond Beach — a black volcanic sand beach where the transparent ice blocks glitter like scattered diamonds in the waves. It is one of Iceland's most photographed locations. The Ring Road crosses the lagoon outlet on a bridge, making this an unmissable stop on any circumnavigation of Iceland.",
        details: {
          "Formation": "~1934 (Retreating Glacier)",
          "Area": "~18 km²",
          "Depth": "Up to 300 Metres",
          "Source Glacier": "Breiðamerkurjökull",
          "Diamond Beach": "Black Sand with Washed-Up Ice"
        },
        hours: "Always accessible | Boat tours 09:00–18:00 (summer)",
        price: "Free | Zodiac ice boat ISK 9,990",
        coordinates: "64.0784° N, 16.2306° W",
        tip: "Visit at sunrise or sunset for the most dramatic light on the ice. The Zodiac boat tour gets you among the icebergs. Walk to Diamond Beach (the black sand beach at the ocean outlet) immediately after — it is 5 minutes away on foot."
      },
      {
        id: "landmannalaugar",
        name: "Landmannalaugar",
        location: "Central Highlands, Iceland",
        category: "Geothermal Highland",
        heroImage: "https://source.unsplash.com/3840x2160/?landmannalaugar,iceland,rhyolite,mountains,rainbow,colorful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?landmannalaugar,hiking,lava-field,sulfur,iceland",
          "https://source.unsplash.com/1200x1600/?landmannalaugar,hot-spring,river,mountains,rainbow"
        ],
        description: "Iceland's most colourful highland destination — a volcanic landscape of rainbow rhyolite mountains, lava fields, and hot springs.",
        longDescription: "Landmannalaugar lies at 600 metres in Iceland's central highlands, accessible only by 4WD vehicles (or bus) during the brief summer season (July–September). It is the starting point of the Laugavegur Trail — widely considered one of the world's finest multi-day hikes — and its immediate surroundings are among the most visually extraordinary in Iceland: rhyolite mountains streaked in red, orange, pink, green, and yellow by hydrothermal alteration of the volcanic rock, black lava flows from the 1477 Laugahraun eruption still bare of vegetation, and steaming fumaroles beside a natural hot river where hikers soak at the end of each day.\n\nThe Laugavegur Trail (55 km, 4 days) links Landmannalaugar to Þórsmörk through a landscape that includes obsidian deserts, glaciers, and the rhyolite mountain of Brennisteinsalda — one of Iceland's most colourful summits.",
        details: {
          "Altitude": "600 Metres",
          "Access Season": "July–September (4WD required)",
          "Mountain Colours": "Rhyolite (Red, Orange, Green, Pink)",
          "Laugavegur Trail": "55 km, 4 Days",
          "Natural Hot Spring": "River bathing at camp"
        },
        hours: "Accessible July–September",
        price: "Free | Bus from Reykjavík ISK 9,900",
        coordinates: "63.9924° N, 19.0678° W",
        tip: "Book the Reykjavík Excursions bus in advance — it departs once daily in season. Hike up Brennisteinsalda for the ultimate colour-mountain experience (2 hours). Bring a swimsuit for the natural hot river. The Laugavegur hut-to-hut trek requires booking months ahead."
      }
    ]
  },

  "ireland": {
    id: "ireland",
    name: "Ireland",
    region: "Northwestern Europe",
    coordinates: "53.1424° N, 7.6921° W",
    lat: 53.1424,
    lng: -7.6921,
    heroImage: "https://source.unsplash.com/3840x2160/?ireland,cliffs-of-moher,green,atlantic,travel",
    description: "Ireland's emerald landscape of ancient stone forts, medieval monasteries, and dramatic Atlantic cliffs is matched by a warmth of welcome and a storytelling culture second to none. From the prehistoric passage tomb of Newgrange to the pubs of Galway, the island rewards slow, curious exploration.",
    terrain: "Central Lowland / Western Cliffs / Wicklow Mountains",
    climate: "Oceanic Cfb",
    biodiversity: "Atlantic Blanket Bog, Hazel Woodland & Sea Cliff",
    destinations: [
      {
        id: "cliffs-of-moher",
        name: "Cliffs of Moher",
        location: "County Clare, Ireland",
        category: "Natural Sea Cliffs",
        heroImage: "https://source.unsplash.com/3840x2160/?cliffs-of-moher,ireland,atlantic,green,dramatic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cliffs-moher,fog,moody,atlantic-ocean,ireland",
          "https://source.unsplash.com/1200x1600/?cliffs-moher,obriens-tower,clifftop,ireland"
        ],
        description: "Ireland's most visited natural wonder — 14 kilometres of sheer Atlantic cliffs rising 214 metres from the crashing sea.",
        longDescription: "The Cliffs of Moher rise from the Atlantic Ocean on the western edge of County Clare, stretching 14 kilometres of near-vertical faces of Namurian sandstone and shale reaching 214 metres at their highest point above Hag's Head. The cliffs are part of Ireland's first UNESCO-recognised Global Geopark — the Burren and Cliffs of Moher Geopark — and support the largest seabird colony in Ireland, including 30,000 nesting Atlantic puffins, razorbills, guillemots, and kittiwakes in summer.\n\nThe cliffs are best viewed from the O'Brien's Tower viewpoint or, preferably, by walking the Cliffs of Moher Coastal Walk — a 20-kilometre clifftop path from Doolin to Liscannor offering the full sweep of the coastline and, on clear days, views to the Aran Islands and the Twelve Bens mountains of Connemara across Galway Bay.",
        details: {
          "Height": "Up to 214 Metres",
          "Length": "14 km",
          "Seabirds": "~30,000 Nesting Puffins & Guillemots",
          "UNESCO Geopark": "Burren & Cliffs of Moher",
          "Coastal Walk": "20 km (Doolin to Liscannor)"
        },
        hours: "09:00 — 21:00 (summer) | 09:00 — 17:00 (winter)",
        price: "€10.00",
        coordinates: "52.9715° N, 9.4309° W",
        tip: "Walk north from the visitor centre to the Goat's Path for the best photography angle looking back at the cliffs. Visit on a stormy day for dramatic Atlantic swells breaking at the base. The coastal walk to Doolin (7 km north) is magnificent and less crowded than the main viewpoint."
      },
      {
        id: "blarney-castle",
        name: "Blarney Castle",
        location: "County Cork, Ireland",
        category: "Medieval Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?blarney-castle,cork,ireland,ivy,medieval",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?blarney-stone,castle,tower,ireland,ancient",
          "https://source.unsplash.com/1200x1600/?blarney,gardens,rock-close,ireland,celtic"
        ],
        description: "A 15th-century castle tower containing the legendary Blarney Stone, said to bestow the gift of eloquence on those who kiss it.",
        longDescription: "Blarney Castle is a 15th-century tower house near Cork, built by Cormac Laidir MacCarthy, Lord of Muskerry, in 1446. The castle's global fame rests on the Blarney Stone — a block of Carboniferous limestone set into the battlements 26 metres above the ground — which according to legend bestows the gift of eloquence ('the gift of the gab') on anyone who kisses it. Kissing requires leaning backwards over a sheer drop (with an iron safety railing) guided by an attendant.\n\nBeyond the stone, Blarney's extensive gardens are well worth exploring: the Rock Close, an ancient arrangement of stones around a 'Druid's Cave', the Witch's Kitchen, the Poison Garden (containing deadly plants), and the extensive parkland. The village of Blarney has a fine woollen mill selling traditional Irish knitwear.",
        details: {
          "Castle Built": "1446 (MacCarthy Lords)",
          "The Stone": "Carboniferous Limestone Battlements",
          "Tower Height": "26 Metres",
          "Legend": "Gift of Eloquence",
          "Gardens": "Rock Close, Poison Garden"
        },
        hours: "09:00 — 19:00 (Jun–Aug) | 09:00 — 17:30 (other months)",
        price: "€18.00",
        coordinates: "51.9290° N, 8.5702° W",
        tip: "Arrive early to avoid long queues for the stone. The gardens and Rock Close are as rewarding as the castle itself and less crowded. Combine with Cork city (30 min) and the English Market for a full day in County Cork."
      },
      {
        id: "ring-of-kerry",
        name: "Ring of Kerry",
        location: "County Kerry, Ireland",
        category: "Scenic Drive",
        heroImage: "https://source.unsplash.com/3840x2160/?ring-of-kerry,ireland,kerry,atlantic,landscape",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?kerry,skellig-michael,island,monks,ireland",
          "https://source.unsplash.com/1200x1600/?killarney,national-park,lakes,kerry,ireland"
        ],
        description: "A 179-kilometre circular route through Ireland's most dramatic coastal and mountain scenery, with views to the Skellig Islands.",
        longDescription: "The Ring of Kerry (Slí na Saoirse) is a 179-kilometre circular driving route around the Iveragh Peninsula in County Kerry, taking in rugged Atlantic headlands, horseshoe bays, medieval ring forts, and the mountains of MacGillycuddy's Reeks (Ireland's highest range, topped by Carrauntoohil at 1,038 metres). The route passes through the charming towns of Kenmare, Waterville, and Cahersiveen, and affords stunning views across the Atlantic to the Skellig Islands.\n\nSkellig Michael — a 218-metre rock pinnacle 12 kilometres offshore with a 6th-century monastery clinging impossibly to its upper terraces — is accessible by boat from Portmagee. The monastery (where monk cells built of dry stone corbelling survive intact after 1,400 years, and 600 stone steps climb the cliff face) gained global fame as a filming location for Star Wars: The Force Awakens.",
        details: {
          "Route Length": "179 km (Circular)",
          "Highest Peak": "Carrauntoohil 1,038 m",
          "Skellig Michael": "6th-Century Monastery (UNESCO)",
          "Killarney NP": "Within the Ring",
          "Star Wars": "Filmed at Skellig Michael"
        },
        hours: "Always accessible | Skellig boats: May–September",
        price: "Free | Skellig Michael boat €80–100",
        coordinates: "51.9000° N, 10.0500° W",
        tip: "Drive anti-clockwise (the direction coaches take clockwise — it reduces head-on traffic). Book Skellig Michael boat trips months in advance — weather cancellations are frequent and places are very limited. Stay in Kenmare for the best Ring of Kerry base."
      },
      {
        id: "giants-causeway",
        name: "Giant's Causeway",
        location: "County Antrim, Northern Ireland",
        category: "UNESCO Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?giants-causeway,northern-ireland,basalt,columns,coast",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?giants-causeway,hexagonal,basalt,columns,waves",
          "https://source.unsplash.com/1200x1600/?giants-causeway,antrim-coast,sunset,dramatic"
        ],
        description: "40,000 interlocking basalt columns formed by ancient volcanic cooling — Northern Ireland's only UNESCO World Heritage Site.",
        longDescription: "The Giant's Causeway consists of approximately 40,000 interlocking basalt columns, mostly hexagonal in cross-section, formed when a lava plateau cooled and contracted rapidly around 60 million years ago during the Paleogene volcanic episode that also created Fingal's Cave in Scotland (from the same lava flow). The columns descend in steps from the cliff to the sea and range from 12 centimetres to 50 centimetres across, their near-perfect geometry creating an extraordinary natural pavement.\n\nIrish mythology explains them as the work of the giant Finn McCool (Fionn mac Cumhaill), who built a causeway to Scotland to fight the Scottish giant Benandonner. The surrounding Causeway Coast — with the ruined clifftop Dunluce Castle, the Carrick-a-Rede rope bridge, the Bushmills whiskey distillery, and the Dark Hedges avenue of ancient beech trees — is one of the UK's finest stretches of scenery.",
        details: {
          "Formation Age": "~60 Million Years",
          "Columns": "~40,000",
          "Column Shape": "Mostly Hexagonal",
          "UNESCO Status": "World Heritage Site 1986",
          "Same Lava Flow As": "Fingal's Cave, Scotland"
        },
        hours: "24 hours (Visitor Centre 09:00–18:00)",
        price: "Free (National Trust members free) | Visitor Centre £14.00",
        coordinates: "55.2408° N, 6.5115° W",
        tip: "Park at the visitor centre and walk down (free shuttle also available). The Shepherd's Steps path up to the cliff walk avoids the crowds and gives the best elevated perspective. Combine with Bushmills Distillery and Carrick-a-Rede rope bridge in the same coastal day."
      },
      {
        id: "rock-of-cashel",
        name: "Rock of Cashel",
        location: "County Tipperary, Ireland",
        category: "Medieval Ecclesiastical Complex",
        heroImage: "https://source.unsplash.com/3840x2160/?rock-of-cashel,tipperary,ireland,medieval,ruins",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cashel,cormacs-chapel,romanesque,ireland",
          "https://source.unsplash.com/1200x1600/?rock-of-cashel,landscape,ireland,grey-sky,atmosphere"
        ],
        description: "A dramatic cluster of medieval ruins atop a limestone outcrop — once the seat of the Kings of Munster and home to the finest Romanesque chapel in Ireland.",
        longDescription: "The Rock of Cashel (Carraig Phádraig) is a 90-metre limestone outcrop rising abruptly from the Tipperary plain, fortified since the 4th century as the seat of the Kings of Munster (later Eóganacht) and the site of St Patrick's legendary baptism of King Aenghus in 450 AD. The current cluster of ruins — Cormac's Chapel (1127–1134), the Round Tower (12th century), Gothic Cathedral (13th century), and Hall of the Vicars Choral (15th century) — represents one of the finest ensembles of medieval ecclesiastical architecture in Ireland.\n\nCormac's Chapel is the architectural masterpiece: Ireland's most complete example of Irish Romanesque architecture, with interlaced carved stone arches, painted frescoes (rare survival), Teutonic twin towers, and a carved sarcophagus that may be the tomb of King Cormac himself.",
        details: {
          "Ancient Seat": "Kings of Munster (4th Century)",
          "Cormac's Chapel": "1127–1134 (Finest Irish Romanesque)",
          "Round Tower": "12th Century",
          "Cathedral": "13th Century Gothic",
          "St Patrick Legend": "Baptised King Aenghus Here (450 AD)"
        },
        hours: "09:00 — 17:30 (Sep–May) | 09:00 — 20:00 (Jun–Aug)",
        price: "€8.00",
        coordinates: "52.5203° N, 7.8899° W",
        tip: "Visit at dusk when the rock is lit and tourists have left — the silhouette against the evening sky is extraordinary. The Hall of the Vicars contains Ireland's finest replica of the St Patrick's Cross (the original is sheltered inside). Combine with the nearby Hore Abbey ruins (free, 5-minute walk)."
      },
      {
        id: "newgrange-passage-tomb",
        name: "Newgrange Passage Tomb",
        location: "County Meath, Ireland",
        category: "Prehistoric Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?newgrange,ireland,passage-tomb,prehistoric,stone-age",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?newgrange,entrance-stone,spirals,megalithic",
          "https://source.unsplash.com/1200x1600/?bru-na-boinne,aerial,circular,meath,ireland"
        ],
        description: "A 5,200-year-old passage tomb aligned with the winter solstice sunrise — older than Stonehenge and the Egyptian pyramids.",
        longDescription: "Newgrange (Sí an Bhrú) is a Neolithic passage tomb in the Boyne Valley built around 3,200 BC, making it approximately 500 years older than the Great Pyramid of Giza and 1,000 years older than Stonehenge. The circular mound, 85 metres in diameter and 13 metres high, covers a 19-metre stone-lined passage leading to a cruciform chamber with a corbelled roof that has remained watertight for 5,200 years.\n\nThe monument's most extraordinary feature is the roof box above the entrance, positioned with such precision that for five days around the winter solstice (19–23 December) the rising sun shines directly through the roof box and along the 19-metre passage to illuminate the chamber floor for 17 minutes. The annual winter solstice lottery for the 50 places in the chamber during this event receives 30,000+ applications.",
        details: {
          "Built": "~3,200 BC",
          "Older Than": "Stonehenge by 1,000 years; Giza by 500 years",
          "Passage Length": "19 Metres",
          "Solstice Event": "Sunrise illuminates chamber for 17 min",
          "UNESCO Status": "Brú na Bóinne World Heritage Site"
        },
        hours: "Tours from visitor centre | 09:00 — 17:30 (Nov–Jan) | 09:00 — 19:00 (summer)",
        price: "€8.00 (with guided tour from visitor centre)",
        coordinates: "53.6947° N, 6.4755° W",
        tip: "Access is via guided tours departing the Brú na Bóinne Visitor Centre only. Book in advance online. Enter the winter solstice lottery in October for a chance at the most magical experience in Irish prehistory. Combine with nearby Knowth and Dowth tombs."
      }
    ]
  },

  "turkey": {
    id: "turkey",
    name: "Turkey",
    region: "Southeast Europe / Western Asia",
    coordinates: "38.9637° N, 35.2433° E",
    lat: 38.9637,
    lng: 35.2433,
    heroImage: "https://source.unsplash.com/3840x2160/?turkey,cappadocia,hot-air-balloon,sunrise,travel",
    description: "Turkey straddles two continents and three millennia of civilisation — from Hittite temples to Byzantine mosaics, Ottoman palaces, and the geological surrealism of Cappadocia. Its cuisine, bazaars, and coastlines make it one of the world's most complete travel destinations.",
    terrain: "Anatolian Plateau / Taurus Mountains / Aegean Coast",
    climate: "Mediterranean Csa / Continental Dfb / Semi-arid BSk",
    biodiversity: "Anatolian Steppe, Pontic Forest & Aegean Maquis",
    destinations: [
      {
        id: "hagia-sophia",
        name: "Hagia Sophia",
        location: "Istanbul, Turkey",
        category: "Historic Religious Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?hagia-sophia,istanbul,turkey,dome,byzantine",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hagia-sophia,interior,dome,mosaics,light",
          "https://source.unsplash.com/1200x1600/?hagia-sophia,exterior,minarets,istanbul,night"
        ],
        description: "The supreme achievement of Byzantine architecture — a 6th-century cathedral whose 31-metre dome remained the world's largest for nearly 1,000 years.",
        longDescription: "The Hagia Sophia (Holy Wisdom) was built by Emperor Justinian I between 532 and 537 AD, replacing two earlier churches destroyed in the Nika riots. Designed by the mathematician Anthemius of Tralles and engineer Isidore of Miletus, its central dome — 31 metres in diameter, 55 metres above the floor — appeared to float on a ring of 40 windows that flooded the interior with light, an effect contemporary chronicler Procopius described as 'suspended from heaven by a golden chain.'\n\nConverted to a mosque after the Ottoman conquest of Constantinople in 1453 by Mehmed II, then secularised as a museum by Atatürk in 1934, then reconverted to a mosque by presidential decree in 2020, the Hagia Sophia is now again an active place of Islamic worship with non-Muslim visitors welcome outside prayer times. The extraordinary Byzantine gold mosaics of Christ, the Virgin, and the emperors survive in the upper galleries alongside the Ottoman calligraphy medallions added in the 17th century.",
        details: {
          "Built": "532–537 AD",
          "Builders": "Anthemius of Tralles & Isidore of Miletus",
          "Dome Diameter": "31 Metres",
          "Height": "55 Metres",
          "Status": "Active Mosque & UNESCO World Heritage"
        },
        hours: "Open daily except during Friday prayer | 09:00 — 17:00",
        price: "Free (donations welcome)",
        coordinates: "41.0086° N, 28.9802° E",
        tip: "Visit outside the five daily prayer times (check schedule on arrival). Women must cover their hair — scarves available at the entrance. The upper gallery Byzantine mosaics (accessed via a separate ramp) are extraordinary and less crowded. Combine with the adjacent Blue Mosque."
      },
      {
        id: "cappadocia-hot-air-balloons",
        name: "Cappadocia Hot-Air Balloons",
        location: "Nevşehir, Central Anatolia",
        category: "Unique Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?cappadocia,hot-air-balloon,turkey,sunrise,fairy-chimney",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cappadocia,fairy-chimneys,canyon,rock,valley",
          "https://source.unsplash.com/1200x1600/?cappadocia,cave-hotel,goreme,underground,turkey"
        ],
        description: "A surreal volcanic landscape of 'fairy chimneys', cave cities, and rock-carved churches — best seen from a sunrise hot-air balloon.",
        longDescription: "Cappadocia's extraordinary landscape was formed by volcanic eruptions from Erciyes and Hasan mountains, which covered the plateau in soft tuff (compressed ash) that was subsequently eroded by wind and rain into the bizarre mushroom-shaped 'fairy chimneys', deep gorges, and rounded valleys — notably the Rose, Red, and Love Valleys around Göreme. Early Christians carved entire cities, churches, and monasteries into the soft rock, decorating interiors with Byzantine frescoes; Derinkuyu underground city descends 85 metres through 18 levels.\n\nThe world's most popular hot-air balloon destination, Cappadocia launches up to 150 balloons at sunrise from the Göreme basin between March and November, creating one of travel photography's most iconic images as colourful balloons rise over the fairy chimneys in the golden morning light.",
        details: {
          "Rock Type": "Volcanic Tuff (Ignimbrite)",
          "Fairy Chimneys": "Erosion of Capped Tuff Columns",
          "Underground City": "Derinkuyu (85 m Deep, 18 Levels)",
          "Balloon Launches": "Up to 150 at Sunrise",
          "UNESCO Status": "Göreme National Park World Heritage"
        },
        hours: "Balloon flights at sunrise (weather dependent)",
        price: "Balloon flight from €150",
        coordinates: "38.6431° N, 34.8289° E",
        tip: "Book balloon flights directly with reputable operators (Butterfly Balloons, Kapadokya Balloons) at least a month ahead. Stay in a cave hotel in Göreme for the full experience. Hike the Rose Valley at sunset — free, uncrowded, and spectacular."
      },
      {
        id: "pamukkale-thermal-pools",
        name: "Pamukkale Thermal Pools",
        location: "Denizli, Southwest Turkey",
        category: "Natural Thermal Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?pamukkale,travertine,white,pools,turkey,thermal",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?pamukkale,terrace-pools,turquoise,cotton-castle",
          "https://source.unsplash.com/1200x1600/?hierapolis,ruins,pamukkale,ancient,turkey"
        ],
        description: "The 'Cotton Castle' — cascading white travertine terraces filled with turquoise thermal water above the ruins of ancient Hierapolis.",
        longDescription: "Pamukkale (Cotton Castle in Turkish) is a series of 17 travertine terraces on a hillside, formed over millennia by calcium carbonate-rich thermal water (36°C) flowing from natural springs, depositing white calcite as it cools and evaporates down the slope, building progressively deeper pools rimmed with gleaming white mineral formations. The Turkish Riviera's most surreal natural spectacle, its terraces can be seen from 20 kilometres away as a white scar on the hillside.\n\nAbove the terraces stand the extensive ruins of Hierapolis, a Greco-Roman spa city founded around 190 BC and developed by successive rulers who exploited the thermal waters. The city's theatre (3,000 seats), necropolis (the largest in Asia Minor), and the Plutonion (a gate to the underworld of Hades, from which deadly CO₂ gas still seeps) are all within the UNESCO World Heritage Site.",
        details: {
          "Travertine Terraces": "17 (Active)",
          "Water Temperature": "36°C",
          "Ancient City": "Hierapolis (Founded ~190 BC)",
          "Theatre Capacity": "12,000 Seats",
          "UNESCO Status": "World Heritage Site 1988"
        },
        hours: "06:00 — 22:00 daily",
        price: "€12.00",
        coordinates: "37.9234° N, 29.1210° E",
        tip: "Visit the terraces early morning (06:00–08:00) or evening (18:00–20:00) to avoid the enormous midday crowds. Remove shoes before entering the pools — mandatory. The Antique Pool (where you swim among fallen Roman columns in 36°C water) is separately ticketed but extraordinary."
      },
      {
        id: "ephesus-ancient-city",
        name: "Ephesus Ancient City",
        location: "Selçuk, Aegean Turkey",
        category: "Ancient Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?ephesus,turkey,ancient,ruins,celcus-library",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?ephesus,celsus-library,facade,columns,ancient",
          "https://source.unsplash.com/1200x1600/?ephesus,colonnaded-street,marble,turkey,ruins"
        ],
        description: "The best-preserved classical city in the Mediterranean — the Roman metropolis that once held 500,000 people.",
        longDescription: "Ephesus was one of the greatest cities of the ancient world — the capital of the Roman province of Asia, with a population estimated at 500,000 in the 1st century AD, making it the second-largest city in the Roman Empire after Rome itself. The city's 3-kilometre main street (Arcadiane), its Great Theatre seating 25,000, the magnificent Library of Celsus (110 AD) with its two-storey marble façade, and the terrace houses with intact Roman mosaic floors and frescoes paint an extraordinarily vivid picture of Roman urban life.\n\nThe Library of Celsus — one of the three largest libraries of antiquity — stands as the most iconic façade in Turkey's archaeological landscape. Its upper-storey figures represent Wisdom, Virtue, Intelligence, and Knowledge. The nearby Temple of Artemis (one of the Seven Wonders of the Ancient World) is now reduced to a single re-erected column — a poignant contrast to its former splendour.",
        details: {
          "Peak Population": "~500,000 (1st Century AD)",
          "Library of Celsus": "110 AD (One of Three Great Libraries)",
          "Great Theatre": "25,000 Seats",
          "Terrace Houses": "6 Preserved with Frescoes & Mosaics",
          "Seven Wonders": "Temple of Artemis (1 column remaining)"
        },
        hours: "08:00 — 18:30 (summer) | 08:00 — 17:00 (winter)",
        price: "TRY 450 (~€15.00)",
        coordinates: "37.9395° N, 27.3415° E",
        tip: "Enter from the Upper Gate to walk downhill to the Library (the natural direction of Roman processions). Visit the terrace houses (separate ticket) — the mosaics and frescoes are extraordinary. Start at 08:00 before tour buses arrive and temperatures soar."
      },
      {
        id: "topkapi-palace",
        name: "Topkapı Palace",
        location: "Istanbul, Turkey",
        category: "Ottoman Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?topkapi-palace,istanbul,ottoman,turkey,bosphorus",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?topkapi,harem,tiles,iznik,ottoman",
          "https://source.unsplash.com/1200x1600/?topkapi,treasury,sultans-throne,istanbul"
        ],
        description: "The administrative heart of the Ottoman Empire for 400 years — a palace of domed pavilions, jewelled thrones, and the famous Harem.",
        longDescription: "Topkapı Sarayı was the primary administrative, educational, and artistic centre of the Ottoman Empire from its construction by Mehmed II in the 1460s until the court moved to the Europeanised Dolmabahçe Palace in 1856. At its peak the palace housed up to 4,000 people — the sultan, his family, concubines, court officials, and 8,000 pages trained in the Palace School. The complex of four courtyards, domed pavilions, and the labyrinthine Harem (400 rooms, home to the sultan's women and children) covers 700,000 square metres on a promontory overlooking the Bosphorus and the confluence of the Golden Horn.\n\nThe Imperial Treasury houses some of the world's most spectacular objects: the 86-carat Spoonmaker's Diamond, the Topkapı Dagger encrusted with three enormous emeralds, Suleiman the Magnificent's throne, and a solid gold crib. The sacred relics section contains items attributed to the Prophet Muhammad.",
        details: {
          "Built": "1460s by Mehmed II",
          "Active Palace": "Until 1856",
          "Area": "700,000 m²",
          "Harem Rooms": "~400",
          "Key Treasure": "Spoonmaker's Diamond (86 carats)"
        },
        hours: "09:00 — 18:45 (Apr–Oct) | 09:00 — 16:45 (Nov–Mar) | Closed Tuesday",
        price: "TRY 350 (~€11.00) | Harem extra TRY 200",
        coordinates: "41.0115° N, 28.9833° E",
        tip: "Book Harem entrance separately in advance — it has a separate capacity limit. The Treasury and Harem are the top priorities. Queue for the Harem early. The fourth courtyard terraces offer the best Bosphorus views."
      },
      {
        id: "blue-mosque",
        name: "Blue Mosque (Sultan Ahmed)",
        location: "Istanbul, Turkey",
        category: "Ottoman Mosque",
        heroImage: "https://source.unsplash.com/3840x2160/?blue-mosque,sultan-ahmed,istanbul,turkey,minarets",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?blue-mosque,interior,iznik-tiles,blue,dome",
          "https://source.unsplash.com/1200x1600/?blue-mosque,six-minarets,istanbul,dusk"
        ],
        description: "Istanbul's iconic six-minaret mosque — its interior entirely clad in 20,000 hand-painted blue Iznik tiles.",
        longDescription: "The Sultanahmet Camii (Sultan Ahmed Mosque, completed 1616) earned its English nickname from the 20,000 hand-painted blue Iznik ceramic tiles — with tulip, carnation, and cypress motifs in turquoise and cobalt — that cover its interior walls, vaults, and semi-domes, creating a luminous azure atmosphere beneath 260 stained-glass windows. Its six minarets were controversial at the time — only the Masjid al-Haram in Mecca had previously been accorded six minarets — requiring the sultan to add a seventh minaret to Mecca to resolve the diplomatic incident.\n\nBuilt by Sultan Ahmed I facing the Hagia Sophia across the Hippodrome, the mosque was designed by architect Sedefkâr Mehmed Ağa as a deliberate challenge to the Byzantine masterpiece opposite. It remains in active use as a mosque with five daily prayer services, during which it is closed to non-Muslim visitors.",
        details: {
          "Completed": "1616",
          "Architect": "Sedefkâr Mehmed Ağa",
          "Interior Tiles": "20,000 Iznik Tiles",
          "Minarets": "6 (Controversial at the Time)",
          "Status": "Active Mosque"
        },
        hours: "09:00 — 18:00 (closed during 5 daily prayers)",
        price: "Free",
        coordinates: "41.0054° N, 28.9768° E",
        tip: "Non-Muslim visitors enter through the side entrance (not the main door). Women must cover hair and shoulders; men must remove shoes. The best exterior photographs are from the Hippodrome at dusk. Visit the adjacent Basilica Cistern (6th-century underground reservoir) on the same day."
      }
    ]
  },

  "russia": {
    id: "russia",
    name: "Russia",
    region: "Eastern Europe / Northern Asia",
    coordinates: "61.5240° N, 105.3188° E",
    lat: 61.5240,
    lng: 105.3188,
    heroImage: "https://source.unsplash.com/3840x2160/?russia,moscow,red-square,kremlin,travel",
    description: "Russia's vast territory spans 11 time zones, from the gilded domes of Moscow and the Baroque palaces of St Petersburg to the primeval wilderness of Lake Baikal and the volcanic peninsula of Kamchatka. Its cultural heritage — Tolstoy, Tchaikovsky, Fabergé — is matched only by the grandeur of its imperial architecture.",
    terrain: "East European Plain / Ural Mountains / Siberian Taiga",
    climate: "Continental Dfb / Subarctic Dfc",
    biodiversity: "Taiga Boreal Forest, Steppe & Arctic Tundra",
    destinations: [
      {
        id: "red-square",
        name: "Red Square",
        location: "Moscow, Russia",
        category: "Historic Square",
        heroImage: "https://source.unsplash.com/3840x2160/?red-square,moscow,russia,kremlin,night",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?red-square,saint-basils,cathedral,moscow,snow",
          "https://source.unsplash.com/1200x1600/?kremlin,moscow,walls,towers,russia"
        ],
        description: "Russia's most iconic public space — flanked by the Kremlin walls, Lenin's Mausoleum, and the onion-domed fantasy of St Basil's Cathedral.",
        longDescription: "Red Square (Krasnaya Ploshchad — 'Red' historically meaning 'Beautiful' in Old Russian) has been the symbolic heart of Russia since the late 15th century, when Ivan III cleared the wooden buildings east of the Kremlin to create a vast public space for markets, proclamations, and public executions. The square's dimensions — 330 metres long, 70 metres wide — are perfect for the military parades that have defined its Soviet and Russian identity.\n\nThe ensemble surrounding the square is extraordinary: the triangular red-brick Kremlin walls (15th century), Lenin's Mausoleum (1930, where the embalmed body is still displayed), GUM department store (1893, a neo-Russian style glass-vaulted shopping arcade), the Kazan Cathedral (1993 rebuild), and at the southern end, St Basil's Cathedral — its eight asymmetric onion domes in spiralling colours one of the most recognisable buildings on Earth.",
        details: {
          "Dimensions": "330 x 70 Metres",
          "St Basil's Cathedral": "1561 (Ivan the Terrible)",
          "Kremlin Walls": "15th Century",
          "Lenin's Mausoleum": "1930",
          "UNESCO Status": "Kremlin & Red Square World Heritage"
        },
        hours: "Square: 24 hours | St Basil's: 11:00–18:00",
        price: "Square free | St Basil's RUB 800",
        coordinates: "55.7539° N, 37.6208° E",
        tip: "Visit at night when St Basil's is illuminated and crowds are thinner. The Kremlin museums (separate ticket) house the extraordinary Armoury Chamber with Fabergé eggs and imperial regalia. Queue for Lenin's Mausoleum early on Tuesday–Saturday."
      },
      {
        id: "hermitage-museum",
        name: "Hermitage Museum",
        location: "St Petersburg, Russia",
        category: "World-Class Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?hermitage,saint-petersburg,russia,winter-palace,baroque",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hermitage,interior,golden-hall,chandelier,russia",
          "https://source.unsplash.com/1200x1600/?winter-palace,neva-river,saint-petersburg,blue"
        ],
        description: "One of the world's great art museums, housed in the Winter Palace — six buildings containing 3 million artefacts.",
        longDescription: "The State Hermitage Museum in St Petersburg is one of the largest and oldest art museums in the world, with a collection of nearly 3 million items spanning prehistoric artefacts to 20th-century avant-garde, including masterworks by Leonardo, Michelangelo, Raphael, Titian, Rembrandt, Rubens, Velázquez, Monet, and Matisse. The museum occupies six historic buildings along the Neva River embankment, of which the Winter Palace (1754–1762, designed by Bartolomeo Rastrelli) is the most magnificent — a vast Baroque green-and-white pile of 1,057 rooms.\n\nCatherine the Great founded the Hermitage collection in 1764 as a private museum by purchasing 225 paintings from Berlin merchant Johann Ernst Gotzkowski. Today the museum's highlight rooms include the Jordan Staircase, the Malachite Hall, the Golden Drawing Room, and the 20th-century galleries where Matisse's The Dance and The Music hang.",
        details: {
          "Founded": "1764 (Catherine the Great)",
          "Collection": "~3 Million Items",
          "Winter Palace Rooms": "1,057",
          "Gallery Length": "~24 km (if all rooms visited)",
          "Star Works": "Matisse's 'The Dance', Rembrandt's 'The Return'"
        },
        hours: "10:30 — 18:00 (Tue–Sun) | Until 21:00 Wednesday",
        price: "RUB 700",
        coordinates: "59.9398° N, 30.3146° E",
        tip: "Pre-book timed entry online. Focus on 3–4 rooms per visit or risk overwhelming fatigue. The Jordan Staircase is free to enter. Visit on a Wednesday evening for quieter galleries and extended hours."
      },
      {
        id: "lake-baikal",
        name: "Lake Baikal",
        location: "Siberia, Russia",
        category: "UNESCO Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?lake-baikal,siberia,russia,frozen,winter,ice",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?baikal,clear-ice,bubbles,frozen,blue",
          "https://source.unsplash.com/1200x1600/?baikal,olkhon-island,summer,lake,russia"
        ],
        description: "The world's deepest and oldest lake — containing 20% of Earth's unfrozen fresh water in the heart of Siberia.",
        longDescription: "Lake Baikal is the world's deepest lake (1,642 metres) and oldest lake (25–30 million years), containing approximately 23,615 cubic kilometres of water — roughly 20% of all the world's unfrozen surface fresh water. Its age and isolation have produced an extraordinary degree of endemism: 80% of its 1,700 species exist nowhere else on Earth, including the nerpa (Baikal seal — the world's only freshwater seal species) and the unique omul fish.\n\nIn winter (February–March), the lake freezes to a depth of 70–90 centimetres, creating a surface of crystal-clear blue ice with extraordinary trapped bubble formations visible beneath — one of Russia's most spectacular photographic subjects. Olkhon Island, connected to the western shore by ice road in winter, is the spiritual heart of Baikal and a centre of Siberian Buryat shamanic culture.",
        details: {
          "Depth": "1,642 Metres (World's Deepest)",
          "Age": "25–30 Million Years (World's Oldest)",
          "Fresh Water": "~20% of Global Unfrozen Supply",
          "Endemic Species": "80% Found Nowhere Else",
          "UNESCO Status": "World Heritage Site 1996"
        },
        hours: "Always accessible",
        price: "Free | Tours from RUB 2,000",
        coordinates: "53.5000° N, 108.1667° E",
        tip: "Visit in February–March for the ice formations (hire a local guide for ice hovercraft tours). July–August for hiking and clear water. Fly to Irkutsk (closest city) and take a 1.5-hour transfer to the lake. Olkhon Island is the essential base."
      },
      {
        id: "saint-basils-cathedral",
        name: "St Basil's Cathedral",
        location: "Moscow, Russia",
        category: "Architectural Masterpiece",
        heroImage: "https://source.unsplash.com/3840x2160/?saint-basil,cathedral,moscow,onion-domes,colourful",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?saint-basil,domes,close-up,moscow,spiral",
          "https://source.unsplash.com/1200x1600/?saint-basil,interior,pillar,frescoes,russia"
        ],
        description: "The polychrome onion-domed masterpiece commissioned by Ivan the Terrible to celebrate the conquest of the Khanate of Kazan.",
        longDescription: "The Cathedral of the Intercession on the Moat (universally known as St Basil's Cathedral) was built between 1555 and 1561 by Ivan the Terrible to commemorate his military victory over the Khanate of Kazan, with each of its nine domed chapels dedicated to a different saint whose feast day corresponded to a battle victory. The architects — records are unclear whether this was Russian master Postnik Yakovlev or a foreign architect — created a building with no precedent in Russian or any other architecture: nine independent tower-chapels united on a single base, their onion domes individually coloured and patterned in spiralling, chevron, and ribbed designs.\n\nLegend has it that Ivan blinded the architects after completion to prevent them from creating anything comparable; the legend is almost certainly apocryphal (Postnik Yakovlev continued working for decades after), but speaks to how unprecedented the building appeared to contemporaries.",
        details: {
          "Built": "1555–1561",
          "Builder": "Ivan the Terrible",
          "Chapels": "9 (+ 1 Added Later)",
          "Commemoration": "Conquest of Kazan (1552)",
          "UNESCO Status": "Kremlin & Red Square World Heritage"
        },
        hours: "11:00 — 18:00 daily",
        price: "RUB 800",
        coordinates: "55.7525° N, 37.6231° E",
        tip: "Buy a combined ticket with the Kremlin museums for best value. Photograph from the northern end of Red Square for the classic shot. The interior is a labyrinth of tiny interconnected chapels with original frescoes — fascinating and unexpected."
      },
      {
        id: "peterhof-palace",
        name: "Peterhof Palace & Fountains",
        location: "St Petersburg, Russia",
        category: "Imperial Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?peterhof,palace,fountains,russia,saint-petersburg",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?peterhof,grand-cascade,golden,fountain,samson",
          "https://source.unsplash.com/1200x1600/?peterhof,lower-garden,fountains,gulf-of-finland"
        ],
        description: "Peter the Great's 'Russian Versailles' — a palace with 150 fountains and gilded statuary cascading to the Gulf of Finland.",
        longDescription: "Peterhof (Petrodvorets) was conceived by Peter the Great after his visit to Versailles in 1717 and built in competition with — and according to Peter's intent, surpassing — the French palace in the magnificence of its gardens and fountains. The Great Cascade, built 1715–1724, is one of the world's most spectacular fountain systems: 64 fountains and 225 gilded bronze statues on a hillside terrace cascade to the Sea Canal aligned with the Gulf of Finland.\n\nThe entire system was designed to operate without pumps — a remarkable engineering feat using gravity-fed pipes from reservoirs in the Ropsha Hills 22 kilometres away, a system still in operation today. The Grand Palace (rebuilt in the 1740s in the Elizabeth Baroque style) is elaborately decorated with parquet floors, painted ceilings, and Rococo interiors.",
        details: {
          "Designed By": "Peter the Great & Jean-Baptiste Le Blond",
          "Fountains": "150 (incl. 64 in Great Cascade)",
          "Gilded Statues": "225",
          "Fountain System": "Gravity-Fed (No Pumps)",
          "UNESCO Status": "Historic Centre of St Petersburg"
        },
        hours: "Lower Park: 09:00–21:00 | Fountains: 11:00–18:00 (May–Oct)",
        price: "Lower Park RUB 600 | Palace RUB 1,000",
        coordinates: "59.8853° N, 29.9048° E",
        tip: "Arrive by hydrofoil from St Petersburg's Hermitage pier (30 min, more scenic than bus). Visit on fountain days only (they don't run in winter). The Grand Cascade is best viewed from the Marine Canal for the grand perspective."
      },
      {
        id: "kazan-kremlin",
        name: "Kazan Kremlin",
        location: "Kazan, Republic of Tatarstan",
        category: "UNESCO Fortress",
        heroImage: "https://source.unsplash.com/3840x2160/?kazan-kremlin,russia,tatarstan,mosque,towers",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?kazan,kul-sharif-mosque,blue,tatarstan,russia",
          "https://source.unsplash.com/1200x1600/?kazan-kremlin,suyumbike-tower,leaning,history"
        ],
        description: "A UNESCO-listed fortress where Russian Orthodox churches and a modern mosque coexist within one citadel.",
        longDescription: "The Kazan Kremlin is the only surviving example of a Tatar fortified citadel and an outstanding example of the synthesis of Tatar and Russian architectural traditions — a reflection of the unique cultural identity of Tatarstan, Russia's largest Muslim-majority republic. The kremlin's white limestone walls (rebuilt in the 16th century after Ivan the Terrible's conquest of Kazan in 1552) enclose an extraordinary ensemble: the Annunciation Cathedral (1562), the Suyumbike Tower (a leaning tower with Tatar legend), and the spectacular Kul-Sharif Mosque (2005), rebuilt on the site of the main mosque destroyed by Ivan's troops.\n\nThe city of Kazan itself is a fascinating synthesis of Russian and Tatar culture — the Tatar language has equal official status with Russian, traditional Tatar cuisine (chak-chak honey pastry, echpochmak triangular pies) is sold alongside Russian staples, and the city's architecture ranges from 18th-century Russian classical to Soviet modernism.",
        details: {
          "Kremlin Founded": "Tatar Khanate (13th Century)",
          "Ivan's Conquest": "1552",
          "Kul-Sharif Mosque": "2005 (Rebuilt)",
          "UNESCO Status": "World Heritage Site 2000",
          "City Religion": "Muslim-Majority (Tatar Republic)"
        },
        hours: "Kremlin: 08:00–24:00 | Mosque: outside prayer times",
        price: "Kremlin grounds free | Museums from RUB 150",
        coordinates: "55.7988° N, 49.1052° E",
        tip: "Kazan is easily reached from Moscow by high-speed Sapsan train (3.5 hours) or overnight train. The old Tatar Quarter (Staro-Tatarskaya Sloboda) has excellent chak-chak cafés. Visit during Sabantuy festival (June) for Tatar folk culture."
      }
    ]
  },

  "belgium": {
    id: "belgium",
    name: "Belgium",
    region: "Western Europe",
    coordinates: "50.5039° N, 4.4699° E",
    lat: 50.5039,
    lng: 4.4699,
    heroImage: "https://source.unsplash.com/3840x2160/?belgium,bruges,canal,medieval,travel",
    description: "Belgium packs an extraordinary density of medieval art, Gothic architecture, and surrealist culture into a small nation. The capital Brussels is the de facto capital of Europe; Bruges and Ghent are among the continent's best-preserved medieval cities; and Belgian chocolate, beer, and frites are genuinely world-class.",
    terrain: "Coastal Plain / Ardennes Highlands / River Valleys",
    climate: "Oceanic Cfb",
    biodiversity: "Atlantic Mixed Forest & Ardennes Beech Forest",
    destinations: [
      {
        id: "grand-place-brussels",
        name: "Grand-Place Brussels",
        location: "Brussels, Belgium",
        category: "UNESCO Historic Square",
        heroImage: "https://source.unsplash.com/3840x2160/?grand-place,brussels,belgium,gothic,gilded",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?grand-place,brussels,night,illuminated,golden",
          "https://source.unsplash.com/1200x1600/?grand-place,town-hall,gothic,tower,brussels"
        ],
        description: "Victor Hugo's 'most beautiful square in the world' — a Gothic and Baroque ensemble of gilded guild houses surrounding Brussels' medieval Town Hall.",
        longDescription: "The Grand-Place (Grote Markt) is Brussels' central square and one of the most beautiful public spaces in Europe, its extraordinary ensemble of buildings representing the wealth and pride of the medieval guilds who built them. The Gothic Brussels Town Hall (Hotel de Ville, 1402–1459) dominates the west side, its 96-metre tower topped by the archangel Michael slaying a dragon. The surrounding guild houses — built after Spanish bombardment destroyed the square in 1695 and rebuilt in an even more elaborate Baroque style — are clad in gilded stonework and decorated with allegorical figures.\n\nVictor Hugo, who lived in Brussels in exile from 1851–1852, called the Grand-Place 'the most beautiful square in the world.' The biennial Flower Carpet (even years, mid-August) covers the entire square in 700,000 begonias in intricate geometric patterns — one of Belgium's most spectacular spectacles.",
        details: {
          "Town Hall Built": "1402–1459",
          "Guild Houses Rebuilt": "After 1695 Bombardment",
          "Tower Height": "96 Metres",
          "UNESCO Status": "World Heritage Site 1998",
          "Flower Carpet": "Biennial, August (Even Years)"
        },
        hours: "Always accessible | Town Hall tours seasonal",
        price: "Free",
        coordinates: "50.8467° N, 4.3525° E",
        tip: "Visit at night when the gilded facades are illuminated — it is even more spectacular than by day. The Flower Carpet (even years, August) is extraordinary but book accommodation a year ahead. Explore the Galeries Royales Saint-Hubert arcade (1847, the world's oldest covered shopping gallery) nearby."
      },
      {
        id: "bruges-historic-center",
        name: "Bruges Historic Centre",
        location: "Bruges, Flanders",
        category: "UNESCO Medieval City",
        heroImage: "https://source.unsplash.com/3840x2160/?bruges,belgium,canal,medieval,swans,reflection",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?bruges,market-square,belfry,gothic,belgium",
          "https://source.unsplash.com/1200x1600/?bruges,canal,bridge,evening,lights"
        ],
        description: "The 'Venice of the North' — a perfectly preserved medieval Flemish city of canals, gabled houses, and the finest collection of Early Flemish Primitives.",
        longDescription: "Bruges was the commercial capital of medieval Northern Europe, its wool trade and banking making it the wealthiest city north of the Alps in the 13th–14th centuries. When the Zwin estuary silted up in the late 15th century and trade moved to Antwerp, Bruges effectively froze in time, preserving its medieval canal network, the Market Square with the 83-metre Belfry (13th century), the Burg with the Basilica of the Holy Blood (purported to contain a drop of Christ's blood), and the Groeninge Museum housing masterpieces by Jan van Eyck and Hans Memling.\n\nThe city's 15 kilometres of canals and 83 bridges create an atmosphere of timeless northern romanticism, enhanced by the population of white swans (placed by city ordinance since 1488) that glide beneath the bridges. Bruges chocolate, lace, and beer are the finest in Belgium.",
        details: {
          "Commercial Peak": "13th–14th Century",
          "Belfry Height": "83 Metres (13th Century)",
          "Canal Length": "15 km",
          "Art Collection": "Jan van Eyck, Hans Memling",
          "UNESCO Status": "World Heritage Site 2000"
        },
        hours: "Old town always accessible | Belfry 10:00–18:00",
        price: "Old town free | Belfry €14.00",
        coordinates: "51.2093° N, 3.2247° E",
        tip: "Arrive early morning when the canals reflect in perfect stillness and crowds are absent. Climb the 366 steps of the Belfry for panoramic views. Take a canal boat tour (30 min, ~€12) for the best canal perspective. Avoid peak summer weekend crowds."
      },
      {
        id: "ghent-gravensteen",
        name: "Ghent & Gravensteen Castle",
        location: "Ghent, Flanders",
        category: "Medieval City",
        heroImage: "https://source.unsplash.com/3840x2160/?ghent,gravensteen,castle,belgium,medieval",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?ghent,graslei,canal,gabled-houses,evening",
          "https://source.unsplash.com/1200x1600/?gravensteen,castle-interior,medieval,dungeons"
        ],
        description: "Belgium's most underrated city — a university city with a perfectly preserved medieval heart, the Van Eyck masterpiece, and a moated castle.",
        longDescription: "Ghent (Gent) is the second city of Flanders and arguably Belgium's most complete medieval urban experience, with the triple towers of St Bavo's Cathedral, St Nicholas's Church, and the Belfry rising together from the Korenmarkt — a medieval triptych of ecclesiastical and civic power. St Bavo's houses the Ghent Altarpiece — the Adoration of the Mystic Lamb by Hubert and Jan van Eyck (1432), considered the world's first great oil painting and the most frequently stolen artwork in history.\n\nGravensteen Castle (Castle of the Counts, 1180), a moated medieval fortress rising from the city centre with an impressive display of medieval torture instruments in its museum, and the Graslei waterfront — a row of Romanesque and Gothic guild houses reflected in the Leie river — are Ghent's other unmissable sites. The city's vibrant student population keeps it authentic and affordable.",
        details: {
          "Gravensteen Built": "1180 (Philip of Alsace)",
          "Ghent Altarpiece": "1432 (Van Eyck Brothers)",
          "City Towers": "3 (Cathedral, St Nicholas, Belfry)",
          "University Founded": "1817",
          "Graslei Houses": "Romanesque–Gothic (12th–17th C.)"
        },
        hours: "Old town always open | Gravensteen 10:00–18:00",
        price: "Old town free | Gravensteen €14.00",
        coordinates: "51.0543° N, 3.7174° E",
        tip: "Climb the Belfry (free with Ghent City Card) for the best tower view. The Ghent Altarpiece is now in its own dedicated climate-controlled room in St Bavo's — book a viewing slot in advance. Ghent's Friday Market flea market is one of Belgium's best."
      },
      {
        id: "manneken-pis",
        name: "Manneken-Pis & Chocolate Quarter",
        location: "Brussels, Belgium",
        category: "Cultural Icon",
        heroImage: "https://source.unsplash.com/3840x2160/?manneken-pis,brussels,belgium,chocolate,icon",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?manneken-pis,statue,brussels,costume,belgium",
          "https://source.unsplash.com/1200x1600/?brussels,chocolate,pralines,shop,artisan"
        ],
        description: "Brussels' beloved 61-cm bronze statue — surrounded by the city's legendary chocolate shops and waffle vendors.",
        longDescription: "The Manneken-Pis (Little Pissing Man) is a 61-centimetre bronze fountain statue of a urinating boy, first installed in 1388 and replaced with the current version by sculptor Jérôme Duquesnoy in 1619. Far smaller than most visitors expect — and surrounded by disappointed crowds photographing it — the statue has become the self-deprecating symbol of Brussels' irreverent, Surrealist character. It has an extensive wardrobe of over 1,000 costumes (donated by dignitaries from around the world) displayed in the GardeRobe MannekenPis museum.\n\nThe surrounding Rue du Midi and Sablon quarter are Belgium's chocolate heartland, with artisan chocolatiers Pierre Marcolini, Mary, Wittamer, and Neuhaus all within walking distance, selling pralines — the invention of Jean Neuhaus (1912) — in which ganache, marzipan, or caramel centres are coated in Belgian couverture chocolate of extraordinary quality.",
        details: {
          "Statue Height": "61 cm",
          "First Installed": "1388",
          "Wardrobe": "1,000+ Costumes",
          "Belgian Pralines Invented": "1912 (Jean Neuhaus)",
          "Museum": "GardeRobe MannekenPis"
        },
        hours: "Statue always visible | Museum 10:00–17:00",
        price: "Statue free | Museum €6.00",
        coordinates: "50.8448° N, 4.3498° E",
        tip: "The statue is deliberately underwhelming — embrace the joke. Visit on a day when it's dressed in costume (check the schedule). Budget €20 for artisan chocolates from Pierre Marcolini or Wittamer — they are genuinely world-class. The Jeanneke-Pis (the female counterpart, 1985) is nearby on Impasse de la Fidélité."
      },
      {
        id: "dinant",
        name: "Dinant",
        location: "Namur, Wallonia",
        category: "Scenic River Town",
        heroImage: "https://source.unsplash.com/3840x2160/?dinant,belgium,meuse,citadel,colourful,houses",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?dinant,citadel,collegiate-church,meuse-river",
          "https://source.unsplash.com/1200x1600/?dinant,kayak,meuse,belgium,cliffs"
        ],
        description: "A dramatic cliff-sided town on the Meuse, birthplace of the saxophone, with a Gothic collegiate church and clifftop citadel.",
        longDescription: "Dinant (population 13,000) punches far above its weight as a visitor destination: wedged between a sheer limestone cliff and the River Meuse, dominated by the Gothic Collegiate Church of Our Lady (13th century, its distinctive bulbous onion tower rising directly from the river's edge) and the Citadel perched 100 metres above on the cliff (accessible by cable car or 408 steps), the town is one of the most dramatically sited in Belgium.\n\nDinant is the birthplace of Adolphe Sax, inventor of the saxophone (born here 1814), celebrated by a collection of giant painted saxophones on the main bridge. The local speciality is couque de Dinant — an extraordinarily hard biscuit made from spelt flour and honey, pressed in carved wooden moulds — sold in every bakery in town. The Meuse valley north of Dinant offers excellent kayaking through limestone canyon scenery.",
        details: {
          "Famous Native": "Adolphe Sax (Saxophone Inventor, 1814)",
          "Citadel": "100 Metres Above River",
          "Collegiate Church": "13th Century (Onion Tower)",
          "Local Product": "Couque de Dinant (Honey Biscuit)",
          "Kayaking": "Meuse River Canyon"
        },
        hours: "Town always accessible | Citadel 10:00–18:00",
        price: "Town free | Citadel €10.00",
        coordinates: "50.2613° N, 4.9122° E",
        tip: "Take the cable car to the Citadel for the best views over the Meuse bend. Kayak the Meuse from Anseremme to Dinant (10 km, 3 hours) for the most dramatic approach to the town. Visit the Adolphe Sax House museum if time allows."
      },
      {
        id: "waterloo-battlefield",
        name: "Waterloo Battlefield",
        location: "Wallonia, Belgium",
        category: "Historic Battlefield",
        heroImage: "https://source.unsplash.com/3840x2160/?waterloo,battlefield,belgium,lion-mound,history",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?waterloo,lion-mound,panorama,belgium,fields",
          "https://source.unsplash.com/1200x1600/?waterloo,museum,napoleon,weapons,belgium"
        ],
        description: "The field where Napoleon's military career ended on 18 June 1815 — one of history's most decisive and celebrated battles.",
        longDescription: "The Battle of Waterloo on 18 June 1815 was one of history's most consequential military engagements: Napoleon's last major battle, in which his Grande Armée of 72,000 was defeated by the Duke of Wellington's allied force and a Prussian army under Field Marshal Blücher, ending the Napoleonic Wars and reshaping Europe for the next century. The battlefield, just 15 kilometres south of Brussels, is one of the best-preserved major European battlefields, its rolling fields, farmhouses (Hougoumont, La Haie Sainte), and ridge lines largely unchanged.\n\nThe Butte du Lion (Lion Mound), an artificial hill 43 metres high built in 1826 on the spot where the Prince of Orange was wounded, offers a 360° view of the entire battlefield. The Memorial 1815 underground visitor centre uses state-of-the-art multimedia installations to tell the story of the battle and its 53,000 casualties.",
        details: {
          "Battle Date": "18 June 1815",
          "Outcome": "Napoleon's Final Defeat",
          "Casualties": "~53,000 (both sides, one day)",
          "Lion Mound Height": "43 Metres (Built 1826)",
          "Wellington's HQ": "Still Preserved in Waterloo Town"
        },
        hours: "Memorial 1815: 09:30–18:30 daily",
        price: "€16.00 (full site pass)",
        coordinates: "50.6799° N, 4.4117° E",
        tip: "The 360° panoramic painting in the Panorama rotunda (130 m circumference, 1912) is extraordinary and often overlooked. Visit Hougoumont farm (2 km away) for the most moving personal-scale encounter with the battle. The 200th anniversary commemorations in 2015 were spectacular — the bicentennial events are well worth researching."
      }
    ]
  },

  "denmark": {
    id: "denmark",
    name: "Denmark",
    region: "Northern Europe",
    coordinates: "56.2639° N, 9.5018° E",
    lat: 56.2639,
    lng: 9.5018,
    heroImage: "https://source.unsplash.com/3840x2160/?denmark,nyhavn,copenhagen,colourful,canal,travel",
    description: "Denmark, the southernmost of the Scandinavian countries, is a nation of flat landscapes, Viking heritage, and a quality of life and design culture that consistently ranks it among the world's happiest places. Copenhagen's culinary scene, fairy-tale castles, and cycling culture make it one of Europe's most pleasurable capitals.",
    terrain: "Flat Glacial Plain / Peninsula / Islands",
    climate: "Oceanic Cfb",
    biodiversity: "Temperate Deciduous Forest, Coastal Dune & Wetland",
    destinations: [
      {
        id: "nyhavn-waterfront",
        name: "Nyhavn Waterfront",
        location: "Copenhagen, Denmark",
        category: "Historic Harbour",
        heroImage: "https://source.unsplash.com/3840x2160/?nyhavn,copenhagen,denmark,colourful,canal,boats",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?nyhavn,evening,lights,boats,reflection,denmark",
          "https://source.unsplash.com/1200x1600/?nyhavn,historic-houses,canal,summer,copenhagen"
        ],
        description: "Copenhagen's most photographed street — a 17th-century canal lined with brightly painted townhouses and historic wooden ships.",
        longDescription: "Nyhavn (New Harbour) was built between 1671 and 1673 as a canal to connect the city centre with the sea, enabling ships to unload directly into the heart of Copenhagen. The northern quay's row of colourful 17th and 18th-century merchants' houses — painted in rich ochre, terracotta, crimson, and yellow — are some of the most-photographed facades in Scandinavia, their reflections shimmering in the canal water. Hans Christian Andersen lived at three different addresses on Nyhavn (numbers 18, 20, and 67) during his lifetime.\n\nToday Nyhavn is Copenhagen's busiest leisure district, its southern quay lined with café and restaurant terraces, historic wooden sailing ships moored alongside the canal, and harbour sightseeing boats departing from the quayside. The street leads into the broader inner harbour where the Little Mermaid statue (1913) — based on Andersen's fairy tale — sits on a rock in the harbour.",
        details: {
          "Canal Built": "1671–1673",
          "Famous Resident": "Hans Christian Andersen",
          "Little Mermaid": "1913 (1.25 m tall, 300 m away)",
          "Harbour Boats": "Historic Wooden Ships",
          "Café Tradition": "Southern quay terraces"
        },
        hours: "Always accessible",
        price: "Free",
        coordinates: "55.6796° N, 12.5904° E",
        tip: "Photograph from the Nyhavn bridge at the canal entrance for the classic colourful house vista. Visit in June–August for terrace café culture, or December for Christmas market atmosphere. Combine with the nearby Amalienborg Palace changing of the guard (noon daily)."
      },
      {
        id: "tivoli-gardens",
        name: "Tivoli Gardens",
        location: "Copenhagen, Denmark",
        category: "Historic Amusement Park",
        heroImage: "https://source.unsplash.com/3840x2160/?tivoli,gardens,copenhagen,denmark,lights,night",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?tivoli,rollercoaster,autumn,evening,fairytale",
          "https://source.unsplash.com/1200x1600/?tivoli,christmas,lights,denmark,winter"
        ],
        description: "The world's second-oldest amusement park — a magical garden of fairy lights, pavilions, and rides that inspired Walt Disney.",
        longDescription: "Tivoli Gardens opened in 1843 and has been delighting Copenhageners and visitors ever since, its enchanting combination of amusement rides, concert halls, restaurants, gardens, and theatrical illuminations making it one of the world's most visited theme parks despite its modest size. Walt Disney reportedly visited Tivoli in 1951 and was so inspired by its atmosphere of sophisticated magic that he took its design principles back to California as the template for Disneyland.\n\nThe park operates three seasons — summer (April–September), Halloween (mid-October), and Christmas (mid-November to early January) — each with distinct decorations and atmosphere. The historic wooden roller coaster (Rutschebanen, 1914), operated by a brakeman who rides on the back of each car, is one of the oldest operating wooden coasters in the world.",
        details: {
          "Opened": "1843 (2nd Oldest in World)",
          "Disney Inspiration": "Walt Disney visited 1951",
          "Wooden Coaster": "Rutschebanen (1914, Oldest Operating)",
          "Seasons": "Summer, Halloween & Christmas",
          "Annual Visitors": "~4 Million"
        },
        hours: "11:00 — 23:00 (summer) | Seasonal hours vary",
        price: "DKK 149 (entry) | Rides extra",
        coordinates: "55.6736° N, 12.5681° E",
        tip: "Visit on a weekday evening for the most magical atmosphere under the lights. The Christmas market (November–January) is extraordinarily atmospheric with mulled wine and Danish decorations. Ride the historic wooden coaster — a genuine vintage experience."
      },
      {
        id: "viking-ship-museum",
        name: "Viking Ship Museum",
        location: "Roskilde, Denmark",
        category: "Archaeological Museum",
        heroImage: "https://source.unsplash.com/3840x2160/?viking-ship,roskilde,museum,denmark,longship",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?viking-ship,longship,museum,wooden,roskilde",
          "https://source.unsplash.com/1200x1600/?roskilde,fjord,viking,boat,denmark"
        ],
        description: "Five original Viking ships raised from Roskilde Fjord in 1962, displayed in a stunning purpose-built harbour-side museum.",
        longDescription: "The Viking Ship Museum in Roskilde houses five original Viking ships deliberately sunk around 1070 AD to block the Roskilde Fjord approach to the city — raised and painstakingly conserved after their discovery in 1962. The five vessels represent the full range of Viking Age shipbuilding: a large ocean-going trading ship, a coastal ferry, a warship (longship), a smaller warship, and a large ferry — collectively demonstrating the extraordinary versatility and sophistication of Norse shipwrights working 1,000 years ago.\n\nThe museum's harbourside boat yard is where full-scale working replicas of the ships are built using traditional Viking tools and techniques, and visitors can join rowing and sailing trips on the fjord in replica vessels during summer. The adjacent Roskilde Cathedral — burial place of 39 Danish monarchs including Harald Bluetooth and Margrete I — is a UNESCO World Heritage Site.",
        details: {
          "Ships Recovered": "1962",
          "Ships Date": "~1070 AD",
          "Ships Count": "5 (Different Types)",
          "Boat Yard": "Traditional Viking Boatbuilding",
          "Nearby UNESCO": "Roskilde Cathedral"
        },
        hours: "10:00 — 17:00 daily (until 18:00 Jun–Aug)",
        price: "DKK 155",
        coordinates: "55.6464° N, 12.0803° E",
        tip: "Arrive by train from Copenhagen (25 min). In summer, join a rowing trip on the fjord in a replica Viking ship — outstanding experience. Combine with the Roskilde Cathedral (20-minute walk) for a complete medieval Danish day."
      },
      {
        id: "kronborg-castle",
        name: "Kronborg Castle",
        location: "Elsinore (Helsingør), Denmark",
        category: "Renaissance Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?kronborg,elsinore,denmark,hamlet,castle,sea",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?kronborg,ramparts,sea,blue,denmark",
          "https://source.unsplash.com/1200x1600/?kronborg,interior,great-hall,medieval"
        ],
        description: "Shakespeare's Elsinore — a Renaissance castle guarding the narrow strait between Denmark and Sweden, setting of Hamlet.",
        longDescription: "Kronborg Castle (Kronborg Slot) commands the narrowest point of the Øresund strait between Denmark and Sweden, where it collected tolls from passing ships for centuries — providing a substantial proportion of the Danish crown's revenue. Built in its current Renaissance form between 1574 and 1585 by King Frederick II, the castle became immortalised in English literature when William Shakespeare chose it as the setting for Hamlet (c.1600–1601), though Shakespeare probably never visited Denmark.\n\nThe castle's Great Hall is one of the longest Renaissance halls in northern Europe (62 metres), originally hung with 40 tapestries depicting Danish kings. The casemates below harbour a sleeping statue of the mythical Holger the Dane (Holger Danske), legendary defender of Denmark who according to legend will awaken if Denmark ever needs him. The castle is visible from Stockholm on a clear day.",
        details: {
          "Built": "1574–1585",
          "Builder": "Frederick II of Denmark",
          "Hamlet Setting": "Shakespeare (~1600)",
          "Great Hall Length": "62 Metres",
          "UNESCO Status": "World Heritage Site 2000"
        },
        hours: "10:00 — 17:30 (Apr–Oct) | 11:00 — 16:00 (Nov–Mar)",
        price: "DKK 145",
        coordinates: "56.0386° N, 12.6207° E",
        tip: "Take the train from Copenhagen (45 min) to Helsingør. Walk the ramparts for views across to Sweden (3.7 km away). The casemates (basement dungeons) are free to explore independently. Kronborg's Shakespeare Festival each summer performs Hamlet in the castle courtyard."
      },
      {
        id: "ribe-cathedral",
        name: "Ribe — Denmark's Oldest Town",
        location: "Ribe, Southwest Jutland",
        category: "Historic Town",
        heroImage: "https://source.unsplash.com/3840x2160/?ribe,denmark,cathedral,oldest-town,medieval",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?ribe,old-town,half-timbered,cobblestones,denmark",
          "https://source.unsplash.com/1200x1600/?ribe-cathedral,interior,romanesque,denmark"
        ],
        description: "Denmark's oldest and best-preserved medieval town — a Viking trading post turned Romanesque cathedral city on the Jutland marshes.",
        longDescription: "Ribe was established around 710 AD as one of the earliest Viking trading posts in Scandinavia, and its status as an ecclesiastical and trading centre throughout the medieval period ensured its physical preservation when commerce moved elsewhere. Today it is the best-preserved medieval town in Denmark, its winding streets lined with half-timbered houses, the 12th-century Romanesque Ribe Cathedral (Ribe Domkirke) with its extraordinary carved west doorway and roof-level 'cat's head' dragon gargoyles presiding over the market square.\n\nThe town's Viking Age heritage is explored in the outstanding ribe VikingeCenter living museum on the marshes south of town, where costumed guides demonstrate Viking Age trades and crafts on a reconstructed market site. The surrounding tidal marshes (Vadehavet) form part of the UNESCO-listed Wadden Sea — the world's largest tidal flat system.",
        details: {
          "Founded": "~710 AD (Viking Trading Post)",
          "Cathedral Built": "1117 (Romanesque)",
          "UNESCO Nearby": "Wadden Sea (Tidal Flats)",
          "Viking Museum": "ribe VikingeCenter",
          "Night Watch": "Traditional nightly walk (May–Sep)"
        },
        hours: "Old town always open | Cathedral 11:00–17:00",
        price: "Free | Cathedral DKK 25",
        coordinates: "55.3247° N, 8.7597° E",
        tip: "Join the free 20:00 Night Watchman tour (May–September) — a tradition dating from the medieval curfew, now a atmospheric storytelling walk. Visit ribe VikingeCenter for excellent hands-on Viking activities. The Wadden Sea tidal flat mudflat walk with a guide is a unique experience."
      },
      {
        id: "mons-klint-cliffs",
        name: "Møns Klint",
        location: "Møn Island, Denmark",
        category: "Natural Coastal Landmark",
        heroImage: "https://source.unsplash.com/3840x2160/?mons-klint,denmark,chalk-cliffs,sea,white",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?mons-klint,chalk,cliffs,baltic,denmark",
          "https://source.unsplash.com/1200x1600/?mon-island,forest-path,cliffs,geology"
        ],
        description: "Dramatic 128-metre chalk-white cliffs rising from the Baltic Sea on the island of Møn — Denmark's most spectacular natural sight.",
        longDescription: "Møns Klint is a 17-kilometre stretch of dazzling white chalk cliffs rising up to 128 metres above the Baltic Sea on the eastern coast of the island of Møn, formed from the remains of tiny marine organisms deposited 70 million years ago on the Cretaceous seabed and subsequently pushed up and tilted by glacial pressure during the last Ice Age. The cliffs are studded with flint nodules and are internationally important for their fossil content — sharks' teeth, sea urchins, and belemnites regularly tumble from the eroding face.\n\nThe GeoCenter Møns Klint at the clifftop provides excellent geological interpretation and access to the staircase descending to the beach (500 steps down, 500 back up). The island's prehistoric burial monuments (long barrows) and the extraordinarily vivid 12th-century frescoes in Elmelunde Church (Danish primitive style, brightly coloured) are additional highlights.",
        details: {
          "Cliff Height": "Up to 128 Metres",
          "Rock Type": "Cretaceous Chalk (70 Million Years)",
          "Length": "17 km",
          "Fossils": "Sharks' Teeth, Sea Urchins, Belemnites",
          "GeoCenter": "Interactive Geological Museum"
        },
        hours: "GeoCenter 10:00–18:00 (Apr–Oct)",
        price: "GeoCenter DKK 145 | Cliffs free",
        coordinates: "54.9760° N, 12.5440° E",
        tip: "Wear sturdy shoes for the steep staircase to the beach. The beach at the cliff base is excellent for fossil hunting (especially after storms). Visit Elmelunde Church's medieval frescoes (free) 10 km inland. The island is an International Dark Sky Park — outstanding stargazing."
      }
    ]
  },

  "finland": {
    id: "finland",
    name: "Finland",
    region: "Northern Europe",
    coordinates: "61.9241° N, 25.7482° E",
    lat: 61.9241,
    lng: 25.7482,
    heroImage: "https://source.unsplash.com/3840x2160/?finland,lapland,northern-lights,sauna,aurora,travel",
    description: "Finland, the 'Land of a Thousand Lakes', offers a serene and deeply human connection with nature — from the aurora skies of Lapland to the forested lakelands of Savonlinna and the design culture of Helsinki. The Finnish sauna is not merely a tradition but a philosophy of wellbeing.",
    terrain: "Lake Plateau / Lapland Fells / Archipelago Coast",
    climate: "Subarctic Dfc / Continental Dfb",
    biodiversity: "Boreal Taiga, Arctic Fell & Sphagnum Bog",
    destinations: [
      {
        id: "santa-claus-village",
        name: "Santa Claus Village",
        location: "Rovaniemi, Lapland",
        category: "Arctic Experience",
        heroImage: "https://source.unsplash.com/3840x2160/?santa-claus-village,rovaniemi,finland,arctic,reindeer,christmas",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?rovaniemi,arctic-circle,reindeer,sleigh,finland",
          "https://source.unsplash.com/1200x1600/?lapland,snow,husky-sled,finland,winter"
        ],
        description: "The official hometown of Santa Claus, on the Arctic Circle in Lapland — reindeer safaris, husky rides, and guaranteed white Christmas.",
        longDescription: "Rovaniemi, the capital of Finnish Lapland, sits exactly on the Arctic Circle (66°33'N), and Santa Claus Village was established here partly because Eleanor Roosevelt visited in 1950 and declared it the most fitting home for Father Christmas. The theme park village, developed from the 1980s onwards, has grown into one of the world's most popular winter tourism destinations, attracting 500,000+ visitors annually for reindeer sleigh rides, husky safaris, snowmobile tours, ice fishing, and — of course — an audience with Santa Claus himself.\n\nBeyond the village, Finnish Lapland's wilderness experiences are extraordinary: the aurora borealis appears on average 200 nights per year near Rovaniemi, and glass-roofed Aurora Cabins allow aurora viewing from the warmth of a heated bed. In summer the midnight sun provides 50+ days of continuous daylight.",
        details: {
          "Location": "Arctic Circle (66°33'N)",
          "Annual Visitors": "~500,000",
          "Aurora Nights": "~200 per Year",
          "Activities": "Reindeer, Husky, Snowmobile, Aurora",
          "Summer": "Midnight Sun (50+ Days)"
        },
        hours: "Village: daily, 10:00–18:00 | Experiences book in advance",
        price: "Entry free | Experiences from €80",
        coordinates: "66.5436° N, 25.8468° E",
        tip: "Book reindeer and husky experiences months in advance for December–January visits. The Aurora Cabins (various providers near Rovaniemi and Saariselkä) are worth the premium for the lying-down aurora experience. Rovaniemi town's Arktikum museum is excellent for Sami culture."
      },
      {
        id: "suomenlinna-fortress",
        name: "Suomenlinna Sea Fortress",
        location: "Helsinki, Finland",
        category: "UNESCO Sea Fortress",
        heroImage: "https://source.unsplash.com/3840x2160/?suomenlinna,helsinki,fortress,finland,sea,island",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?suomenlinna,walls,cannons,sea,island-fortress",
          "https://source.unsplash.com/1200x1600/?suomenlinna,historic-buildings,helsinki,archipelago"
        ],
        description: "An 18th-century sea fortress on six islands in Helsinki harbour — a UNESCO World Heritage Site and weekend retreat for Helsinkians.",
        longDescription: "Suomenlinna (Fortress of Finland) was built from 1748 by the Swedish Empire as a naval fortress to defend the eastern Baltic, constructed on six rocky islands in Helsinki harbour. After Finland was transferred to Russia in 1809, the fortress served Russian imperial purposes; after Finnish independence in 1917 it became a Finnish national monument. Today Suomenlinna is a UNESCO World Heritage Site and an inhabited community of about 800 residents, including Finnish Defence Forces personnel, families, and artists.\n\nA 15-minute ferry ride from Helsinki's Market Square brings visitors to this extraordinary island fortress, where 18th-century stone bastions, dry docks, a 18th-century submarine (from Finnish service in WWII), and excellent museums are scattered across 80 hectares of rocky island landscape, popular with picnickers, swimmers, and walkers year-round.",
        details: {
          "Built From": "1748 (Swedish Empire)",
          "Islands": "6",
          "Current Residents": "~800",
          "UNESCO Status": "World Heritage Site 1991",
          "Ferry Time": "15 Minutes from Helsinki Market Square"
        },
        hours: "Island always accessible | Museums 10:00–18:00",
        price: "Ferry HSL ticket ~€3.20 | Museums €8.00",
        coordinates: "60.1454° N, 24.9882° E",
        tip: "Take the last ferry back (after 22:00 in summer) for a beautiful evening crossing with Helsinki's skyline lit up. The island is perfect for a full day picnic and walk. Visit the WWII-era submarine Vesikko (1933) — one of the best-preserved vessels of its type."
      },
      {
        id: "finnish-lakeland",
        name: "Finnish Lakeland",
        location: "Savonlinna, South Savo",
        category: "Lake District",
        heroImage: "https://source.unsplash.com/3840x2160/?finland,lakes,forest,summer,sauna,reflection",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?olavinlinna,castle,savonlinna,finland,lake",
          "https://source.unsplash.com/1200x1600/?finland,lakeland,kayak,summer,birch,sauna"
        ],
        description: "Finland's vast lake district — 188,000 lakes, private sauna cottages, and the medieval Olavinlinna Castle in Savonlinna.",
        longDescription: "Finland has approximately 188,000 lakes covering 10% of its total land area, most concentrated in the South Savo and North Karelia regions of the central and eastern country. The lakeland landscape — flat expanses of silver water reflecting birch and pine forest, connected by narrow straits where current marks the dividing line between lake basins — is quintessentially Finnish, and the traditional midsummer experience of a lakeside sauna, naked swim, and a glass of cold beer is considered Finland's defining cultural ritual.\n\nSavonlinna is the lakeland's most charming town, its historic centre on a narrow isthmus between two lakes dominated by Olavinlinna Castle (1475), a strikingly intact medieval water castle on a rocky island linked to the town by a wooden bridge. The Savonlinna Opera Festival, held inside the castle courtyard each July, is one of the world's most atmospheric opera events.",
        details: {
          "Finnish Lakes": "~188,000",
          "Lake Coverage": "10% of Finland's Area",
          "Olavinlinna Built": "1475 (Medieval Water Castle)",
          "Opera Festival": "July (Inside Castle Courtyard)",
          "Sauna Culture": "UNESCO Intangible Heritage"
        },
        hours: "Lakes always accessible | Castle 10:00–18:00",
        price: "Free | Castle €12.00",
        coordinates: "61.8683° N, 28.8804° E",
        tip: "Rent a lakeside mökki (cottage with sauna) for a week — the definitive Finnish experience. The Savonlinna Opera Festival (July) sells out a year ahead. Take the SS Heinävesi lake steamer between Savonlinna and Kuopio for a classic Finnish journey."
      },
      {
        id: "turku-castle",
        name: "Turku Castle & Cathedral",
        location: "Turku, Southwest Finland",
        category: "Medieval Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?turku,castle,finland,medieval,harbour",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?turku-castle,interior,great-hall,medieval,finland",
          "https://source.unsplash.com/1200x1600/?turku,cathedral,finland,river,old-town"
        ],
        description: "Finland's oldest and largest medieval castle — a 13th-century fortress at the mouth of the Aura River in Finland's ancient capital.",
        longDescription: "Turku (Åbo in Swedish) was Finland's de facto capital until 1812, when Tsar Alexander I moved the capital to Helsinki to be closer to St Petersburg. The city's castle — one of the oldest in Finland, begun in the 1280s and progressively expanded into one of the most extensive medieval complexes in Scandinavia — stands at the mouth of the Aura River on the site of the original Swedish fortification that controlled the trade routes into the Gulf of Finland.\n\nThe castle's progressive expansion from a simple tower into a vast Renaissance residence with Gothic vaults, painted halls, and extensive courtyard ranges is visible in the architectural layers — a compressed history of 700 years of construction. The medieval museum within covers the full span from the castle's founding to its final military use, with excellent reconstructed interiors. Turku Cathedral (1300), Finland's most important religious building, stands 2 kilometres away in the city centre.",
        details: {
          "Castle Founded": "~1280s",
          "Style": "Medieval–Renaissance",
          "Cathedral": "Turku Cathedral (1300, National Shrine)",
          "Historical Role": "Finland's Capital Until 1812",
          "Festival": "Turku Music Festival (August)"
        },
        hours: "Castle 10:00–18:00 (May–Sep) | 10:00–15:00 (Oct–Apr)",
        price: "€13.00",
        coordinates: "60.4337° N, 22.2252° E",
        tip: "Walk the Aura River embankment from the castle to the cathedral — a pleasant 20-minute stroll past outdoor café boats (floating restaurants). Turku archipelago (the world's largest archipelago by number of islands) is accessible by ferry for island-hopping in summer."
      },
      {
        id: "koli-national-park",
        name: "Koli National Park",
        location: "North Karelia, Finland",
        category: "National Park",
        heroImage: "https://source.unsplash.com/3840x2160/?koli,national-park,finland,lake,forest,panorama",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?koli,ukko-koli,summit,lake-pielinen,view",
          "https://source.unsplash.com/1200x1600/?koli,autumn,forest,fog,finland,colours"
        ],
        description: "Finland's most celebrated national landscape — the ancient rocky fells above Lake Pielinen that inspired Sibelius's Finlandia.",
        longDescription: "Koli National Park protects the ancient Precambrian bedrock hills (the Koli fells, rising to 347 metres) above Lake Pielinen in North Karelia, a landscape of extraordinary beauty that inspired Finland's greatest composers and painters at the turn of the 20th century when nationalism was reshaping Finnish cultural identity. Jean Sibelius visited Koli in 1900, and many scholars connect the landscape's austere grandeur with the symphonic tone poem Finlandia, composed in that year.\n\nFrom the Ukko-Koli summit, the view southwest across Lake Pielinen — 93 kilometres long, Finland's fourth largest lake, studded with islands — is considered the finest panorama in Finland. In autumn the Koli landscape turns extraordinary shades of copper, gold, and crimson under the ruska (the Finnish autumn colour season), rivalling Lapland's autumn colours.",
        details: {
          "Highest Point": "Ukko-Koli 347 m",
          "Lake Below": "Lake Pielinen (93 km long)",
          "Cultural Link": "Sibelius & Finnish Nationalist Painters",
          "Best Season": "Late September (Ruska/Autumn Colors)",
          "Winter Activity": "Small ski area with panoramic pistes"
        },
        hours: "Always accessible | Visitor centre 09:00–17:00",
        price: "Free",
        coordinates: "63.1049° N, 29.7980° E",
        tip: "Visit in late September for the ruska autumn colours — the most spectacular season. The lakeside smoke sauna at the Koli Ukko-Koli hotel is a quintessential experience. Hike the Kaskenpolttajan 12 km trail for the full summit panorama experience."
      },
      {
        id: "porvoo-old-town",
        name: "Porvoo Old Town",
        location: "Porvoo, Uusimaa",
        category: "Historic Town",
        heroImage: "https://source.unsplash.com/3840x2160/?porvoo,finland,red-warehouses,river,old-town",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?porvoo,wooden-houses,colourful,river,finland",
          "https://source.unsplash.com/1200x1600/?porvoo,cathedral,hill,medieval,scandinavia"
        ],
        description: "Finland's most charming small town — a medieval riverfront of red warehouses and cobbled lanes just 50 kilometres east of Helsinki.",
        longDescription: "Porvoo (Borgå in Swedish) is one of Finland's oldest towns, settled since the 13th century and an important trading post on the route between Helsinki and St Petersburg. The old town's most iconic image is the row of red-ochre wooden warehouses along the Porvoonjoki river, their reflections shimmering in the water — painted red since the 17th century when Swedish law required riverside warehouses to be painted in the royal colour for tax identification purposes.\n\nThe medieval grey stone Porvoo Cathedral (15th century) crowns a ridge above the old town and served as the site of the Finnish Diet of 1809, where Alexander I confirmed Finland's autonomy as a Grand Duchy of Russia. The artist Albert Edelfelt and poet Johan Ludvig Runeberg, who wrote the Finnish national anthem, both lived and worked in Porvoo.",
        details: {
          "Founded": "13th Century",
          "Red Warehouses": "17th Century (Swedish Tax Requirement)",
          "Cathedral": "15th Century (Diet of 1809)",
          "Famous Residents": "Edelfelt, Runeberg (national anthem poet)",
          "Distance from Helsinki": "50 km"
        },
        hours: "Old town always accessible | Cathedral 10:00–18:00",
        price: "Free",
        coordinates: "60.3954° N, 25.6606° E",
        tip: "Photograph the red warehouses from the old stone bridge for the classic reflection image. Take the M/S J.L. Runeberg summer steamboat from Helsinki (3 hours each way, early May–September) for a scenic approach. Try the Runeberg tart (rum-soaked sponge with raspberry jam) at the local café on its creator's home street."
      }
    ]
  },

  "scotland": {
    id: "scotland",
    name: "Scotland",
    region: "Northwestern Europe",
    coordinates: "56.4907° N, 4.2026° W",
    lat: 56.4907,
    lng: -4.2026,
    heroImage: "https://source.unsplash.com/3840x2160/?scotland,highlands,glen,castle,heather,travel",
    description: "Scotland's wild beauty — jagged mountains, peat-dark lochs, and windswept coastlines — frames a culture of extraordinary depth, from its ancient castles and whisky distilleries to the medieval university city of St Andrews and the festival-city of Edinburgh.",
    terrain: "Highland / Lowland / Island Archipelago",
    climate: "Oceanic Cfb / Subarctic Dfc (Highlands)",
    biodiversity: "Atlantic Heather Moorland, Caledonian Pine & Peatland",
    destinations: [
      {
        id: "edinburgh-castle-scotland",
        name: "Edinburgh Castle",
        location: "Edinburgh, Scotland",
        category: "Historic Castle",
        heroImage: "https://source.unsplash.com/3840x2160/?edinburgh-castle,scotland,volcanic-rock,skyline,fortress",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?edinburgh,castle,night,old-town,lit",
          "https://source.unsplash.com/1200x1600/?edinburgh-castle,stone-of-destiny,crown-room"
        ],
        description: "Scotland's most visited attraction, an ancient fortress on a volcanic plug commanding Edinburgh from the Royal Mile.",
        longDescription: "Edinburgh Castle occupies the summit of Castle Rock, a 340-million-year-old volcanic plug rising 80 metres above the city. Continuously fortified since at least the Iron Age, it has witnessed most of Scotland's turbulent history and withstood 26 recorded sieges. The castle houses Scotland's Crown Jewels (the Honours of Scotland — the oldest surviving crown jewels in the British Isles) and the Stone of Destiny, returned from Westminster Abbey in 1996.\n\nThe One O'Clock Gun has been fired from the Half Moon Battery every day (except Sunday, Christmas, and Good Friday) since 1861, and the Edinburgh Military Tattoo — held on the castle esplanade every August — is one of the world's most spectacular outdoor performance events, watched by 220,000 live spectators annually.",
        details: {
          "Rock Age": "340 Million Years",
          "Crown Jewels": "Honours of Scotland (Oldest in UK)",
          "One O'Clock Gun": "Daily Since 1861",
          "Military Tattoo": "August (220,000 Spectators)",
          "Annual Visitors": "~2 Million"
        },
        hours: "09:30 — 18:00 (Apr–Sep) | 09:30 — 17:00 (Oct–Mar)",
        price: "£19.50",
        coordinates: "55.9486° N, 3.1999° W",
        tip: "Book online to save queuing. The Scottish National War Memorial and Crown Room (Stone of Destiny + Crown Jewels) are the highlights. Combine with a Royal Mile walk down to the Palace of Holyroodhouse. The August Military Tattoo requires booking months ahead."
      },
      {
        id: "glencoe-valley",
        name: "Glencoe Valley",
        location: "Scottish Highlands",
        category: "Highland Valley",
        heroImage: "https://source.unsplash.com/3840x2160/?glencoe,scotland,highlands,dramatic,mountains,valley",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?glencoe,valley,mist,dramatic,scotland",
          "https://source.unsplash.com/1200x1600/?glencoe,buachaille-etive-mor,mountain,sunrise,glen"
        ],
        description: "Scotland's most dramatic and historically resonant valley — a glacial glen of dark mountains shadowed by the 1692 Massacre of Glencoe.",
        longDescription: "Glencoe is a dramatic U-shaped glacial valley in the Scottish Highlands, 15 kilometres long and flanked by the Three Sisters (Beinn Fhada, Gearr Aonach, and Aonach Dubh) on the south and the imposing Bidean nam Bian (1,150 m) massif above. The perfect pyramid of Buachaille Etive Mòr at the valley entrance is the most photographed mountain in Scotland, its reflection in the River Coe a Highland icon.\n\nThe valley carries the historical weight of the Massacre of Glencoe (13 February 1692), when government soldiers who had been billeted with the MacDonald clan for 12 days turned on their hosts in the early hours, killing 38 MacDonalds and driving hundreds more into the winter mountains where many more perished. The massacre became a defining symbol of Highland betrayal and has cast a shadow of melancholy over the glen ever since.",
        details: {
          "Valley Length": "15 km",
          "Highest Point": "Bidean nam Bian 1,150 m",
          "Iconic Mountain": "Buachaille Etive Mòr",
          "Historic Event": "Massacre of Glencoe (13 Feb 1692)",
          "Visitor Centre": "National Trust for Scotland"
        },
        hours: "Always accessible | Visitor centre 09:30–17:30",
        price: "Free | Visitor centre free",
        coordinates: "56.6755° N, 4.9999° W",
        tip: "Photograph Buachaille Etive Mòr from the A82 roadside pull-off at the valley entrance (especially at sunrise). The Lost Valley (Coire Gabhail) hike is the best introduction to Glencoe's terrain — 3 hours, moderate difficulty. Stay in the small village of Glencoe for evening atmosphere."
      },
      {
        id: "loch-ness",
        name: "Loch Ness",
        location: "Inverness, Highland",
        category: "Iconic Loch",
        heroImage: "https://source.unsplash.com/3840x2160/?loch-ness,scotland,highlands,castle-urquhart,monster",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?loch-ness,urquhart-castle,morning,mist,scotland",
          "https://source.unsplash.com/1200x1600/?loch-ness,dark-water,great-glen,heather"
        ],
        description: "Scotland's most famous loch — a vast Great Glen trench holding more fresh water than all the lakes of England and Wales combined.",
        longDescription: "Loch Ness runs 37 kilometres along the geological fault of the Great Glen, is 230 metres deep at its deepest point, and contains approximately 7.45 km³ of fresh water — more than all the lakes of England and Wales combined. Its dark, peat-stained water never rises above 6°C and visibility is close to zero below 2 metres — conditions that fuel the enduring legend of the Loch Ness Monster (Nessie), first reported in 565 AD by St Columba and generating global media attention since the famous 'surgeon's photograph' of 1934 (later proven a hoax).\n\nCastle Urquhart on the western shore — a ruined medieval fortress reduced to its current state in 1692 to prevent Jacobite use — provides the classic Loch Ness foreground, its ruined tower reflected in the dark water with the loch stretching to the horizon.",
        details: {
          "Length": "37 km",
          "Maximum Depth": "230 Metres",
          "Volume": "7.45 km³ (More than England & Wales Combined)",
          "Castle Urquhart": "Medieval Ruin (Destroyed 1692)",
          "Nessie": "First Reported 565 AD (St Columba)"
        },
        hours: "Loch always accessible | Urquhart Castle 09:30–18:00",
        price: "Loch free | Urquhart Castle £10.50",
        coordinates: "57.3229° N, 4.4244° W",
        tip: "Drive the B862 on the south shore (quieter than the A82 north shore) for the best unobstructed loch views. Take a loch cruise from Inverness or Drumnadrochit for on-water perspective. Urquhart Castle at sunset is spectacular. The Loch Ness Centre in Drumnadrochit presents all the evidence objectively."
      },
      {
        id: "isle-of-skye",
        name: "Isle of Skye",
        location: "Inner Hebrides, Scotland",
        category: "Island Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?isle-of-skye,scotland,old-man-storr,dramatic,landscape",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?skye,old-man-storr,pinnacle,clouds,scotland",
          "https://source.unsplash.com/1200x1600/?fairy-pools,skye,blue-water,waterfall,glen"
        ],
        description: "Scotland's most dramatic island — volcanic landscapes of black Cuillin peaks, fairy-tale sea stacks, and iridescent fairy pools.",
        longDescription: "The Isle of Skye (An t-Eilean Sgitheanach in Gaelic — 'the Winged Isle') is the largest and most dramatic of Scotland's inner island groups, connected to the mainland by a road bridge since 1995 but retaining a wild and remote character. The island's geological diversity is extraordinary: the jagged Black Cuillin ridge (Britain's only true Alpine terrain), the weird pinnacles of the Storr and the Quiraing on the Trotternish Peninsula, the sea stacks of Kilt Rock, and the crystalline blue Fairy Pools in Glen Brittle.\n\nSkye is the heartland of Scottish Gaelic language and culture, and the home of the Talisker whisky distillery (the only Skye distillery, producing a distinctive peaty, coastal malt since 1830). Dunvegan Castle, seat of the MacLeod clan since 1237, is the oldest continuously inhabited castle in Scotland.",
        details: {
          "Area": "1,656 km²",
          "Highest Peak": "Sgùrr Alasdair (Cuillin) 992 m",
          "Iconic Landmark": "Old Man of Storr (Basalt Pinnacle)",
          "Talisker Distillery": "1830 (Only Skye Distillery)",
          "Dunvegan Castle": "Oldest Inhabited Castle in Scotland (1237)"
        },
        hours: "Always accessible",
        price: "Free | Distillery tour £10",
        coordinates: "57.2749° N, 6.2154° W",
        tip: "Hike the Old Man of Storr in the early morning (parking fills by 09:00). The Fairy Pools are best in the golden hour. Visit Talisker Distillery for a peaty coastal single malt. Book accommodation months ahead — Skye is severely over-subscribed in summer."
      },
      {
        id: "st-andrews",
        name: "St Andrews",
        location: "Fife, Scotland",
        category: "Historic University Town",
        heroImage: "https://source.unsplash.com/3840x2160/?st-andrews,scotland,golf,cathedral,fife",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?st-andrews,old-course,golf,fife,north-sea",
          "https://source.unsplash.com/1200x1600/?st-andrews,cathedral-ruins,scotland,medieval"
        ],
        description: "The 'Home of Golf' — a medieval university town of cathedral ruins, royal golf courses, and golden West Sands beach.",
        longDescription: "St Andrews has been one of Scotland's most important towns since the 8th century, when the relics of St Andrew were brought here and a cathedral was built that grew to be the largest in Scotland. Today the cathedral is a haunting ruin (dissolved in 1559 during the Reformation), but its 13th-century towers and enclosure walls still dominate the cliff above the North Sea, alongside the 12th-century Castle of St Andrews where John Knox was held prisoner before becoming the Reformation's leading voice.\n\nThe University of St Andrews (1413), the oldest in Scotland and third-oldest in the English-speaking world, and the Royal & Ancient Golf Club (founded 1754) share the town with the Old Course — the oldest golf course in the world, where the rules of golf were first codified and which hosts the Open Championship. Prince William and Catherine Middleton met while studying here.",
        details: {
          "University Founded": "1413 (Oldest in Scotland)",
          "Royal & Ancient": "Founded 1754 (Golf's Governing Body)",
          "Old Course": "World's Oldest Golf Course",
          "Cathedral Built": "12th–13th Century (Ruined 1559)",
          "Famous Alumni": "William & Catherine (King & Queen)"
        },
        hours: "Town always accessible | Cathedral ruins free (Historic Environment Scotland)",
        price: "Cathedral free | Old Course golf from £290",
        coordinates: "56.3398° N, 2.7966° W",
        tip: "Walk the West Sands Beach (used for Chariots of Fire filming) at sunrise. The Cathedral ruins are free and atmospheric at dawn. Apply for the Old Course ballot (public access by ballot — apply 2 days in advance) for the most historic golf experience in the world."
      },
      {
        id: "cairngorms-national-park",
        name: "Cairngorms National Park",
        location: "Aberdeenshire / Highland, Scotland",
        category: "National Park",
        heroImage: "https://source.unsplash.com/3840x2160/?cairngorms,scotland,highland,heather,plateau,national-park",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?cairngorms,reindeer,scotland,plateau,arctic",
          "https://source.unsplash.com/1200x1600/?aviemore,cairngorms,whisky,autumn,scotland"
        ],
        description: "The UK's largest national park — a sub-Arctic plateau of ancient Caledonian pine forests, red squirrels, reindeer herds, and Britain's highest mountains.",
        longDescription: "The Cairngorms National Park (4,528 km²) is the largest national park in the UK and one of the largest in Europe, its central plateau representing one of the most extensive areas of sub-Arctic landscape in Britain, with four of the UK's five highest summits (Ben Macdui, 1,309 m, is second only to Ben Nevis). The plateau's altitude means it experiences near-Arctic conditions even in summer, with snow sometimes persisting on north-facing corries year-round.\n\nThe park contains Britain's largest native Caledonian pine forest (Abernethy), where Scottish wildcats, capercaillie (the world's largest grouse), red squirrels, and ospreys survive; a free-roaming reindeer herd (the only one in Britain) on the plateau above Glenmore; and the Victorian spa town of Grantown-on-Spey at its centre, surrounded by Speyside whisky distilleries (Glenfiddich, Glenlivet, Macallan) that define Scotland's finest malt whisky country.",
        details: {
          "Area": "4,528 km² (UK's Largest National Park)",
          "Highest Point": "Ben Macdui 1,309 m",
          "Caledonian Forest": "Abernethy (Oldest in UK)",
          "Reindeer Herd": "Free-Roaming (Only in UK)",
          "Whisky Region": "Speyside (Glenfiddich, Macallan, Glenlivet)"
        },
        hours: "Always accessible",
        price: "Free | Reindeer centre £14",
        coordinates: "57.0867° N, 3.6683° W",
        tip: "Visit the Cairngorm Reindeer Centre (Glenmore) for the free-roaming herd encounter. Hike to Ben Macdui from Cairngorm Ski Area (7 hours round trip, experienced hillwalkers only). Distillery trail along the Speyside Way is outstanding. The Rothiemurchus Estate near Aviemore has excellent forest cycling and wildlife."
      }
    ]
  },

  "georgia": {
    id: "georgia",
    name: "Georgia",
    region: "Caucasus",
    coordinates: "42.3154° N, 43.3569° E",
    lat: 42.3154,
    lng: 43.3569,
    heroImage: "https://source.unsplash.com/3840x2160/?georgia,caucasus,kazbegi,mountains,travel",
    description: "Georgia, at the crossroads of Europe and Asia, combines the dramatic Caucasus mountain scenery with one of the world's oldest wine traditions (8,000 years), distinctive script and language, ancient cave cities, and the vibrant culture of Tbilisi — a city rapidly emerging as one of Europe's most exciting travel destinations.",
    terrain: "Greater Caucasus / Kartli Valley / Black Sea Coast",
    climate: "Continental Dfb / Alpine / Humid Subtropical",
    biodiversity: "Colchic Rainforest, Alpine Meadow & Caucasian Oak Forest",
    destinations: [
      {
        id: "tbilisi-old-town",
        name: "Tbilisi Old Town",
        location: "Tbilisi, Georgia",
        category: "Historic City Centre",
        heroImage: "https://source.unsplash.com/3840x2160/?tbilisi,old-town,georgia,balcony,cathedral",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?tbilisi,kala,old-town,wooden-balcony,colourful",
          "https://source.unsplash.com/1200x1600/?tbilisi,narikala-fortress,sulfur-baths,abanotubani"
        ],
        description: "A city of ornate carved wooden balconies, sulfur-bath domes, and Georgian Orthodox churches tumbling down a gorge above the Mtkvari River.",
        longDescription: "Tbilisi (population 1.5 million) was founded in the 5th century by King Vakhtang I Gorgasali, who according to legend discovered the site when his hunting falcon found a warm sulfur spring. The sulfur springs of Abanotubani (Bath Quarter) still bubble up beneath the distinctive domed bath-houses that have served travellers since the Silk Road era, and Alexander Dumas and Alexander Pushkin both bathed here and wrote enthusiastically of the experience.\n\nThe Old Town (Kala) is an extraordinarily atmospheric mixture of styles accumulated over 1,500 years: 5th-century Georgian churches, 16th-century Persian-influenced brickwork, 19th-century Russian Empire townhouses, and the distinctive carved wooden balconies (jalousies) draped in wisteria that give Tbilisi its instantly recognisable appearance. The Narikala Fortress (4th century) rises above the district on a rocky spur with panoramic views over the city.",
        details: {
          "Founded": "5th Century AD",
          "Sulfur Baths": "Abanotubani (Still Active)",
          "Narikala Fortress": "4th Century",
          "Famous Bathers": "Dumas & Pushkin",
          "Language": "Georgian (Unique Script)"
        },
        hours: "Old town always accessible | Fortress: always open",
        price: "Free | Sulfur bath from GEL 15",
        coordinates: "41.6938° N, 44.8015° E",
        tip: "Soak in the sulfur baths of Abanotubani (private rooms for GEL 15–30/hour) — an essential Tbilisi experience. Walk up to Narikala Fortress at sunset. Try khinkali (dumplings) and Georgian wine (amber Rkatsiteli) in the old town restaurants."
      },
      {
        id: "kazbegi-mountains",
        name: "Kazbegi & Gergeti Trinity Church",
        location: "Kazbegi, Mtskheta-Mtianeti",
        category: "Highland Village & Church",
        heroImage: "https://source.unsplash.com/3840x2160/?kazbegi,gergeti-trinity-church,georgia,caucasus,mountain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?gergeti,church,mt-kazbek,snow,georgia",
          "https://source.unsplash.com/1200x1600/?kazbegi,stepantsminda,caucasus,village,dramatic"
        ],
        description: "The iconic Gergeti Trinity Church perched at 2,170 metres before the 5,047-metre snow pyramid of Mount Kazbek — Georgia's most photographed image.",
        longDescription: "The Gergeti Trinity Church (Tsminda Sameba, 14th century) sits on a rocky spur at 2,170 metres above the town of Stepantsminda (Kazbegi) in the Greater Caucasus, directly below the permanent snow pyramid of Mount Kazbek (5,047 m), one of the highest peaks in the Caucasus. The church served for centuries as a place of refuge for Georgian royal treasures — including the cross of St Nino (4th century) — when invaders threatened the lowland cities.\n\nThe hike from Stepantsminda village to the church (3–4 hours return, 1,000 m ascent) is one of the finest walks in the Caucasus, the view expanding progressively to encompass the Military Georgian Highway snaking through the valley far below, the Russian border, and the glaciated bulk of Kazbek. The town of Stepantsminda is connected to Tbilisi by the famous Military Georgian Highway, passing the Dariali Gorge and the medieval monastery of Ananuri.",
        details: {
          "Church": "Gergeti Trinity (14th Century)",
          "Church Altitude": "2,170 Metres",
          "Mount Kazbek": "5,047 m",
          "Hike": "3–4 Hours Return, 1,000 m Ascent",
          "Tbilisi Distance": "~150 km via Military Georgian Highway"
        },
        hours: "Always accessible (church may be locked)",
        price: "Free",
        coordinates: "42.6636° N, 44.6491° E",
        tip: "Hire a 4WD taxi from Stepantsminda if the track is muddy (it frequently is). Start the hike at dawn to avoid afternoon cloud on Kazbek. Stay in Stepantsminda overnight — sunrise and sunset light on the church and mountain are extraordinary."
      },
      {
        id: "vardzia-cave-city",
        name: "Vardzia Cave City",
        location: "Samtskhe-Javakheti, Georgia",
        category: "Cave City",
        heroImage: "https://source.unsplash.com/3840x2160/?vardzia,cave-city,georgia,medieval,cliff",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?vardzia,monastery,frescoes,cave,georgia",
          "https://source.unsplash.com/1200x1600/?vardzia,cliffs,carved,medieval,georgia"
        ],
        description: "A 12th-century cave monastery city carved into the volcanic cliff above the Mtkvari River — 3,000 rooms in 13 storeys.",
        longDescription: "Vardzia is a vast cave monastery complex carved into the basaltic cliffs of the Erusheti Mountain above the Mtkvari (Kura) River in southern Georgia, created during the reign of Queen Tamar (1184–1213) as both a monastery and a defensive city capable of housing 20,000 people in times of war. At its peak the complex extended 500 metres along the cliff face and contained 3,000 rooms, including churches, chapels, refectories, wineries, grain stores, and a pharmacy, connected by tunnels carved through the rock.\n\nA major earthquake in 1283 collapsed the cliff face covering the complex, revealing its interior to the outside world and reducing it to its current exposed state. Today the surviving frescoes in the main Church of the Dormition, painted during Tamar's reign and depicting her portrait alongside her father King Giorgi III, are among the finest surviving examples of medieval Georgian art.",
        details: {
          "Built": "12th Century (Queen Tamar)",
          "Rooms": "~3,000",
          "Storeys": "13",
          "Church Frescoes": "Portrait of Queen Tamar (12th C.)",
          "1283 Earthquake": "Exposed Interior to Exterior"
        },
        hours: "10:00 — 19:00 daily",
        price: "GEL 15",
        coordinates: "41.3763° N, 43.2828° E",
        tip: "Combine with Akhaltsikhe's Rabati Castle (2 hours away) for a full southern Georgia day. Bring walking shoes — exploring all the cave levels requires significant climbing. The cave wineries (kvevri embedded in the rock) are a unique sight. Visit on weekdays to avoid weekend crowds from Tbilisi."
      },
      {
        id: "mtskheta-ancient-city",
        name: "Mtskheta Ancient City",
        location: "Mtskheta, Georgia",
        category: "UNESCO Ancient Capital",
        heroImage: "https://source.unsplash.com/3840x2160/?mtskheta,georgia,jvari-monastery,svetitskhoveli,river",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?jvari,monastery,mtskheta,river-confluence,georgia",
          "https://source.unsplash.com/1200x1600/?svetitskhoveli,cathedral,mtskheta,georgia,interior"
        ],
        description: "The ancient capital of Georgia and spiritual heart of the Georgian Orthodox Church — a confluence of two rivers crowned by two UNESCO monuments.",
        longDescription: "Mtskheta, just 20 kilometres north of Tbilisi, was the capital of the ancient kingdom of Kartli (Iberia) from the 3rd century BC until 5th century AD and remains the spiritual capital of the Georgian Orthodox Church. The town sits at the confluence of the Mtkvari and Aragvi rivers, a position of immense strategic and symbolic importance: the Jvari (Cross) Monastery (6th century) crowns the hill above the confluence, looking down on the Svetitskhoveli Cathedral (11th century) below.\n\nSvetitskhoveli Cathedral — built 1010–1029 on the site where the robe of Christ is said to be buried — was the principal cathedral of Georgia for a millennium, the coronation church of Georgian kings, and the burial place of the Kartli royal dynasty. The Jvari Monastery, perched dramatically on the hilltop, marks the spot where St Nino erected the first Christian cross in Georgia in the 4th century.",
        details: {
          "Historical Capital": "3rd Century BC – 5th Century AD",
          "Jvari Monastery": "6th Century",
          "Svetitskhoveli Cathedral": "1010–1029",
          "Relics": "Robe of Christ (tradition)",
          "UNESCO Status": "World Heritage Site 1994"
        },
        hours: "Cathedral 09:00–18:00 | Jvari always accessible",
        price: "Free",
        coordinates: "41.8423° N, 44.7197° E",
        tip: "Visit Jvari Monastery first (catch a shared taxi from Mtskheta) for the river confluence view. Walk down to Svetitskhoveli Cathedral in the old town. Active monastery — respectful dress required. Mtskheta is easily combined with Tbilisi as a half-day trip."
      },
      {
        id: "uplistsikhe-rock-town",
        name: "Uplistsikhe Rock-Hewn Town",
        location: "Gori, Shida Kartli",
        category: "Ancient Cave City",
        heroImage: "https://source.unsplash.com/3840x2160/?uplistsikhe,georgia,cave-city,ancient,rock",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?uplistsikhe,rock,carved,theatre,ancient",
          "https://source.unsplash.com/1200x1600/?uplistsikhe,georgia,caves,hillside,kura-river"
        ],
        description: "A pagan rock-hewn city above the Mtkvari River, inhabited from the early Iron Age to the 13th century — the oldest cave city in Georgia.",
        longDescription: "Uplistsikhe (Lord's Fortress) is a rock-hewn ancient city carved into a riverside sandstone cliff above the Mtkvari River near Gori, inhabited from the early Iron Age (1st millennium BC) through the Hellenistic, early Christian, and medieval periods until it was finally abandoned in the 13th century after the Mongol invasion. At its peak the city contained around 700 rock-carved structures including a temple, theatre, pharmacy, wine store, and a main street tunnel — a complete urban infrastructure carved entirely from the living rock.\n\nThe site is unique in the Caucasus for its blend of pagan and early Christian elements: the ancient rock-cut wine cellar and theatre coexist with a 9th-10th century basilica church. The city is just 10 kilometres from Gori, birthplace of Joseph Stalin, whose Stalin Museum (a Soviet-era hagiographic museum) provides a fascinating counterpoint.",
        details: {
          "Inhabited": "1st Millennium BC – 13th Century AD",
          "Structures": "~700 Rock-Carved",
          "Features": "Theatre, Temple, Pharmacy, Wine Cellar",
          "UNESCO Nomination": "Tentative List",
          "Nearby": "Gori (Stalin's Birthplace)"
        },
        hours: "10:00 — 18:00 daily",
        price: "GEL 15",
        coordinates: "41.9456° N, 44.1183° E",
        tip: "The tunnel through the main cliff to the river is extraordinary. Combine with Gori's Stalin Museum for an unusual full day. A local guide (GEL 30) adds enormous depth to the pagan religious sites and their symbolism. Go early — it gets hot on the exposed rock in summer."
      },
      {
        id: "batumi",
        name: "Batumi",
        location: "Adjara, Black Sea Coast",
        category: "Coastal City",
        heroImage: "https://source.unsplash.com/3840x2160/?batumi,georgia,black-sea,boulevard,night",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?batumi,boulevard,palm-trees,black-sea,night",
          "https://source.unsplash.com/1200x1600/?batumi,old-town,architecture,georgia,mosque"
        ],
        description: "Georgia's Black Sea resort city — an unlikely mix of Art Nouveau architecture, futuristic towers, casinos, and subtropical botanical gardens.",
        longDescription: "Batumi, capital of the Adjara autonomous republic on the Black Sea coast, was a major oil export terminus in the late 19th century (Baku oil was piped here by Rothschild) and retains a remarkable stock of Art Nouveau and Beaux-Arts architecture from that period. In the Soviet era it became the premier summer resort for the entire USSR; since independence it has reinvented itself as a casino and investment hub, producing a skyline of increasingly audacious architectural statements including the rotating Batumi Tower and the Miracle Park Ferris wheel.\n\nThe old town retains an Ottoman neighbourhood (Djuma Mosque, 1866), Armenian and Greek Orthodox churches, and the famous Piazza square — a faux-Italian 19th-century pastiche that somehow works. The 6-kilometre Black Sea Boulevard is Batumi's social spine, and the Batumi Botanical Garden (1912), 8 kilometres north of the city on the subtropical Colchic coast, is one of the finest in the Caucasus.",
        details: {
          "Black Sea Coast": "Subtropical Climate",
          "19th-Century Boom": "Rothschild Oil Export Terminal",
          "Botanical Garden": "1912 (Colchic Subtropical)",
          "Rotating Tower": "Batumi Tower (130 m)",
          "Boulevard": "6 km Seaside Promenade"
        },
        hours: "City always accessible | Botanical Garden 09:00–20:00",
        price: "City free | Botanical Garden GEL 15",
        coordinates: "41.6415° N, 41.6354° E",
        tip: "Walk the full 6 km boulevard in the evening when the lights are on. Take a minibus to the Botanical Garden and walk back along the coastal path. The Old Town Piazza is lively at night with excellent Georgian-Adjaran food (ajapsandali, khachapuri Adjarian-style in a boat-shaped bread)."
      }
    ]
  },

  "japan": {
    id: "japan",
    name: "Japan",
    region: "East Asia",
    coordinates: "36.2048° N, 138.2529° E",
    lat: 36.2048,
    lng: 138.2529,
    heroImage: "https://source.unsplash.com/3840x2160/?japan,mount-fuji,cherry-blossom,torii,travel",
    description: "Japan perfects the art of juxtaposition — ancient Shinto shrines beside bullet-train stations, cherry blossom petals falling on samurai castle walls, and kaiseki cuisine served in rooms where tatami meets minimalism. It is one of the world's most culturally rich and logistically seamless travel destinations.",
    terrain: "Volcanic Islands / Alpine / Pacific Coastline",
    climate: "Humid Subtropical Cfa / Continental Dfb",
    biodiversity: "Temperate Broadleaf Forest, Alpine Meadow & Coastal",
    destinations: [
      {
        id: "mount-fuji",
        name: "Mount Fuji",
        location: "Yamanashi / Shizuoka, Japan",
        category: "Iconic Volcanic Peak",
        heroImage: "https://source.unsplash.com/3840x2160/?mount-fuji,japan,snow,sunrise,cherry-blossom",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?fuji,kawaguchiko,lake,reflection,dawn",
          "https://source.unsplash.com/1200x1600/?mount-fuji,crater,summit,clouds,climbers"
        ],
        description: "Japan's sacred symbol — a near-perfect snow-capped stratovolcano rising 3,776 metres above Honshu's Pacific coastline.",
        longDescription: "Mount Fuji (Fujisan) is Japan's highest peak at 3,776 metres and its most universally recognised symbol, its near-perfect symmetrical cone — a classic stratovolcano last active in 1707 — visible from Tokyo on clear days 100 kilometres away. Venerated as sacred since at least the 7th century and the subject of woodblock prints by Hokusai and Hiroshige that defined the world's visual image of Japan, the mountain was inscribed as a UNESCO Cultural Heritage Site in 2013 for its profound influence on Japanese art and culture.\n\nThe official climbing season runs from early July to mid-September, with four marked trails ascending from the 5th Station (accessible by bus at ~2,300 m) to the crater rim. The Yoshida Trail is the most popular, with 'stamping houses' selling official altitude stamps and mountain huts offering hot food and basic overnight accommodation for those attempting the traditional sunrise summit climb.",
        details: {
          "Height": "3,776 Metres",
          "Type": "Stratovolcano (Last Eruption 1707)",
          "UNESCO Status": "Cultural Heritage Site 2013",
          "Climbing Season": "Early July–Mid September",
          "Best View": "Kawaguchiko Lake (Fuji Five Lakes)"
        },
        hours: "Climbing season Jul–Sep | 5th Station road Apr–Nov",
        price: "¥2,000 conservation fee (climbing season)",
        coordinates: "35.3606° N, 138.7274° E",
        tip: "For photography, stay at Kawaguchiko lake — the classic Fuji reflection shot is from Chureito Pagoda in cherry blossom season (early April). If climbing, start the Yoshida Trail at 22:00 to reach the summit for sunrise. Book mountain huts months in advance."
      },
      {
        id: "fushimi-inari-shrine",
        name: "Fushimi Inari Shrine",
        location: "Kyoto, Japan",
        category: "Shinto Shrine",
        heroImage: "https://source.unsplash.com/3840x2160/?fushimi-inari,torii-gates,kyoto,japan,red",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?fushimi-inari,tunnel,orange-gates,path,japan",
          "https://source.unsplash.com/1200x1600/?fushimi-inari,fox-statue,lantern,shrine,japan"
        ],
        description: "Ten thousand vermilion torii gates winding up a forested mountain — Japan's most photographed spiritual landscape.",
        longDescription: "Fushimi Inari Taisha is dedicated to Inari, the Shinto deity of rice, sake, and business prosperity, and its iconic torii gate tunnels — over 10,000 vermilion gates donated by businesses and individuals since the 8th century — wind 4 kilometres up the forested slopes of Inari Mountain (233 m), creating one of the world's most extraordinary walking environments. The gates range from tiny to enormous, their spacing so tight at some points that daylight is entirely blocked.\n\nThe shrine at the mountain's base dates to 711 AD, making it older than the city of Kyoto itself. As one of Japan's most important Inari shrines, it receives some eight million visitors annually — making it essential to arrive before 07:00 to experience the upper trails in near-solitude. The full mountain circuit (approximately 4 hours) passes dozens of subsidiary shrines and offers views over Kyoto's urban sprawl.",
        details: {
          "Dedicated To": "Inari (Rice, Sake & Prosperity)",
          "Gates": "10,000+ Vermilion Torii",
          "Trail Length": "4 km to Summit (233 m)",
          "Founded": "711 AD",
          "Annual Visitors": "~8 Million"
        },
        hours: "Open 24 hours",
        price: "Free",
        coordinates: "34.9671° N, 135.7727° E",
        tip: "Arrive before 07:00 to have the iconic lower gate tunnels almost to yourself. The upper mountain trails (above Yotsutsuji junction) are far less crowded even at midday. Visit at dusk when lanterns are lit for an atmospheric alternative to the crowds."
      },
      {
        id: "hiroshima-peace-memorial",
        name: "Hiroshima Peace Memorial",
        location: "Hiroshima, Japan",
        category: "Historic Memorial",
        heroImage: "https://source.unsplash.com/3840x2160/?hiroshima,peace-memorial,dome,japan,atomic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hiroshima,genbaku-dome,ruins,memorial,river",
          "https://source.unsplash.com/1200x1600/?hiroshima,peace-park,children-monument,cranes,japan"
        ],
        description: "The preserved skeletal ruins of the Genbaku Dome and Peace Memorial Park — a UNESCO site of global importance to human memory.",
        longDescription: "On 6 August 1945, the United States dropped the world's first atomic bomb on Hiroshima, instantly killing 70,000–80,000 people and ultimately causing the deaths of 90,000–166,000 from its effects. The Genbaku Dome (Hiroshima Peace Memorial) — the skeletal ruins of the former Hiroshima Prefectural Industrial Promotion Hall, the only structure near the hypocenter to survive with its walls partially standing — was preserved as a permanent testament to the destruction and designated a UNESCO World Heritage Site in 1996.\n\nThe surrounding Peace Memorial Park contains the Memorial Cenotaph (beneath which are the names of all known victims), the Peace Flame (burning since 1964 and pledged to burn until all nuclear weapons are abolished), the Children's Peace Monument with its thousands of paper cranes (inspired by Sadako Sasaki), and the superbly curated Hiroshima Peace Memorial Museum, whose exhibits are among the most powerful anywhere in the world.",
        details: {
          "Bombing Date": "6 August 1945",
          "Immediate Deaths": "70,000–80,000",
          "Genbaku Dome": "Only Near-Hypocenter Survivor",
          "Peace Flame": "Burning Since 1964",
          "UNESCO Status": "World Heritage Site 1996"
        },
        hours: "Park: always | Museum: 08:30–18:00",
        price: "Park free | Museum ¥200",
        coordinates: "34.3955° N, 132.4533° E",
        tip: "Allow at least half a day for the museum — the exhibits are deeply affecting. Visit the Genbaku Dome at dawn when the park is quiet. Day-trip to Miyajima Island (30 min by ferry) to see the floating torii gate of Itsukushima Shrine — one of Japan's three views."
      },
      {
        id: "tokyo-shibuya-crossing",
        name: "Shibuya Crossing & Tokyo",
        location: "Tokyo, Japan",
        category: "Urban Icon",
        heroImage: "https://source.unsplash.com/3840x2160/?shibuya-crossing,tokyo,japan,night,neon",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?shibuya,crossing,pedestrians,rain,umbrellas,japan",
          "https://source.unsplash.com/1200x1600/?tokyo,skyline,night,tower,shinjuku"
        ],
        description: "The world's busiest pedestrian crossing — a mesmerising scramble of 3,000 people crossing simultaneously at the heart of Tokyo.",
        longDescription: "Shibuya Crossing (Shibuya Sukuranburu) is the world's most famous scramble crossing, where up to 3,000 pedestrians cross simultaneously from all directions — including diagonally — when all traffic signals turn red at once. Surrounded by towering screens, neon, and the kinetic energy of Shibuya's youth fashion and entertainment district, the crossing has become an icon of urban modernity and Japanese efficiency.\n\nTokyo — population 37 million in the greater metropolitan area — is itself one of the world's great cities: the world's most Michelin-starred city (226 starred restaurants in 2023), home to the world's most complex rail network, and a place where ancient Senso-ji temple in Asakusa coexists with the hypermodern robotics of Akihabara and the fashion forward streets of Harajuku, all within a single train journey.",
        details: {
          "Crossing Volume": "Up to 3,000 Pedestrians/Cycle",
          "Tokyo Metro Area": "37 Million People",
          "Michelin Stars": "226 Restaurants (World's Most)",
          "Senso-ji Temple": "645 AD (Oldest in Tokyo)",
          "Best Views": "Shibuya Sky Observation Deck"
        },
        hours: "Crossing always active | Shibuya Sky 10:00–23:00",
        price: "Crossing free | Shibuya Sky ¥2,000",
        coordinates: "35.6595° N, 139.7004° E",
        tip: "View the crossing from the Starbucks upstairs (arrive early for a window seat) or Shibuya Sky rooftop observation deck. Visit at night for the full neon spectacle. Explore Yanaka neighbourhood for old Tokyo atmosphere far removed from Shibuya's chaos."
      },
      {
        id: "nara-deer-park",
        name: "Nara & Tōdai-ji Temple",
        location: "Nara, Japan",
        category: "Historic City & Wildlife",
        heroImage: "https://source.unsplash.com/3840x2160/?nara,deer,todaiji,japan,park",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?nara,deer,park,japan,friendly",
          "https://source.unsplash.com/1200x1600/?todaiji,great-buddha,japan,bronze,daibutsu"
        ],
        description: "A UNESCO ancient capital where 1,200 free-roaming sika deer share the park with the world's largest wooden building.",
        longDescription: "Nara was Japan's first permanent capital (710–784 AD) and its UNESCO-listed historic monuments represent a formative period in Japanese civilisation. Nara Park is home to approximately 1,200 sika deer (Cervus nippon) considered sacred messengers of the gods and designated a National Natural Treasure — they roam freely through the park, bow in response to humans who bow at them, and relentlessly pursue anyone carrying shika senbei deer crackers.\n\nTōdai-ji's Great Buddha Hall (Daibutsuden) is the world's largest wooden building, its vast interior housing a 15-metre bronze Buddha (Vairocana) cast in 752 AD — the largest bronze Buddha in Japan, its right hand raised in blessing. The five UNESCO World Heritage sites in and around Nara include the 8th-century Kasuga Grand Shrine (its 3,000 stone and bronze lanterns all lit twice a year in spectacular festivals) and Hōryū-ji temple (607 AD — the world's oldest surviving wooden buildings).",
        details: {
          "Deer Population": "~1,200 (Sacred National Treasure)",
          "Tōdai-ji Daibutsuden": "World's Largest Wooden Building",
          "Great Buddha": "15 m Bronze, Cast 752 AD",
          "Hōryū-ji": "607 AD (World's Oldest Wooden Buildings)",
          "UNESCO Status": "Historic Monuments of Ancient Nara"
        },
        hours: "Park always open | Tōdai-ji 07:30–17:30",
        price: "Park free | Tōdai-ji ¥600",
        coordinates: "34.6851° N, 135.8048° E",
        tip: "Buy deer crackers (¥200) from vendors and prepare to be instantly mobbed. Visit Tōdai-ji at opening (07:30) before tour buses arrive. The evening lantern ceremony at Kasuga Grand Shrine (February and August) is one of Japan's most beautiful events."
      },
      {
        id: "hakone-hot-springs",
        name: "Hakone",
        location: "Kanagawa, Japan",
        category: "Onsen Resort",
        heroImage: "https://source.unsplash.com/3840x2160/?hakone,japan,onsen,mount-fuji,ryokan",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hakone,owakudani,volcanic,steam,japan",
          "https://source.unsplash.com/1200x1600/?hakone,lake-ashi,fuji,torii,boat"
        ],
        description: "Japan's premier onsen resort — volcanic hot springs, mountain ryokan inns, and views of Fuji from Lake Ashi.",
        longDescription: "Hakone is a mountainous resort area 90 minutes from Tokyo, sitting within the caldera of an ancient volcano and renowned for its natural hot springs (onsen), traditional Japanese inn culture (ryokan), and views of Mount Fuji across Lake Ashi. The area's geothermal activity is dramatically visible at Ōwakudani (Great Boiling Valley), a volcanic valley where sulphurous steam vents billow from grey hillsides and black eggs (kuro-tamago) hard-boiled in the volcanic springs are sold — each egg said to add seven years to your life.\n\nThe full Hakone Loop — combining the Tozan mountain railway, a ropeway over Ōwakudani, a lake cruise on Ashi, and a bus return — is one of Japan's classic day-trip itineraries, while overnight stays in a riverside ryokan with private onsen bath and kaiseki multi-course dinner represent the quintessential Japanese traditional hospitality experience.",
        details: {
          "Distance from Tokyo": "90 Minutes (Romancecar train)",
          "Owakudani": "Active Volcanic Valley",
          "Lake Ashi": "Caldera Lake with Fuji Views",
          "Ryokan": "Traditional Inn with Private Onsen",
          "Hakone Loop": "Classic Day-Trip Circuit"
        },
        hours: "Always accessible | Ropeway 09:00–17:00",
        price: "Hakone Free Pass ¥6,000 (2 days, all transport)",
        coordinates: "35.2323° N, 139.1069° E",
        tip: "Buy the Hakone Free Pass from Odakyu (includes return Romancecar train + all loop transport). Stay overnight in a ryokan for the full onsen experience (book months ahead). Mount Fuji is visible from Lake Ashi on clear mornings — cloud builds after midday."
      }
    ]
  },

  "china": {
    id: "china",
    name: "China",
    region: "East Asia",
    coordinates: "35.8617° N, 104.1954° E",
    lat: 35.8617,
    lng: 104.1954,
    heroImage: "https://source.unsplash.com/3840x2160/?china,great-wall,mountains,landscape,travel",
    description: "China's civilisation spans 5,000 years and encompasses a staggering diversity of landscapes and cultures — from the Great Wall snaking across northern mountains to the limestone karst towers of Guilin, the terracotta warriors of Xi'an, and the neon modernity of Shanghai.",
    terrain: "Loess Plateau / Karst / Tibetan Plateau / River Delta",
    climate: "Continental Dfb / Subtropical Cfa / Desert BWk",
    biodiversity: "Temperate Forest, Karst, Subtropical & Alpine",
    destinations: [
      {
        id: "great-wall-mutianyu",
        name: "Great Wall at Mutianyu",
        location: "Beijing, China",
        category: "UNESCO Historic Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?great-wall,mutianyu,china,mountains,autumn",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?great-wall,china,towers,mist,sunrise",
          "https://source.unsplash.com/1200x1600/?great-wall,autumn,leaves,beijing,china"
        ],
        description: "The best-preserved section of the Great Wall — 2,250 metres of restored Ming-dynasty wall with 22 watchtowers on a forested ridge.",
        longDescription: "The Great Wall of China stretches approximately 21,196 kilometres across northern China's mountains and deserts, built and rebuilt over more than 2,000 years by successive dynasties to defend against northern nomadic incursions. The Mutianyu section, 73 kilometres northeast of Beijing, is one of the best-preserved and most scenically dramatic stretches, built and garrisoned by the Ming dynasty (1368–1644) with 22 watchtowers along 2,250 metres of restored wall climbing steep forested ridgelines.\n\nUnlike the heavily commercialised Badaling section (also near Beijing), Mutianyu retains more of its wild character, particularly in the unrenovated eastern extension where vegetation grows through the crumbling battlements. Access is by cable car or chairlift, and departure options include the toboggan slide — a metal luge track descending from the wall to the car park that is beloved by children and adults alike.",
        details: {
          "Wall Total Length": "21,196 km",
          "Mutianyu Section": "2,250 m, 22 Watchtowers",
          "Dynasty": "Ming (1368–1644)",
          "UNESCO Status": "World Heritage Site 1987",
          "Distance from Beijing": "73 km"
        },
        hours: "07:30 — 18:00 (Apr–Oct) | 08:00 — 17:00 (Nov–Mar)",
        price: "¥65 + cable car ¥100",
        coordinates: "40.4320° N, 116.5640° E",
        tip: "Take cable car up, toboggan down. Visit on a weekday and arrive early. The unrestored eastern section (right from the top cable car station) is the most atmospheric. Autumn (October) when leaves turn is the most spectacular season."
      },
      {
        id: "forbidden-city",
        name: "Forbidden City",
        location: "Beijing, China",
        category: "Imperial Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?forbidden-city,beijing,china,imperial,palace",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?forbidden-city,gate-of-heavenly-peace,courtyard",
          "https://source.unsplash.com/1200x1600/?forbidden-city,roof,dragon,gold,interior"
        ],
        description: "The world's largest imperial palace complex — 980 buildings across 72 hectares that housed 24 Chinese emperors for five centuries.",
        longDescription: "The Palace Museum (Gugong) — known as the Forbidden City because commoners could not enter without imperial permission — was the imperial seat of the Ming and Qing dynasties from 1420 to 1912, housing 24 emperors across nearly 500 years. Its 980 buildings arranged on a strict north-south axis represent the apex of classical Chinese architecture, their yellow-glazed tile roofs (yellow reserved for the emperor alone), vermilion walls, and intricately painted beam ceilings still astonishing in their completeness and scale.\n\nThe complex is entered from Tiananmen Square through the Meridian Gate, progressing through three outer ceremonial halls (including the magnificent Hall of Supreme Harmony — largest wooden structure in China) to the inner residential quarters where concubines, eunuchs, and the imperial family lived. The Palace Museum's collection of 1.86 million artefacts — paintings, bronzes, ceramics, jade — is the finest in Chinese cultural history.",
        details: {
          "Built": "1406–1420",
          "Buildings": "980",
          "Area": "72 Hectares",
          "Emperors Housed": "24 (Ming & Qing)",
          "UNESCO Status": "World Heritage Site 1987"
        },
        hours: "08:30 — 17:00 (Apr–Oct) | 08:30 — 16:30 (Nov–Mar) | Closed Monday",
        price: "¥60 (Apr–Oct) | ¥40 (Nov–Mar)",
        coordinates: "39.9163° N, 116.3972° E",
        tip: "Pre-book timed entry online (mandatory). Enter from the south gate, exit north to Jingshan Park for the famous elevated panorama over the golden rooftops. Allow at least 4 hours. The Clock Exhibition Hall and Treasure Gallery require separate tickets but are outstanding."
      },
      {
        id: "li-river-guilin",
        name: "Li River & Guilin Karst",
        location: "Guangxi, South China",
        category: "Natural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?li-river,guilin,karst,mountains,china,boat",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?guilin,karst-peaks,mist,river,cormorant",
          "https://source.unsplash.com/1200x1600/?yangshuo,rice-fields,karst,bicycle,china"
        ],
        description: "The iconic karst landscape of limestone towers rising from rice paddies — the image on China's 20-yuan banknote.",
        longDescription: "The Li River (Lijiang) flows 83 kilometres from Guilin to Yangshuo through a landscape of extraordinary conical karst limestone towers, their bases reflected in the mirror-calm river, with cormorant fishermen on bamboo rafts and water buffalo wading at the ford. The 300-metre towers were formed over 300 million years as water dissolved the limestone bedrock along vertical fractures, leaving isolated pinnacles of insoluble rock.\n\nYangshuo at the river's end is surrounded by the most concentrated karst scenery in China, and cycling or taking a bamboo raft through the Moon Hill valley and the Ten Li Gallery limestone corridor is among the most pleasurable travel experiences in Asia. The nightly Impression Sanjie Liu light show, directed by Zhang Yimou on the Li River using the mountains themselves as backdrop, is spectacularly ambitious.",
        details: {
          "River Length": "83 km (Guilin to Yangshuo)",
          "Formation": "300 Million Years of Karst Erosion",
          "Banknote": "Featured on 20-yuan Note",
          "Cormorant Fishing": "Traditional (Ukai Method)",
          "Zhang Yimou Show": "Impression Sanjie Liu (Nightly)"
        },
        hours: "Li River cruise: daily 09:00 departure",
        price: "Cruise ¥210–498",
        coordinates: "24.8855° N, 110.2977° E",
        tip: "Take the Li River cruise from Guilin to Yangshuo (4 hours) and return by bus. Rent a bicycle in Yangshuo to explore Moon Hill and the countryside at your own pace. Visit early morning for mist on the karst peaks — the most atmospheric time."
      },
      {
        id: "zhangjiajie-pillars",
        name: "Zhangjiajie National Forest Park",
        location: "Hunan Province, China",
        category: "Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?zhangjiajie,pillar-mountains,china,avatar,misty",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?zhangjiajie,glass-bridge,floating-mountains,china",
          "https://source.unsplash.com/1200x1600/?tianmen-mountain,glass-walkway,hunan,china"
        ],
        description: "The real-world inspiration for Avatar's Hallelujah Mountains — vertical quartz-sandstone pillars rising through clouds above gorges.",
        longDescription: "Zhangjiajie National Forest Park contains more than 3,000 quartzite sandstone pillars and peaks rising steeply from a forest floor 1,000 metres below, their tops perpetually wreathed in cloud and draped in hanging vegetation, creating the floating-mountain landscape that James Cameron used as the visual inspiration for Pandora in Avatar (2009). The park was the world's first national forest park designated in China (1982) and the core of the UNESCO-listed Wulingyuan scenic area.\n\nThe Bailong Elevator (Hundred Dragons Elevator) — the world's tallest outdoor lift at 326 metres, ascending the sheer cliff face — provides access to the plateau trails. The Zhangjiajie Grand Canyon Glass Bridge (430 m long, 300 m above the valley floor) was briefly the world's longest and highest glass-bottomed bridge. The Tianmen Mountain cable car (7.5 km, world's longest) and the vertiginous Glass Plank Road are additional adrenaline-inducing experiences.",
        details: {
          "Pillars": "3,000+ Quartzite Sandstone",
          "UNESCO Status": "Wulingyuan Scenic Area 1992",
          "Avatar Inspiration": "James Cameron (2009)",
          "Bailong Elevator": "326 m (World's Tallest Outdoor Lift)",
          "Glass Bridge": "430 m Long, 300 m High"
        },
        hours: "07:00 — 18:00",
        price: "¥245 (4-day park pass)",
        coordinates: "29.3248° N, 110.4348° E",
        tip: "Stay minimum 2 nights to explore multiple areas. Go to Yuanjiajie plateau first (Avatar Hallelujah Mountain viewing point) then work down. The Avatar soundtrack playing on park speakers is kitsch but adds to the atmosphere. Misty mornings are the most dramatic — cloud adds to the floating-mountain effect."
      },
      {
        id: "terracotta-warriors",
        name: "Terracotta Army",
        location: "Xi'an, Shaanxi, China",
        category: "Archaeological Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?terracotta-army,xian,china,warriors,ancient",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?terracotta,warriors,pit,rows,china,army",
          "https://source.unsplash.com/1200x1600/?terracotta,warrior,close-up,face,detail,china"
        ],
        description: "8,000 life-size clay soldiers guarding the tomb of China's first emperor — one of the greatest archaeological discoveries of the 20th century.",
        longDescription: "The Terracotta Army was created around 210 BC to protect Qin Shi Huang, the first emperor of unified China, in the afterlife — a buried army of 8,000 individually crafted warriors, 130 chariots, 520 horses, and 150 cavalry horses in battle formation across three excavated pits. Discovered accidentally by farmers digging a well in 1974, the warriors are remarkable for their individuality: each face is unique, reflecting the actual diversity of the Qin army.\n\nThe warriors originally stood in wooden-roofed corridors separated by earthen walls, clad in painted lacquer armour and carrying real bronze weapons. When the wooden structures collapsed and the tomb was looted shortly after, the warriors fell and shattered; their painstaking reassembly from thousands of fragments continues today. The largest pit (Pit 1, 230 m long) is housed under an enormous hangar and is one of the most staggering archaeological sights on Earth.",
        details: {
          "Created": "~210 BC",
          "Warriors": "~8,000",
          "Discovery": "1974 (By Farmers Digging a Well)",
          "Emperor": "Qin Shi Huang (First Emperor of China)",
          "UNESCO Status": "World Heritage Site 1987"
        },
        hours: "08:30 — 17:30 (Nov–Mar) | 08:30 — 18:30 (Apr–Oct)",
        price: "¥120",
        coordinates: "34.3847° N, 109.2786° E",
        tip: "Hire an English-speaking guide (essential for context — the warriors look similar without context). Pit 1 is the largest but Pit 3 (the command post) and Pit 2 (cavalry) are less crowded and equally fascinating. Combine with Xi'an's 14th-century city walls and Muslim Quarter."
      },
      {
        id: "west-lake-hangzhou",
        name: "West Lake Hangzhou",
        location: "Hangzhou, Zhejiang, China",
        category: "Cultural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?west-lake,hangzhou,china,pagoda,lotus",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?west-lake,leifeng-pagoda,lotus,reflection,china",
          "https://source.unsplash.com/1200x1600/?hangzhou,broken-bridge,willow,lake,spring"
        ],
        description: "The idealised Chinese landscape — a willow-fringed lake of causeways, pagodas, and tea gardens that inspired poets and emperors.",
        longDescription: "West Lake (Xi Hu) in Hangzhou has been celebrated as the most beautiful landscape in China for over a thousand years — Marco Polo called Hangzhou 'the finest and most splendid city in the world', and the Chinese saying 'Heaven above, Suzhou and Hangzhou below' reflects its enduring prestige. The 6-square-kilometre lake, with its three islands, two causeways (Su Causeway and Bai Causeway), and surrounding hills dotted with Buddhist temples and tea gardens, has been the subject of countless Chinese paintings and poems.\n\nLongwu Tea Village and the Longjing (Dragon Well) tea plantations on the lake's western hills produce China's most celebrated green tea, with the pre-Qingming harvest (early April) producing the most prized leaves. The UNESCO inscription notes the lake's profound influence on Chinese landscape design, garden culture, and poetry over 1,000 years.",
        details: {
          "Area": "6.39 km²",
          "UNESCO Status": "Cultural Landscape 2011",
          "Marco Polo": "'Finest City in the World'",
          "Longjing Tea": "China's Most Famous Green Tea",
          "Causeways": "Su & Bai (Tang and Song Dynasties)"
        },
        hours: "Always accessible",
        price: "Free | Boat rental ¥60/hour",
        coordinates: "30.2519° N, 120.1476° E",
        tip: "Rent a bicycle and cycle the full Su Causeway at dawn (6 km, mostly flat). Visit the Longjing tea village for a tea-tasting experience in the plantation. The lake looks best in early April (spring blossom) or late October (autumn colour and harvest season)."
      }
    ]
  },

  "india": {
    id: "india",
    name: "India",
    region: "South Asia",
    coordinates: "20.5937° N, 78.9629° E",
    lat: 20.5937,
    lng: 78.9629,
    heroImage: "https://source.unsplash.com/3840x2160/?india,taj-mahal,rajasthan,travel,heritage",
    description: "India is a civilisation of overwhelming sensory richness — its 5,000-year history layered into a single country of 1.4 billion people, 22 official languages, and a spiritual intensity that makes almost every journey transformative. From the marble perfection of the Taj Mahal to the sacred ghats of Varanasi, India changes those who visit.",
    terrain: "Himalayan / Deccan Plateau / Gangetic Plain / Thar Desert",
    climate: "Tropical Monsoon Am / Semi-Arid BSh",
    biodiversity: "Tropical Dry Forest, Teak, Mangrove & Alpine",
    destinations: [
      {
        id: "taj-mahal",
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        category: "UNESCO Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?taj-mahal,agra,india,marble,sunrise",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?taj-mahal,reflection-pool,dawn,india,white",
          "https://source.unsplash.com/1200x1600/?taj-mahal,detail,inlay,marble,flowers"
        ],
        description: "The world's greatest monument to love — a white marble mausoleum of perfect proportions built by Emperor Shah Jahan for his wife.",
        longDescription: "The Taj Mahal was built between 1632 and 1653 by Mughal Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, who died in childbirth in 1631. Designed by the Persian architect Ustad Ahmad Lahori, the complex employs 28 types of precious and semi-precious stones inlaid in white Makrana marble in floral and calligraphic patterns of extraordinary delicacy, the main dome 73 metres high and flanked by four minarets that lean outward slightly to prevent them from falling on the tomb in an earthquake.\n\nThe Taj changes appearance through the day — blue-white at dawn, golden at sunrise, almost incandescent at noon, and a glowing apricot pink at sunset — and is said to appear entirely different in each light. The garden (charbagh — quadripartite paradise garden) with its central reflecting pool aligned precisely with the main axis creates the classic double-dome reflection image.",
        details: {
          "Built": "1632–1653",
          "Builder": "Emperor Shah Jahan",
          "Material": "Makrana White Marble & 28 Gemstones",
          "Dome Height": "73 Metres",
          "UNESCO Status": "World Heritage Site 1983"
        },
        hours: "Sunrise to sunset | Closed Friday",
        price: "₹1,100 (~€12.00) for foreigners",
        coordinates: "27.1751° N, 78.0421° E",
        tip: "Arrive at gate opening (30 min before sunrise) for the most magical light and thinnest crowds. The north side reflection pool provides the iconic shot. Pre-book tickets online to avoid queues. Combine with Agra Fort (2 km away) for a full day."
      },
      {
        id: "varanasi-ghats",
        name: "Varanasi Ghats",
        location: "Varanasi, Uttar Pradesh",
        category: "Sacred Pilgrimage Site",
        heroImage: "https://source.unsplash.com/3840x2160/?varanasi,ghats,ganges,india,sunrise,boats",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?varanasi,ganga-aarti,fire-ceremony,night,priests",
          "https://source.unsplash.com/1200x1600/?varanasi,ghats,morning,bathers,india"
        ],
        description: "Hinduism's holiest city — 84 ghats lining the Ganges where pilgrims bathe, priests perform fire rituals, and the cycle of life and death plays out openly.",
        longDescription: "Varanasi (Kashi — City of Light) is one of the world's oldest continuously inhabited cities and the holiest in Hinduism, its 84 ghats (stepped riverbanks) along the western shore of the Ganges serving as sites of ritual bathing, cremation, and religious ceremony for millions of pilgrims annually. Hindus believe dying in Varanasi grants moksha (liberation from the cycle of rebirth), and the Manikarnika and Harishchandra cremation ghats burn bodies 24 hours a day.\n\nThe nightly Ganga Aarti ceremony at Dashashwamedh Ghat — where priests in saffron robes perform an elaborate fire ritual with large brass lamps to the accompaniment of drums and chanting — is one of India's most powerful collective religious experiences, witnessed from boats on the river by thousands of devotees and travellers each evening.",
        details: {
          "Ghats": "84 along the Ganges",
          "City Age": "3,000+ Years Continuously Inhabited",
          "Ganga Aarti": "Nightly at Dashashwamedh Ghat",
          "Cremation": "Manikarnika Burns 24 Hours/Day",
          "Religious Significance": "Hinduism's Holiest City"
        },
        hours: "Always accessible",
        price: "Free | Boat hire ₹200–500/hour",
        coordinates: "25.3176° N, 83.0062° E",
        tip: "Take a rowing boat on the Ganges at dawn to see the ghats from the water as the city awakens. Watch (respectfully, from a distance) the Manikarnika cremation ghat — one of the most profound experiences in India. Attend the Ganga Aarti at sunset from the ghat steps."
      },
      {
        id: "kerala-backwaters",
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        category: "Natural Waterway",
        heroImage: "https://source.unsplash.com/3840x2160/?kerala,backwaters,houseboat,india,palm,green",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?alleppey,houseboat,canal,kerala,sunset",
          "https://source.unsplash.com/1200x1600/?kerala,backwaters,canoe,paddy-fields,village"
        ],
        description: "900 km of serene interconnected lagoons, canals, and lakes behind Kerala's Malabar Coast — best explored by traditional kettuvallam houseboat.",
        longDescription: "Kerala's backwaters are a 900-kilometre network of lagoons, lakes, canals, and rivers running parallel to the Arabian Sea coast, separated from the sea by narrow strips of land called kayals. The system's extraordinary biodiversity — kingfishers, egrets, otters, and Chinese fishing nets (cheena vala) introduced by traders from the court of Kublai Khan in the 14th century — and the pace of life in the canal-side villages make it one of India's most magical travel environments.\n\nThe traditional way to explore is aboard a kettuvallam (rice boat) converted into a houseboat — a bamboo-latticed dwelling with bedrooms, kitchen, and crew that glides through the narrow waterways for one or two days, stopping at canal-side toddy shops and watching the sunset over the vast Vembanad Lake, Kerala's largest lake and one of India's longest.",
        details: {
          "Length": "~900 km",
          "Main Lake": "Vembanad Lake",
          "Chinese Nets": "Introduced 14th Century",
          "Houseboat": "Kettuvallam (Traditional Rice Boat)",
          "Hub Town": "Alleppey (Alappuzha)"
        },
        hours: "Always accessible",
        price: "Houseboat from ₹6,000/night",
        coordinates: "9.4981° N, 76.3388° E",
        tip: "Book a houseboat overnight rather than a day trip — the sunset and early morning are the most beautiful times. Avoid peak December–January for lower prices. Take a traditional canoe tour through the narrow village canals for a more intimate experience than the main houseboats."
      },
      {
        id: "amber-palace-jaipur",
        name: "Amber Palace",
        location: "Jaipur, Rajasthan",
        category: "Mughal-Rajput Palace",
        heroImage: "https://source.unsplash.com/3840x2160/?amber-palace,jaipur,rajasthan,india,elephant",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?amber-fort,sheesh-mahal,mirror-palace,india",
          "https://source.unsplash.com/1200x1600/?amber,fort,lake-maota,rajasthan,reflection"
        ],
        description: "The maharajas' fortified hilltop palace above Jaipur — its mirror-encrusted Sheesh Mahal creates a galaxy of reflected candlelight.",
        longDescription: "Amber Fort (Amer Fort) is a hilltop palace-fortress complex 11 kilometres north of Jaipur, built by Raja Man Singh I in 1592 and extended by successive Kachwaha Rajput rulers over the following two centuries. Its blend of Rajput and Mughal architectural styles — red sandstone and white marble, carved jali screens, painted mirror work — reflects the cultural synthesis of the Mughal Empire's Rajput allies.\n\nThe Sheesh Mahal (Mirror Palace) is the palace's most celebrated interior: a small room entirely lined with convex mirror fragments set in plaster, creating the illusion of a star-filled sky when a single candle is lit within. The Diwan-i-Aam (Hall of Public Audience) and the Ganesh Gate with its exceptional painted panels are equally remarkable. The palace looks down on Maota Lake, its reflection shimmering in the water below.",
        details: {
          "Built": "1592 (Raja Man Singh I)",
          "Style": "Rajput-Mughal Synthesis",
          "Sheesh Mahal": "Mirror Room (Starfield Effect)",
          "UNESCO Status": "Hill Forts of Rajasthan 2013",
          "Elephant Rides": "Once traditional, now controversial"
        },
        hours: "08:00 — 17:30",
        price: "₹550 (~€6) for foreigners",
        coordinates: "26.9855° N, 75.8513° E",
        tip: "Visit in the evening for the sound-and-light show (October–February). Walk up the cobblestone ramp rather than taking the jeep for a more atmospheric approach. Combine Amber with Jaipur's City Palace and Hawa Mahal in the same day."
      },
      {
        id: "hampi-ruins",
        name: "Hampi Ruins",
        location: "Karnataka, South India",
        category: "UNESCO Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?hampi,ruins,india,vijayanagara,boulders",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hampi,vittala-temple,stone-chariot,india",
          "https://source.unsplash.com/1200x1600/?hampi,boulder-landscape,sunset,india,ruins"
        ],
        description: "The surreal ruins of the Vijayanagara Empire strewn across a landscape of giant granite boulders — India's most underrated UNESCO site.",
        longDescription: "Hampi was the capital of the Vijayanagara Empire, the last great Hindu empire of southern India, which at its peak (1336–1565) covered much of the Deccan Plateau and was one of the wealthiest cities in the world, visited by Portuguese traders who described it as larger than Rome. In 1565 the city was sacked by a coalition of Deccan sultans and its 500,000 population dispersed, leaving 26 square kilometres of temples, palaces, elephant stables, and market streets slowly being reclaimed by the extraordinary landscape of rounded granite boulders that gives Hampi its surreal character.\n\nThe Vittala Temple complex, with its famous Stone Chariot (a carved granite shrine on wheels) and the Musical Pillars (which produce musical tones when struck), is the architectural masterpiece. The Virupaksha Temple at the Tungabhadra River remains a living pilgrimage site.",
        details: {
          "Empire Founded": "1336",
          "Sacked": "1565",
          "UNESCO Status": "World Heritage Site 1986",
          "Area": "26 km² of Ruins",
          "Vittala Temple": "Stone Chariot & Musical Pillars"
        },
        hours: "06:00 — 18:00",
        price: "₹600 (~€6.50) for foreigners",
        coordinates: "15.3350° N, 76.4600° E",
        tip: "Rent a bicycle to explore the vast site (tuk-tuks also available). Climb Matanga Hill for the best panoramic view over the boulder landscape at sunrise. Stay at least 2 nights — Hampi rewards slow exploration. The Hemakuta Hill temples at sunset are extraordinary."
      },
      {
        id: "golden-temple-amritsar",
        name: "Golden Temple",
        location: "Amritsar, Punjab",
        category: "Sikh Pilgrimage Site",
        heroImage: "https://source.unsplash.com/3840x2160/?golden-temple,amritsar,india,sikh,gold,reflection",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?golden-temple,night,lights,reflection,lake",
          "https://source.unsplash.com/1200x1600/?amritsar,harmandir-sahib,interior,india"
        ],
        description: "Sikhism's holiest shrine — a gold-clad island temple reflected in a sacred pool, welcoming all humanity with free food and shelter.",
        longDescription: "The Harmandir Sahib (Golden Temple) in Amritsar is the spiritual and cultural centre of Sikhism, built on a small island in the Amrit Sarovar (Pool of Nectar) which gives the city its name. The current golden temple structure, completed in 1604 and rebuilt in its gilded form in the early 19th century using 400 kg of gold plating donated by Maharaja Ranjit Singh, is a synthesis of Hindu and Islamic architectural styles — a deliberate expression of Sikhism's inclusive philosophy.\n\nThe Langar — the free community kitchen attached to the temple — serves a free vegetarian meal to anyone who visits, regardless of faith, caste, or nationality, feeding between 50,000 and 100,000 people daily and representing the core Sikh principle of seva (selfless service). Volunteers prepare, cook, and serve the meals around the clock.",
        details: {
          "Founded": "1604",
          "Gold Plating": "400 kg (Donated by Maharaja Ranjit Singh)",
          "Langar": "50,000–100,000 Free Meals per Day",
          "Pool Name": "Amrit Sarovar (Nectar Pool)",
          "Open To": "All Faiths (24 Hours)"
        },
        hours: "Open 24 hours",
        price: "Free",
        coordinates: "31.6200° N, 74.8765° E",
        tip: "Visit at dawn (04:00–06:00) when the chants begin and pilgrims bathe in the pool — profoundly moving. Cover your head (cloth provided free) and remove shoes. Eat at the Langar for the communal experience. Combine with the Wagah Border ceremony (30 km west) — the India-Pakistan flag-lowering at sunset."
      }
    ]
  },

  "thailand": {
    id: "thailand",
    name: "Thailand",
    region: "Southeast Asia",
    coordinates: "15.8700° N, 100.9925° E",
    lat: 15.8700,
    lng: 100.9925,
    heroImage: "https://source.unsplash.com/3840x2160/?thailand,wat-arun,bangkok,temple,travel",
    description: "Thailand's Buddhist temple culture, tropical island paradise, and some of the world's most celebrated cuisine make it one of Southeast Asia's most visited countries. From the frenetic energy of Bangkok to the jungle-clad mountains of Chiang Mai and the karst islands of the Andaman Sea, Thailand consistently exceeds expectations.",
    terrain: "Central Plain / Northern Highlands / Peninsula",
    climate: "Tropical Savanna Aw / Monsoon Am",
    biodiversity: "Tropical Moist Forest, Mangrove & Coral Reef",
    destinations: [
      {
        id: "grand-palace-bangkok",
        name: "Grand Palace Bangkok",
        location: "Bangkok, Thailand",
        category: "Royal Palace Complex",
        heroImage: "https://source.unsplash.com/3840x2160/?grand-palace,bangkok,thailand,temple,gold",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?wat-phra-kaew,emerald-buddha,bangkok,thailand",
          "https://source.unsplash.com/1200x1600/?grand-palace,courtyard,bangkok,tiles,spires"
        ],
        description: "Bangkok's most sacred complex — the dazzling Grand Palace and Wat Phra Kaew containing Thailand's most revered Buddha image.",
        longDescription: "The Grand Palace (Phra Borom Maha Ratcha Wang) has been the official residence of the Thai King since 1782, its 2.17-square-kilometre complex of royal halls, pavilions, and temples representing the pinnacle of Thai royal architecture in its most ornate form. The palace buildings are characterised by their steep multi-tiered roofs of green, orange, and red tiles, gilded spires, and walls encrusted with porcelain mosaic — a style unique to Thai royal architecture.\n\nWithin the palace grounds, Wat Phra Kaew (Temple of the Emerald Buddha) is Thailand's most sacred temple, housing the Emerald Buddha — a 66-cm seated figure carved from a single block of green jasper (not emerald) whose ceremonial robes are changed by the King personally at the start of each of Thailand's three seasons. No photography is permitted inside the temple.",
        details: {
          "Established": "1782",
          "Area": "2.17 km²",
          "Emerald Buddha": "66 cm Green Jasper (Thailand's Most Sacred)",
          "Royal Robes": "Changed by King Each Season",
          "Annual Visitors": "~8 Million"
        },
        hours: "08:30 — 15:30 daily",
        price: "฿500 (~€13)",
        coordinates: "13.7500° N, 100.4913° E",
        tip: "Arrive at opening (08:30) — crowds build rapidly. Modest dress required (covered shoulders and legs) — wraps available for rent if needed. The ticket also includes Wat Pho (Temple of the Reclining Buddha) — visit on the same day."
      },
      {
        id: "phi-phi-islands",
        name: "Phi Phi Islands",
        location: "Krabi, Andaman Sea",
        category: "Island Destination",
        heroImage: "https://source.unsplash.com/3840x2160/?phi-phi-islands,thailand,turquoise,limestone,aerial",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?maya-bay,phi-phi,thailand,beach,clear-water",
          "https://source.unsplash.com/1200x1600/?phi-phi-don,viewpoint,island,thailand,sea"
        ],
        description: "Dramatic limestone cliffs rising from turquoise water — the Andaman's most iconic island group, including the famous Maya Bay.",
        longDescription: "The Phi Phi archipelago consists of six islands 40 kilometres south of Krabi, their dramatic vertical limestone karst cliffs dropping straight into some of the clearest water in the Andaman Sea. Phi Phi Don is the inhabited island with tourist infrastructure; Phi Phi Leh is the uninhabited island containing Maya Bay — the location used in the 2000 film The Beach (starring Leonardo DiCaprio) and one of Southeast Asia's most photographed locations.\n\nMaya Bay was closed to tourists in 2018 due to coral and ecological damage from the 5,000+ daily visitors, and reopened in 2022 with strict visitor limits (no overnight stays, no speedboats allowed inside). The surrounding waters contain excellent snorkelling with leopard sharks, reef fish, and sea turtles. The Phi Phi Don viewpoint — reached by a 20-minute hike — offers the best panoramic shot of the twin bays.",
        details: {
          "Islands": "6 in Archipelago",
          "Maya Bay": "Film Location (The Beach, 2000)",
          "Closure": "2018–2022 (Ecological Recovery)",
          "Best Snorkel": "Bida Nok & Bida Noi (Leopard Sharks)",
          "Viewpoint Hike": "20 Minutes from Main Village"
        },
        hours: "Always accessible | Maya Bay 06:00–17:00",
        price: "Ferry from Krabi ~฿400 | Park fee ฿400",
        coordinates: "7.7407° N, 98.7784° E",
        tip: "Take the first morning ferry (07:00) to reach Maya Bay before the day-trip crowds. Stay overnight on Phi Phi Don for the evening island atmosphere. Snorkel at Bida Nok for better marine life than Maya Bay itself."
      },
      {
        id: "doi-suthep-temple",
        name: "Doi Suthep Temple",
        location: "Chiang Mai, Thailand",
        category: "Mountaintop Temple",
        heroImage: "https://source.unsplash.com/3840x2160/?doi-suthep,chiang-mai,thailand,temple,mountain",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?doi-suthep,golden-chedi,temple,thailand",
          "https://source.unsplash.com/1200x1600/?chiang-mai,doi-suthep,view,city,evening"
        ],
        description: "Chiang Mai's guardian temple — a gilded chedi on a mountain peak, reached by 306 naga-flanked steps with panoramic views over the city.",
        longDescription: "Wat Phra That Doi Suthep sits on the summit of Doi Suthep mountain at 1,073 metres, 15 kilometres northwest of Chiang Mai, and has been the city's most revered temple since the legendary white elephant that was said to carry a holy relic walked up the mountain in 1383 and died on the summit — indicating the site for the temple. The temple's gilded Lanna-style chedi (stupa) encasing Buddha relics is visible from Chiang Mai city 15 kilometres below.\n\nThe 306-step naga staircase (flanked by multicoloured serpent balustrades) leads to the temple terrace from the mountain road. The view over Chiang Mai and the surrounding agricultural plain from the temple terrace is exceptional, particularly at dawn when the city is still wrapped in mist and the city's moat reflects the first light.",
        details: {
          "Founded": "1383",
          "Altitude": "1,073 Metres",
          "Staircase": "306 Steps (Naga-Flanked)",
          "Relic": "Buddha Bone Relic (Thai Tradition)",
          "Style": "Lanna Thai Architecture"
        },
        hours: "06:00 — 20:00",
        price: "฿30 (~€0.80)",
        coordinates: "18.8048° N, 98.9219° E",
        tip: "Go at sunrise (06:00) for mist views over the city. Take a songthaew (red shared pickup truck) from Chiang Mai's Tha Phae Gate rather than driving — parking is difficult. Combine with a visit to Chiang Mai's Night Bazaar in the evening."
      },
      {
        id: "ayutthaya-ruins",
        name: "Ayutthaya Historical Park",
        location: "Ayutthaya, Thailand",
        category: "UNESCO Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?ayutthaya,ruins,thailand,buddhist,ancient",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?ayutthaya,buddha-head-tree,tree,roots,thailand",
          "https://source.unsplash.com/1200x1600/?ayutthaya,wat-mahathat,chedis,ancient"
        ],
        description: "The ruined temples and palaces of Siam's ancient capital — including the famous Buddha head entwined in fig tree roots.",
        longDescription: "Ayutthaya was the capital of the Ayutthaya Kingdom from 1350 to 1767, when it was one of the largest cities in the world (population ~1 million) and a major international trading hub visited by Chinese, Japanese, Portuguese, Dutch, French, and English merchants. In 1767 a Burmese invasion sacked and burned the city, and the ruins — covering an island at the confluence of three rivers — were never rebuilt, leaving an extraordinary archaeological park of decapitated Buddha statues, brick prangs (Khmer-style towers), and crumbling chedis.\n\nThe famous image of a sandstone Buddha head entwined in the roots of a bodhi fig tree at Wat Mahathat — a symbol of nature reclaiming the works of man — is one of Thailand's most reproduced images. Wat Chai Watthanaram, with its five-prang central complex, is the most dramatically complete surviving structure.",
        details: {
          "Kingdom Founded": "1350",
          "Sacked By": "Burma, 1767",
          "UNESCO Status": "World Heritage Site 1991",
          "Famous Image": "Buddha Head in Fig Tree Roots",
          "Distance from Bangkok": "80 km"
        },
        hours: "08:00 — 18:00",
        price: "฿50 per temple site",
        coordinates: "14.3555° N, 100.5682° E",
        tip: "Rent a bicycle to explore the island (the sites are spread over 3 km). Visit Wat Mahathat's Buddha head in morning light. Easy day trip from Bangkok by train (1.5 hours) or tour. Visit Wat Chaiwatthanaram at sunset for the most atmospheric light."
      },
      {
        id: "erawan-waterfall",
        name: "Erawan National Park",
        location: "Kanchanaburi, Thailand",
        category: "Natural Waterfall",
        heroImage: "https://source.unsplash.com/3840x2160/?erawan,waterfall,thailand,turquoise,jungle",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?erawan,tiered-pools,turquoise,swim,thailand",
          "https://source.unsplash.com/1200x1600/?erawan-waterfall,fish,pool,limestone,jungle"
        ],
        description: "Seven tiers of emerald and turquoise limestone pools in a jungle national park — some of Southeast Asia's most beautiful swimming holes.",
        longDescription: "Erawan National Park (65 sq km) in Kanchanaburi province contains the stunning Erawan Waterfall — a seven-tiered cascade named after Erawan, the three-headed white elephant of Thai mythology, after the upper tier resembles the elephant's head. Each tier pools in a limestone basin of extraordinary blue-green colour, produced by the high mineral content of the spring-fed water, and the lower five tiers are open for swimming.\n\nThe first two tiers are crowded and most beautiful; tiers 3–5 require more hiking and are progressively quieter and more dramatic. The fish (mostly blind cavefish and sweetlips) in the pools are fearless — they perform free 'fish pedicures' on any swimmer who pauses, nibbling dead skin cells. The park also contains limestone caves (Phartat Cave is accessible) and hornbill sightings.",
        details: {
          "Tiers": "7",
          "Water Colour": "Turquoise-Emerald (Limestone Minerals)",
          "Named After": "Erawan (Three-Headed Elephant)",
          "Fish": "Cavefish & Sweetlips (Friendly)",
          "Park Area": "65 km²"
        },
        hours: "08:00 — 16:00",
        price: "฿300 (~€8) for foreigners",
        coordinates: "14.3714° N, 99.1520° E",
        tip: "Arrive at opening (08:00) — visitor cap is enforced on busy days. Bring water shoes for grip on the slippery limestone. Tier 3 is the best swimming combination of crowd and scenery. Combine with the River Kwai Bridge (30 km away) for a full Kanchanaburi day."
      },
      {
        id: "khao-yai-park",
        name: "Khao Yai National Park",
        location: "Nakhon Ratchasima, Thailand",
        category: "UNESCO National Park",
        heroImage: "https://source.unsplash.com/3840x2160/?khao-yai,thailand,jungle,elephant,national-park",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?khao-yai,waterfall,haew-narok,jungle",
          "https://source.unsplash.com/1200x1600/?khao-yai,hornbill,bird,thailand,wildlife"
        ],
        description: "Thailand's oldest national park — a UNESCO-listed jungle plateau with wild elephants, hornbills, and spectacular waterfalls.",
        longDescription: "Khao Yai National Park, established in 1962 as Thailand's first national park, protects 2,168 square kilometres of the Dong Phayayen-Khao Yai Forest Complex (UNESCO World Heritage 2005). The park's plateau at 400–1,351 metres elevation supports one of Southeast Asia's most important lowland to highland forest ecosystems, with populations of Asian elephants (approximately 300), wild dogs, bears, leopards, and 320 bird species including four hornbill species.\n\nThe Haew Narok waterfall (150 m, the park's largest) is the most dramatic natural feature, and night safari jeep tours reveal the nocturnal wildlife — porcupines, civets, owls, and occasionally elephants at the salt lick. The park is 200 kilometres from Bangkok and a popular escape for both wildlife enthusiasts and vineyard tourists (the surrounding plateau has Thailand's best wine country).",
        details: {
          "Established": "1962 (Thailand's First National Park)",
          "Area": "2,168 km²",
          "Elephants": "~300",
          "Hornbills": "4 Species",
          "UNESCO Status": "Dong Phayayen-Khao Yai 2005"
        },
        hours: "06:00 — 18:00",
        price: "฿400 (~€10) for foreigners",
        coordinates: "14.4289° N, 101.3719° E",
        tip: "Book a morning guided walk for wildlife tracking — elephant dung is fresh and tracks are clear. The night safari (18:00–21:00 with a licensed guide) is the best wildlife experience. Stay at a lodge inside the park for early morning elephant sightings."
      }
    ]
  },

  "indonesia": {
    id: "indonesia",
    name: "Indonesia",
    region: "Southeast Asia",
    coordinates: "0.7893° S, 113.9213° E",
    lat: -0.7893,
    lng: 113.9213,
    heroImage: "https://source.unsplash.com/3840x2160/?indonesia,bali,rice-terraces,temple,travel",
    description: "Indonesia, an archipelago of 17,000 islands spanning the equator, contains extraordinary diversity — from Bali's Hindu temple culture and Java's Buddhist Borobudur to Komodo's prehistoric dragons, Borneo's orangutans, and Raja Ampat's coral triangle.",
    terrain: "Volcanic Islands / Equatorial Rainforest / Coral Archipelago",
    climate: "Tropical Af / Monsoon Am",
    biodiversity: "Sundaland Tropical Forest, Coral Triangle & Wallace Line",
    destinations: [
      {
        id: "tanah-lot-temple",
        name: "Tanah Lot Temple",
        location: "Bali, Indonesia",
        category: "Hindu Sea Temple",
        heroImage: "https://source.unsplash.com/3840x2160/?tanah-lot,bali,indonesia,temple,sunset,ocean",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?tanah-lot,bali,waves,sunset,silhouette",
          "https://source.unsplash.com/1200x1600/?bali,temple,pura,hinduism,indonesia"
        ],
        description: "Bali's most iconic image — a Hindu sea temple perched on a coastal rock stack, accessible only at low tide.",
        longDescription: "Pura Tanah Lot (Temple of the Land in the Sea) is one of Bali's most sacred and most photographed sea temples, situated on a dramatic offshore rock formation surrounded by surf on the southwest coast of Bali. The temple, dating to the 16th century and associated with the Javanese priest Nirartha, is one of seven sea temples that form a chain around Bali's coastline, each positioned to be visible from the next.\n\nAt high tide Tanah Lot becomes an island; at low tide the rock is accessible on foot and a guardian sea snake is said to live in a cave beneath the temple, protecting it from evil spirits. The temple itself is only open to Hindu worshippers, but the surrounding rocks and sunset views are accessible to all. The sunset here — with the temple silhouetted against an orange sky — is one of Bali's most iconic experiences.",
        details: {
          "Founded": "16th Century (Nirartha)",
          "Function": "Sea Temple (Directional Protector)",
          "Access": "By Foot at Low Tide Only",
          "Sacred Snake": "Sea Snake in Cave (Protector)",
          "Best Time": "Sunset"
        },
        hours: "07:00 — 19:00",
        price: "IDR 75,000 (~€4.50)",
        coordinates: "8.6215° S, 115.0865° E",
        tip: "Arrive 1 hour before sunset and position on the rocks west of the temple for the classic silhouette shot. Visit at low tide to approach the base. The surrounding Tanah Lot cultural park has good warung (local restaurants) for a pre-sunset meal."
      },
      {
        id: "borobudur-temple",
        name: "Borobudur Temple",
        location: "Central Java, Indonesia",
        category: "UNESCO Buddhist Monument",
        heroImage: "https://source.unsplash.com/3840x2160/?borobudur,indonesia,buddhist,temple,volcano,sunrise",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?borobudur,stupa,bells,buddhist,java",
          "https://source.unsplash.com/1200x1600/?borobudur,sunrise,mist,volcano,merapi"
        ],
        description: "The world's largest Buddhist temple — a 9th-century stone mandala of 504 Buddha statues and 2,672 relief panels rising from a Javanese plain.",
        longDescription: "Borobudur, built between 750 and 850 AD during the Sailendra dynasty, is the world's largest Buddhist monument — a massive stone pyramid of 9 stacked platforms (6 square, 3 circular) rising 35 metres from the Kedu Plain, decorated with 2,672 relief panels (narrating the life of the Buddha and Buddhist cosmology in carved stone) and 504 Buddha statues, of which 432 sit in niches and 72 in latticed stupas on the upper circular terraces.\n\nAbandoned and buried under volcanic ash and jungle for centuries, the temple was rediscovered in 1814 and progressively restored, with a major UNESCO-funded restoration completed in 1983. The classic Borobudur experience is arriving before dawn to climb to the upper terraces and watch the sunrise emerge over the Merapi and Merbabu volcanoes with the monument's stupas in silhouette.",
        details: {
          "Built": "750–850 AD (Sailendra Dynasty)",
          "Tiers": "9 (6 Square + 3 Circular)",
          "Relief Panels": "2,672",
          "Buddha Statues": "504",
          "UNESCO Status": "World Heritage Site 1991"
        },
        hours: "Sunrise ticket 04:30 | Regular 06:30–17:00",
        price: "Sunrise ticket USD 50 | Regular USD 25",
        coordinates: "7.6079° S, 110.2038° E",
        tip: "Book the sunrise ticket (available online) months ahead — limited to 120 people. The sunrise over Merapi with stupas in silhouette is the defining Borobudur image. Combine with Prambanan Hindu temple complex (42 km away, same day)."
      },
      {
        id: "komodo-island",
        name: "Komodo National Park",
        location: "East Nusa Tenggara, Indonesia",
        category: "UNESCO Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?komodo-dragon,indonesia,island,prehistoric,monitor",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?komodo,dragon,lizard,indonesia,close-up",
          "https://source.unsplash.com/1200x1600/?pink-beach,komodo,indonesia,snorkel,coral"
        ],
        description: "The only place on Earth where Komodo dragons roam freely — combined with world-class diving in the Coral Triangle.",
        longDescription: "Komodo National Park protects the three main islands of Komodo, Rinca, and Padar in the Lesser Sunda Islands, home to the world's largest lizard — the Komodo dragon (Varanus komodoensis). The 2–3 metre, 70-kg reptiles, which can sprint at 20 km/h and bring down deer and water buffalo with a combination of serrated teeth and venom, have survived on these islands as living dinosaurs since the Pleistocene. The park's ~1,700 dragons are the last wild population.\n\nUnder the water, the park sits within the Coral Triangle — the world's most biodiverse marine ecosystem — with currents converging around the islands creating extraordinary conditions for manta rays (Manta alfredi congregates here year-round at cleaning stations), whale sharks, dugongs, and the most spectacular coral gardens in Indonesia. Pink Beach, named for the pulverised red coral mixed with white sand, is one of only seven pink beaches in the world.",
        details: {
          "Komodo Dragons": "~1,700 (Last Wild Population)",
          "Dragon Size": "Up to 3 m, 70 kg",
          "Marine Life": "Manta Rays, Whale Sharks, Dugong",
          "UNESCO Status": "World Heritage Site 1991",
          "Pink Beach": "One of 7 in the World"
        },
        hours: "07:00 — 17:00",
        price: "IDR 225,000 (~€13) + boat hire",
        coordinates: "8.5637° S, 119.4857° E",
        tip: "Book a liveaboard from Labuan Bajo for a 2–3 night trip combining Komodo trekking with diving. Never walk between the dragons — always stay close to your ranger guide. Padar Island viewpoint (45-min hike) gives the best panoramic shot of the three bays."
      },
      {
        id: "raja-ampat",
        name: "Raja Ampat",
        location: "West Papua, Indonesia",
        category: "Marine Biodiversity Paradise",
        heroImage: "https://source.unsplash.com/3840x2160/?raja-ampat,indonesia,islands,turquoise,aerial",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?raja-ampat,coral,fish,underwater,papua",
          "https://source.unsplash.com/1200x1600/?raja-ampat,mushroom-islands,aerial,green,sea"
        ],
        description: "The most biodiverse marine environment on Earth — 1,500 fish species and 600 coral species in the Bird's Head Seascape of West Papua.",
        longDescription: "Raja Ampat (Four Kings) is an archipelago of over 1,500 small islands, cays, and shoals in the Bird's Head Seascape of West Papua, widely considered the global centre of marine biodiversity and the most species-rich coral reef ecosystem on the planet. Scientific surveys have recorded 1,508 fish species, 537 coral species, 699 mollusc species, and 57 mantis shrimp species — species counts that exceed any other marine site studied. Pygmy seahorses, wobbegong sharks, manta rays, and schools of millions of fish are encountered on every dive.\n\nThe above-water landscape is equally extraordinary: mushroom-shaped limestone islands draped in dense jungle rising from water of impossible clarity, traditional Papuan fishing villages on stilts, and the near-total absence of mass tourism (the archipelago is reached by a 3-hour speedboat journey from Sorong, requiring flights from Bali or Jakarta).",
        details: {
          "Fish Species": "1,508 (Highest Count Globally)",
          "Coral Species": "537",
          "Area": "~40,000 km² of Sea",
          "Islands": "1,500+",
          "Access": "Sorong (3 hrs by speedboat)"
        },
        hours: "Always accessible",
        price: "Entry permit USD 35/week | Dive resort from USD 150/night",
        coordinates: "0.5810° S, 130.3725° E",
        tip: "Stay minimum 5 nights on a dive resort or liveaboard to justify the journey. Non-divers can snorkel directly off resort jetties and see extraordinary marine life. Book 6+ months ahead for peak July–August season. Wayag Island viewpoint requires a 45-min kayak and steep hike but gives the defining Raja Ampat panoramic image."
      },
      {
        id: "prambanan-temple",
        name: "Prambanan Temple",
        location: "Yogyakarta, Java",
        category: "UNESCO Hindu Temple",
        heroImage: "https://source.unsplash.com/3840x2160/?prambanan,temple,java,indonesia,hindu,spires",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?prambanan,hindu-temple,candis,java",
          "https://source.unsplash.com/1200x1600/?prambanan,sunset,silhouette,indonesia,temple"
        ],
        description: "The largest Hindu temple complex in Southeast Asia — 240 temples built in the 9th century dedicated to the Trimurti.",
        longDescription: "Prambanan (Candi Rara Jonggrang) is a 9th-century Hindu temple compound built by the Sanjaya dynasty of the Mataram Kingdom, containing 240 temples of which the three main towers — dedicated to Brahma, Vishnu, and Shiva (the Trimurti) — rise 47 metres each, clad in intricate bas-relief carvings depicting scenes from the Ramayana and Mahabharata. The Shiva temple is the tallest and most ornate, containing four chambers with statues of Shiva, Durga, Ganesha, and Agastya.\n\nThe compound was damaged by a major earthquake in 2006 and restoration work continues, but the three main temples are fully accessible. The most spectacular way to experience Prambanan is at the Sendratari Ramayana Ballet — an open-air classical Javanese dance performance using the lit temples as backdrop, held during full moon nights between May and October.",
        details: {
          "Built": "~850 AD (Sanjaya Dynasty)",
          "Temples": "240",
          "Tallest Tower": "47 m (Shiva Temple)",
          "UNESCO Status": "World Heritage Site 1991",
          "Ramayana Ballet": "Full Moon Nights, May–October"
        },
        hours: "06:00 — 17:00",
        price: "USD 25",
        coordinates: "7.7520° S, 110.4914° E",
        tip: "Combine with Borobudur on the same day (42 km apart, both UNESCO). Attend the Ramayana Ballet with temple backdrop — book in advance. Sunset from the viewing platform at the west end of the compound gives the best silhouette against an orange sky."
      },
      {
        id: "mount-bromo",
        name: "Mount Bromo",
        location: "East Java, Indonesia",
        category: "Active Volcano",
        heroImage: "https://source.unsplash.com/3840x2160/?mount-bromo,indonesia,volcano,sunrise,smoke",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?bromo,sunrise,sea-of-sand,caldera,east-java",
          "https://source.unsplash.com/1200x1600/?bromo,crater,smoke,jeep,horses,tengger"
        ],
        description: "An active smoking volcanic crater in a vast caldera — the most dramatic sunrise landscape in Java.",
        longDescription: "Mount Bromo (2,329 m) is an active stratovolcano in the Tengger Semeru National Park, sitting in the centre of a 10-kilometre-wide ancient caldera (the Tengger Caldera) alongside three other volcanic cones. At pre-dawn the landscape is one of Java's most otherworldly: a 'sea of sand' (pasir berbisik — 'whispering sand') extends across the caldera floor, its grey volcanic dust swept into dunes, with the smoking Bromo cone rising from it and the sacred Bromo Hindu-Tenggerese temple at its base.\n\nThe classic Bromo experience begins at 03:30 with a jeep ride to the Penanjakan viewpoint (2,770 m), where crowds gather to watch the sunrise illuminate the caldera, Bromo, and the distant Semeru peak (3,676 m, Java's highest and most active volcano) through morning mist. After sunrise a jeep crosses the caldera to the temple at Bromo's base, and 250 steps lead to the lip of the actively steaming crater.",
        details: {
          "Height": "2,329 Metres",
          "Caldera Width": "10 km (Tengger Caldera)",
          "Last Major Eruption": "2019",
          "Sunrise Viewpoint": "Penanjakan 2,770 m",
          "Tengger People": "Hindu-Animist Tradition"
        },
        hours: "Sunrise jeep tours depart 03:30",
        price: "IDR 220,000 (~€13) + jeep ~IDR 400,000",
        coordinates: "7.9425° S, 112.9530° E",
        tip: "Stay in Cemoro Lawang village at the caldera rim for the most convenient sunrise access. Book a jeep in advance from your guesthouse. Bring warm clothes and a face mask for volcanic sulphur fumes at the crater rim. The Yadnya Kasada festival (12th month of Tenggerese calendar) is spectacular."
      }
    ]
  },

  "vietnam": {
    id: "vietnam",
    name: "Vietnam",
    region: "Southeast Asia",
    coordinates: "14.0583° N, 108.2772° E",
    lat: 14.0583,
    lng: 108.2772,
    heroImage: "https://source.unsplash.com/3840x2160/?vietnam,ha-long-bay,karst,boats,travel",
    description: "Vietnam's 3,200-kilometre length encompasses extraordinary diversity — from the limestone archipelagos of Ha Long Bay to the ancient trading port of Hội An, the royal tombs of Huế, and the terraced rice fields of Sapa. Its cuisine, history, and landscapes make it one of Southeast Asia's most compelling destinations.",
    terrain: "Red River Delta / Annamese Cordillera / Mekong Delta",
    climate: "Tropical Monsoon Am / Subtropical Cwa",
    biodiversity: "Tropical Moist Broadleaf Forest & Karst Ecosystem",
    destinations: [
      {
        id: "ha-long-bay",
        name: "Ha Long Bay",
        location: "Quảng Ninh, Vietnam",
        category: "UNESCO Natural Wonder",
        heroImage: "https://source.unsplash.com/3840x2160/?ha-long-bay,vietnam,karst,boats,sunrise,limestone",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?halong-bay,junk-boat,limestone,mist,vietnam",
          "https://source.unsplash.com/1200x1600/?ha-long,kayak,cave,karst,vietnam,sea"
        ],
        description: "3,000 limestone karst pillars rising from the emerald Gulf of Tonkin — one of the world's most iconic seascapes.",
        longDescription: "Ha Long Bay (Vịnh Hạ Long — Bay of the Descending Dragon) is a UNESCO World Heritage Site of 1,553 square kilometres in the Gulf of Tonkin, containing 1,969 islands and islets of limestone karst rising vertically from the sea, their sheer walls draped in jungle vegetation and pocked with caves. Local legend attributes the bay's formation to dragons spitting jewels that became the islands, protecting Vietnam from maritime invaders.\n\nThe classic Ha Long experience is a 2–3 night cruise on a traditional junk boat, kayaking through hidden lagoons inside hollow karst formations, exploring the Hang Sung Sot (Surprising Cave) with its cathedral-scale chambers, and swimming in the vivid green water. The nearby Bai Tu Long Bay and Lan Ha Bay offer the same landscape with significantly fewer boats.",
        details: {
          "Islands": "1,969",
          "Area": "1,553 km²",
          "UNESCO Status": "World Heritage Site 1994",
          "Cave": "Hang Sung Sot (Surprising Cave)",
          "Best Alternative": "Lan Ha Bay (fewer tourists)"
        },
        hours: "Cruises depart Halong City daily",
        price: "Budget cruise from USD 80/night | Premium from USD 200/night",
        coordinates: "20.9101° N, 107.1839° E",
        tip: "Book a 2-night cruise minimum (Bai Tu Long Bay preferred for fewer boats). Kayaking at dawn in the hidden lagoons is the best activity. Lan Ha Bay (from Cat Ba Island) has the same scenery with half the tourist traffic — strongly recommended over the main Ha Long circuit."
      },
      {
        id: "hoi-an-ancient-town",
        name: "Hội An Ancient Town",
        location: "Quảng Nam, Vietnam",
        category: "UNESCO Trading Port",
        heroImage: "https://source.unsplash.com/3840x2160/?hoi-an,lanterns,vietnam,ancient-town,night",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hoi-an,japanese-bridge,vietnam,lanterns,night",
          "https://source.unsplash.com/1200x1600/?hoi-an,boats,thu-bon-river,yellow-walls,vietnam"
        ],
        description: "A perfectly preserved 15th–19th century trading port — narrow streets of yellow-walled merchants' houses glowing under silk lanterns.",
        longDescription: "Hội An (formerly Faïfo) was one of the most important trading ports in Southeast Asia from the 15th to 19th centuries, its natural harbour on the Thu Bon River receiving merchant ships from China, Japan, Europe, India, and the Arab world, who established trading communities whose architecture survives to create today's extraordinarily intact historic town. The Japanese Bridge (1593), Assembly Halls of the Chinese congregations (Fujian, Cantonese, Hainan, Chaozhou), and rows of yellow-walled merchant houses with dark tile roofs form an ensemble unlike anywhere else in Asia.\n\nOn the first night of each lunar month (full moon), the town turns off electric lights and illuminates entirely with coloured silk lanterns — the Lantern Festival — creating one of Vietnam's most magical atmospheres. The town's tailors (over 400 in and around the old town) are renowned for producing quality custom-made garments within 24–48 hours at very affordable prices.",
        details: {
          "UNESCO Status": "World Heritage Site 1999",
          "Japanese Bridge": "1593",
          "Assembly Halls": "5 (Chinese Congregations)",
          "Lantern Festival": "1st Night of Lunar Month",
          "Tailor Shops": "400+ (Custom Clothes 24–48 Hours)"
        },
        hours: "Old town always accessible | Museum sites 08:00–17:00",
        price: "Combined site ticket 120,000 VND (~€5)",
        coordinates: "15.8801° N, 108.3380° E",
        tip: "Stay at least 2 nights to see both a regular evening and a lantern festival night. Order custom clothing on day 1 (fitting day 2, collect day 3). Rent a bicycle to explore the rice paddies and traditional kilns of Thanh Ha pottery village 3 km away."
      },
      {
        id: "my-son-sanctuary",
        name: "Mỹ Sơn Sanctuary",
        location: "Quảng Nam, Vietnam",
        category: "UNESCO Archaeological Site",
        heroImage: "https://source.unsplash.com/3840x2160/?my-son,cham,vietnam,ruins,jungle,towers",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?my-son,cham-towers,vietnam,ancient,brick",
          "https://source.unsplash.com/1200x1600/?my-son,sanctuary,jungle,vietnam,overgrown"
        ],
        description: "The jungle-shrouded brick towers of the Cham civilisation — Vietnam's answer to Angkor, built between the 4th and 13th centuries.",
        longDescription: "Mỹ Sơn (Beautiful Mountain) is the religious capital of the Cham Empire, a Hindu kingdom that ruled central Vietnam from the 2nd to 17th centuries, building temple towers (kalan) of fired brick without mortar — bonded by a resin still not fully understood — in a style blending Khmer, Indian, and indigenous elements. The sanctuary served as a royal burial place and religious centre from the 4th to 13th centuries, accumulating over 70 temple structures across 14 temple groups.\n\nHeavily damaged by US bombing during the Vietnam War (believing the site sheltered Viet Cong fighters, American forces bombed the entire valley for 8 hours in 1969), the sanctuary was designated a UNESCO World Heritage Site in 1999. What survives — particularly Groups B, C, and D — retains extraordinary architectural and sculptural quality, their brick surfaces carved with Shiva devotional imagery and apsara figures.",
        details: {
          "Cham Kingdom": "2nd–17th Century",
          "Structures": "70+ Temples (14 Groups)",
          "UNESCO Status": "World Heritage Site 1999",
          "War Damage": "US Bombing, 1969",
          "Construction": "Fired Brick, No Mortar (Resin Bonded)"
        },
        hours: "06:30 — 17:00",
        price: "150,000 VND (~€6)",
        coordinates: "15.7588° N, 108.1227° E",
        tip: "Visit early morning (07:00) before heat and tour buses from Hội An arrive. Hire a guide (available at the gate) for context on the Cham sculptural programme. The evening light show (18:30, bookable from Hội An) illuminates the towers dramatically."
      },
      {
        id: "phong-nha-cave",
        name: "Phong Nha Caves",
        location: "Quảng Bình, Vietnam",
        category: "UNESCO Cave System",
        heroImage: "https://source.unsplash.com/3840x2160/?phong-nha,cave,vietnam,underground,river",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?son-doong,cave,vietnam,largest,underground-jungle",
          "https://source.unsplash.com/1200x1600/?phong-nha,cave,boat,stalactite,limestone"
        ],
        description: "Home to the world's largest cave — Sơn Đoòng — and the most spectacular cave system in Asia in the karst mountains of central Vietnam.",
        longDescription: "Phong Nha-Kẻ Bàng National Park in Quảng Bình province contains the world's most extensive and spectacular cave system, including Sơn Đoòng (Mountain River Cave) — discovered in 2009 and designated the world's largest cave by volume (38.5 million cubic metres). Sơn Đoòng is so large it contains its own weather system, a jungle of 30-metre trees growing in the light shafts from collapsed ceiling sections, and cave pearls the size of footballs.\n\nThe more accessible Phong Nha Cave (accessible by boat on an underground river) and Paradise Cave (7 km of walkable formations) provide extraordinary experiences without the 4-million-dong Sơn Đoòng tour price. The Tu Lan cave system offers overnight camping beside underground rivers for adventure cavers.",
        details: {
          "Largest Cave": "Sơn Đoòng (World's Largest by Volume)",
          "Son Doong Volume": "38.5 Million m³",
          "Son Doong Discovery": "2009",
          "UNESCO Status": "World Heritage Site 2003",
          "Paradise Cave Length": "7 km (Walkable)"
        },
        hours: "Phong Nha: 07:00–17:00 | Son Doong: limited tours",
        price: "Phong Nha 150,000 VND | Son Doong USD 3,000 (all-inclusive tour)",
        coordinates: "17.5503° N, 106.2833° E",
        tip: "Book Sơn Đoòng expedition (Oxalis Adventure, max 10 people/departure) 12+ months ahead — it sells out immediately each year. Paradise Cave is the best accessible alternative. Tu Lan caves (3-day camping tour) offer the best adventure experience for a fraction of the Sơn Đoòng cost."
      },
      {
        id: "hue-imperial-city",
        name: "Huế Imperial City",
        location: "Thừa Thiên–Huế, Vietnam",
        category: "UNESCO Imperial Complex",
        heroImage: "https://source.unsplash.com/3840x2160/?hue,imperial-city,vietnam,royal,moat,palace",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?hue,citadel,gate,vietnam,imperial",
          "https://source.unsplash.com/1200x1600/?hue,minh-mang-tomb,garden,vietnam,royal"
        ],
        description: "The seat of Vietnam's last dynasty — a walled imperial complex modelled on Beijing's Forbidden City on the Perfume River.",
        longDescription: "The Imperial City of Huế was built from 1804 by Emperor Gia Long of the Nguyễn dynasty, modelled loosely on Beijing's Forbidden City and serving as the capital of unified Vietnam until the French colonial period. The three-walled complex — the Citadel, the Imperial Enclosure, and the innermost Forbidden Purple City (the emperor's private quarters) — sits within a square moat on the north bank of the Hương (Perfume) River.\n\nHeavily damaged by the 1968 Tết Offensive and subsequent battles, the Imperial City is undergoing extensive restoration, with several palace buildings reconstructed and many in their romantic ruined state. The surrounding area contains the elaborate riverside tombs of Nguyễn emperors (Minh Mạng, Tự Đức, and Khải Định are the finest), each expressing a different vision of imperial death and dynasty, set in landscaped garden complexes accessible by the Perfume River boat tour.",
        details: {
          "Built": "1804 (Emperor Gia Long)",
          "Dynasty": "Nguyễn (Last Imperial Dynasty)",
          "UNESCO Status": "World Heritage Site 1993",
          "Damaged By": "Tết Offensive 1968",
          "Royal Tombs": "Minh Mạng, Tự Đức, Khải Định"
        },
        hours: "07:30 — 17:30",
        price: "200,000 VND (~€8)",
        coordinates: "16.4698° N, 107.5796° E",
        tip: "Take the Perfume River dragon boat tour combining the Imperial City with 2–3 royal tombs for the most complete Huế experience. Huế is also Vietnam's culinary capital — try bún bò Huế (beef noodle soup) and bánh bèo (steamed rice cakes) from street vendors."
      },
      {
        id: "sapa-rice-terraces",
        name: "Sapa Rice Terraces",
        location: "Lào Cai, Northwest Vietnam",
        category: "Cultural Landscape",
        heroImage: "https://source.unsplash.com/3840x2160/?sapa,rice-terraces,vietnam,mountains,ethnic",
        galleryImages: [
          "https://source.unsplash.com/1200x1600/?sapa,hmong,rice-field,harvest,terraces",
          "https://source.unsplash.com/1200x1600/?sapa,muong-hoa,valley,clouds,vietnam"
        ],
        description: "Cascading rice terraces carved into the Hoàng Liên Sơn mountains by H'Mông and Dao ethnic minorities over centuries.",
        longDescription: "The terraced rice paddies of the Sapa region in Lào Cai province, carved into the steep slopes of the Hoàng Liên Sơn range (containing Vietnam's highest peak, Fansipan at 3,143 m) by the H'Mông, Red Dao, Tày, and Giáy ethnic minorities over hundreds of years, are among the most spectacular agricultural landscapes in Asia. The Mường Hoa Valley and the terraces around the villages of Tả Van, Lao Chải, and Bản Hồ cascade down thousands of metres from ridge to valley in layers of brilliant green in planting season and gold at harvest.\n\nSapa town, at 1,500 metres, provides the base for trekking between ethnic minority villages — guided walks that combine spectacular mountain scenery with authentic engagement with communities still wearing traditional hand-embroidered clothing and practising traditional crafts. The best time is harvest season (late September–October) when the terraces turn gold.",
        details: {
          "Fansipan Height": "3,143 m (Vietnam's Highest)",
          "Ethnic Groups": "H'Mông, Red Dao, Tày, Giáy",
          "Altitude": "1,500 m (Sapa Town)",
          "Best Season": "Harvest (Sep–Oct), Planting (May–Jun)",
          "Fansipan Cable Car": "World's Longest 3-Line (2016)"
        },
        hours: "Always accessible",
        price: "Free | Guided trek from USD 25",
        coordinates: "22.3364° N, 103.8438° E",
        tip: "Book a 2-day guided trek staying overnight in a homestay in Tả Van — the best way to experience both the scenery and minority culture authentically. Visit late September–October for golden harvest terraces. Avoid Chinese New Year when Sapa is extremely crowded."
      }
    ]
  }

};
