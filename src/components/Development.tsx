import Navigation from './Navigation';
import { Helmet } from "react-helmet";
import './assets/CSS/Page_global.css';
import Footer from "./Footer";

function Development() {
  return (
    <div>
      <Helmet>
        <title>成长历程 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />
      {/* 成长历程页面内容 */}
      <h1>成长历程</h1>
      <p>这里是成长历程页面的内容...</p>
      <Footer />
    </div>
  );
}

export default Development;
