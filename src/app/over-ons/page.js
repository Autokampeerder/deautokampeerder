import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UspBar from "@/components/UspBar";
import Link from "next/link";

export const metadata = {
  title: "Over Ons | DeAutokampeerder",
  description: "Het verhaal achter DeAutokampeerder: hét onafhankelijke informatieplatform voor daktenten, dakdragers, stroomvoorzieningen en autokampeer-gear.",
  alternates: {
    canonical: "https://deautokampeerder.nl/over-ons",
  },
};

export default function OverOnsPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <UspBar />

      <main style={{ padding: "60px 0", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          
          <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h1 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
              Over DeAutokampeerder
            </h1>
            <p style={{ color: "#5E7A70", fontSize: "1.15rem", marginBottom: "30px", lineHeight: "1.6" }}>
              Welkom bij DeAutokampeerder – dé plek voor iedereen die houdt van de vrijheid van kamperen met de auto, daktent of luifel in Nederland, België en heel Europa.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border-light)", margin: "30px 0" }} />

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                Onze Missie
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Autokamperen heeft de afgelopen jaren een enorme vlucht genomen. Of je nu met een compacte stadsauto op pad gaat met een lichtgewicht daktent, of met een robuuste 4x4 overland-setup duizenden kilometers maakt: goede uitrusting maakt het verschil tussen een droomreis en gedoe onderweg.
              </p>
              <p style={{ lineHeight: "1.7", color: "#333", marginTop: "12px" }}>
                Het aanbod aan daktenten, dakdragers, fietsendragers en portable powerstations is enorm. Wij hebben DeAutokampeerder opgericht om overzicht te scheppen in de jungle van specificaties, daklast-berekeningen en montageregels.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                Wat kun je bij ons verwachten?
              </h2>
              <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "#444" }}>
                <li><strong>Onafhankelijk specificatie-onderzoek:</strong> Duidelijke vergelijkingen op afmetingen, gewicht, dakbelasting en prijs-kwaliteit.</li>
                <li><strong>Praktische Koopgidsen:</strong> Eerlijke informatie over hardshell vs. softshell, daklastvoorwaarden en off-grid stroom.</li>
                <li><strong>Geen valse beloftes:</strong> Wij leggen transparant uit hoe adviezen tot stand komen. Meer hierover lees je op onze pagina over <Link href="/transparantie-en-methodiek" style={{ color: "var(--secondary)", textDecoration: "underline" }}>Transparantie & Methodiek</Link>.</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                Contact & Vragen
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Heb je een vraag over een artikel, een suggestie voor een vergelijking of wil je met ons in contact komen? Stuur ons gerust een bericht via onze <Link href="/contact" style={{ color: "var(--secondary)", textDecoration: "underline" }}>contactpagina</Link>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
