import { useEffect } from 'react'

function ContentSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Full GDPR-compliant privacy policy covering: data collection (forms, cookies, analytics), data processing purposes, legal basis for processing, data retention periods, third-party sharing (Funda, Google Analytics, Mailchimp), user rights (access, rectification, erasure, portability), cookie policy with categories (necessary, functional, analytical, marketing), and contact details for the privacy officer. Last updated: January 2024. Include a cookie preference center link.</p>
        </div>

      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | My Website'
  }, [])

  return (
    <main>
      <ContentSection0 />
    </main>
  )
}
