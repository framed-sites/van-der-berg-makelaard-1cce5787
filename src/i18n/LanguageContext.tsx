import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { translations } from './translations'

const STANDAARD_TAAL = 'nl'
const TAAL_OPSLAG_SLEUTEL = 'delft-woningen-taal'

type VertalingWoordenboek = Record<string, string>
type VertalingenCollectie = Record<string, VertalingWoordenboek>

const getypteVertalingen: VertalingenCollectie = translations

interface LanguageContextType {
  lang: string
  setLang: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: STANDAARD_TAAL,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(STANDAARD_TAAL)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const opgeslagenTaal = localStorage.getItem(TAAL_OPSLAG_SLEUTEL)
      if (opgeslagenTaal) {
        setLangState(opgeslagenTaal)
      }
    }
  }, [])

  const setLang = useCallback((nieuweTaal: string) => {
    setLangState(nieuweTaal)
    if (typeof window !== 'undefined') {
      localStorage.setItem(TAAL_OPSLAG_SLEUTEL, nieuweTaal)
      document.documentElement.lang = nieuweTaal
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useTranslation() {
  const { lang } = useLanguage()
  
  return useCallback((sleutel: string): string => {
    const huidigeVertalingen = getypteVertalingen[lang]
    if (huidigeVertalingen && huidigeVertalingen[sleutel]) {
      return huidigeVertalingen[sleutel]
    }
    
    const fallbackVertalingen = getypteVertalingen[STANDAARD_TAAL]
    if (fallbackVertalingen && fallbackVertalingen[sleutel]) {
      return fallbackVertalingen[sleutel]
    }
    
    return sleutel
  }, [lang])
}