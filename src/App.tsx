import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HashScroll } from './components/HashScroll'
import { SiteChrome } from './components/SiteChrome'
import { FlightOpsSystemPage } from './pages/FlightOpsSystemPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <Routes>
        <Route element={<SiteChrome />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/flight-ops/system" element={<FlightOpsSystemPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
