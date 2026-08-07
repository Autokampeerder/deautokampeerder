import UspBar from "@/components/UspBar";

export const metadata = {
  title: "Transparantie & Werkwijze | DeAutokampeerder",
  description: "Hoe DeAutokampeerder werkt, hoe we informatie verzamelen en hoe onze affiliate-links werken. 100% eerlijk en helder.",
  alternates: {
    canonical: "https://deautokampeerder.nl/transparantie-en-methodiek",
  },
};

export default function TransparantiePage() {
  return (
    <div className="page-wrapper">
      <UspBar />

      <main style={{ padding: "60px 0", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          
          <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h1 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
              Transparantie & Onze Werkwijze
            </h1>
            <p style={{ color: "#5E7A70", fontSize: "1.1rem", marginBottom: "30px" }}>
              Eerlijkheid en heldere informatie staan bij DeAutokampeerder voorop. Op deze pagina leggen we gewoon nuchter uit hoe ons platform werkt.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border-light)", margin: "30px 0" }} />

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                1. Wat is DeAutokampeerder?
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                DeAutokampeerder is een informatie- en vergelijkingsplatform voor iedereen die graag met de auto kampeert. Wij verzamelen populaire en handige spullen rondom daktenten, dakdragers, fietsendragers, powerstations en outdoor accessoires uit aangesloten webwinkels (zoals Bol.com) en zetten deze overzichtelijk voor je op een rij.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                2. Hoe werken de links & inkomsten? (Affiliate Links)
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Wanneer je op een product op onze website klikt, sturen we je door naar de betreffende webwinkel waar het product te koop is. Als je daar vervolgens een aankoop doet, ontvangen wij in sommige gevallen een kleine commissie van de webwinkel.
              </p>
              <p style={{ lineHeight: "1.7", color: "#333", marginTop: "12px" }}>
                <strong style={{ color: "var(--secondary)" }}>Dit kost jou als koper helemaal niets extra's.</strong> De prijs bij de webwinkel blijft voor jou exact gelijk. Dankzij deze commissies kunnen wij het platform onderhouden, de prijzen bijwerken en artikelen schrijven.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                3. Prijzen & Informatie
              </h2>
              <p style={{ lineHeight: "1.7", color: "#333" }}>
                Wij proberen de vermelde prijzen via koppelingen zo actueel mogelijk te houden. De definitieve prijs en voorraad worden echter altijd bepaald door de uiteindelijke verkoper. Controleer daarom voor aankoop altijd de webwinkel.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
