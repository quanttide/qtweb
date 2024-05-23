import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
import './components/assets/CSS/Page_global.css';
import Footer from "./components/Footer";

function News() {
  /* 参考 https://careers.tencent.com/ */
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
