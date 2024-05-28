import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import HeaderSlider from './components/HeaderImage';
import ContentSections from './components/ContentSections';

import './components/assets/CSS/Page_global.css';

const introducetext = ['了解最新事项','通过博客分享最新进展']

interface SectionDetailProps {
  content: string;
}

const SectionDetail: React.FC<SectionDetailProps> = ({ content }) => {
  return (
    <div className="section-detail">
      <p>{content}</p>
    </div>
  );
};


const sections = [
  {
    title: '成立',
    description: '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
    imgSrc: './assets/images/about_background.jpg', 
    link: 'https://www.baidu.com',
    DetailComponent: () => <SectionDetail content="这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。这是的详细内容。" />
  },
  {
    title: '发展',
    description: '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
    imgSrc: './assets/images/about_background.jpg', 
    link: 'https://www.baidu.com',
    DetailComponent: () => <SectionDetail content="这是的详细内容。" />
  },
  {
    title: '发展',
    description: '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
    imgSrc: './assets/images/about_background.jpg', 
    link: 'https://www.baidu.com',
    DetailComponent: () => <SectionDetail content="这是的详细内容。" />
  },
  {
    title: '迄今',
    description: '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
    imgSrc: './assets/images/about_background.jpg', 
    link: 'https://www.baidu.com',
    DetailComponent: () => <SectionDetail content="这是的详细内容。" />
  },
  {
    title: '未来',
    description: '量潮科技致力于探索数据处理技术前沿，致力于成为定量分析时代潮流的引领者，是我们的品牌口号',
    imgSrc: './assets/images/about_background.jpg', 
    link: 'https://www.baidu.com',
    DetailComponent: () => <SectionDetail content="这是的详细内容。" />
  }
];

function News() {
  /* 参考 https://www.nasa.gov/news/ */
  return (
    <div>
      <Helmet><title>公司博客 - QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title='博客' imageUrl='./assets/images/about_background.jpg' introduces={introducetext}/>
      {/* 公司博客 */}
      {/* 用来放一些文章 */}

      <ContentSections maintitle='博客新闻' sections={sections}/>
      
      <Footer />
    </div>
  );
}

export default News;
