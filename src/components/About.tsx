import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from './Footer';
import './assets/CSS/About.css'
import FullPictureBackground from './FullPictureBackground';
import WhiteBackground from './WhiteBackground';

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


export default function About() {
  return (
    <div>
      <Helmet><title>QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider />

      <WhiteBackground mainTitle='业务' link='\business' data={data} />

      <FullPictureBackground link='\business' data={data} />

      <WhiteBackground mainTitle='业务' link='\business' data={data} />

      <FullPictureBackground link='\business' data={data} />

      <WhiteBackground mainTitle='业务' link='\business' data={data} />
      
      <Footer />
    </div>
  );
}

function HeaderSlider() {
  return (
    <div className='header-slider'>
      <img src={require('./assets/images/about_background.jpg')} alt="" />
      <div className="caption">
        <h1>量潮科技</h1>
        <p>“量”寓意“定量”</p>
        <p>“潮”寓意时代的潮流</p>
        <p>我们取名“量潮科技”，是因为</p>
        <p>我们致力于成为定量分析时代潮流的引领者</p>
      </div>
    </div>
  );
}
