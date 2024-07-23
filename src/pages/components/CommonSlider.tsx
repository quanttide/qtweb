import { FunctionComponent } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/CSS/CommonSlider.css"
// 定义props类型，其中components是React函数组件的数组
interface CommonSliderProps {
    components: FunctionComponent<any>[];
    title: string;
    link: string;
}

/**
 * 通用的轮播组件，轮播对象是传入的组件
 * @param components - 需要轮播的组件
 * @param title - 整个CommonSlider的标题
 * @param link - 详细按钮跳转链接
 */
export default function CommonSlider({ components, title, link }: CommonSliderProps) {
    // 轮播设置
    const settings = {
        dots: true, // 显示点导航
        dotsClass: 'common-dots', // 自定义指示器的样式
        infinite: true, // 无限循环
        speed: 500, // 切换速度
        slidesToShow: 1, // 每次显示一个子组件
        slidesToScroll: 1 // 每次滑动一个子组件
    };

    return (
        <div className='outer-container'>
            <div id='title-line'>
                <h1 className='main-title'>{title}</h1>
                <a href={link} className='develop-more'>
                    详细
                </a>
            </div>
            <Slider className='common-slider' {...settings}>
                {components.map((Component, index) => (
                    <div key={index} className='one-component'>
                        <Component />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


