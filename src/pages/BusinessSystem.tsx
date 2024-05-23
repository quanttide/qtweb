import { Helmet } from "react-helmet";
import Navigation from './components/Navigation';
import './components/assets/CSS/Page_global.css';
import Footer from "./components/Footer";

function BusinessSystem() {
  /* 页面参考 https://www.nasa.gov/nasa-missions/ */
  return (
    <div>
      <Helmet>
        <title>业务体系 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 业务体系页面内容 */}
      <h1>业务体系</h1>
      <p>这里是业务体系页面的内容...</p>
      <Footer />
    </div>
  );
}

export default BusinessSystem;
