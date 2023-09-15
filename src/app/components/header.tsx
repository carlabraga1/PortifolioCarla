

import Image from 'next/image'
import "./header.scss"



export default function Header(){
    return(
    <><div className="header">
        <h3>
          <span>&lt;</span>
          Carlin <span>/&gt;</span>
        </h3>
        <div className="NavBar">
          <a href="#">Início</a>
          <a href="#aboutme">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </div>
        <div className="headermain">
          <Image
            src="/Eu.png"
            alt="Vercel Logo"
            width={360}
            height={358}
            priority />
          <h1>Olá, eu sou Carla Braga!🖐️</h1>
          <h2>Desenvolvedora Front-end.</h2>
        </div>
  


      </div>
    
        </>
  
    )
}