import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from "./Footer";

function News() {
  return (
    <div>
      <Helmet>
        <title>管理团队 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 管理团队 */}
      <h1>管理团队</h1>
      <p>这里是管理团队页面的内容...</p>
      <Footer />
    </div>
  );
}

export default News;