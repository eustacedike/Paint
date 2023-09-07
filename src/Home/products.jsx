import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from "react-responsive-carousel";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product4 from "../Images/product4.jpg";
import product5 from "../Images/product5.jpg";
import product6 from "../Images/product6.jpg";
import product7 from "../Images/product7.jpg";
import product8 from "../Images/product8.jpg";
import product9 from "../Images/product9.jpg";
import product10 from "../Images/product10.jpg";
import product11 from "../Images/product11.jpg";
import product12 from "../Images/product12.jpg";
import product13 from "../Images/product13.jpg";

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
  ];

  const currentThumb = useRef([]);
  const thumbss = useRef();

  useEffect(() => {
    currentThumb.current = currentThumb.current.slice(0, galleryPics.length);
  }, [galleryPics]);

  useEffect(() => {
    console.log(document.documentElement.clientWidth);
    console.log(thumbss.current.getBoundingClientRect());
    console.log(galleryPics.length);
  }, []);

  const scrolltoThumbIfNotVisible = (d) => {
    const bounded = currentThumb.current[d].getBoundingClientRect();
    console.log(bounded.left);
    if (
      !(
        bounded.top >= 0 &&
        bounded.left >= 0 &&
        bounded.bottom <= document.documentElement.clientHeight &&
        bounded.right <= document.documentElement.clientWidth
      )
    ) {
      thumbss.current.scrollTo(bounded.left, 0);
    }
  };

  const [inView, setInView] = useState(1);

  const next = () => {
    if (galleryPics.length == inView) {
      setInView(1);
      scrolltoThumbIfNotVisible(0);
    } else {
      setInView(inView + 1);
      scrolltoThumbIfNotVisible(inView - 1);
      console.log(inView);
    }
    console.log(inView);
  };

  const previous = () => {
    if (inView == 1) {
      setInView(galleryPics.length);
      scrolltoThumbIfNotVisible(galleryPics.length - 1);
    } else {
      setInView(inView - 1);
      scrolltoThumbIfNotVisible(inView - 1);
    }
    scrolltoThumbIfNotVisible(inView);
  };

  return (
    <div className="Gallery">
      <div className="gallery-1">
        {/* <Carousel id="maxi">

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


            </Carousel> */}

        <div className="">
          {/* <h2 className='close-album' onClick={() => setPhotoDisplay(-1)}>&#10006;</h2> */}
          {<img src={galleryPics[inView - 1].image} id="mini" />}
          <p className="capt"> {galleryPics[inView - 1].legend} </p> <br />
          <button className="shopn">Shop Now</button>
          <div className="thumbnails" ref={thumbss}>
            {galleryPics.map((thumb, i) => {
              return (
                <div id="">
                  <img
                    ref={(el) => (currentThumb.current[i] = el)}
                    src={thumb.image}
                    className="thumb"
                    style={{
                      border:
                        galleryPics.indexOf(thumb) + 1 == inView
                          ? "4px solid orange"
                          : "3px solid white",
                    }}
                    onClick={() => {
                      setInView(galleryPics.indexOf(thumb) + 1);
                      console.log(inView);
                    }}
                  />
                  {/* <button onClick={scrolltoThumbIfNotVisible}>tdfdx</button> */}
                  {/* <p>
                    {bounded.top >= 0 &&
                      bounded.left >= 0 &&
                      bounded.bottom <=
                        (window.innerHeight ||
                          document.documentElement.clientHeight) &&
                      bounded.right <=
                        (window.innerWidth ||
                          document.documentElement.clientWidth)}
                  </p> */}

                  {/* <p>{galleryPics.indexOf(thumb)}</p> */}
                </div>
              );
            })}
          </div>
          <div className="prd-nxt" onClick={next}>
            <FaChevronRight />
          </div>
          <div className="prd-prv" onClick={previous}>
            <FaChevronLeft />
          </div>
          {/* <div className="position"><b>{photoDisplay + 1}</b></div> */}
        </div>
      </div>
      <div className="gallery-2">
        <h1>OUR PACKAGES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          architecto est laudantium aliquid ut ipsum quam obcaecati illo
          blanditiis beatae.
        </p>
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
