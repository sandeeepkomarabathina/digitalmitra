import { createContext, useContext, useState, useEffect } from 'react'

const AppCtx = createContext(null)
export const useApp = () => useContext(AppCtx)

export function AppProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('dm_dark') === '1' } catch { return false }
  })
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('dm_lang') || 'te' } catch { return 'te' }
  })
  const [fontSize, setFontSize] = useState(() => {
    try { return localStorage.getItem('dm_fs') || 'md' } catch { return 'md' }
  })
  const [voice, setVoice] = useState(false)
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('dm_dark', dark ? '1' : '0') } catch {}
  }, [dark])

  useEffect(() => { try { localStorage.setItem('dm_lang', lang) } catch {} }, [lang])
  useEffect(() => { try { localStorage.setItem('dm_fs', fontSize) } catch {} }, [fontSize])

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  const speak = (text) => {
    if (!voice || !('speechSynthesis' in window)) return
    speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang === 'te' ? 'te-IN' : 'en-IN'
    u.rate = 0.9
    speechSynthesis.speak(u)
  }

  const fsCls = { sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl' }[fontSize] || 'text-base'

  return (
    <AppCtx.Provider value={{ dark, setDark, lang, setLang, fontSize, setFontSize, fsCls, voice, setVoice, online, speak }}>
      <div className={`min-h-screen font-telugu ${fsCls} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}>
        {children}
      </div>
    </AppCtx.Provider>
  )
}
