
'use client'

import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Icon from "./ui/Icon";





const GapsBuild = ({children}:{children?:React.ReactNode}) => {

    const referenceConteneur = useRef<HTMLDivElement>(null)

    const animate = useRef<HTMLDivElement>(null)

    // useEffect(()=>{
    //     if (referenceConteneur.current) {
    //         // gsap.to(referenceConteneur.current.querySelector('.objet'), {x:160 , fill:'red' , rotate:'360deg',  duration:2 , ease:'elastic.out(1, 0.3)'})

    //      gsap.fromTo(referenceConteneur.current.querySelector('.objet'),
    //     {y:60 , opacity:0.2 } ,{y:0 , opacity:1 , delay:.5 , duration:2}
    //     )
    //     }
    // }, [])

    useEffect(()=>{
        gsap.to(animate.current , {
            x:200,
            duration:2,
            rotation:360,
        })
    },[])

    return ( 
    <div ref={referenceConteneur}>
        <div ref={animate} className="objet">
            {children}
          
        </div>

    </div> );
}
 
export default GapsBuild;


export const SimpleAnimation = () => {
    const boxRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Animation basique
      gsap.to(boxRef.current, {
        duration: 1,
        x: 100,
        rotation: 360,
      });
    }, []);
  
    return (
      <div 
        ref={boxRef}
        className="w-20 h-20 bg-blue-500"
      />
    );
  };
  