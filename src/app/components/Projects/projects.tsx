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
    const [slidePerView ,  setSlidePerView] = useState(3)
    const data = [
        {id: '1', image: '/exemplo.png'},
        {id: '2', image: '/eu.jpg'},
        {id: '3', image: '/Eu.png'},
        {id: '4', image: '/exemplo.png'},
    ]
    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(2);
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
    <SectionTitle text="MEUS PROJETOS"/>

    <Swiper
      className="custom-swiper"
    slidesPerView={slidePerView}
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
   
   
        </>
    )
}