import Image from 'next/image'
import "./styles/home.scss"
import styles from './page.module.css'
import Header from './components/header'
import About from './components/about me/about'
import { Info } from './components/information/information'
import { Experience } from './components/experience/experience'
import { SocialBtns } from './components/social-btns/social-btns'
import { Projects } from './components/Projects/projects'

export default function Home() {
  return (
  <><section className='container-main'>
      <Header />

      <div className="buttons">
      <SocialBtns/>
      </div>
    </section>

      <main className="container-about">
        <About />

        <div className="informations">
      <Experience />
      <Info />
      </div>
      </main>

      <section className='container-projects'>
        <Projects/>
      </section>
  
      </>

  )
}
