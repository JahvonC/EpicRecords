import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerImgOne from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Future-INeverLikedYou.jpeg'
import bannerImgTwo from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Bia-Sixteen.jpeg'
import bannerImgThree from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Giveon-GiveOrTake.jpeg'
import bannerImgFour from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/EddieBenjamin-AllForNothing.jpeg'
import bannerImgFive from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/MeghanTrainor-TakinItBackDeluxe.jpeg'
import bannerImgSix from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/MimiWebb-Amelia.jpeg'
import bannerImgSeven from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Slider-SylviaRhone.jpeg'
import bannerImgEight from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/Tyla-BeenThinking.jpeg'
import bannerImgNine from '/Users/Jahvon/npx/epicrecords/src/assets/EPIC/ZaraLarsson-CantTameHer.jpeg'
import '../components/Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='container-fluid' activeIndex={index} onSelect={handleSelect} style={{width: '100vw'}}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgThree}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgFour}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgFive}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgSix}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgSeven}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgEight}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={bannerImgNine}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}



export default ControlledCarousel