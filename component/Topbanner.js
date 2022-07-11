import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

// slider carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquiryform from './Enquiryform';

// import images
import playimg from '../public/images/icon-play.png'
import walkthroughimg from '../public/images/icon-3d.png'
import topbanerimg from '../public/images/topbanner.png'
import kokanimg from '../public/images/konkan.png'
// import mountains from '../public/mountains.jpg'




function Topbanner() {


    //formSubmit function
    const [videopop, setVideopop] = useState(false);
    const [vidUrl, setvidUrl] = useState('')

    function playvideo(vidUrldata) {
        // console.log(vidUrldata);
        setVideopop(true);
        setvidUrl(vidUrldata);
    }
    function closevid() {
        setVideopop(false);
    }


    //slider carousel variable
    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }

    


    return (
        <>
            <section className="c-topbanner wrapper">
                {/* <!-- carousel --> */}
                <Slider className="sliders" {...settings}>
                    <div className="carousel-slide">
                        {/* <img src="images/topbanner.png" alt="" /> */}
                        <Image src={topbanerimg} placeholder="blur" />
                        <div className="container">
                            <h2 className="h1">
                                stress Free
                                <span>Second Home</span>
                            </h2>
                            <ul>
                                <li>
                                    <div className="btn-play" onClick={() => playvideo("https://www.youtube.com/embed/XK6AbdQvDZ4")} >

                                        <abbr>View Video</abbr> <abbr><Image src={playimg} width={20}
                                            height={20} /></abbr>
                                    </div>

                                </li>
                                <li>
                                    <div className="btn-walkthrough" onClick={() => playvideo("https://www.youtube.com/embed/d36dUzAAZeE")}>
                                        <abbr>3d Walk throught</abbr> <abbr><Image src={walkthroughimg} width={30}
                                            height={30} /></abbr>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <Image src={topbanerimg} placeholder="blur" />
                        <div className="container">
                            <h2 className="h1">
                                stress Free
                                <span>Second Home</span>
                            </h2>
                            <ul>
                                <li>
                                    <div className="btn-play" onClick={() => playvideo("https://www.youtube.com/embed/XK6AbdQvDZ4")} >

                                        <abbr>View Video</abbr> <abbr><Image src={playimg} width={20}
                                            height={20} /></abbr>
                                    </div>

                                </li>
                                <li>
                                    <div className="btn-walkthrough" onClick={() => playvideo("https://www.youtube.com/embed/d36dUzAAZeE")}>
                                        <abbr>3d Walk throught</abbr> <abbr><Image src={walkthroughimg} width={30}
                                            height={30} /></abbr>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <Image src={kokanimg} placeholder="blur" />
                        <div className="container">
                            <h2 className="h1">
                                stress Free
                                <span>Second Home</span>
                            </h2>
                            <ul>
                                <li>
                                    <div className="btn-play" onClick={() => playvideo("https://www.youtube.com/embed/XK6AbdQvDZ4")} >

                                        <abbr>View Video</abbr> <abbr><Image src={playimg} width={20}
                                            height={20} /></abbr>
                                    </div>

                                </li>
                                <li>
                                    <div className="btn-walkthrough" onClick={() => playvideo("https://www.youtube.com/embed/d36dUzAAZeE")}>
                                        <abbr>3d Walk throught</abbr> <abbr><Image src={walkthroughimg} width={30}
                                            height={30} /></abbr>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </Slider>
                <Enquiryform />
                
            </section>

            {/* //video play iframe */}
            {videopop ?
                <section className="popupMain">
                    <div className="bg-vid" onClick={closevid}></div>
                    <div className="popupDiv">
                        <iframe width="100%" height="500" src={vidUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </section> : null}
        </>
    )
}

export default Topbanner
