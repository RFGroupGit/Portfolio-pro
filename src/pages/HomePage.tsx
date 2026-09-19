import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Languages } from '../components/Languages'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Tools } from '../components/Tools'

export function HomePage() {
  return (
    <main id="main">
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
  )
}
