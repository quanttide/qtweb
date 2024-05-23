import { useRef } from 'react';
import './assets/CSS/FullPictureBackground.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    dotsClass: 'slick-dots1', // 自定义指示器的样式
    infinite: true,
    speed: 500,
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
    singlePicture: boolean;
}

export default function FullPictureBackground({ link, data, singlePicture }: Props) {
  /*
    以整张图片作为背景的组件，上面附带有文字说明
    link：详细按钮跳转链接
    data:{
      imageUrl:作为背景的图片链接
      title:标题
      subtitles:文字说明
    }
    singlePicture:单张图片还是轮播
  */
    const sliderRef = useRef<Slider | null>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className='pic-background'>
          {/* 单图片 */}
            {singlePicture ? (
              
                <div className='parent-div'>
                    <div className="introduce">
                        <h1>{data[0].title}</h1>
                        <a href={link} className='more'>详细</a>
                        {data[0].subtitles.map((subtitle, subIndex) => (
                            <p key={subIndex}>{subtitle}</p>
                        ))}
                    </div>
                    <img className='' src={require(`${data[0].imageUrl}`)} alt="" />
                </div>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                  {/* 多图轮播 */}
                    {data.map(({ imageUrl, title, subtitles }, index) => (
                        <div key={index} className='parent-div'>
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
            )}
        </div>
    );
}
