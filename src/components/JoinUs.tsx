import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from "./Footer";

function News() {
  return (
    <div>
      <Helmet>
        <title>加入我们 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 加入我们 */}
      <h1>加入我们</h1>
      <p>这里是加入我们页面的内容...</p>
      <Footer />
    </div>
  );
}

export default News;
