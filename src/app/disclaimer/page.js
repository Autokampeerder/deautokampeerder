export const metadata = {
  title: 'Disclaimer | De Autokampeerder',
  description: 'Affiliate disclaimer en aansprakelijkheid.',
};

export default function Disclaimer() {
  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--spacing-xl)' }}>
      <h1>Disclaimer & Affiliate</h1>
      
      <div style={{ color: 'var(--text-muted)' }}>
        <p>Laatst bijgewerkt: Augustus 2026</p>
        
        <h3 style={{ marginTop: 'var(--spacing-lg)' }}>1. Informatie op de website</h3>
        <p>De informatie op De Autokampeerder is met de grootst mogelijke zorgvuldigheid samengesteld. Wij streven ernaar om nauwkeurige en actuele informatie te verstrekken over daktenten, dakdragers, kampeerartikelen en wetgeving omtrent daklast. Echter kunnen wij niet garanderen dat alle informatie te allen tijde volledig, juist of actueel is. De Autokampeerder is niet aansprakelijk voor enige schade die voortvloeit uit het gebruik van de informatie op deze website.</p>
        
        <h3 style={{ marginTop: 'var(--spacing-md)' }}>2. Affiliate links (Bol.com Partnerprogramma)</h3>
        <p>De Autokampeerder is deelnemer aan diverse affiliate programma's, waaronder het <strong>Bol.com Partnerprogramma</strong>. Dit betekent dat wij op onze website links plaatsen naar producten op externe webshops.</p>
        <p>Wanneer u via een van deze links (bijvoorbeeld een "Bekijk Prijs" knop) doorklikt en een aankoop doet bij de webshop (zoals Bol.com), ontvangen wij daarvoor een kleine commissie. <strong>Dit kost u helemaal niets extra.</strong> U betaalt precies dezelfde prijs als wanneer u rechtstreeks naar de webshop zou gaan. Deze commissies helpen ons om de website in de lucht te houden en nieuwe onafhankelijke artikelen te schrijven.</p>
        
        <h3 style={{ marginTop: 'var(--spacing-md)' }}>3. Eigen verantwoordelijkheid (Daklast)</h3>
        <p>Hoewel wij advies geven over autodaken en dakdragers, bent u te allen tijde <strong>zelf verantwoordelijk</strong> voor het verifiëren van de maximale dynamische en statische daklast van uw specifieke auto. Raadpleeg hiervoor altijd het instructieboekje van uw auto of uw autodealer. De Autokampeerder kan niet aansprakelijk worden gesteld voor schade aan uw voertuig door overbelading of foutieve montage.</p>
        
        <h3 style={{ marginTop: 'var(--spacing-md)' }}>4. Prijzen en beschikbaarheid</h3>
        <p>Wij tonen indicatieve prijzen op onze website ("Vanaf € ..."). Webshops wijzigen hun prijzen regelmatig. De definitieve prijs en de actuele voorraad worden bepaald op de website van de verkopende partij op het moment van aankoop.</p>
      </div>
    </div>
  );
}
