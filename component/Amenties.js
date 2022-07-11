import React from 'react';
import Image from 'next/image';

export const Amenties = () => {
    return (
    <>
        <div>
            <section class="c-amenties wrapper con-row">
                <div class="container">
                    <div class="section-heading">
                        <h3 class="h3">Our Projects</h3>
                        <h2 class="h2">Amenities | <span>Features</span></h2>
                    </div>
                    <ul>
                        <li class="">
                            <Image src="/images/infinity.png" width={102} height={98} layout="intrinsic" alt="images" />
                            <p>Infinity</p>
                        </li>
                        <li class="">
                            <Image src="/images/gym.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/gym.png" alt="images" /> */}
                            <p>Gym area</p>
                        </li>
                        <li class="">
                            <Image src="/images/restaurent.png" width={102} height={98} layout="intrinsic" alt="images" />

                            {/* <img src="images/restaurent.png" alt="images" /> */}
                            <p>Restaurent</p>
                        </li>
                        <li class="">
                            <Image src="/images/water-ski.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/water-ski.png" alt="images" /> */}
                            <p>Water sports</p>
                        </li>
                        <li class="">
                            <Image src="/images/tennis-racket.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/tennis-racket.png" alt="images" /> */}
                            <p>Tennis</p>
                        </li>
                        <li class="">
                            <Image src="/images/town-hall.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/town-hall.png" alt="images" /> */}
                            <p>Party hall</p>
                        </li>
                        <li class="">
                            <Image src="/images/running-track.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/running-track.png" alt="images" /> */}
                            <p>Jogging Parking</p>
                        </li>
                        <li class="">
                            <Image src="/images/camping.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/camping.png" alt="images" /> */}
                            <p>Night Campaign</p>
                        </li>
                        <li class="">
                            <Image src="/images/coffee.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/camping.png" alt="images" /> */}
                            <p>Coffee Shop</p>
                        </li>
                        <li class="">
                            <Image src="/images/old-man.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/camping.png" alt="images" /> */}
                            <p>Senior Citizen Park</p>
                        </li>
                        <li class="">
                            <Image src="/images/barbeque.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/camping.png" alt="images" /> */}
                            <p>Barbeque Area</p>
                        </li>
                        <li class="">
                            <Image src="/images/atm-machine.png" width={102} height={98} layout="intrinsic" alt="images" />
                            {/* <img src="images/camping.png" alt="images" /> */}
                            <p>Atm facility</p>
                        </li>
                    </ul>

                </div>
            </section>
        </div>
    </>
    )
}
