/**
 * DeepSeek AI Content Generator
 * Run: node src/scripts/generate-content.js "Jouw Onderwerp Hier"
 */

require('dotenv').config({ path: '.env.local' });
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) {
  console.error("❌ Fout: DEEPSEEK_API_KEY niet gevonden in .env.local");
  process.exit(1);
}

// DeepSeek is 100% OpenAI compatible, dus we gebruiken de OpenAI SDK met een andere baseURL
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: apiKey,
});

async function generateArticle(topic) {
  console.log(`🤖 DeepSeek is aan het schrijven over: "${topic}"... Even geduld.`);

  const systemPrompt = `Je bent een professionele copywriter en outdoor expert voor een premium affiliate website genaamd 'De Autokampeerder'.
Jouw doel is om een uitgebreid, diepgaand en SEO-geoptimaliseerd artikel te schrijven over het opgegeven onderwerp.

Richtlijnen:
1. Schrijf in het Nederlands. Gebruik een enthousiaste, behulpzame en autoritaire toon ("wij adviseren", "onze ervaring").
2. Het artikel moet geformatteerd zijn als Markdown (.md).
3. Het MOET beginnen met YAML Frontmatter, EXACT in deze structuur:
---
title: "Een wervende, SEO vriendelijke titel"
date: "YYYY-MM-DD" (gebruik de datum van vandaag)
category: "Kies uit: Koopgidsen, Installatie, of Inspiratie"
image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
excerpt: "Een pakkende samenvatting van maximaal 2 zinnen."
---

4. Na de frontmatter schrijf je het artikel. Gebruik veel tussenkopjes (## en ###), bulletpoints en korte alinea's. 
5. Het artikel moet minstens 500-800 woorden bevatten. Ga echt de diepte in, noem technische details (zoals polykatoen, gasveren, statische daklast) waar relevant.
6. Voeg ergens subtiel een call-to-action toe naar een 'Thule' of 'Sheepie' daktent of gerelateerde accessoire (bijv. fietsendragers).`;

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Onderwerp: ${topic}` }
      ],
      temperature: 0.7,
      max_tokens: 2500,
    });

    const articleContent = completion.choices[0].message.content;

    // Bepaal een veilige bestandsnaam (slug)
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const filename = `${slug}.md`;
    
    // Zorg dat de map bestaat
    const dir = path.join(process.cwd(), 'src', 'content', 'kennisbank');
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }

    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, articleContent, 'utf8');

    console.log(`✅ Succes! Artikel is gegenereerd en opgeslagen in: ${filepath}`);
    console.log(`🌍 Je kunt het nu bekijken op: http://localhost:3000/kennisbank/${slug}`);

  } catch (error) {
    console.error("❌ Fout bij het aanroepen van DeepSeek:", error.message);
  }
}

// Pak het argument uit de command line
const topicArg = process.argv[2];
if (!topicArg) {
  console.log("Gebruik: node generate-content.js \"Onderwerp van het artikel\"");
  process.exit(1);
}

generateArticle(topicArg);
