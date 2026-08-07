import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UspBar from "@/components/UspBar";

export const metadata = {
  title: "Transparantie & Methodiek | DeAutokampeerder",
  description: "Hoe DeAutokampeerder producten vergelijkt, specificaties analyseert en hoe onze affiliate-partnerschappen werken. 100% eerlijk en transparant.",
  alternates: {
    canonical: "https://deautokampeerder.nl/transparantie-en-methodiek",
  },
};

export default function TransparantiePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <UspBar />

      <main style={{ padding: "60px 0", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          
          <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h1 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
              Transparantie & Onze Methodiek
            </h1>
            <p style={{ color: "#5E7A70", fontSize: "1.1rem", marginBottom: "30px" }}>
              Eerlijkheid en duidelijke informatie staan bij DeAutokampeerder voorop. Op deze pagina leggen we exact uit hoe wij producten vergelijken, hoe onze adviezen tot stand komen en hoe wij de website onderhouden.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border-light)", margin: "30px 0" }} />

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                1. Hoe wij producten vergelijken (Onze Onderzoeksmethodiek)
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Wij zijn graag 100% eerlijk: <strong>wij testen niet alle producten fysiek zelf in een testlaboratorium</strong>. Het is voor een onafhankelijk platform onmogelijk om honderden daktenten, dakdragers en powerstations zelf aan te schaffen en fysiek te testen.
              </p>
              <p style={{ lineHeight: "1.7", color: "#333", marginTop: "12px" }}>
                Onze vergelijkingen en adviezen komen tot stand door een grondige analyse van:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "#444" }}>
                <li><strong>Officiële fabrieksspecificaties:</strong> Afmetingen (open/gesloten), gewicht, matrasdikte, materiaal en waterkolom.</li>
                <li><strong>Technische voertuigdocumentatie:</strong> Dynamische en statische daklastberekeningen volgens autofabrikanten.</li>
                <li><strong>Geaggregeerde gebruikersbeoordelingen:</strong> Ervaringen van honderden daadwerkelijke kopers op onafhankelijke platforms.</li>
                <li><strong>Praktijkervaringen van kampeerders:</strong> Veelgestelde vragen en tips uit overland- en kampeercommunities.</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                2. Het label "Beste Getest" & Aanbevelingen
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Wanneer een product bij ons het label <em>"Beste Getest"</em> of <em>"Beste Koop"</em> krijgt, is dit gebaseerd op een gewogen vergelijking van de <strong>prijs-kwaliteitverhouding, specificaties, garantievoorwaarden en consumentenbeoordelingen</strong> binnen die specifieke categorie.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                3. Hoe verdienen wij geld? (Affiliate Marketing)
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                DeAutokampeerder is een gratis vergelijkingssite. Om de website te onderhouden, de nieuwste prijzen te synchroniseren en waardevolle artikelen te schrijven, maken wij gebruik van <strong>affiliate marketing</strong> (o.a. via Bol.com).
              </p>
              <p style={{ lineHeight: "1.7", color: "#333", marginTop: "12px" }}>
                Wanneer je op een productknop op onze site klikt en vervolgens een aankoop doet bij de webwinkel, ontvangen wij mogelijk een kleine commissie. 
                <strong style={{ color: "var(--secondary)" }}> Dit kost jou als koper helemaal niets extra's.</strong> De prijs die jij betaalt blijft exact hetzelfde.
              </p>
              <p style={{ lineHeight: "1.7", color: "#333", marginTop: "12px" }}>
                Onze adviezen worden <strong>niet beïnvloed</strong> door commissiepercentages. Producten die niet aan onze specificatie- en kwaliteitseisen voldoen, worden niet aanbevolen.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                4. Gegevenscontrole & Updates
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Prijzen en voorraden bij aangesloten webwinkels kunnen veranderen. Wij proberen via automatische API-koppelingen de prijzen zo actueel mogelijk te houden. Wij adviseren echter altijd om de definitieve prijs en levertijd te controleren op de website van de verkoper.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
