import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import { Card, Badge, GradientBtn, TrendBadge } from '../components/UI'
import { PRICES, NEWS, STATS } from '../data/index'
import { ArrowRight, CheckCircle, Star, TrendingUp, TrendingDown, Minus } from 'lucide-react'

const FEATURES = [
  { icon:'📊', title:'మండి ధరలు', sub:'రోజువారీ అప్‌డేట్', desc:'12 పంటల నేటి ధరలు, ట్రెండ్ అనాలిసిస్, AP & TS మార్కెట్ పోలిక', color:'from-orange-500 to-orange-700', path:'/farmer/mandi' },
  { icon:'🌿', title:'పంట రక్షణ', sub:'AI విశ్లేషణ', desc:'ఫోటో తీయండి → AI వ్యాధిని గుర్తించి సేంద్రీయ & రసాయన చికిత్స చెప్తుంది', color:'from-green-600 to-green-800', path:'/farmer/crop-protection' },
  { icon:'🏛️', title:'ప్రభుత్వ పథకాలు', sub:'PM-Kisan నుండి రైతు బంధు వరకు', desc:'8 పథకాలు — అన్నీ అర్హత వివరాలతో నేరుగా అధికారిక సైట్ లింక్', color:'from-blue-600 to-blue-800', path:'/farmer/schemes' },
  { icon:'🎓', title:'స్కాలర్‌షిప్‌లు', sub:'AI అర్హత పరీక్ష', desc:'మీ వివరాలు నమోదు చేయండి → AI మీకు సరిపడే స్కాలర్‌షిప్లు కనుగొంటుంది', color:'from-amber-500 to-amber-700', path:'/student/scholarships' },
  { icon:'🆘', title:'SOS అత్యవసర', sub:'ఒక్క నొక్కుతో సహాయం', desc:'GPS లొకేషన్, 8 హెల్ప్‌లైన్లు, 5-సెకన్ల countdown మరియు సంప్రదింపుల నిర్వహణ', color:'from-red-600 to-red-800', path:'/safety/sos' },
  { icon:'🏛️', title:'ప్రభుత్వ సేవలు', sub:'12 పోర్టల్స్ — అన్నీ నేరుగా', desc:'ఆధార్, DigiLocker, Meeseva, రేషన్ కార్డు — అన్నీ అధికారిక సైట్లకు direct links', color:'from-indigo-600 to-indigo-800', path:'/services' },
]

const TESTIMONIALS = [
  { name:'రామకృష్ణ రెడ్డి', role:'రైతు, గుంటూరు', text:'DigitalMitra వల్ల మిర్చి ధర సరైన సమయంలో తెలిసి ₹15,000 ఎక్కువ సంపాదించాను!', avatar:'👨‍🌾', stars:5 },
  { name:'అనుష పాటిల్', role:'విద్యార్థి, వరంగల్', text:'AI స్కాలర్‌షిప్ చెకర్ వల్ల విద్య దీవెన కనుగొన్నాను — ₹3 లక్షల స్కాలర్‌షిప్ అయింది!', avatar:'👩‍🎓', stars:5 },
  { name:'లక్ష్మి దేవి', role:'మహిళ, నిజామాబాద్', text:'SOS ఫీచర్ నాకు చాలా భద్రతగా అనిపిస్తుంది. రాత్రి ఒంటరిగా వెళ్ళినప్పుడు సురక్షితంగా ఉంటాను.', avatar:'👩', stars:5 },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const { lang } = useApp()
  const [priceFilter, setPriceFilter] = useState('all')
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'శుభోదయం' : hour < 17 ? 'శుభ మధ్యాహ్నం' : 'శుభ సాయంత్రం'

  const filteredPrices = priceFilter === 'all'
    ? PRICES.slice(0, 6)
    : PRICES.filter(p => p.state === priceFilter).slice(0, 6)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden lg:block"/>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="animate-float inline-block">🌾</span>
                <span>{lang === 'te' ? 'గ్రామీణ భారతదేశపు డిజిటల్ స్నేహితుడు' : "Rural India's Digital Companion"}</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                {greeting}!<br/>
                <span className="text-saffron-300">డిజిటల్ మిత్ర</span><br/>
                కు స్వాగతం
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                రైతులు, విద్యార్థులు మరియు గ్రామ ప్రజలకు — మండి ధరలు, పథకాలు, స్కాలర్‌షిప్లు మరియు భద్రత అన్నీ తెలుగులో.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 mb-8">
                <button onClick={() => navigate('/farmer')}
                  className="inline-flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-xl px-7 py-3.5 text-base transition-all active:scale-95 shadow-lg">
                  🌾 రైతు మాడ్యూల్ <ArrowRight size={18}/>
                </button>
                <button onClick={() => navigate('/student')}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-xl px-7 py-3.5 text-base transition-all">
                  🎓 విద్యార్థి మాడ్యూల్
                </button>
              </div>
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                {['100% ఉచితం','Telugu లో','Offline కూడా పని చేస్తుంది','AI-Powered'].map(t => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400"/>{t}</span>
                ))}
              </div>
            </div>
            {/* Right — Stat Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon:'📊', title:'నేటి మండి ధరలు', val:'₹18,500', sub:'మిర్చి • గుంటూరు', color:'bg-orange-500' },
                { icon:'💰', title:'పీఎం-కిసాన్', val:'₹6,000', sub:'వార్షిక ప్రయోజనం', color:'bg-green-600' },
                { icon:'🎓', title:'విద్య దీవెన', val:'₹50,000', sub:'వరకు స్కాలర్‌షిప్', color:'bg-amber-500' },
                { icon:'🆘', title:'SOS అత్యవసర', val:'100/108', sub:'పోలీసు • అంబులెన్స్', color:'bg-red-600' },
              ].map((c, i) => (
                <div key={i} className="glass rounded-2xl p-4" style={{ animationDelay: `${i*100}ms` }}>
                  <div className={`w-10 h-10 ${c.color} rounded-xl flex items-center justify-center text-xl mb-3`}>{c.icon}</div>
                  <p className="text-white/60 text-xs mb-1">{c.title}</p>
                  <p className="font-display font-bold text-2xl">{c.val}</p>
                  <p className="text-white/50 text-xs mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-forest-600 dark:text-forest-400">{s.num}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE PRICES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-8">
          <Badge color="green">📊 లైవ్ ధరలు</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3">నేటి మండి ధరలు</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">ఆంధ్రప్రదేశ్ & తెలంగాణ మండులలో తాజా ధరలు</p>
        </div>
        <div className="flex gap-2 mb-5 justify-center flex-wrap">
          {[['all','🌐 అన్నీ'],['AP','📍 ఆంధ్రప్రదేశ్'],['TS','📍 తెలంగాణ']].map(([k,l]) => (
            <button key={k} onClick={() => setPriceFilter(k)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${priceFilter===k ? 'bg-forest-600 text-white border-forest-600' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrices.map(p => {
            const pct = Math.max(5, ((p.price - p.min) / (p.max - p.min)) * 100)
            return (
              <Card key={p.id} onClick={() => navigate('/farmer/mandi')}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <p className="font-bold text-base text-gray-900 dark:text-white">{p.crop} <span className="text-xs text-gray-400 font-normal">({p.en})</span></p>
                      <p className="text-xs text-gray-500">📍 {p.market} • {p.state}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-xl text-saffron-600 dark:text-saffron-400">₹{p.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">క్వింటల్</p>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-600 rounded-full" style={{ width:`${pct}%` }}/>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>₹{p.min.toLocaleString()}</span><span>₹{p.max.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">ఈరోజు మార్పు:</span>
                  <TrendBadge trend={p.trend} change={p.change}/>
                </div>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-6">
          <button onClick={() => navigate('/farmer/mandi')}
            className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl px-6 py-3 transition-all active:scale-95">
            అన్ని ధరలు చూడండి <ArrowRight size={16}/>
          </button>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-gray-100 dark:bg-gray-800/50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge color="blue">⚡ ఫీచర్లు</Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3">అన్ని సేవలు ఒక చోట</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">రైతులు, విద్యార్థులు మరియు గ్రామ ప్రజలకు అవసరమైన అన్ని డిజిటల్ సేవలు</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <button key={i} onClick={() => navigate(f.path)}
                className="text-left group bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-105 transition-transform`}>{f.icon}</div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white">{f.title}</h3>
                  <Badge color="green">{f.sub}</Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{f.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-forest-600 dark:text-forest-400 text-sm font-semibold">
                  తెరవండి <ArrowRight size={14}/>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <Badge color="purple">💡 ఎలా పని చేస్తుంది</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3">3 అడుగులలో ప్రారంభించండి</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step:'01', icon:'📱', title:'ఓపెన్ చేయండి', desc:'మీ ఫోన్‌లో DigitalMitra తెరవండి — Telugu లో అన్నీ కనిపిస్తాయి' },
            { step:'02', icon:'👆', title:'విభాగం ఎంచుకోండి', desc:'రైతు, విద్యార్థి లేదా సేవలు విభాగం నొక్కండి' },
            { step:'03', icon:'✅', title:'ప్రయోజనం పొందండి', desc:'ధరలు చెక్ చేయండి, స్కాలర్‌షిప్ దరఖాస్తు చేయండి, పథకాలు అన్వేషించండి' },
          ].map((h, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-3xl mx-auto mb-4 shadow-md">{h.icon}</div>
              <div className="inline-block bg-forest-100 dark:bg-forest-900/30 text-forest-700 dark:text-forest-400 text-xs font-bold px-3 py-0.5 rounded-full mb-2">Step {h.step}</div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{h.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="bg-gray-100 dark:bg-gray-800/50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge color="orange">🔔 తాజా వార్తలు</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mt-2">అప్రమత్తతలు & వార్తలు</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {NEWS.map(n => (
              <Card key={n.id} className={n.urgent ? 'border-orange-200 dark:border-orange-700 !bg-orange-50 dark:!bg-orange-900/10' : ''}>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{n.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-bold text-sm text-gray-900 dark:text-white">{n.title}</p>
                      {n.urgent && <Badge color="red">అర్జెంట్</Badge>}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{n.body}</p>
                    <p className="text-xs text-gray-400 mt-2">{n.time}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <Badge color="amber">⭐ వినియోగదారుల అభిప్రాయాలు</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3">వారి జీవితాలు మారాయి</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i}>
              <div className="flex gap-0.5 mb-3">{[...Array(t.stars)].map((_,j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400"/>)}</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                <div className="w-10 h-10 rounded-full bg-forest-100 dark:bg-forest-900/30 flex items-center justify-center text-xl">{t.avatar}</div>
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-4 animate-float">🌾</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">ఇప్పుడే ప్రారంభించండి</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">50,000+ రైతులు, విద్యార్థులు మరియు గ్రామ ప్రజలు DigitalMitra ఉపయోగిస్తున్నారు.</p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button onClick={() => navigate('/farmer')}
              className="inline-flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-xl px-8 py-4 text-base transition-all active:scale-95 shadow-lg">
              🌾 రైతు మాడ్యూల్ <ArrowRight size={18}/>
            </button>
            <button onClick={() => navigate('/student')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-xl px-8 py-4 text-base transition-all">
              🎓 విద్యార్థి మాడ్యూల్
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
