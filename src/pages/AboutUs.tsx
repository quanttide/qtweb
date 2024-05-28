import Navigation from './components/Navigation';
import HeaderSlider from './components/HeaderImage';
import Footer from "./components/Footer";
import HeaderSelect from './components/HeaderSelect';
import TextWithImage from './components/TextWithImage';
import WhiteBackground from './components/WhiteBackground';

import { Helmet } from "react-helmet";

import './components/assets/CSS/Page_global.css';

const introducetext = ["量潮科技致力于探索数据处理技术前沿","\"致力于成为定量分析时代潮流的引领者\"是我们的品牌口号"];

const data = [
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技1',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
  },
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技2',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
    },
  {
      imageUrl: './assets/images/about_background.jpg',
      title: '量潮科技3',
      subtitles: ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'],
    },
];

const introduces = [
  '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
  '量潮科技致力于探索数据处理技术前沿',
]

const contents = [
  {
    subtitle: '简介',
    content: <Introduction />
  },
  {
    subtitle: '使命',
    content: <TextWithImage maintitle='' subtitle='量潮使命' introduce='量潮科技致力于探索数据处理技术前沿' image_url='./assets/images/about_background.jpg' link='' imagePosition='right' bottomBar={false}/>
  },
  {
    subtitle: '愿景',
    content: <WhiteBackground mainTitle='' dataTextUnderImage={false} link='' pattern='monospaced' data={data} introduces={introduces} />
  },

];

function Introduction() {
  return (
    <div>
      <TextWithImage maintitle='' subtitle='量潮简介1' introduce='量潮科技致力于探索数据处理技术前沿' image_url='./assets/images/about_background.jpg' link='' imagePosition='left' bottomBar={true}/>

      <TextWithImage maintitle='' subtitle='量潮简介2' introduce='量潮科技致力于探索数据处理技术前沿' image_url='./assets/images/about_background.jpg' link='' imagePosition='right' bottomBar={false}/>
    </div>
  );
}

export default function AboutUs() {
  /* 页面参考 https://www.nasa.gov/about/ */
  return (
    <div>
      <Helmet><title>关于我们 - QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title='关于量潮' imageUrl='./assets/images/about_background.jpg' introduces={introducetext}/>

      {/* 关于我们页面内容 */}
      {/* 放发展历程和企业文化（使命和愿景）*/}

      <HeaderSelect mainTitle="" contents={contents} />

      <Footer />
    </div>
  );
}
