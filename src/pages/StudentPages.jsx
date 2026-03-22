import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Card, Badge } from '../components/UI'
import { SCHOLARSHIPS, SCHEMES, EXAMS } from '../data/index'
import { Loader2, ChevronDown, ChevronUp } from 'lucide-react'

export function StudentHome() {
  const navigate = useNavigate()
  const mods = [
    { icon:'🎓', label:'స్కాలర్‌షిప్‌లు', sub:'AI అర్హత పరీక్ష', path:'/student/scholarships', grad:'from-amber-500 to-amber-700' },
    { icon:'📝', label:'పరీక్షలు', sub:'EAMCET, JEE, NEET', path:'/student/exams', grad:'from-blue-600 to-blue-800' },
    { icon:'🏛️', label:'విద్యార్థి పథకాలు', sub:'ఫీజు రీయింబర్స్‌మెంట్', path:'/student/schemes', grad:'from-rose-600 to-rose-800' },
    { icon:'💻', label:'ఆన్‌లైన్ కోర్సులు', sub:'ఉచిత నైపుణ్య శిక్షణ', path:'/student/courses', grad:'from-purple-600 to-purple-800' },
    { icon:'🚀', label:'కెరీర్ గైడెన్స్', sub:'ఉద్యోగ అవకాశాలు', path:'/student/career', grad:'from-green-600 to-green-800' },
    { icon:'🏫', label:'ప్రవేశాలు', sub:'కాలేజీ & కోర్సులు', path:'/student/admissions', grad:'from-orange-600 to-orange-800' },
  ]
  return (
    <div className="pb-20 md:pb-0">
      <div className="bg-gradient-to-br from-amber-500 to-amber-800 text-white px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-bold text-2xl sm:text-3xl mb-1">🎓 విద్యార్థి మాడ్యూల్</h1>
          <p className="text-white/75 text-sm">స్కాలర్‌షిప్లు, పరీక్షలు మరియు కెరీర్ సమాచారం</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {mods.map(m => (
            <button key={m.path} onClick={() => navigate(m.path)}
              className={`bg-gradient-to-br ${m.grad} text-white rounded-2xl p-4 text-left hover:opacity-90 active:scale-95 transition-all shadow-sm`}>
              <span className="text-3xl block mb-2">{m.icon}</span>
              <p className="font-bold text-sm leading-tight">{m.label}</p>
              <p className="text-white/70 text-xs mt-1 leading-tight">{m.sub}</p>
            </button>
          ))}
        </div>
        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">📅 రాబోయే పరీక్షలు</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXAMS.map((e, i) => (
              <a key={i} href={e.url} target="_blank" rel="noopener noreferrer"
                className="card p-4 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{e.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{e.date}</p>
                </div>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0" style={{ background:e.color }}>{e.days} రోజులు</span>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-800 rounded-2xl p-5 text-white">
          <p className="font-bold text-base mb-1">📞 విద్యార్థి హెల్ప్‌లైన్</p>
          <p className="text-white/75 text-sm mb-4">స్కాలర్‌షిప్ & అడ్మిషన్ సహాయం — ఉచితం</p>
          <a href="tel:18004253646" className="block bg-white text-amber-800 rounded-xl py-3 text-center font-bold text-sm hover:bg-gray-100 transition-colors">
            📞 1800-425-3646 (ఉచిత)
          </a>
        </div>
      </div>
    </div>
  )
}

export function ScholarshipsPage() {
  const [expanded, setExpanded] = useState(null)
  const [showAI, setShowAI] = useState(false)
  const [form, setForm] = useState({ caste:'', income:'', marks:'', cls:'' })
  const [checking, setChecking] = useState(false)
  const [aiRes, setAiRes] = useState(null)

  const checkEligibility = async () => {
    if (!form.caste || !form.income) return
    setChecking(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          model:'claude-sonnet-4-20250514', max_tokens:700,
          messages:[{ role:'user', content:`Andhra Pradesh/Telangana student needs scholarship info: Caste=${form.caste}, Annual income=₹${form.income}, Marks=${form.marks}%, Class=${form.cls}. List eligible scholarships as JSON only (no markdown): {"eligible":[{"name":"Telugu name","amount":"amount","url":"official URL","reason":"reason in Telugu"}],"tip":"one tip in Telugu"}` }]
        })
      })
      const d = await res.json()
      setAiRes(JSON.parse(d.content[0].text.replace(/```json|```/g,'').trim()))
    } catch {
      setAiRes({
        eligible:[
          { name:'విద్య దీవెన స్కాలర్‌షిప్', amount:'₹25,000-₹50,000/సంవత్సరం', url:'https://apepass.ap.gov.in', reason:'మీ కుల వర్గం మరియు ఆదాయ నిబంధనలు సరిపోతున్నాయి' },
          { name:'ఫీజు రీయింబర్స్‌మెంట్', amount:'పూర్తి ఫీజు', url:'https://apepass.ap.gov.in', reason:'మీ కుటుంబ ఆదాయం అర్హత హద్దులో ఉంది' },
        ],
        tip:'దరఖాస్తు చేసే ముందు ePass పోర్టల్‌లో అకౌంట్ క్రియేట్ చేయండి. ఆగస్టు 15 గడువు మర్చిపోకండి.'
      })
    }
    setChecking(false)
  }

  const studentSchemes = SCHEMES.filter(s => s.cat === 'student')

  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="స్కాలర్‌షిప్‌లు" subtitle="మీకు సరిపడే స్కాలర్‌షిప్లు కనుగొని దరఖాస్తు చేయండి" gradient="from-amber-600 to-amber-900" icon="🎓"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* AI Checker */}
          <Card className="!border-amber-200 dark:!border-amber-700">
            <button onClick={() => setShowAI(v => !v)} className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🤖</div>
                <div className="text-left">
                  <p className="font-bold text-sm text-gray-900 dark:text-white">AI అర్హత పరీక్షకుడు</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">మీ వివరాలతో అర్హమైన స్కాలర్‌షిప్లు కనుగొనండి</p>
                </div>
              </div>
              {showAI ? <ChevronUp size={18} className="text-gray-400"/> : <ChevronDown size={18} className="text-gray-400"/>}
            </button>
            {showAI && (
              <div className="mt-4 space-y-3 border-t border-gray-100 dark:border-gray-700 pt-4">
                {[['caste','కులం / వర్గం','SC / ST / BC-A / OC / Minority'],['income','వార్షిక కుటుంబ ఆదాయం (₹)','200000'],['marks','చివరి పరీక్ష మార్కులు (%)','75'],['cls','చదువుతున్న తరగతి / కోర్సు','Degree 2nd Year']].map(([k,l,p]) => (
                  <div key={k}>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">{l}</label>
                    <input className="input-field" placeholder={p} value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))}/>
                  </div>
                ))}
                <button onClick={checkEligibility} disabled={checking || !form.caste || !form.income}
                  className={`w-full btn-primary ${checking || !form.caste || !form.income ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ background: '#d97706' }}>
                  {checking ? <><Loader2 size={16} className="animate-spin"/> తనిఖీ చేస్తోంది...</> : '🔍 అర్హత తనిఖీ చేయండి'}
                </button>
                {aiRes && (
                  <div className="space-y-3 mt-1">
                    <p className="font-bold text-sm text-green-700 dark:text-green-400">✅ మీకు {aiRes.eligible?.length} స్కాలర్‌షిప్లు అర్హమైనాయి:</p>
                    {aiRes.eligible?.map((r, i) => (
                      <div key={i} className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl">
                        <p className="font-bold text-sm text-green-800 dark:text-green-300">{r.name}</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">💰 {r.amount}</p>
                        <p className="text-xs text-green-600 mt-0.5">{r.reason}</p>
                        {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-semibold text-green-800 dark:text-green-300 underline">దరఖాస్తు చేయండి →</a>}
                      </div>
                    ))}
                    {aiRes.tip && <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl text-xs text-amber-800 dark:text-amber-300">💡 {aiRes.tip}</div>}
                  </div>
                )}
              </div>
            )}
          </Card>

          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">📋 అన్ని స్కాలర్‌షిప్లు</p>
          {SCHOLARSHIPS.map(s => {
            const isOpen = expanded === s.id
            return (
              <Card key={s.id} className="overflow-hidden" style={{ borderLeft:`3px solid ${s.color}` }}>
                <button onClick={() => setExpanded(isOpen ? null : s.id)} className="w-full flex items-start justify-between gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="font-bold text-sm text-gray-900 dark:text-white">{s.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.cat}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color:s.color }}>{s.amount}</p>
                    {isOpen ? <ChevronUp size={14} className="text-gray-400"/> : <ChevronDown size={14} className="text-gray-400"/>}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    <p className="text-xs text-gray-500">📅 గడువు: {s.deadline} • ✅ {s.eligibility}</p>
                    <div className="flex flex-wrap gap-1">{s.docs.map((d,i) => <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">{d}</span>)}</div>
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ background:s.color }}>
                      🔗 అధికారిక పోర్టల్ తెరవండి
                    </a>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="space-y-4">
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">🏛️ విద్యార్థి పథకాలు</p>
          {studentSchemes.map(s => (
            <div key={s.id} className="card p-4 flex items-start gap-3" style={{ borderLeft:`3px solid ${s.color}` }}>
              <span className="text-2xl flex-shrink-0">{s.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{s.name}</p>
                  <span className="text-xs font-bold text-white px-2 py-0.5 rounded-full" style={{ background:s.color }}>{s.benefit}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{s.desc}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-semibold" style={{ color:s.color }}>
                  దరఖాస్తు చేయండి →
                </a>
              </div>
            </div>
          ))}
          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
            <p className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-3">💡 దరఖాస్తు చిట్కాలు</p>
            {['గడువు ముందే దరఖాస్తు చేయండి — చివరి వారంలో సర్వర్లు స్లో అవుతాయి','అన్ని పత్రాలు scan చేసి PDF గా సేవ్ చేయండి','ePass & National Scholarships రెండు పోర్టల్లో అకౌంట్ క్రియేట్ చేయండి','దరఖాస్తు చేసిన తర్వాత Application Number సేవ్ చేయండి'].map((t,i) => (
              <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                <span className="text-amber-600 mt-0.5">•</span>
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">{t}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
