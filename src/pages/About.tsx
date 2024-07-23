import { Helmet } from "react-helmet";

import './components/assets/CSS/Page_global.css';

import Footer from './components/Footer';
import FullPictureBackground from './components/FullPictureBackground';
import WhiteBackground from './components/WhiteBackground';
import Navigation from './components/Navigation';
import TextWithImage from "./components/TextWithImage";
import HeaderSlider from "./components/HeaderImage";

// 数据区
const data = [
  {
    imageUrl: './assets/images/data_process_landscape.jpg',
    title: '数据采集与处理',
    subtitles: ['我们提供全面的科研服务','专注于高质量数据的采集与处理','确保您的研究项目能够获得准确、','可靠的数据支持。'],
  },
  {
    imageUrl: './assets/images/code_vertical.jpg',
    title: '本地/网络应用开发',
    subtitles: ['根据客户的具体需求','提供定制化的应用开发服务','从设计到实现，每一步都贴近用户的实际使用场景。'],
  },
  {
    imageUrl: './assets/images/pexels-googledeepmind-17483870.jpg',
    title: '大模型智能体应用',
    subtitles: ['利用最新的人工智能技术','打造了能够处理复杂任务的大型智能体','提供智能化解决方案。'],
  },
];

const text_on_image = [
  {
    imageUrl: './assets/images/cooperation_landscape.jpg',
    title: '众多成功案例见证了我们的专业与承诺：',
    subtitles: ['自媒体网站动态分析工具','地图网站路径抓取系统','网页爬取解析工具','. . . . . .'],
  },
  {
    imageUrl: './assets/images/pexels-pixabay-267350.jpg',
    title: '自媒体网站动态分析工具',
    subtitles: ['精准跟踪一千余名关键意见领袖，采集一百余万条动态，', '通过从数据采集到预处理，再到人工标记总计20余项子步骤的精细加工，','实现了数据的深度挖掘'],
  },
  {
    imageUrl: './assets/images/map_landscape.jpg',
    title: '地图网站路径抓取系统',
    subtitles: ['收集大量路径规划及预估时间数据', '为城市研究提供了丰富实用的信息资源'],
  },
  {
    imageUrl: './assets/images/webpage_landscape.jpg',
    title: '网页爬取解析工具',
    subtitles: ['我们也曾为区块链研究者高效爬取并智能解析了数千条官方公告，', '利用大模型自动提取关键信息','大幅缩短信息收集时间。'],
  },
]

const introducestext = ['“量”寓意“定量”', '“潮”寓意时代的潮流', '我们取名“量潮科技”，是因为', '我们致力于成为定量分析时代潮流的引领者'];

const introduceCEO = "张果先生是厦门大学王亚南经济研究院14级经济学国际化试点班本科生。";

const introduces = [
  "",
]

// 代码区
export default function About() {

  return (
    <div>
      <Helmet><title>QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title="量潮科技" imageUrl="./assets/images/pexels-zch-2791918-20376383.jpg" imageHeight="full" introduces={introducestext} />

      <WhiteBackground pattern='highlight_header' dataTextUnderImage={true} mainTitle='科研服务业务' link='\business' data={data} introduces={introduces} />

      <FullPictureBackground link='\business' data={text_on_image} singlePicture={false} />

      <TextWithImage maintitle="创始人" subtitle="张果" introduce={introduceCEO} image_url="./assets/images/iguo.png" link="https://zhangguo.me/" imagePosition="right" bottomBar={false} />

      <Footer />
    </div>
  );
}


