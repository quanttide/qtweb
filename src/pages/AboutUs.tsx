import Navigation from './components/Navigation';
import HeaderSlider from './components/HeaderImage';
import Footer from "./components/Footer";
import HeaderSelect from './components/HeaderSelect';
import TextWithImage from './components/TextWithImage';
//import WhiteBackground from './components/WhiteBackground';

import { Helmet } from "react-helmet";

import './components/assets/CSS/Page_global.css';

//数据区
const introducetext = ["量潮科技致力于探索数据处理技术前沿", "\"致力于成为定量分析时代潮流的引领者\"是我们的品牌口号"];
/*
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
*/
const contents = [
  {
    subtitle: '简介',
    content: <Introduction />
  },
  {
    subtitle: '使命',
    content: <Mission />
  },
  /*
  {
    subtitle: '愿景',
    content: <WhiteBackground mainTitle='' dataTextUnderImage={false} link='' pattern='monospaced' data={data} introduces={introduces} />
  },
  */
];

function Introduction() {
  return (
    <div>
      <TextWithImage maintitle='' subtitle='量潮科技' introduce='是一家致力于为客户提供基于云原生标准的数据工程、数据分析和算法工程解决方案的数据科技公司。在Serverless、云原生、DevOps应用于软件工程、数据工程、算法工程、数据分析等领域拥有业界前沿的积累。主营业务是为科研团队和中小企业提供数据分析、数据处理和智能体定制软件服务；为个人提供高质量的AIGC在线课程，让AI技术助力各领域的生产。' image_url='./assets/images/meeting_landscape.jpg' link='' imagePosition='left' bottomBar={true} />

      <TextWithImage maintitle='' subtitle='“引领定量分析时代潮流”' introduce='是我们的品牌口号。我们专注于通过定量分析方法理解社会运行规律，创造打动人心的产品和服务，成为这个行业的探路者和领导者，推动整个行业的发展。' image_url='./assets/images/pexels-divinetechygirl-1181346.jpg' link='' imagePosition='right' bottomBar={false} />
    </div>
  );
}

function Mission() {
  return (
    <div>
      <TextWithImage maintitle='' subtitle='量潮使命' introduce='我们的使命就是我们的Slogan —— 引领定量分析时代潮流。这句话有两个关键点，“定量分析”和“引领时代潮流”。我们将从这两个方面阐述我们的使命。' image_url='./assets/images/pexels-tara-winstead-7666429.jpg' link='' imagePosition='left' bottomBar={true} />

      <TextWithImage maintitle='' subtitle='定量分析' introduce="定量分析是我们专精的领域。社会科学的 定量分析 是相对于定性分析的一类研究方法，强调使用数理模型刻画真实世界、使用真实数据和实证方法验证模型。我们理解的定量分析特指社会科学和数据科学的有机结合，来源我们的前身经济学课题组China 's Prices Project的领域和信仰。我们希望可以用定量分析方法阐述我们对于社会运行规律的理解，描绘我们眼中社会发展的可能性，基于我们的认知创造打动人心的产品和服务（create impressive products and services）尽我们所能让这个世界变的更美好一些。" image_url='./assets/images/meeting_record_landscape.jpg' link='' imagePosition='right' bottomBar={true} />
    
      <TextWithImage maintitle='' subtitle='' introduce="特别说明，我们专精的领域只是我们解决问题的主要方法，作为商业公司的我们关注自己的产品和服务是否为用户提供价值；我们从内心接纳来自各个领域的方法，围绕我们的主要领域积极探索新领域；从长远的未来看，我们对自己要解决的现实问题不做太多限制，我们希望我们的未来可以永远充满可能性；我们专注于一个领域而不是一个问题，是因为我们拥有解决类似的一类问题或者相关的一系列问题的野心。" image_url='./assets/images/data_analysis_landscape.jpg' link='' imagePosition='left' bottomBar={true} />
    
      <TextWithImage maintitle='' subtitle='引领时代潮流' introduce="我们观察到定量分析方法在学术界和产业界的广泛普及和快速发展，但同时也注意到它还不足够普惠。我们认为最前沿的定量分析方法可以快速普惠大众的生活是这个时代难得的红利，也深刻体验到应用定量分析方法过程中的艰难。我们愿意做时代的拓荒者，为学术界和产业界探索便捷有效地应用定量分析方法的道路，带领和帮助他们中的一部分完成变革。" image_url='./assets/images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg' link='' imagePosition='right' bottomBar={true} />
    
      <TextWithImage maintitle='' subtitle='' introduce="我们希望可以成为行业的探路者和领导者，助力整个行业的发展，而不仅仅是自身的利益。从福利经济学的角度阐述，我们希望可以最大化社会福利（social welfare），而不仅仅是企业自身的利润（profit）。如果我们最终不是成功者，但我们的努力让整个行业得以进步，我们也 欣然接受 并认为完成了我们的使命。" image_url='./assets/images/pexels-tatianasyrikova-3975586.jpg' link='' imagePosition='left' bottomBar={false} />
    </div>
  );
}

//代码区

export default function AboutUs() {
  /* 页面参考 https://www.nasa.gov/about/ */
  return (
    <div>
      <Helmet><title>关于我们 - QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title='关于量潮' imageUrl='./assets/images/frequency-wave-7776034.jpg' imageHeight='half' introduces={introducetext} />

      {/* 关于我们页面内容 */}
      {/* 放发展历程和企业文化（使命和愿景）*/}

      <HeaderSelect mainTitle="" contents={contents} />

      <Footer />
    </div>
  );
}
