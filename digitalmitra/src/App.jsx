import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from './hooks/useApp'
import { Navbar, BottomNav, Footer, ComingSoon } from './components/UI'

import LandingPage from './pages/LandingPage'
import { FarmerHome, MandiPage, CropProtectionPage, SchemesPage } from './pages/FarmerPages'
import { StudentHome, ScholarshipsPage } from './pages/StudentPages'
import ServicesPage from './pages/ServicesPage'
import { SafetyHome, SOSPage } from './pages/SafetyPages'
import SettingsPage from './pages/SettingsPage'

function Layout() {
  const loc = useLocation()
  const isHome = loc.pathname === '/'
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Farmer */}
          <Route path="/farmer" element={<FarmerHome />} />
          <Route path="/farmer/mandi" element={<MandiPage />} />
          <Route path="/farmer/crop-protection" element={<CropProtectionPage />} />
          <Route path="/farmer/schemes" element={<SchemesPage />} />
          <Route path="/farmer/fertilizers" element={<ComingSoon title="ఎరువులు" />} />
          <Route path="/farmer/weather" element={<ComingSoon title="వాతావరణం" />} />
          <Route path="/farmer/calendar" element={<ComingSoon title="పంట క్యాలెండర్" />} />

          {/* Student */}
          <Route path="/student" element={<StudentHome />} />
          <Route path="/student/scholarships" element={<ScholarshipsPage />} />
          <Route path="/student/schemes" element={<SchemesPage />} />
          <Route path="/student/exams" element={<ComingSoon title="పరీక్షలు" />} />
          <Route path="/student/courses" element={<ComingSoon title="ఆన్‌లైన్ కోర్సులు" />} />
          <Route path="/student/career" element={<ComingSoon title="కెరీర్ గైడెన్స్" />} />
          <Route path="/student/admissions" element={<ComingSoon title="ప్రవేశాలు" />} />

          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Safety */}
          <Route path="/safety" element={<SafetyHome />} />
          <Route path="/safety/sos" element={<SOSPage />} />

          {/* Settings */}
          <Route path="/settings" element={<SettingsPage />} />

          {/* 404 */}
          <Route path="*" element={<ComingSoon title="పేజీ కనుగొనబడలేదు" />} />
        </Routes>
      </main>
      {isHome && <Footer />}
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: "'Noto Sans Telugu', sans-serif",
              fontSize: '14px',
              borderRadius: '12px',
              padding: '10px 16px',
            },
          }}
        />
      </AppProvider>
    </BrowserRouter>
  )
}
