const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.DEEPSEEK_API_KEY;

if (!API_KEY) {
  console.error('Error: DEEPSEEK_API_KEY environment variable is missing.');
  process.exit(1);
}

const contentDir = path.join(process.cwd(), 'src/content/kennisbank');

// Content Roadmap of High-Opportunity Car Camping Topics
const topicQueue = [
  {
    slug: 'daktent-op-kleine-auto-mogelijk-en-tips',
    title: 'Daktent op een kleine auto: Kan dat op een Fiat 500, VW Polo of stadsauto?',
    category: 'Installatie',
    image: '/images/dakdragers-auto.jpg',
    excerpt: 'Denk je dat je een 4x4 nodig hebt voor een daktent? Ontdek hoe daktenten gemonteerd kunnen worden op compacte stadsauto’s mits je op de daklast let.'
  },
  {
    slug: 'daktent-op-elektrische-auto-actieradius-en-tips',
    title: 'Daktent op een Elektrische Auto (EV / Tesla / ID.4): Actieradius & Montagetips',
    category: 'Koopgidsen',
    image: '/images/daktent-opzetten.jpg',
    excerpt: 'Hoe beïnvloedt een daktent de actieradius van je elektrische auto? Bekijk de invloed op het verbruik, aerodynamica en geschikte dakdragers.'
  },
  {
    slug: '2-persoons-vs-4-persoons-gezinsdaktent-vergelijken',
    title: '2-Persoons vs. 4-Persoons Gezinsdaktent: Gewicht, Binnenruimte & Comfort',
    category: 'Koopgidsen',
    image: '/images/blue-car-roof-tent.png',
    excerpt: 'Kies je een compacte 2-persoons hardshell of een ruime 4-persoons softshell voor de hele familie? Bekijk de verschillen in gewicht en leefruimte.'
  },
  {
    slug: 'lichtste-daktenten-onder-50-kg-overzicht',
    title: 'De Lichtste Daktenten Onder 50 kg voor Auto’s met een Lage Daklast',
    category: 'Koopgidsen',
    image: '/images/rooftop-cabin-smart-top-3.png',
    excerpt: 'Heeft jouw auto een beperkte dynamische daklast van 50 kg? Bekijk de beste ultralichte daktenten die op vrijwel elke personenauto passen.'
  },
  {
    slug: 'hoeveel-wh-powerstation-nodig-voor-12v-koelbox',
    title: 'Hoeveel Wh Powerstation heb je Nodig voor een 12V Compressorkoelbox?',
    category: 'Stroom & Power',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Bereken eenvoudig hoeveel accucapaciteit (Wh) je nodig hebt om je 12V compressorkoelbox 1, 2 of 3 dagen off-grid koud te houden.'
  },
  {
    slug: 'daktent-en-fietsendrager-combineren-op-een-auto',
    title: 'Daktent + Fietsendrager Combineren op Één Auto: Kogeldruk & Indeling',
    category: 'Installatie',
    image: '/images/dakdragers-auto.jpg',
    excerpt: 'Wil je op roadtrip met zowel een daktent op het dak als e-bikes op de trekhaak? Ontdek de tips voor gewichtsverdeling en kogeldruk.'
  },
  {
    slug: 'anti-condensmat-in-daktent-noodzakelijk-of-niet',
    title: 'Anti-condensmat in de Daktent: Is het Echt Noodzakelijk?',
    category: 'Onderhoud',
    image: '/images/blue-car-roof-tent.png',
    excerpt: 'Waarom ontstaat er vocht onder je daktentmatras en hoe voorkomt een anti-condens ondermat schimmel en koude slaapomstandigheden?'
  },
  {
    slug: 'kamperen-in-herfst-en-winter-met-een-daktent',
    title: 'Kamperen in de Herfst en Winter met een Daktent: Isolatie & Verwarming',
    category: 'Kampeertips',
    image: '/images/daktent-opzetten.jpg',
    excerpt: 'Kan je in de winter in een daktent slapen? Alles over binnententen, thermokleding, 12V warmtedekens en het voorkomen van bevriezing.'
  }
];

function getExistingSlugs() {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

async function callDeepSeek(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `Je bent de hoofdredacteur van DeAutokampeerder (deautokampeerder.nl). Je schrijft professionele, eerlijke en genuanceerde Kennisbank-artikelen in het Nederlands voor autokampeerders.

STRIKTE REDACTIONELE RICHTLIJNEN:
1. Open met een heldere, directe definitie of antwoord in alinea 1 (geschikt voor Google Featured Snippets).
2. Voeg direct na de introductie het volgende waarschuwingskader toe:
   > ⚠️ **Belangrijk voor je begint:** Een daktent is alleen geschikt als jouw auto en dakdragers het benodigde gewicht tijdens het rijden kunnen dragen. Lees eerst onze gids: [Past een daktent op mijn auto? Alles over daklast en dakdragers](/kennisbank/past-een-daktent-op-mijn-auto).
3. Bevat een expliciete sectie "## Nadelen en Aandachtspunten" met eerlijke minpunten (gewicht, stroomlijn, inklappen bij regen, voertuighoogte).
4. Gebruik GEEN valse beloftes zoals "100% waterdicht", "past op elke auto" of "wij hebben dit in ons testlab getest". We vergelijken op basis van fabrieksspecificaties, gewichtsklassen en gebruikersbeoordelingen.
5. Gebruik schone interne markdown-links naar /daktenten, /dakdragers, /accu-en-power, /accessoires, /fietsendragers of gerelateerde artikelen.
6. Als je een product uitlicht (zoals een daktent, koelbox of dakdrager), gebruik dan een callout-blok:
   > 🏕️ **[Productnaam]:** Korte omschrijving.
   >
   > [Bekijk Prijs & Beschikbaarheid &rarr;](https://partner.bol.com/click/click?p=2&t=url&s=1536170&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F%3Fsearchtext%3Dzoekterm)
   >
   > *Partnerlink: Wij ontvangen mogelijk een commissie bij aankoop via onze partners, zonder extra kosten voor jou.*
7. Lever UITSLUITEND het geldige markdown-bestand op met de juiste YAML frontmatter bovenaan (title, date, category, image, excerpt).`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7
    });

    const req = https.request('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.choices && json.choices.length > 0) {
            resolve(json.choices[0].message.content);
          } else {
            reject(new Error(`DeepSeek API Error: ${body}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  const existingSlugs = getExistingSlugs();
  console.log(`Found ${existingSlugs.length} existing articles.`);

  const nextTopic = topicQueue.find(t => !existingSlugs.includes(t.slug));

  if (!nextTopic) {
    console.log('All scheduled topics from the queue have been written!');
    return;
  }

  console.log(`Generating new article: "${nextTopic.title}" (slug: ${nextTopic.slug})...`);

  const today = new Date().toISOString().split('T')[0];
  const prompt = `Schrijf een compleet, hoogwaardig Kennisbank-artikel voor DeAutokampeerder.

Titel: "${nextTopic.title}"
Slug: "${nextTopic.slug}"
Categorie: "${nextTopic.category}"
Afbeelding: "${nextTopic.image}"
Excerpt: "${nextTopic.excerpt}"
Datum: "${today}"

Zorg dat het artikel uitgebreid, feitelijk juist, genuanceerd en 100% compliant is met alle 8 kwaliteitsregels.`;

  try {
    let articleContent = await callDeepSeek(prompt);

    // Strip markdown block fences if present
    articleContent = articleContent.replace(/^```markdown\n/, '').replace(/\n```$/, '');

    const filePath = path.join(contentDir, `${nextTopic.slug}.md`);
    fs.writeFileSync(filePath, articleContent, 'utf8');

    console.log(`Successfully generated and saved article to ${filePath}`);
  } catch (error) {
    console.error('Failed to generate article:', error);
    process.exit(1);
  }
}

run();
