import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
import './components/assets/CSS/Page_global.css';
import Footer from "./components/Footer";

function News() {
  /* 参考 https://www.nasa.gov/news/ */
  return (
    <div>
      <Helmet>
        <title>公司新闻 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 公司新闻 */}
      <h1>公司新闻</h1>
      <p>这里是公司新闻页面的内容...</p>
      <Footer />
    </div>
  );
}

export default News;
