import React, { useEffect, useState } from 'react'
// import head from 'next/head'
import image from 'next/image'
// import styles from '../styles/main.css'


const Main = () => {
    const fixedText = "I am fixed :)";
    const whenNotFixed = "I am not a fixed header :(";
    const [scroll, setScroll] = useState(0);
    // const [fixedclass, setfixed] = useState(false)
    const[openbox,setopenbox]=useState('');
    
    const [headerText, setHeaderText] = useState(whenNotFixed);

    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop + 100;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                if (headerText !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                header.classList.remove("sticky");
                if (headerText !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    const scrollToTop = () => {
        setopenbox(true)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    

    return (

        // <header className="m-header wrapper">
        <header id="myHeader" className="m-header wrapper">
            <div className="container">
                <div className="logo">
                    {/* punir logo */}
                    <img src="images/punirlogo.png" alt="" />
                    {/* samsona logo  */}
                    <img src="images/samsonalogo.png" alt="" />
                </div>
                <div id="enquirybtn" className="enquiry-btn" onClick={scrollToTop}>
                Enquiry
            </div>
            </div>
            
        </header>
    )
}

export default Main
