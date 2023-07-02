import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';



import product1 from '../Images/product1.jpg';
import product2 from '../Images/product2.jpg';
import product3 from '../Images/product3.jpg';
import product4 from '../Images/product4.jpg';
import product5 from '../Images/product5.jpg';
import product6 from '../Images/product6.jpg';
import product7 from '../Images/product7.jpg';
import product8 from '../Images/product8.jpg';
import product9 from '../Images/product9.jpg';
import product10 from '../Images/product10.jpg';
import product11 from '../Images/product11.jpg';
import product12 from '../Images/product12.jpg';
import product13 from '../Images/product13.jpg';






function Products() {





    const galleryPics = [
        { image: product1, legend: "Fair Package" },
        { image: product2, legend: "Fair Package" },
        { image: product3, legend: "Fair Package" },
        { image: product4, legend: "Fair Package" },
        { image: product5, legend: "Fair Package" },
        { image: product6, legend: "Fair Package" },
        { image: product7, legend: "Fair Package" },
        { image: product8, legend: "Fair Package" },
        { image: product9, legend: "Fair Package" },
        { image: product10, legend: "Fair Package" },
        { image: product11, legend: "Fair Package" },
        { image: product12, legend: "Fair Package" },
        { image: product13, legend: "Fair Package" },
        
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
    <h1>OUR PACKAGES</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto est laudantium aliquid ut ipsum quam obcaecati illo blanditiis beatae.</p>
    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, nesciunt magni? Quibusdam ex maxime quam iste accusamus laudantium odit? Explicabo!</p> */}
</div>
        </div>
    );
}
export default Products;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>