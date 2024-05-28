import { Helmet } from "react-helmet";
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import ContentsWithList from "./components/ContentsWithList";
import HeaderSlider from "./components/HeaderImage";

import './components/assets/CSS/Page_global.css';

const introducetext = ['量潮科技争做新时代数据分析领导者','欢迎您的到来'];

const list = ['量潮科技1', '量潮科技2', '量潮科技3', '量潮科技4'];

const sections = [
    {
        title: '量潮科技1',
        paragraph: [
            '“量”寓意“定量”',
            '“潮”寓意时代的潮流',
            '我们取名“量潮科技”，是因为',
            '我们致力于成为定量分析时代潮流的引领者',
        ],
        imageUrl: ''
    },
    {
        title: '量潮科技2',
        paragraph: [
            '“量”寓意“定量”',
            '“潮”寓意时代的潮流',
            '我们取名“量潮科技”，是因为',
            '我们致力于成为定量分析时代潮流的引领者',
        ],
        imageUrl: ''
    },
    {
        title: '量潮科技3',
        paragraph: [
            '“量”寓意“定量”',
            '“潮”寓意时代的潮流',
            '我们取名“量潮科技”，是因为',
            '我们致力于成为定量分析时代潮流的引领者',
        ],
        imageUrl: ''
    },
    {
        title: '量潮科技4',
        paragraph: [
            '“量”寓意“定量”',
            '“潮”寓意时代的潮流',
            '我们取名“量潮科技”，是因为',
            '我们致力于成为定量分析时代潮流的引领者',
        ],
        imageUrl: ''
    }
];


function BusinessSystem() {
  /* 页面参考 https://www.nasa.gov/nasa-missions/ 
            https://www.ibm.com/cn-zh/consulting/artificial-intelligence */
  return (
    <div>
      {/* 业务体系页面内容 */}

      <Helmet><title>业务体系 - QuantTide 量潮科技</title></Helmet>
      
      <Navigation />

      <HeaderSlider title="量潮业务" imageUrl="./assets/images/about_background.jpg" introduces={introducetext}/>

      <ContentsWithList list={list} sections={sections} />

      <Footer />
    </div>
  );
}

export default BusinessSystem;
