import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
    <>
        <footer className="m-footer wrapper">
            <div className="container">
                <ul>
                    <li>
                        <div className="logo-img">
                            {/* <img src="images/samsonalogo.png" alt="" /> */}
                            <Image src="/images/samsonalogo.png" width={124} height={126} layout="responsive" alt="" />
                        </div>
                        <div className="">
                            <h3 className="h3">Channel Partner</h3>
                            <h2 className="h2">SAMSONA GETAWAYS</h2>
                        </div>
                    </li>
                    <li>
                        <div className="logo-img">
                            {/* <img src="images/UJB-logo.png" alt="" /> */}
                            <Image src="/images/UJB-logo.png" width={124} height={126} layout="responsive" alt="" />
                        </div>
                        <div>
                            <h3 className="h3">Empowered By</h3>
                            <h2 className="h2">UJustBe Enterprise</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    </>
    )
}

export default Footer
