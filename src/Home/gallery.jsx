import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';



import gall1 from '../Images/gall1.jpg';
import gall2 from '../Images/gall2.jpg';
import gall3 from '../Images/gall3.jpg';
import gall4 from '../Images/gall4.jpg';
import gall5 from '../Images/kid.jpg';
import gall6 from '../Images/magic.jpg';

function Gallery() {





    const galleryPics = [
        { image: gall1, legend: "Lgend 1" },
        { image: gall2, legend: "Lgend 1" },
        { image: gall3, legend: "Lgend 1" },
        { image: gall4, legend: "Lgend 1" },
        { image: gall5, legend: "Lgend 1" },
        { image: gall6, legend: "Lgend 1" },
    ]


    return (
        <div className="Gallery">

<div className="gallery-1">

            <Carousel id="maxi">

                {
                    galleryPics.map(photo => {
                        return (
                            <div id='max'>
                                <img src={photo.image} id='mini' />
                                <p className="legend">{photo.legend}</p>
                            </div>
                        )
                    })
                }


            </Carousel>
            
</div>
<div className="gallery-2">
    <h1>OUR GALLERY</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto est laudantium aliquid ut ipsum quam obcaecati illo blanditiis beatae.</p>
    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, nesciunt magni? Quibusdam ex maxime quam iste accusamus laudantium odit? Explicabo!</p> */}
</div>
        </div>
    );
}
export default Gallery;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>