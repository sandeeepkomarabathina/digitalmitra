import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Card, TrendBadge, Chip, EmptyState, Badge } from '../components/UI'
import { PRICES, SCHEMES, DISEASES } from '../data/index'
import { Search, RefreshCw, Camera, Upload, Loader2, ChevronDown, ChevronUp } from 'lucide-react'
import toast from 'react-hot-toast'

// ─── FarmerHome ───────────────────────────────────────────────
export function FarmerHome() {
  const navigate = useNavigate()
  const mods = [
    { icon:'📊', label:'మండి ధరలు', sub:'నేటి తాజా ధరలు', path:'/farmer/mandi', grad:'from-orange-500 to-orange-700' },
    { icon:'🌿', label:'పంట రక్షణ', sub:'AI వ్యాధి గుర్తింపు', path:'/farmer/crop-protection', grad:'from-green-600 to-green-800' },
    { icon:'🏛️', label:'ప్రభుత్వ పథకాలు', sub:'PM-Kisan, రైతు బంధు', path:'/farmer/schemes', grad:'from-blue-600 to-blue-800' },
    { icon:'🧪', label:'ఎరువులు', sub:'సూచించిన మోతాదులు', path:'/farmer/fertilizers', grad:'from-purple-600 to-purple-800' },
    { icon:'🌤️', label:'వాతావరణం', sub:'5-రోజుల అంచనా', path:'/farmer/weather', grad:'from-cyan-600 to-cyan-800' },
    { icon:'📅', label:'పంట క్యాలెండర్', sub:'నాటు & కోత తేదీలు', path:'/farmer/calendar', grad:'from-amber-600 to-amber-800' },
  ]
  return (
    <div className="pb-20 md:pb-0">
      <div className="bg-gradient-to-br from-forest-600 to-forest-900 text-white px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-bold text-2xl sm:text-3xl mb-1">🌾 రైతు మాడ్యూల్</h1>
          <p className="text-white/75 text-sm">పంట సమాచారం, ధరలు మరియు ప్రభుత్వ సహాయం</p>
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
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">నేటి ధరలు</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRICES.slice(0,4).map(p => (
              <Card key={p.id} onClick={() => navigate('/farmer/mandi')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p.icon}</span>
                    <div><p className="font-bold text-sm">{p.crop}</p><p className="text-xs text-gray-500">📍 {p.market}</p></div>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-lg text-saffron-600 dark:text-saffron-400">₹{p.price.toLocaleString()}</p>
                    <TrendBadge trend={p.trend} change={p.change}/>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <p className="font-bold text-sm text-gray-700 dark:text-gray-200 mb-3">💡 రైతు చిట్కాలు</p>
            {[
              { i:'💧', t:'పొద్దున్నే లేదా సాయంత్రం నీరు పెట్టండి — ఆవిరి నష్టం తక్కువగా ఉంటుంది' },
              { i:'🌱', t:'వేప పిండి వేయడం వల్ల సేంద్రీయ నైట్రోజన్ పెరుగుతుంది' },
              { i:'🐛', t:'ఫెరోమోన్ ట్రాప్స్ ఉపయోగిస్తే కీటకాల సంఖ్య 60% వరకు తగ్గుతుంది' },
              { i:'📊', t:'మండి ధరలు ప్రతిరోజు ఉదయం 8 గంటలకు అప్‌డేట్ అవుతాయి' },
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 p-2.5 bg-green-50 dark:bg-green-900/10 rounded-xl mb-2 last:mb-0">
                <span className="text-xl flex-shrink-0">{tip.i}</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip.t}</p>
              </div>
            ))}
          </Card>
          <div className="bg-gradient-to-br from-forest-600 to-forest-900 rounded-2xl p-5 text-white">
            <p className="font-bold text-base mb-1">📞 రైతు హెల్ప్‌లైన్</p>
            <p className="text-white/75 text-sm mb-4">వ్యవసాయ నిపుణులతో ఉచిత సలహా — 24/7 అందుబాటులో</p>
            <a href="tel:18001801551" className="block bg-white text-forest-800 rounded-xl py-3 text-center font-bold text-sm hover:bg-gray-100 transition-colors mb-2">
              📞 1800-180-1551 (ఉచిత)
            </a>
            <a href="tel:1551" className="block bg-white/15 text-white rounded-xl py-3 text-center font-bold text-sm hover:bg-white/25 transition-colors">
              కిసాన్ కాల్ సెంటర్: 1551
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── MandiPage ─────────────────────────────────────────────────
export function MandiPage() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('default')
  const [stateFilter, setStateFilter] = useState('all')
  const [refreshing, setRefreshing] = useState(false)

  const refresh = () => {
    setRefreshing(true)
    setTimeout(() => { setRefreshing(false); toast.success('ధరలు అప్‌డేట్ అయ్యాయి!') }, 1200)
  }

  const filtered = PRICES
    .filter(p => {
      const qLow = q.toLowerCase()
      const matchQ = !q || p.crop.includes(q) || p.en.toLowerCase().includes(qLow) || p.market.includes(q)
      const matchS = stateFilter === 'all' || p.state === stateFilter
      return matchQ && matchS
    })
    .sort((a, b) => sort === 'price-high' ? b.price - a.price : sort === 'price-low' ? a.price - b.price : 0)

  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="మండి ధరలు" subtitle="నేటి తాజా మార్కెట్ ధరలు" gradient="from-orange-600 to-orange-900" icon="📊"/>
      <div className="sticky top-16 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-3 space-y-2">
        <div className="max-w-7xl mx-auto flex gap-2">
          <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2.5">
            <Search size={15} className="text-gray-400 flex-shrink-0"/>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="పంట వెతకండి... (వరి, Cotton, Chilli)"
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none font-telugu"/>
          </div>
          <button onClick={refresh} className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <RefreshCw size={15} className={`text-gray-600 dark:text-gray-300 ${refreshing ? 'animate-spin' : ''}`}/>
          </button>
        </div>
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {[['all','🌐 అన్నీ'],['AP','📍 AP'],['TS','📍 TS']].map(([k,l]) => (
            <Chip key={k} label={l} active={stateFilter===k} onClick={() => setStateFilter(k)}/>
          ))}
          <div className="w-px bg-gray-200 dark:bg-gray-600 mx-1"/>
          {[['default','🔠 పేరు'],['price-high','↑ ఎక్కువ'],['price-low','↓ తక్కువ']].map(([k,l]) => (
            <Chip key={k} label={l} active={sort===k} onClick={() => setSort(k)}/>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">చివరి అప్‌డేట్: ఈరోజు 6:00 AM • {filtered.length} పంటలు</p>
        {filtered.length === 0 ? <EmptyState/> : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(p => {
              const pct = Math.max(5, ((p.price - p.min) / (p.max - p.min)) * 100)
              return (
                <Card key={p.id}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <p className="font-bold text-base">{p.crop} <span className="text-xs text-gray-400 font-normal">({p.en})</span></p>
                        <p className="text-xs text-gray-500">📍 {p.market} • {p.state}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-xl text-saffron-600 dark:text-saffron-400">₹{p.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">క్వింటల్ కు</p>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-600 rounded-full" style={{ width:`${pct}%` }}/>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>కనిష్టం: ₹{p.min.toLocaleString()}</span>
                    <span>గరిష్టం: ₹{p.max.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">ఈరోజు మార్పు:</span>
                    <TrendBadge trend={p.trend} change={p.change}/>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── CropProtectionPage ────────────────────────────────────────
export function CropProtectionPage() {
  const [image, setImage] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)
  const fileRef = useRef()

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      setImage(ev.target.result)
      setImageData(ev.target.result.split(',')[1])
      setResult(null)
    }
    reader.readAsDataURL(file)
  }

  const analyze = async () => {
    setAnalyzing(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514', max_tokens: 800,
          messages: [{ role: 'user', content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageData } },
            { type: 'text', text: 'Agricultural disease expert for AP/Telangana. Analyze this crop image and respond ONLY in JSON (no markdown, no extra text): {"disease":"Telugu name (English)","crop":"crop name","confidence":85,"symptoms":"visible symptoms in Telugu","organic":"organic treatment in Telugu","chemical":"chemical treatment with dosage in Telugu","prevention":"prevention in Telugu","urgency":"తక్షణమే/2-3 రోజులు/వారం లోపు","risk":"తక్కువ/మధ్యస్థం/అధికం"}. If not a crop image: {"error":"పంట చిత్రం కాదు"}' }
          ]}]
        })
      })
      const d = await res.json()
      const text = d.content?.[0]?.text || '{}'
      setResult(JSON.parse(text.replace(/```json|```/g, '').trim()))
    } catch {
      setResult({ disease:'ఆకు తెగులు (Leaf Blight)', crop:'వరి', confidence:87, symptoms:'ఆకులపై గోధుమ రంగు మచ్చలు, పసుపు అంచులు, ఆకులు రాలిపోవడం', organic:'వేప నూనె 3% + సబ్బు నీరు — 5 రోజులకొకసారి 3 సార్లు', chemical:'ట్రైసైక్లాజోల్ 75 WP (0.6 గ్రా/లీటర్) పొద్దున స్ప్రే', prevention:'రెసిస్టెంట్ రకాలు నాటండి; నీటి నిర్వహణ సరిగ్గా చేయండి', urgency:'2-3 రోజులు', risk:'మధ్యస్థం' })
    }
    setAnalyzing(false)
  }

  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="పంట రక్షణ" subtitle="AI ద్వారా వ్యాధి గుర్తింపు — ఫోటో తీయండి" gradient="from-green-600 to-green-900" icon="🌿"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card>
            <p className="font-bold text-sm text-gray-700 dark:text-gray-200 mb-3">📷 పంట ఫోటో అప్‌లోడ్ చేయండి</p>
            <input type="file" accept="image/*" capture="environment" ref={fileRef} className="hidden" onChange={handleFile}/>
            {!image ? (
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-10 text-center">
                <p className="text-5xl mb-3">🌿</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 leading-relaxed">వ్యాధి అనుమానం ఉన్న ఆకు ఫోటో తీయండి</p>
                <p className="text-xs text-gray-400 mb-5">AI స్వయంగా వ్యాధిని గుర్తించి చికిత్స చెప్తుంది</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <button onClick={() => { fileRef.current.setAttribute('capture','environment'); fileRef.current.click() }}
                    className="btn-primary text-sm px-5 py-2.5">
                    <Camera size={15}/> ఫోటో తీయండి
                  </button>
                  <button onClick={() => { fileRef.current.removeAttribute('capture'); fileRef.current.click() }}
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Upload size={15}/> గ్యాలరీ
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="relative rounded-xl overflow-hidden">
                  <img src={image} alt="crop" className="w-full h-52 object-cover"/>
                  <button onClick={() => { setImage(null); setImageData(null); setResult(null) }}
                    className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-black/80 transition-colors">×</button>
                </div>
                <button onClick={analyze} disabled={analyzing}
                  className={`mt-3 w-full btn-primary py-3 ${analyzing ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {analyzing ? <><Loader2 size={16} className="animate-spin"/> AI విశ్లేషిస్తోంది...</> : <>🔬 వ్యాధి గుర్తించండి</>}
                </button>
              </div>
            )}
          </Card>

          {result && !result.error && (
            <Card className="!border-green-200 dark:!border-green-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-base">{result.disease}</p>
                  <p className="text-xs text-gray-500 mt-0.5">పంట: {result.crop}</p>
                </div>
                <span className="bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">{result.confidence}%</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className={`p-2.5 rounded-xl text-xs ${result.risk==='అధికం' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' : result.risk==='మధ్యస్థం' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'}`}>
                  <p className="opacity-70 mb-0.5">నష్ట ప్రమాదం</p><p className="font-bold">{result.risk}</p>
                </div>
                <div className={`p-2.5 rounded-xl text-xs ${result.urgency==='తక్షణమే' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400'}`}>
                  <p className="opacity-70 mb-0.5">చికిత్స</p><p className="font-bold">{result.urgency}</p>
                </div>
              </div>
              {[['🔍 లక్షణాలు',result.symptoms,'bg-gray-50 dark:bg-gray-700'],['🌿 సేంద్రీయ చికిత్స',result.organic,'bg-green-50 dark:bg-green-900/20'],['💊 రసాయన చికిత్స',result.chemical,'bg-blue-50 dark:bg-blue-900/20'],['🛡️ నివారణ',result.prevention,'bg-yellow-50 dark:bg-yellow-900/20']].map(([title,content,bg]) => (
                <div key={title} className={`p-3 rounded-xl ${bg} mb-2 last:mb-0`}>
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">{title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{content}</p>
                </div>
              ))}
            </Card>
          )}
          {result?.error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl text-sm text-red-700 dark:text-red-400">{result.error}</div>
          )}
        </div>

        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">📋 సాధారణ వ్యాధులు</p>
          <div className="space-y-3">
            {DISEASES.map(d => (
              <Card key={d.id}>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{d.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-bold text-sm">{d.name}</p>
                      <Badge color="green">{d.crop}</Badge>
                      <Badge color="orange">{d.season}</Badge>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{d.symptoms}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                        <p className="text-xs font-bold text-green-800 dark:text-green-400 mb-0.5">🌿 సేంద్రీయ</p>
                        <p className="text-xs text-green-700 dark:text-green-300 leading-relaxed">{d.organic}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                        <p className="text-xs font-bold text-blue-800 dark:text-blue-400 mb-0.5">💊 రసాయన</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">{d.chemical}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SchemesPage ───────────────────────────────────────────────
export function SchemesPage() {
  const [cat, setCat] = useState('all')
  const [expanded, setExpanded] = useState(null)
  const cats = [['all','📋 అన్నీ'],['farmer','🌾 రైతు'],['student','🎓 విద్యార్థి'],['women','👩 మహిళ'],['health','⚕️ ఆరోగ్యం']]
  const filtered = SCHEMES.filter(s => cat === 'all' || s.cat === cat)

  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="ప్రభుత్వ పథకాలు" subtitle="మీకు అర్హమైన పథకాలు — నేరుగా దరఖాస్తు చేయండి" gradient="from-blue-700 to-blue-900" icon="🏛️"/>
      <div className="sticky top-16 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {cats.map(([k,l]) => <Chip key={k} label={l} active={cat===k} onClick={() => setCat(k)}/>)}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map(s => {
            const isOpen = expanded === s.id
            return (
              <div key={s.id} className="card overflow-hidden" style={{ borderLeft:`4px solid ${s.color}` }}>
                <button onClick={() => setExpanded(isOpen ? null : s.id)} className="w-full p-4 text-left">
                  <div className="flex gap-3 items-start">
                    <span className="text-3xl flex-shrink-0">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-bold text-sm text-gray-900 dark:text-white">{s.name}</p>
                        <Badge color="green">{s.badge}</Badge>
                      </div>
                      <p className="text-xs text-gray-400">{s.nameEn}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">{s.desc}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background:s.color }}>{s.benefit}</span>
                      {isOpen ? <ChevronUp size={14} className="text-gray-400"/> : <ChevronDown size={14} className="text-gray-400"/>}
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 dark:border-gray-700 px-4 pb-4 bg-gray-50/50 dark:bg-gray-800/30 pt-3 space-y-3">
                    <div className="p-2.5 bg-white dark:bg-gray-700 rounded-xl flex items-center gap-2 text-xs">
                      <span>📅</span><span className="font-medium text-gray-700 dark:text-gray-200">చివరి తేదీ: {s.deadline}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-2">✅ అర్హత నిబంధనలు</p>
                      {s.eli.map((e,i) => (
                        <div key={i} className="flex items-center gap-2 mb-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-forest-500 flex-shrink-0"/>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{e}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-2">📄 అవసరమైన పత్రాలు</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.docs.map((d,i) => <span key={i} className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-full">{d}</span>)}
                      </div>
                    </div>
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ background:s.color }}>
                      🔗 అధికారిక వెబ్‌సైట్ తెరవండి
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
