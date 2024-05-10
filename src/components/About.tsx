import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from './Footer';
import './assets/CSS/About.css'

export default function About() {
  return (
    <div>
      <Helmet><title>QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider />

      <div>
        <h1>公司简介</h1>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        <p>一段公司简介</p>
        
      </div>

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
