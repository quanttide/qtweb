import { Helmet } from "react-helmet";

import './components/assets/CSS/Page_global.css';

import Footer from './components/Footer';
import FullPictureBackground from './components/FullPictureBackground';
import WhiteBackground from './components/WhiteBackground';
import Navigation from './components/Navigation';
import TextWithImage from "./components/TextWithImage";
import HeaderSlider from "./components/HeaderImage";

const data = [
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技1',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
  },
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技2',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
    },
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技3',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
    },
];

const introducestext = ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'];

const introduceCEO = "张果先生是厦门大学王亚南经济研究院14级经济学国际化试点班本科生，威斯康辛大学麦迪逊分校18级经济学硕士（U.S. News专排第12名）。";

export default function About() {


  return (
    <div>
      <Helmet><title>QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title="量潮科技" imageUrl="./assets/images/about_background.jpg" introduces={introducestext}/>

      <WhiteBackground pattern='highlight_header' mainTitle='业务' link='\business' data={data} />

      <FullPictureBackground link='\business' data={data} singlePicture = {false}/>

      <TextWithImage maintitle="创始人" subtitle="张果" introduce={introduceCEO} image_url="./assets/images/iguo.png" link="https://zhangguo.me/"/>

      <Footer />
    </div>
  );
}


