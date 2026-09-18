import { IndexRail } from './components/IndexRail'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Tools } from './components/Tools'
import { Education } from './components/Education'
import { Languages } from './components/Languages'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[90] bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <IndexRail />
      <Navbar />
      <main id="main" className="lg:pl-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Tools />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
