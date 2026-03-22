import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import { ChevronLeft, ExternalLink, Menu, X, Wifi, WifiOff } from 'lucide-react'

// ─── NAVBAR ───────────────────────────────────────────────────
export function Navbar() {
  const { dark, setDark, lang, setLang, online, voice, setVoice } = useApp()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const loc = useLocation()

  const links = [
    { label: lang === 'te' ? 'హోమ్' : 'Home', path: '/' },
    { label: lang === 'te' ? 'రైతు' : 'Farmer', path: '/farmer' },
    { label: lang === 'te' ? 'విద్యార్థి' : 'Student', path: '/student' },
    { label: lang === 'te' ? 'సేవలు' : 'Services', path: '/services' },
    { label: lang === 'te' ? 'భద్రత' : 'Safety', path: '/safety' },
  ]

  const isActive = (path) => path === '/' ? loc.pathname === '/' : loc.pathname.startsWith(path)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-forest-500 flex items-center justify-center text-lg shadow-sm flex-shrink-0">🌾</div>
          <div className="hidden xs:block leading-tight">
            <p className="font-display font-bold text-forest-700 dark:text-forest-400 text-sm">డిజిటల్ మిత్ర</p>
            <p className="text-gray-400 text-[10px]">Digital Mitra</p>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l.path} onClick={() => navigate(l.path)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(l.path) ? 'text-forest-700 dark:text-forest-400 bg-forest-50 dark:bg-forest-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-forest-700 dark:hover:text-forest-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <span className={`hidden sm:flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${online ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 text-red-600'}`}>
            {online ? <Wifi size={11}/> : <WifiOff size={11}/>}
            <span className="hidden lg:inline">{online ? (lang === 'te' ? 'ఆన్‌లైన్' : 'Online') : 'Offline'}</span>
          </span>
          <button onClick={() => setVoice(v => !v)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-base transition-colors ${voice ? 'bg-forest-100 dark:bg-forest-900/30 text-forest-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}
            title={voice ? 'Voice On' : 'Voice Off'}>
            {voice ? '🔊' : '🔇'}
          </button>
          <button onClick={() => setLang(l => l === 'te' ? 'en' : 'te')}
            className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            {lang === 'te' ? 'EN' : 'తె'}
          </button>
          <button onClick={() => setDark(d => !d)}
            className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-base hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => navigate('/settings')}
            className="hidden sm:flex w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 items-center justify-center text-base hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            ⚙️
          </button>
          <button onClick={() => setOpen(o => !o)}
            className="md:hidden w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            {open ? <X size={18} className="text-gray-600 dark:text-gray-300"/> : <Menu size={18} className="text-gray-600 dark:text-gray-300"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 space-y-1">
          {links.map(l => (
            <button key={l.path} onClick={() => { navigate(l.path); setOpen(false) }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(l.path) ? 'bg-forest-50 dark:bg-forest-900/20 text-forest-700 dark:text-forest-400' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
              {l.label}
            </button>
          ))}
          <button onClick={() => { navigate('/settings'); setOpen(false) }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            ⚙️ {lang === 'te' ? 'సెట్టింగ్స్' : 'Settings'}
          </button>
        </div>
      )}
    </nav>
  )
}

// ─── BOTTOM NAV (mobile) ──────────────────────────────────────
export function BottomNav() {
  const { lang } = useApp()
  const loc = useLocation()
  const navigate = useNavigate()
  const tabs = [
    { path:'/', icon:'🏠', te:'హోమ్', en:'Home' },
    { path:'/farmer', icon:'🌾', te:'రైతు', en:'Farmer' },
    { path:'/student', icon:'🎓', te:'విద్యార్థి', en:'Student' },
    { path:'/services', icon:'🏛️', te:'సేవలు', en:'Services' },
    { path:'/safety', icon:'🛡️', te:'భద్రత', en:'Safety' },
  ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex md:hidden safe-bottom shadow-lg">
      {tabs.map(t => {
        const active = t.path === '/' ? loc.pathname === '/' : loc.pathname.startsWith(t.path)
        return (
          <button key={t.path} onClick={() => navigate(t.path)}
            className={`relative flex-1 flex flex-col items-center py-2 px-1 transition-all ${active ? 'text-forest-600 dark:text-forest-400' : 'text-gray-400 dark:text-gray-500'}`}>
            <span className={`text-xl transition-transform duration-150 ${active ? 'scale-110' : 'scale-100'}`}>{t.icon}</span>
            <span className={`text-[10px] mt-0.5 font-medium leading-tight ${active ? '' : 'opacity-70'}`}>{lang === 'te' ? t.te : t.en}</span>
            {active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-forest-600 dark:bg-forest-400 rounded-t-full"/>}
          </button>
        )
      })}
    </nav>
  )
}

// ─── PAGE HEADER ──────────────────────────────────────────────
export function PageHeader({ title, subtitle, gradient = 'from-forest-600 to-forest-900', icon, showBack = true }) {
  const navigate = useNavigate()
  return (
    <div className={`bg-gradient-to-br ${gradient} text-white px-4 sm:px-6 py-5`}>
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {showBack && (
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0">
            <ChevronLeft size={20}/>
          </button>
        )}
        <div>
          <h1 className="font-display font-bold text-xl sm:text-2xl leading-tight">{icon && <span className="mr-2">{icon}</span>}{title}</h1>
          {subtitle && <p className="text-white/75 text-sm mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

// ─── CARD ─────────────────────────────────────────────────────
export function Card({ children, className = '', onClick }) {
  const base = `card p-4 ${onClick ? 'cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]' : ''} ${className}`
  return <div className={base} onClick={onClick}>{children}</div>
}

// ─── GRADIENT BUTTON ──────────────────────────────────────────
export function GradientBtn({ children, gradient, onClick, className = '', href }) {
  const cls = `inline-flex items-center justify-center gap-2 ${gradient} text-white font-bold rounded-xl px-5 py-3 transition-all duration-200 active:scale-95 hover:opacity-90 shadow-sm cursor-pointer ${className}`
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}

// ─── TREND BADGE ──────────────────────────────────────────────
export function TrendBadge({ trend, change }) {
  if (trend === 'up') return <span className="inline-flex items-center gap-0.5 text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-xs font-bold">▲ +₹{Math.abs(change)}</span>
  if (trend === 'down') return <span className="inline-flex items-center gap-0.5 text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full text-xs font-bold">▼ ₹{Math.abs(change)}</span>
  return <span className="inline-flex items-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">— స్థిరం</span>
}

// ─── TOGGLE ───────────────────────────────────────────────────
export function Toggle({ value, onChange }) {
  return (
    <button onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0 focus:outline-none ${value ? 'bg-forest-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${value ? 'translate-x-6' : 'translate-x-0'}`}/>
    </button>
  )
}

// ─── CHIP (filter button) ────────────────────────────────────
export function Chip({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${active ? 'bg-forest-600 text-white border-forest-600 shadow-sm' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-forest-400 dark:hover:border-forest-500'}`}>
      {label}
    </button>
  )
}

// ─── BADGE ────────────────────────────────────────────────────
export function Badge({ children, color = 'green' }) {
  const colors = {
    green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  }
  return <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color] || colors.green}`}>{children}</span>
}

// ─── PORTAL LINK ──────────────────────────────────────────────
export function PortalLink({ portal }) {
  return (
    <a href={portal.url} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
      style={{ borderLeft: `3px solid ${portal.color}` }}>
      <span className="text-2xl flex-shrink-0">{portal.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{portal.name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{portal.desc}</p>
      </div>
      <ExternalLink size={14} className="text-gray-400 group-hover:text-forest-600 transition-colors flex-shrink-0"/>
    </a>
  )
}

// ─── EMPTY STATE ──────────────────────────────────────────────
export function EmptyState({ emoji = '🔍', text = 'ఫలితాలు కనుగొనబడలేదు' }) {
  return (
    <div className="text-center py-16">
      <p className="text-5xl mb-3">{emoji}</p>
      <p className="text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  )
}

// ─── COMING SOON ──────────────────────────────────────────────
export function ComingSoon({ title = 'త్వరలో అందుబాటులో' }) {
  const navigate = useNavigate()
  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title={title} gradient="from-gray-600 to-gray-800" icon="🚧"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-7xl mb-4">🚧</p>
        <h2 className="font-bold text-xl text-gray-700 dark:text-gray-200 mb-2">త్వరలో అందుబాటులో ఉంటుంది!</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ఈ ఫీచర్ త్వరలో జోడించబడుతుంది.</p>
        <button onClick={() => navigate(-1)} className="btn-primary">← వెనుకకు వెళ్ళండి</button>
      </div>
    </div>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────
export function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center text-xl">🌾</div>
              <div>
                <p className="font-display font-bold text-lg">డిజిటల్ మిత్ర</p>
                <p className="text-gray-400 text-xs">Digital Mitra</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">గ్రామీణ భారతదేశపు డిజిటల్ స్నేహితుడు. రైతులు, విద్యార్థులు మరియు గ్రామ ప్రజలకు.</p>
          </div>
          {[
            { title:'విభాగాలు', items:[['హోమ్','/'],['రైతు మాడ్యూల్','/farmer'],['విద్యార్థి మాడ్యూల్','/student'],['ప్రభుత్వ సేవలు','/services']] },
            { title:'సహాయం', items:[['మండి ధరలు','/farmer/mandi'],['స్కాలర్‌షిప్లు','/student/scholarships'],['SOS అత్యవసర','/safety/sos'],['సెట్టింగ్స్','/settings']] },
            { title:'అత్యవసర నంబర్లు', items:[['పోలీసు: 100',null],['అంబులెన్స్: 108',null],['మహిళా హెల్ప్‌లైన్: 181',null],['రైతు హెల్ప్‌లైన్: 1551',null]] },
          ].map(section => (
            <div key={section.title}>
              <p className="font-bold text-sm text-gray-200 mb-3">{section.title}</p>
              <ul className="space-y-2">
                {section.items.map(([label, path]) => (
                  <li key={label}>
                    {path ? (
                      <button onClick={() => navigate(path)} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</button>
                    ) : (
                      <span className="text-gray-400 text-sm">{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>© 2025 DigitalMitra. తెలుగు మొదట • గ్రామం మొదట 🌾</p>
          <p>Made with ❤️ for Rural India</p>
        </div>
      </div>
    </footer>
  )
}
