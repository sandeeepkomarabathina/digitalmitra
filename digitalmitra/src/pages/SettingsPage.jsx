import { useApp } from '../hooks/useApp'
import { PageHeader, Card, Toggle } from '../components/UI'

export default function SettingsPage() {
  const { dark, setDark, lang, setLang, fontSize, setFontSize, voice, setVoice } = useApp()
  return (
    <div className="pb-20 md:pb-0">
      <PageHeader title="సెట్టింగ్స్" subtitle="యాప్ మీ ఇష్టం మేరకు కస్టమైజ్ చేయండి" gradient="from-gray-600 to-gray-900" icon="⚙️"/>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-4">

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🌐 భాష / Language</p>
          <div className="flex gap-3">
            {[['te','తెలుగు'],['en','English']].map(([k,l]) => (
              <button key={k} onClick={() => setLang(k)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${lang===k ? 'bg-forest-600 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                {l}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🎨 థీమ్</p>
          <div className="flex gap-3">
            {[[false,'☀️ లైట్ మోడ్'],[true,'🌙 డార్క్ మోడ్']].map(([k,l]) => (
              <button key={String(k)} onClick={() => setDark(k)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${dark===k ? 'bg-forest-600 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                {l}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🔤 అక్షర పరిమాణం</p>
          <div className="grid grid-cols-4 gap-2">
            {[['sm','చిన్న','text-xs'],['md','మధ్యస్థం','text-sm'],['lg','పెద్ద','text-base'],['xl','చాలా పెద్ద','text-lg']].map(([k,l,ts]) => (
              <button key={k} onClick={() => setFontSize(k)}
                className={`flex flex-col items-center py-3 rounded-xl transition-all ${fontSize===k ? 'bg-forest-600 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                <span className={`font-bold ${ts}`}>Aa</span>
                <span className="text-[10px] mt-1 opacity-80">{l}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">వయసు పెద్దవారికి 'పెద్ద' లేదా 'చాలా పెద్ద' ఎంచుకోండి</p>
        </Card>

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">🔧 ఫీచర్లు</p>
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-sm text-gray-900 dark:text-white">🔊 వాయిస్ సహాయం</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">TTS — టెక్స్ట్ చదివి వినిపిస్తుంది</p>
            </div>
            <Toggle value={voice} onChange={setVoice}/>
          </div>
        </Card>

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">📶 ఆఫ్‌లైన్ డేటా</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">ఇంటర్నెట్ లేకుండా కూడా యాప్ పని చేయడానికి ముఖ్యమైన డేటా డౌన్‌లోడ్ చేయండి</p>
          {[['మండి ధరలు','2.4 MB'],['ప్రభుత్వ పథకాలు','1.2 MB'],['వ్యాధి గైడ్','5.8 MB']].map(([name,size]) => (
            <div key={name} className="flex items-center justify-between p-2.5 bg-gray-50 dark:bg-gray-700 rounded-xl mb-2 last:mb-0">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{name}</p>
                <p className="text-xs text-gray-400">{size}</p>
              </div>
              <button className="text-xs text-forest-600 dark:text-forest-400 font-semibold hover:underline">డౌన్‌లోడ్</button>
            </div>
          ))}
        </Card>

        <Card>
          <p className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">ℹ️ గురించి</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-600 flex items-center justify-center text-2xl flex-shrink-0">🌾</div>
            <div>
              <p className="font-display font-bold text-base text-gray-900 dark:text-white">డిజిటల్ మిత్ర</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">వర్షన్ 1.0.0</p>
            </div>
          </div>
          <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            <p>గ్రామీణ భారతదేశపు డిజిటల్ స్నేహితుడు</p>
            <p>రైతులు • విద్యార్థులు • గ్రామ ప్రజలు</p>
            <p className="text-forest-600 dark:text-forest-400 font-semibold mt-2">తెలుగు మొదట • ఆఫ్‌లైన్ మొదట • గ్రామం మొదట 🌾</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
