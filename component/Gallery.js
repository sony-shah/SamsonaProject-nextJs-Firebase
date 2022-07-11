import React from 'react';
import Image from 'next/image';

const Gallery = () => {
    return (
        <section className="c-gallery wrapper con-row">
            <div className="container">
                <div className="section-heading">
                    <h3 className="h3">Our</h3>
                    <h2 className="h2">Gallery</h2>
                </div>
                <ul>
                    <li>
                        <Image src="/images/gallery1.png" width={356} height={429} layout="responsive" alt="" />
                    </li>
                    <li>
                        <Image src="/images/gallery2.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery3.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery4.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery5.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery6.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery7.png" width={356} height={429} layout="responsive" alt="" />
                    </li>

                    <li>
                        <Image src="/images/gallery8.png" width={356} height={429} layout="responsive" alt="" />
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default Gallery
