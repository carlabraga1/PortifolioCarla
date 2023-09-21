'use client'

import { SectionTitle } from "../sectionTitle/section-title";
import { Swiper , SwiperSlide} from 'swiper/react';
import './projects.scss';
import { useState , useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function Projects (){
    const [slidePerView ,  setSlidePerView] = useState(2)
    const data = [
        {id: '1', image: '/imgFundo.png'},
        {id: '2', image: '/imgFundo.png'},
        {id: '3', image: '/imgFundo.png'},
        {id: '4', image: '/exemplo.png'},
    ]
    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(1);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return() =>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return(
        <>
        <div id="projects">
    <SectionTitle text="MEUS PROJETOS"/>
    <div className="container-swiper">
    <Swiper
      className="custom-swiper"
    slidesPerView={1}
    pagination ={{clickable: true}}
    navigation
    
    >
        {data.map((item) =>(    
        <SwiperSlide key={item.id}>
        <img className="slide-item"
             src={item.image}
             alt="Slide"
           />
        </SwiperSlide>
            ))}
    </Swiper>
    </div>
    </div>
   
        </>
    )
}