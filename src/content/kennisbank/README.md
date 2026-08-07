# Kennisbank Content & Redactionele Richtlijnen (Werkwijze)

Elk Kennisbank-artikel op **DeAutokampeerder** moet strikt voldoen aan de onderstaande 8 kwaliteitsregels. Dit zorgt voor maximale betrouwbaarheid voor bezoekers, uitstekende indexeerbaarheid voor zoekmachines en citeerbaarheid door AI-systemen (Google Featured Snippets, ChatGPT, Perplexity, Gemini).

---

## 1. Directe Definitie & Kernantwoord
- Elk artikel **moet** openen met een heldere, directe definitie of antwoord op de hoofdvraag in de allereerste alinea (bijv.: *"Een daktent is een speciaal ontworpen kampeertent die je op de dakdragers van een auto monteert."*).
- Vermijd inleidende praatjes of vage zinnen bovenaan.

## 2. Prominent Veiligheidskader (Daklast & Geschiktheid)
- Direct na de introductie of eerste paragraaf **moet** een opvallend waarschuwingskader geplaatst worden over daklast en voertuiggeschiktheid:
  ```markdown
  > ⚠️ **Belangrijk voor je begint:** Een daktent is alleen geschikt als jouw auto en dakdragers het gewicht tijdens het rijden kunnen dragen. Lees eerst onze gids: [Past een daktent op mijn auto? Alles over daklast](/kennisbank/past-een-daktent-op-mijn-auto).
  ```

## 3. Gebalanceerde "Nadelen & Aandachtspunten" Sectie
- Een artikel mag **nooit** alleen voordelen of verkooptaal bevatten.
- Elk gidsartikel bevat een expliciete kop `## Nadelen en Aandachtspunten` waarin eerlijk wordt ingegaan op gewicht, stroomlijn/verbruik, in- en uitklappen bij slecht weer, voertuighoogte en campinglogistiek.

## 4. Genuanceerde & Feitelijke Formuleringen (Geen Valse Beloftes)
- Gebruik **geen** absolute of juridisch gevaarlijke beloftes zoals *"100% waterdicht"*, *"past op elke auto"* of *"droog en veilig"*.
- **Toegestane formuleringen:**
  - *"Minder last van grondvocht: Doordat je boven de grond slaapt, heb je minder last van optrekkende kou, modder en grondwater. De exacte slaaphoogte hangt af van het type auto en de dakdragers."*
  - *"Binnen 30 seconden tot een minuut open (afhankelijk van het type en je ervaring)."*
  - *"Hardshell daktenten: Deze bestaan uit een harde ABS- of aluminium schaal en klappen meestal met behulp van gasveren open."*

## 5. Duidelijke Partnerlink Disclosures
- Onder elk commercieel CTA-blok (`> 🏕️ ...`) **moet** een transparante partnerlink-vermelding worden geplaatst:
  ```markdown
  > *Partnerlink: Wij ontvangen mogelijk een commissie bij aankoop via onze partners, zonder extra kosten voor jou.*
  ```

## 6. Gewone HTML Interne Links (Geen JS-Event links)
- Alle interne links naar eigen gidsen en categorieën **moeten** als relatieve markdown-links geschreven worden (`[Past een daktent op mijn auto?](/kennisbank/past-een-daktent-op-mijn-auto)`).
- De Next.js renderer converteert deze naar echte, door crawlers te volgen HTML `<a href="/...">` ankerlinks.

## 7. Afbeeldingsrelevantie (Strict Visual Context)
- Afbeeldingen moeten **100% matchen** met het onderwerp van die alinea.
- Alle afbeeldingen worden opgeslagen in de eigen `/public/images/` map ter voorkoming van externe Unsplash URL-wisselingen.

## 8. Eerlijke Onderzoeksmethodiek
- Wij beweren **nooit** dat we producten fysiek in een testlab hebben getest.
- Vergelijkingen worden eerlijk en nuchter onderbouwd op basis van officiële fabrieksspecificaties, handleidingen, draagvermogen-berekeningen en geaggregeerde gebruikersreviews.
