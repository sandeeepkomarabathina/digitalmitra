// ─── MANDI PRICES ──────────────────────────────────────────────
export const PRICES = [
  { id:1, crop:'వరి', en:'Rice', market:'గుంటూరు', state:'AP', price:2180, min:2050, max:2280, trend:'up', change:45, icon:'🌾' },
  { id:2, crop:'పత్తి', en:'Cotton', market:'వరంగల్', state:'TS', price:6450, min:6200, max:6700, trend:'up', change:120, icon:'🌿' },
  { id:3, crop:'మిర్చి', en:'Chilli', market:'గుంటూరు', state:'AP', price:18500, min:17800, max:19200, trend:'down', change:-280, icon:'🌶️' },
  { id:4, crop:'వేరుశనగ', en:'Groundnut', market:'కర్నూలు', state:'AP', price:5680, min:5400, max:5900, trend:'stable', change:10, icon:'🥜' },
  { id:5, crop:'మొక్కజొన్న', en:'Maize', market:'హైదరాబాద్', state:'TS', price:1890, min:1820, max:1950, trend:'up', change:35, icon:'🌽' },
  { id:6, crop:'పసుపు', en:'Turmeric', market:'విజయవాడ', state:'AP', price:12400, min:12000, max:13000, trend:'up', change:400, icon:'💛' },
  { id:7, crop:'ఉల్లిపాయ', en:'Onion', market:'కర్నూలు', state:'AP', price:1250, min:1100, max:1400, trend:'down', change:-80, icon:'🧅' },
  { id:8, crop:'టమాటో', en:'Tomato', market:'రాజమండ్రి', state:'AP', price:2100, min:1800, max:2400, trend:'up', change:200, icon:'🍅' },
  { id:9, crop:'సోయాబీన్', en:'Soybean', market:'వరంగల్', state:'TS', price:4200, min:4000, max:4380, trend:'stable', change:15, icon:'🫘' },
  { id:10, crop:'చెరకు', en:'Sugarcane', market:'విశాఖపట్నం', state:'AP', price:380, min:360, max:400, trend:'stable', change:0, icon:'🎋' },
  { id:11, crop:'కందులు', en:'Pigeon Pea', market:'నిజామాబాద్', state:'TS', price:6800, min:6500, max:7100, trend:'up', change:180, icon:'🟡' },
  { id:12, crop:'జొన్న', en:'Sorghum', market:'మహబూబ్‌నగర్', state:'TS', price:2600, min:2450, max:2750, trend:'up', change:90, icon:'🌾' },
]

// ─── GOVERNMENT SCHEMES ─────────────────────────────────────────
export const SCHEMES = [
  { id:1, icon:'🌾', name:'పీఎం-కిసాన్', nameEn:'PM-KISAN', benefit:'₹6,000/సంవత్సరం', color:'#16a34a', desc:'భూమి కలిగిన రైతు కుటుంబాలకు నేరుగా ఆర్థిక సహాయం — సంవత్సరానికి 3 విడతలలో', eli:['భూమి కలిగిన రైతు','3 ఎకరాల లోపు','పన్ను చెల్లింపుదారులు కాదు'], docs:['ఆధార్ కార్డు','భూమి పత్రాలు (పహాని)','బ్యాంక్ పాస్‌బుక్'], cat:'farmer', url:'https://pmkisan.gov.in', deadline:'ఏ సమయంలో అయినా', badge:'కేంద్ర పథకం' },
  { id:2, icon:'💰', name:'రైతు బంధు', nameEn:'Rythu Bandhu', benefit:'₹10,000/ఎకరం/సీజన్', color:'#d97706', desc:'తెలంగాణ రైతు పెట్టుబడి సహాయ పథకం — ఖరీఫ్ మరియు రబీ సీజన్లలో', eli:['తెలంగాణ రైతు','భూమి కలిగినవారు','పహాని ఉండాలి'], docs:['ఆధార్','పహాని (1-B)','బ్యాంక్ అకౌంట్'], cat:'farmer', url:'https://rythubandhu.telangana.gov.in', deadline:'సీజన్ ముందు', badge:'తెలంగాణ పథకం' },
  { id:3, icon:'🛡️', name:'ఫసల్ బీమా', nameEn:'PM Fasal Bima Yojana', benefit:'100% పరిహారం', color:'#2563eb', desc:'ప్రకృతి విపత్తులు, వ్యాధులు మరియు కీటకాల వల్ల జరిగే పంట నష్టానికి బీమా', eli:['రైతు అయినా','బ్యాంక్ రుణం తీసుకున్నా','స్వచ్ఛందంగా కూడా'], docs:['ఆధార్','భూమి పత్రాలు','బ్యాంక్ పాస్‌బుక్','పంట వివరాలు'], cat:'farmer', url:'https://pmfby.gov.in', deadline:'ఖరీఫ్: జూలై 31', badge:'కేంద్ర పథకం' },
  { id:4, icon:'🏦', name:'కిసాన్ క్రెడిట్ కార్డు', nameEn:'Kisan Credit Card', benefit:'₹3 లక్షల వరకు రుణం', color:'#7c3aed', desc:'రైతులకు తక్కువ వడ్డీకి వ్యవసాయ రుణాలు — 4% వడ్డీ రేటు', eli:['రైతు','భూమి ఉండాలి','మంచి క్రెడిట్ హిస్టరీ'], docs:['ఆధార్','భూమి పత్రాలు','పహాని','ఫోటో'], cat:'farmer', url:'https://pmkisan.gov.in', deadline:'ఏ సమయంలో అయినా', badge:'బ్యాంక్ పథకం' },
  { id:5, icon:'🎓', name:'విద్య దీవెన', nameEn:'Vidya Deevena', benefit:'పూర్తి ఫీజు + ₹1,000/నెల', color:'#f07f0e', desc:'SC, ST, BC మరియు మైనారిటీ విద్యార్థులకు ఉన్నత విద్య కోసం పూర్తి ఆర్థిక సహాయం', eli:['SC/ST/BC/మైనారిటీ','₹2.5 లక్షల లోపు ఆదాయం','పూర్తి-సమయ విద్యార్థి'], docs:['ఆధార్','కులం ధృవపత్రం','ఆదాయ ధృవపత్రం','అడ్మిషన్ లెటర్'], cat:'student', url:'https://apepass.ap.gov.in', deadline:'అడ్మిషన్ తర్వాత 30 రోజులు', badge:'AP పథకం' },
  { id:6, icon:'🏠', name:'వసతి దీవెన', nameEn:'Vasathi Deevena', benefit:'₹20,000/సంవత్సరం', color:'#16a34a', desc:'దూర విద్యార్థులకు వసతి మరియు భోజన ఖర్చుల సహాయం', eli:['AP విద్యార్థి','వేరే జిల్లాలో చదువు','ఆర్థిక అర్హత'], docs:['ఆధార్','ఆదాయ ధృవపత్రం','కాలేజీ ధృవపత్రం'], cat:'student', url:'https://apepass.ap.gov.in', deadline:'ఆగస్టు 31', badge:'AP పథకం' },
  { id:7, icon:'👩', name:'మహిళా శక్తి కేంద్రం', nameEn:'Mahila Shakti Kendra', benefit:'ఉచిత నైపుణ్య శిక్షణ', color:'#9333ea', desc:'గ్రామీణ మహిళలకు నైపుణ్య అభివృద్ధి, సాధికారత మరియు ఉద్యోగ అవకాశాలు', eli:['18-45 సంవత్సరాల మహిళలు','గ్రామీణ నివాసి'], docs:['ఆధార్','వయో ధృవపత్రం'], cat:'women', url:'https://wcd.nic.in', deadline:'నిరంతరం', badge:'కేంద్ర పథకం' },
  { id:8, icon:'⚕️', name:'ఆరోగ్యశ్రీ', nameEn:'Aarogyasri', benefit:'₹5 లక్షల వరకు చికిత్స', color:'#dc2626', desc:'తెలంగాణ పేద కుటుంబాలకు ఉచిత వైద్య సేవలు — 900+ ఆసుపత్రులలో', eli:['BPL కార్డు హోల్డర్లు','తెలంగాణ నివాసి'], docs:['ఆధార్','BPL కార్డు','రేషన్ కార్డు'], cat:'health', url:'https://aarogyasri.telangana.gov.in', deadline:'అత్యవసరం అప్పుడు', badge:'తెలంగాణ పథకం' },
]

// ─── SCHOLARSHIPS ───────────────────────────────────────────────
export const SCHOLARSHIPS = [
  { id:1, icon:'📚', name:'విద్య దీవెన స్కాలర్‌షిప్', cat:'SC/ST/BC', amount:'₹25,000 - ₹50,000/సంవత్సరం', deadline:'ఆగస్టు 15', eligibility:'కుటుంబ ఆదాయం ₹2.5 లక్షల లోపు', desc:'ఉన్నత విద్య కోసం పూర్తి ఫీజు మరియు నెలసరి స్టైపెండ్', docs:['ఆధార్ కార్డు','కులం ధృవపత్రం','ఆదాయ ధృవపత్రం','10వ తరగతి మార్కులు'], color:'#f07f0e', url:'https://apepass.ap.gov.in' },
  { id:2, icon:'🏆', name:'నేషనల్ మెరిట్ స్కాలర్‌షిప్', cat:'మెరిట్', amount:'₹12,000/సంవత్సరం', deadline:'నవంబర్ 30', eligibility:'10వ తరగతిలో 80%+ మార్కులు', desc:'జాతీయ స్థాయిలో మెరిట్ ఆధారిత స్కాలర్‌షిప్', docs:['10వ మార్కులు','ఆధార్','ఆదాయ ధృవపత్రం'], color:'#16a34a', url:'https://scholarships.gov.in' },
  { id:3, icon:'🎒', name:'ప్రీ-మెట్రిక్ స్కాలర్‌షిప్', cat:'SC/ST', amount:'₹3,500/సంవత్సరం', deadline:'అక్టోబర్ 31', eligibility:'SC/ST కులం, ₹2 లక్షల లోపు ఆదాయం', desc:'1-10వ తరగతి SC/ST విద్యార్థులకు', docs:['ఆధార్','కులం ధృవపత్రం','ఆదాయ ధృవపత్రం'], color:'#2563eb', url:'https://scholarships.gov.in' },
  { id:4, icon:'🌟', name:'TS Post Matric స్కాలర్‌షిప్', cat:'SC/ST/BC', amount:'₹35,000/సంవత్సరం', deadline:'సెప్టెంబర్ 30', eligibility:'తెలంగాణ విద్యార్థి, SC/ST/BC', desc:'తెలంగాణ SC/ST/BC విద్యార్థులకు ఉన్నత విద్య సహాయం', docs:['ఆధార్','కులం ధృవపత్రం','TC','ఫీజు రసీదు'], color:'#7c3aed', url:'https://telanganaepass.cgg.gov.in' },
  { id:5, icon:'💼', name:'పోస్ట్ మెట్రిక్ OBC స్కాలర్‌షిప్', cat:'OBC', amount:'₹10,000/సంవత్సరం', deadline:'అక్టోబర్ 31', eligibility:'OBC కులం, ₹1 లక్ష లోపు ఆదాయం', desc:'OBC విద్యార్థులకు ఉన్నత విద్య ఆర్థిక సహాయం', docs:['ఆధార్','కులం ధృవపత్రం','ఆదాయ ధృవపత్రం','అడ్మిషన్ రసీదు'], color:'#0891b2', url:'https://scholarships.gov.in' },
]

// ─── GOVT PORTALS ───────────────────────────────────────────────
export const PORTALS = [
  { name:'AP Meeseva', icon:'🏛️', desc:'సర్టిఫికెట్లు & ప్రభుత్వ సేవలు', url:'https://meeseva.ap.gov.in', color:'#2563eb' },
  { name:'TS eMeeseva', icon:'🏛️', desc:'తెలంగాణ ప్రభుత్వ సేవలు', url:'https://ts.meeseva.telangana.gov.in', color:'#7c3aed' },
  { name:'DigiLocker', icon:'📁', desc:'డిజిటల్ పత్రాల నిల్వ', url:'https://digilocker.gov.in', color:'#0891b2' },
  { name:'UIDAI Aadhaar', icon:'🪪', desc:'ఆధార్ సేవలు & అప్‌డేట్', url:'https://uidai.gov.in', color:'#f97316' },
  { name:'PM-KISAN Portal', icon:'🌾', desc:'రైతు సహాయ పథకం', url:'https://pmkisan.gov.in', color:'#16a34a' },
  { name:'National Scholarships', icon:'🎓', desc:'కేంద్ర స్కాలర్‌షిప్లు', url:'https://scholarships.gov.in', color:'#d97706' },
  { name:'ePass AP', icon:'📝', desc:'AP స్కాలర్‌షిప్ పోర్టల్', url:'https://apepass.ap.gov.in', color:'#16a34a' },
  { name:'ePass Telangana', icon:'📝', desc:'TS స్కాలర్‌షిప్ పోర్టల్', url:'https://telanganaepass.cgg.gov.in', color:'#7c3aed' },
  { name:'PMFBY', icon:'🛡️', desc:'ఫసల్ బీమా పోర్టల్', url:'https://pmfby.gov.in', color:'#2563eb' },
  { name:'Rythu Bandhu TS', icon:'💰', desc:'తెలంగాణ రైతు సహాయం', url:'https://rythubandhu.telangana.gov.in', color:'#d97706' },
  { name:'Aarogyasri', icon:'⚕️', desc:'ఆరోగ్య బీమా పథకం', url:'https://aarogyasri.telangana.gov.in', color:'#dc2626' },
  { name:'ePDS AP', icon:'🏠', desc:'రేషన్ కార్డు సేవలు', url:'https://epds.ap.gov.in', color:'#7c3aed' },
]

// ─── EMERGENCY ──────────────────────────────────────────────────
export const EMERGENCY = [
  { name:'పోలీసు', num:'100', icon:'🚔', color:'#1d4ed8', desc:'Police Emergency' },
  { name:'అంబులెన్స్', num:'108', icon:'🚑', color:'#dc2626', desc:'Medical Emergency' },
  { name:'మహిళా హెల్ప్‌లైన్', num:'181', icon:'👩', color:'#9333ea', desc:'Women Safety' },
  { name:'అగ్నిమాపక దళం', num:'101', icon:'🚒', color:'#ea580c', desc:'Fire Emergency' },
  { name:'రైతు హెల్ప్‌లైన్', num:'1551', icon:'🌾', color:'#16a34a', desc:'Farmer Helpline' },
  { name:'చైల్డ్ హెల్ప్‌లైన్', num:'1098', icon:'👶', color:'#0891b2', desc:'Child Safety' },
  { name:'iCall', num:'9152987821', icon:'💚', color:'#16a34a', desc:'Mental Health' },
  { name:'విపత్తు హెల్ప్‌లైన్', num:'1078', icon:'⚡', color:'#d97706', desc:'Disaster Relief' },
]

// ─── GOVT SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  { icon:'🪪', label:'ఆధార్ సేవలు', sub:'అప్‌డేట్, Download, Verify', url:'https://uidai.gov.in', grad:'from-blue-600 to-blue-800' },
  { icon:'📁', label:'DigiLocker', sub:'పత్రాల డిజిటల్ నిల్వ', url:'https://digilocker.gov.in', grad:'from-purple-600 to-purple-800' },
  { icon:'📜', label:'కుల ధృవపత్రం', sub:'Meeseva ద్వారా ఆన్‌లైన్', url:'https://meeseva.ap.gov.in', grad:'from-orange-600 to-orange-800' },
  { icon:'💰', label:'ఆదాయ ధృవపత్రం', sub:'ఆన్‌లైన్ దరఖాస్తు & Download', url:'https://meeseva.ap.gov.in', grad:'from-green-700 to-green-900' },
  { icon:'🏡', label:'నివాస ధృవపత్రం', sub:'రెసిడెన్స్ సర్టిఫికెట్', url:'https://meeseva.ap.gov.in', grad:'from-amber-600 to-amber-800' },
  { icon:'💳', label:'రేషన్ కార్డు', sub:'నవీకరణ, దరఖాస్తు, Download', url:'https://epds.ap.gov.in', grad:'from-rose-600 to-rose-800' },
  { icon:'⚕️', label:'ఆరోగ్యశ్రీ', sub:'ఆరోగ్య బీమా & ఆసుపత్రులు', url:'https://aarogyasri.telangana.gov.in', grad:'from-cyan-600 to-cyan-800' },
  { icon:'⚡', label:'విద్యుత్ సేవలు', sub:'బిల్లు చెల్లింపు & కనెక్షన్', url:'https://www.apspdcl.in', grad:'from-yellow-600 to-yellow-700' },
]

// ─── NEWS ───────────────────────────────────────────────────────
export const NEWS = [
  { id:1, icon:'📈', title:'మిర్చి ధర పెరిగింది', body:'గుంటూరు మండిలో మిర్చి ధర ₹18,500కు చేరుకుంది. అమ్మకానికి అనువైన సమయం.', time:'2 గంటల క్రితం', urgent:false },
  { id:2, icon:'💰', title:'పీఎం-కిసాన్ 16వ విడత', body:'పీఎం-కిసాన్ ₹2,000 మీ బ్యాంక్ ఖాతాకు జమ అయింది. స్థితి తనిఖీ చేయండి.', time:'5 గంటల క్రితం', urgent:true },
  { id:3, icon:'🌧️', title:'భారీ వర్షం హెచ్చరిక', body:'రేపు మీ జిల్లాలో భారీ వర్షం అంచనా. పంట నీటిని సరిగ్గా నిర్వహించండి.', time:'1 గంట క్రితం', urgent:true },
  { id:4, icon:'🎓', title:'విద్య దీవెన దరఖాస్తు', body:'విద్య దీవెన స్కాలర్‌షిప్ దరఖాస్తు గడువు ఆగస్టు 15. ఇప్పుడే దరఖాస్తు చేయండి.', time:'1 రోజు క్రితం', urgent:false },
]

// ─── DISEASES ───────────────────────────────────────────────────
export const DISEASES = [
  { id:1, icon:'🍂', name:'తెగులు (Blast)', crop:'వరి', season:'ఖరీఫ్', symptoms:'ఆకులపై గోధుమ రంగు మచ్చలు, పసుపు అంచులు', organic:'వేప నూనె 3% + సబ్బు నీరు — 5 రోజులకు ఒకసారి 3 సార్లు', chemical:'ట్రైసైక్లాజోల్ 75 WP (0.6 గ్రా/లీటర్)' },
  { id:2, icon:'🐛', name:'పచ్చ పురుగు (Thrips)', crop:'మిర్చి', season:'అన్ని సీజన్లు', symptoms:'ఆకులు మురిగిపోవడం, పసుపు రంగు', organic:'వేప నూనె + సబ్బు నీరు; పసుపు స్టిక్కీ ట్రాప్', chemical:'ఇమిడాక్లోప్రిడ్ 17.8 SL (0.5 మిలీ/లీటర్)' },
  { id:3, icon:'🤍', name:'బూజు తెగులు (Mildew)', crop:'వేరుశనగ', season:'రబీ', symptoms:'ఆకులపై తెల్లని పొడి మచ్చలు', organic:'బేకింగ్ సోడా (5 గ్రా/లీటర్) + నూనె', chemical:'సల్ఫర్ 80 WP (3 గ్రా/లీటర్)' },
  { id:4, icon:'🟡', name:'పసుపు మోసాయిక్', crop:'సోయాబీన్', season:'ఖరీఫ్', symptoms:'ఆకులపై పసుపు-ఆకుపచ్చ మచ్చలు', organic:'వేపాకు కషాయం 3%; వెండి ప్లాస్టిక్ మల్చ్', chemical:'థయోమిథాక్సామ్ 25 WG (0.3 గ్రా/లీటర్)' },
]

// ─── STATS ──────────────────────────────────────────────────────
export const STATS = [
  { num:'50,000+', label:'సక్రియ వినియోగదారులు', icon:'👥' },
  { num:'₹5 కోట్లు+', label:'పంచుకున్న ప్రయోజనాలు', icon:'💰' },
  { num:'1,200+', label:'విజయవంతమైన దరఖాస్తులు', icon:'✅' },
  { num:'23 జిల్లాలు', label:'కవరేజ్ ఏరియా', icon:'🗺️' },
]

// ─── EXAMS ──────────────────────────────────────────────────────
export const EXAMS = [
  { name:'AP EAMCET 2025', date:'మే 15-17, 2025', days:54, color:'#2563eb', url:'https://cets.apsche.ap.gov.in' },
  { name:'TS EAMCET 2025', date:'మే 7-10, 2025', days:46, color:'#7c3aed', url:'https://eamcet.tsche.ac.in' },
  { name:'JEE Advanced 2025', date:'మే 18, 2025', days:57, color:'#d97706', url:'https://jeeadv.ac.in' },
  { name:'NEET UG 2025', date:'మే 4, 2025', days:43, color:'#16a34a', url:'https://neet.nta.nic.in' },
  { name:'ICET 2025', date:'జూన్ 5-6, 2025', days:75, color:'#0891b2', url:'https://icet.tsche.ac.in' },
  { name:'POLYCET 2025', date:'ఏప్రిల్ 28, 2025', days:37, color:'#dc2626', url:'https://polycetap.nic.in' },
]
