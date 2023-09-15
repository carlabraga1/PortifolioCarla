import { GitIcon } from "../icons/github-icon";
import { LinkeIcon } from "../icons/linke-icon";
import "./social-btns.scss"
export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/carla-braga-vargas/">
                <LinkeIcon/>
            </a>
            <a href="https://github.com/carlabraga1">
                <GitIcon/>
            </a>
           
        </div>
    )
}