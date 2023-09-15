import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"



export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span> Inglês - Avançado</span>
          <span> Portuguese-BR - Nativo</span>
          <span> Espanhol - Básico</span>
        </div>
      </div>
    )
}