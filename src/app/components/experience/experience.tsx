import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Tecnologias"/>
        <div className="experience-time">
            <div className="experience-language">
            <Image
             src="/JS ICON.png"
             alt="JS Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-1"> 
                
                </div>
            </div>
            </div>
            <div className="experience-language">
            <Image
             src="/React icon.webp"
             alt=" React Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-2">                
                </div>
            </div>
            </div>
            <div className="experience-language">
            <Image
             src="/typescript icon.png"
             alt="Type Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-3">                
                </div>
            </div>
            </div>
         

        </div>
        </div>
    )
}