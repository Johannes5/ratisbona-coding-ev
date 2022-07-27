// @ts-nocheck

import React, {useEffect} from "react";
import { PlasmicCta, DefaultCtaProps } from "./plasmic/ratisbona_coding_e_v/PlasmicCta";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { gsap } from "gsap/dist/gsap";

export interface CtaProps extends DefaultCtaProps {}


function Cta_(props: CtaProps, ref: HTMLElementRefOf<"div">) {
  useEffect(() => {
    const whiteButton = document.querySelector('.whiteButton')
    const ctaArea = document.querySelector('.ctaArea')
    function parallaxIt(e, target, movement = 1){
      const boundingRect = ctaArea?.getBoundingClientRect();
      const relX = e.pageX - boundingRect?.left;
      const relY = e.pageY - boundingRect?.top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, {
        x: (relX - boundingRect?.width/2) * movement,
        y: (relY - boundingRect?.height/2 - scrollTop) * movement,
        ease: "power1",
        duration: 2
      });}


    function callParallax(e){
      parallaxIt(e, whiteButton, 0.2);
    }


    ctaArea?.addEventListener('mousemove', function(e){
      callParallax(e);
    });

    ctaArea?.addEventListener('mouseleave', function(e){
      gsap.to(whiteButton, {
        scale:1,
        x: 0,
        y: 0,
        ease: "power3",
        duration: 2
      });
    });

    whiteButton.addEventListener('mouseenter', function(e){
      gsap.to(whiteButton, {
        scale: 1.1,
        ease: "power4",
      });
    })

    whiteButton.addEventListener('mouseleave', function(e){
      gsap.to(whiteButton, {
        scale: 1,
        ease: "power4",
      });
    })



  })
  return <PlasmicCta root={{ ref }} {...props} whiteButton={{}}/>
}

const Cta = React.forwardRef(Cta_);
export default Cta;
