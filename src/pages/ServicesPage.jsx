import { useNavigate } from 'react-router-dom'
import { PageHeader, Card, PortalLink } from '../components/UI'
import { SERVICES, PORTALS } from '../data/index'

export default function ServicesPage() {
  const navigate = useNavigate()
  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="ప్రభుత్వ సేవలు" subtitle="సర్టిఫికెట్లు, పత్రాలు మరియు ఆన్‌లైన్ సేవలు" gradient="from-indigo-700 to-indigo-900" icon="🏛️" showBack={false}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">

        {/* Service Tiles */}
        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🏛️ సర్టిఫికెట్లు & సేవలు</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICES.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                className={`bg-gradient-to-br ${s.grad} text-white rounded-2xl p-4 hover:opacity-90 active:scale-95 transition-all shadow-sm`}>
                <span className="text-3xl block mb-2">{s.icon}</span>
                <p className="font-bold text-sm leading-tight">{s.label}</p>
                <p className="text-white/70 text-xs mt-1 leading-tight">{s.sub}</p>
                <p className="text-white/50 text-[10px] mt-2">↗ తెరవండి</p>
              </a>
            ))}
          </div>
        </div>

        {/* All Portals */}
        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🔗 ప్రభుత్వ పోర్టల్స్</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PORTALS.map((p, i) => <PortalLink key={i} portal={p}/>)}
          </div>
        </div>

        {/* Schemes Shortcut */}
        <button onClick={() => navigate('/farmer/schemes')}
          className="w-full bg-gradient-to-r from-indigo-700 to-indigo-900 text-white rounded-2xl p-5 flex items-center gap-4 hover:opacity-95 active:scale-[0.99] transition-all shadow-sm">
          <span className="text-4xl flex-shrink-0">🏛️</span>
          <div className="text-left flex-1">
            <p className="font-bold text-base">ప్రభుత్వ పథకాలు చూడండి</p>
            <p className="text-white/70 text-sm mt-0.5">PM-Kisan, రైతు బంధు, విద్య దీవెన మరియు మరిన్ని...</p>
          </div>
          <span className="text-2xl">→</span>
        </button>

        {/* Helplines */}
        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">📞 ఉపయోగకరమైన హెల్ప్‌లైన్లు</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name:'AP Meeseva', num:'155300', desc:'AP సర్టిఫికెట్ సేవలు' },
              { name:'TS Meeseva', num:'040-23450000', desc:'TS ప్రభుత్వ సేవలు' },
              { name:'DigiLocker', num:'1800-891-3999', desc:'డిజిటల్ పత్రాల సహాయం' },
              { name:'Aadhaar UIDAI', num:'1947', desc:'ఆధార్ సహాయం — ఉచిత' },
              { name:'Income Tax', num:'1800-103-0025', desc:'ఆదాయ పన్ను సహాయం' },
              { name:'Ration Card', num:'1967', desc:'రేషన్ కార్డు సహాయం' },
            ].map((h, i) => (
              <Card key={i}>
                <p className="font-bold text-sm text-gray-900 dark:text-white">{h.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-2">{h.desc}</p>
                <a href={`tel:${h.num.replace(/[^0-9]/g,'')}`}
                  className="inline-flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                  📞 {h.num}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
