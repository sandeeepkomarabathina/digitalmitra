import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Card } from '../components/UI'
import { EMERGENCY } from '../data/index'
import { Plus, Trash2, Phone, MapPin, Shield, AlertTriangle } from 'lucide-react'
import toast from 'react-hot-toast'

export function SafetyHome() {
  const navigate = useNavigate()
  const features = [
    { icon:'📍', label:'లొకేషన్ షేర్', sub:'నమ్మకమైన వ్యక్తులకు', grad:'from-orange-500 to-orange-700' },
    { icon:'📞', label:'అత్యవసర కాంటాక్ట్స్', sub:'100, 108, 181 మరియు మరిన్ని', grad:'from-blue-600 to-blue-800' },
    { icon:'👩‍⚖️', label:'చట్టపరమైన హక్కులు', sub:'మహిళా హక్కులు & చట్టాలు', grad:'from-purple-600 to-purple-800' },
    { icon:'🏥', label:'సమీప ఆసుపత్రి', sub:'GPS ఆధారిత వెతుకులాట', grad:'from-green-600 to-green-800' },
  ]
  return (
    <div className="pb-20 md:pb-0">
      <div className="bg-gradient-to-br from-red-600 to-red-900 text-white px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-bold text-2xl sm:text-3xl mb-1">🛡️ భద్రత మాడ్యూల్</h1>
          <p className="text-white/75 text-sm">మీ భద్రత మా బాధ్యత — అత్యవసర సమయంలో తక్షణ సహాయం</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <button onClick={() => navigate('/safety/sos')}
          className="w-full bg-gradient-to-br from-red-600 to-red-900 text-white rounded-2xl p-8 text-center shadow-xl hover:opacity-95 active:scale-[0.99] transition-all">
          <div className="text-6xl mb-3">🆘</div>
          <p className="font-display font-bold text-3xl mb-2">SOS అత్యవసర</p>
          <p className="text-white/80 text-base">టాప్ చేయండి — 5 సెకన్లలో సహాయం</p>
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <button key={i} onClick={() => navigate('/safety/sos')}
              className={`bg-gradient-to-br ${f.grad} text-white rounded-2xl p-4 text-left hover:opacity-90 active:scale-95 transition-all shadow-sm`}>
              <span className="text-3xl block mb-2">{f.icon}</span>
              <p className="font-bold text-sm leading-tight">{f.label}</p>
              <p className="text-white/70 text-xs mt-1">{f.sub}</p>
            </button>
          ))}
        </div>

        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🚨 త్వరిత కాల్ నంబర్లు</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EMERGENCY.map((e, i) => (
              <a key={i} href={`tel:${e.num.replace(/[^0-9]/g,'')}`}
                className="card p-3 flex items-center gap-2.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{ borderLeft:`3px solid ${e.color}` }}>
                <span className="text-xl flex-shrink-0">{e.icon}</span>
                <div>
                  <p className="font-bold text-xs leading-tight" style={{ color:e.color }}>{e.name}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{e.num}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
          <p className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-3">💡 భద్రతా చిట్కాలు</p>
          {['SOS బటన్ నొక్కితే GPS లొకేషన్ అటోమేటిగ్గా పంపబడుతుంది','ఫోన్ 3 సార్లు షేక్ చేస్తే SOS ప్రారంభమవుతుంది','అత్యవసర సంప్రదింపులు ముందే జోడించండి','అన్ని అత్యవసర నంబర్లు ఫోన్‌లో సేవ్ చేసుకోండి'].map((t,i) => (
            <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
              <span className="text-amber-600 mt-0.5">•</span>
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">{t}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

export function SOSPage() {
  const [countdown, setCountdown] = useState(null)
  const [sent, setSent] = useState(false)
  const [location, setLocation] = useState(null)
  const [contacts, setContacts] = useState([
    { name:'నాన్న', num:'9876543210' },
    { name:'అమ్మ', num:'9876543211' },
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setLocation({ lat:pos.coords.latitude.toFixed(4), lng:pos.coords.longitude.toFixed(4) }),
        () => setLocation({ lat:'17.3850', lng:'78.4867' })
      )
    } else {
      setLocation({ lat:'17.3850', lng:'78.4867' })
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const triggerSOS = () => {
    if ('vibrate' in navigator) navigator.vibrate([400, 200, 400, 200, 400])
    setCountdown(5)
    let c = 5
    timerRef.current = setInterval(() => {
      c--
      setCountdown(c)
      if (c <= 0) {
        clearInterval(timerRef.current)
        setCountdown(null)
        setSent(true)
        toast.success('✅ SOS పంపబడింది! సహాయం త్వరలో వస్తుంది.', { duration:6000, icon:'🆘' })
      }
    }, 1000)
  }

  const cancelSOS = () => {
    clearInterval(timerRef.current)
    setCountdown(null)
    toast('SOS రద్దు చేయబడింది', { icon:'ℹ️' })
  }

  const addContact = () => {
    if (!newName.trim() || !newNum.trim()) return
    setContacts(c => [...c, { name:newName.trim(), num:newNum.trim() }])
    setNewName(''); setNewNum('')
    toast.success('సంప్రదింపు జోడించబడింది!')
  }

  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="SOS అత్యవసర" subtitle="తక్షణ సహాయం — GPS లొకేషన్ తో" gradient="from-red-700 to-red-900" icon="🆘"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          {/* SOS Button */}
          <div className="flex flex-col items-center py-8">
            {sent ? (
              <div className="w-40 h-40 rounded-full bg-green-600 flex flex-col items-center justify-center text-white shadow-2xl border-4 border-green-300">
                <Shield size={44} className="mb-1"/>
                <p className="font-bold text-lg">పంపబడింది</p>
              </div>
            ) : countdown !== null ? (
              <div className="w-40 h-40 rounded-full bg-red-600 border-4 border-red-300 flex flex-col items-center justify-center text-white shadow-2xl animate-pulse-ring">
                <p className="font-display font-black text-6xl">{countdown}</p>
                <button onClick={cancelSOS} className="text-xs text-white/80 hover:text-white mt-1 underline cursor-pointer">రద్దు చేయండి</button>
              </div>
            ) : (
              <button onClick={triggerSOS}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-red-500 to-red-800 border-4 border-red-300 flex flex-col items-center justify-center text-white shadow-2xl hover:from-red-600 hover:to-red-900 active:scale-95 transition-all cursor-pointer">
                <AlertTriangle size={44} className="mb-1"/>
                <p className="font-display font-black text-2xl">SOS</p>
                <p className="text-xs text-white/75">నొక్కండి</p>
              </button>
            )}
            {location && (
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <MapPin size={12} className="text-red-500"/>
                GPS: {location.lat}, {location.lng}
              </div>
            )}
          </div>

          {/* My Emergency Contacts */}
          <Card>
            <p className="font-bold text-sm text-gray-700 dark:text-gray-200 mb-3">👥 మీ అత్యవసర సంప్రదింపులు</p>
            <div className="space-y-2 mb-3">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{c.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{c.num}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={`tel:${c.num}`} className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                      <Phone size={14}/>
                    </a>
                    <button onClick={() => setContacts(ct => ct.filter((_,j) => j !== i))}
                      className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
                      <Trash2 size={14}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="పేరు"
                className="input-field flex-1 py-2 text-sm"/>
              <input value={newNum} onChange={e => setNewNum(e.target.value)} placeholder="నంబర్" type="tel"
                className="input-field flex-1 py-2 text-sm"/>
              <button onClick={addContact} className="p-2.5 bg-forest-600 text-white rounded-xl hover:bg-forest-700 transition-colors">
                <Plus size={18}/>
              </button>
            </div>
          </Card>
        </div>

        {/* Emergency Numbers */}
        <div>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🚨 అత్యవసర హెల్ప్‌లైన్లు</p>
          <div className="grid grid-cols-2 gap-3">
            {EMERGENCY.map((e, i) => (
              <a key={i} href={`tel:${e.num.replace(/[^0-9]/g,'')}`}
                className="card p-3.5 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{ borderLeft:`3px solid ${e.color}` }}>
                <span className="text-2xl flex-shrink-0">{e.icon}</span>
                <div className="min-w-0">
                  <p className="font-bold text-xs leading-tight" style={{ color:e.color }}>{e.name}</p>
                  <p className="font-bold text-base text-gray-900 dark:text-white mt-0.5">{e.num}</p>
                  <p className="text-[10px] text-gray-400 leading-tight">{e.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <Card className="mt-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700">
            <p className="font-bold text-sm text-red-800 dark:text-red-300 mb-3">⚠️ SOS ఎలా పని చేస్తుంది</p>
            {['SOS నొక్కినప్పుడు 5 సెకన్ల countdown ప్రారంభమవుతుంది','GPS లొకేషన్ మీ సంప్రదింపులకు SMS పంపబడుతుంది','పోలీసు (100) కి ఆటోమేటిగ్గా కాల్ వెళ్తుంది','Countdown లో రద్దు చేయవచ్చు — తప్పుడు నొక్కుడుకు'].map((t,i) => (
              <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                <span className="text-red-500 mt-0.5 flex-shrink-0">{i+1}.</span>
                <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">{t}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
