// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// gsap.registerPlugin(ScrollTrigger);

// const ScrollEffectComponent = () => {
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const image = imageRef.current;
//     const content = contentRef.current;

//     gsap.to(content, {
//       scrollTrigger: {
//         trigger: image,
//         start: "top center", // When the top of the image reaches the center of the viewport
//         end: "bottom top", // When the bottom of the image reaches the top of the viewport
//         scrub: 2,
//       },
//       y: -200, // Adjust this value based on your desired effect
//       opacity: 1,
//     });

//     gsap.to(image, {
//       scrollTrigger: {
//         trigger: image,
//         start: "top center",
//         end: "bottom top",
//         scrub: 2,
//       },
//       opacity: 0,
//     });
//   }, []);

//   return (
//     <div className="scroll-container">
//       <div className="image-section" ref={imageRef}>
//         <img src="Main-pin.png" alt="Your Image" className="scroll-image " />
//       </div>
//     </div>
//   );
// };

// export default ScrollEffectComponent;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollEffectComponent = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;

    gsap.fromTo(content, 
      { y: 0, opacity: 0 }, // Starting state
      {
        y: -200, // Ending state
        opacity: 1,
        scrollTrigger: {
          trigger: image,
          start: "top center", // When the top of the image reaches the center of the viewport
          end: "bottom top", // When the bottom of the image reaches the top of the viewport
          scrub: 2,
        },
      }
    );

    gsap.fromTo(image, 
      { opacity: 1 }, // Starting state
      {
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: "top center", // When the top of the image reaches the center of the viewport
          end: "bottom top", // When the bottom of the image reaches the top of the viewport
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="scroll-container">
      <div className="image-section" ref={imageRef}>
        <img src="Main-pin.png" alt="Your Image" className="scroll-image" />
      </div>

    </div>
  );
};

export default ScrollEffectComponent;