import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
        <div>
        <section class="c-project wrapper con-row">
        <div class="container">
            <div class="section-heading">
                <h3 class="h3">Our Projects</h3>
                <h2 class="h2">Projects</h2>
            </div>
            <ul>
                <li class="shadow">
                   <div> <Image src="/images/Studio_Appartment.png" width={430} height={433} layout="responsive" alt="images" /></div>
                    <p>Studio Appartment</p>
                </li>
                <li class="shadow">
                   <div> <Image src="/images/project2.png" width={430} height={433} layout="responsive" alt="images" /> </div>
                    <p>Studio Appartment</p>
                </li>
                <li class="shadow">
                   <div> <Image src="/images/project3.png" width={430} height={433} layout="responsive" alt="images" /></div>
                    <p>NA Plots</p>
                </li>

            </ul>
        </div>
    </section>
            
        </div>
    )
}

export default Projects
