import { useEffect } from 'react'

function ContentSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacybeleid</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Welkom bij ons privacybeleid. Wij, als vastgoedmakelaardij, hechten aan de bescherming van uw persoonsgegevens. Dit beleid legt uit hoe wij uw gegevens verzamelen, gebruiken en beschermen bij het gebruik van onze website en diensten.</p>
          <p>Wij respecteren de Algemene Verordening Gegevensbescherming (AVG) en zorgen ervoor dat uw gegevens veilig en transparant worden verwerkt. Wij gebruiken uw gegevens alleen voor het verstrekken van gewenste diensten, zoals het sturen van woningaanbiedingen, het plannen van bezichtigingen en het uitvoeren van waardebepalingen.</p>
          <p>Wij delen uw gegevens niet met derden, tenzij dit wettelijk vereist is of u hier expliciet toestemming voor geeft. U heeft te allen tijde het recht om inzage te vragen in uw gegevens, deze te corrigeren of te laten verwijderen.</p>
          <p>Voor vragen over ons privacybeleid kunt u contact met ons opnemen via het contactformulier op onze website of per e-mail naar privacy@delftvastgoed.nl.</p>
        </div>

      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacybeleid | Delft Vastgoed'
  }, [])

  return (
    <main>
      <ContentSection0 />
    </main>
  )
}