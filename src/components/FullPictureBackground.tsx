import { useRef } from 'react';
import './assets/CSS/FullPictureBackground.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    dotsClass:'slick-dots1', // 自定义指示器的样式
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
};

interface Props {
  link: string;
  data: {
    imageUrl: string;
    title: string;
    subtitles: string[];
  }[];
}

export default function FullPictureBackground({ link, data }: Props) {
    const sliderRef = useRef<Slider | null>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
      <div className='pic-background'>
        <Slider ref={sliderRef} {...settings}>
            {data.map(({ imageUrl, title, subtitles }, index) => (
              <div key={index} className='parent-div' >
                <div className="introduce">
                  <h1>{title}</h1>
                  <a href={link} className='more'>详细</a>
                  {subtitles.map((subtitle, subIndex) => (
                    <p key={subIndex}>{subtitle}</p>
                  ))}
                </div>
                <button onClick={handleNext} className='next-button'>
                  <img src={require('./assets/images/icon_arrow_right.png')} alt='Logo' />
                </button>
                <img className='' src={require(`${imageUrl}`)} alt="" />
              </div>
            ))}
        </Slider>
        
      </div>
    );
}
