import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './index.css'; // Assuming you have your styles here

gsap.registerPlugin(ScrollTrigger);

const ScrollEffectComponent = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;

    gsap.to(content, {
      scrollTrigger: {
        trigger: image,
        start: "top center", // When the top of the image reaches the center of the viewport
        end: "bottom top", // When the bottom of the image reaches the top of the viewport
        scrub: 3,
      },
      y: -100, // Adjust this value based on your desired effect
      opacity: 1,
    });

    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="scroll-container">
      <div className="image-section" ref={imageRef}>
        <img src="Inspiration.png" alt="Your Image" className="scroll-image " />
      </div>
    </div>
  );
};

export default ScrollEffectComponent;
