import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from "./Footer";

function News() {
  return (
    <div>
      <Helmet>
        <title>公司文化 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 公司文化 */}
      <h1>公司文化</h1>
      <p>这里是公司文化页面的内容...</p>
      <Footer />
    </div>
  );
}

export default News;
