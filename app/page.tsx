import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Skills />
      <AnimatedText />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}