import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
import HeaderSlider from './components/HeaderImage';
import Footer from "./components/Footer";
import ContentsWithList from './components/ContentsWithList';
import HeaderSelect from './components/HeaderSelect';

import './components/assets/CSS/Page_global.css';

const introducetext = ['新血液新活力','量潮期待您的加入'];

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

const contents = [
  {
    subtitle: '实习招聘',
    content: <ContentsWithList list={list} sections={sections}/>
  }
];

export default function News() {
  /* 参考 https://careers.tencent.com/ */
  return (
    <div>
      {/* 加入我们 */}
      <Helmet><title>加入我们 - QuantTide 量潮科技</title></Helmet>
      
      <Navigation />

      <HeaderSlider title='加入我们' imageUrl='./assets/images/about_background.jpg' introduces={introducetext}/>

      <HeaderSelect mainTitle='' contents={contents}/>

      <Footer />
    </div>
  );
}
