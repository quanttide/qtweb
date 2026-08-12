import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
import HeaderSlider from './components/HeaderImage';
import Footer from "./components/Footer";
import ContentsWithList from './components/ContentsWithList';
import HeaderSelect from './components/HeaderSelect';

import './components/assets/CSS/Page_global.css';

//数据区
const introducetext = ['新血液新活力', '量潮期待您的加入'];

const list = ['招聘岗位'];

const sections = [
  {
    title: '招聘岗位',
    paragraph: [
      '量潮科技面向高校招募实习人才，岗位覆盖技术类、产品类、市场类和职能类。',
      '最新的岗位列表、报名方式、求职信与简历指南，请访问招聘官网：',
      '![进入量潮招聘官网](https://recurit.quanttide.com)',
    ],
    imageUrl: ''
  },
  {
    title: '',
    paragraph: [
      '量潮科技期待您的加入，让我们共同迎接新的挑战，创造辉煌的未来！',
    ],
    imageUrl: ''
  },
];

const contents = [
  {
    subtitle: '实习招聘',
    content: <ContentsWithList list={list} sections={sections} />
  }
];

//代码区
export default function News() {
  /* 招聘信息已全部迁至招聘官网（qtrecurit site），此处只保留跳转入口 */
  return (
    <div>
      {/* 加入我们 */}
      <Helmet><title>加入我们 - QuantTide 量潮科技</title></Helmet>

      <Navigation />

      <HeaderSlider title='加入我们' imageUrl='./assets/images/frequency-wave-7776034_low_quanity.jpg' imageHeight='half' introduces={introducetext} />

      <HeaderSelect mainTitle='' contents={contents} />

      <Footer />
    </div>
  );
}
