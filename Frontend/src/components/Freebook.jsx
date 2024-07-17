import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx';
import axios from 'axios';


function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getbook = async ()=>{
      try {
        const response = await axios.get('http://localhost:4001/book');
        const filterdata = response.data.filter((data)=> data.category === "Free");
        setBook(filterdata);
      } catch (error) {
        console.log("Error :"+ Error);
      }
    }
    getbook();
  },[])
 
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='px-2'>
        <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur! Temporibus deleniti quia, laboriosam harum est in dignissimos optio hic.</p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Freebook
