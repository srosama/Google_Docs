import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Animation() {
    const sectionRefBlue = useRef(null);
    const sectionRefWhite = useRef(null);
    const logoRef = useRef(null); // Add a ref for the logo

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(sectionRefBlue.current, {
            height: '100%',
            width: '100%',
            // duration: 1,
            ease: 'power2.inOut',
        })
        tl.to(sectionRefWhite.current, {
            height: '100%',
            width: '100%',
            // duration: 1,
            ease: "circ.inOut",
        })
        .to(logoRef.current, {
            rotation: 360, // Rotate the logo
            opacity: 1, // Set opacity to 1
            duration: 1, // Duration of the rotation animation
            ease: 'power2.inOut',
        })
        .to(logoRef.current, {
            top: 100, // Move the logo to the top
            left: '50%', // Center horizontally
            width: 70,
            height: 70,
            transform: 'translate(-50%, 0)', // Adjust positioning
            duration: 1, // Duration of the move animation
            ease: 'power2.inOut',
        });

    }, []);

    return (
        <>
            <section
                ref={sectionRefBlue}
                className="fixed -z-10 top-0 left-0 h-0 w-0 bg-blue-500"
            />
             <section
                ref={sectionRefWhite}
                className="fixed -z-10 top-0 right-[0px] h-0 w-0 bg-white"
            />
            <img
                ref={logoRef}
                src="/googleDocs.png"
                alt="Google Docs Logo"
                className="absolute opacity-0"
                style={{ width: '100px', height: '100px', top: 
                    '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
}
