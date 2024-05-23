import Navigation from './components/Navigation';
import HeaderSlider from './components/HeaderImage';
import Footer from "./components/Footer";
import HeaderSelect from './components/HeaderSelect';

import { Helmet } from "react-helmet";

import './components/assets/CSS/Page_global.css';

const introducetext = ["量潮科技致力于探索数据处理技术前沿","\"致力于成为定量分析时代潮流的引领者\"是我们的品牌口号"];

const ComponentA: React.FC = () => {
  return <div>This is Component A</div>;
};

const ComponentB: React.FC = () => {
  return <div>This is Component B</div>;
};

const contents = [
  {
      subtitle: '使命',
      content: <ComponentA />
  },
  {
      subtitle: '愿景',
      content: <ComponentB />
  },
  {
      subtitle: '发展历程',
      content: <ComponentA/>
  }
];

function AboutUs() {
  /* 页面参考 https://www.nasa.gov/about/ */
  return (
    <div>
      <Helmet>
        <title>关于我们 - QuantTide 量潮科技</title>
      </Helmet>
      <Navigation />

      <HeaderSlider title='关于量潮' imageUrl='./assets/images/about_background.jpg' introduces={introducetext}/>

      

      {/* 关于我们页面内容 */}
      {/* 放发展历程和企业文化（使命和愿景）*/}

      <HeaderSelect mainTitle="" contents={contents} />

      <h1>关于我们</h1>
      <p>这里是关于我们页面的内容...</p>
      <Footer />
    </div>
  );
}

export default AboutUs;

