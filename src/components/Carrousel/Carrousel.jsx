import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
    return (
            <div className="slider carousel-fade mb-3">
                <Carousel indicators={false} controls={false} interval={4000}>
                    <Carousel.Item className='slide'>
                        <img className=" w-100" src= {'/images/banner1.png'} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item className='slide'>
                        <img
                        className="w-100" src={'/images/banner2.png'} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item className='slide'>
                        <img className="w-100" src={'/images/banner3.png'} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default Carrousel