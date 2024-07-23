import { Helmet } from "react-helmet";
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import ContentsWithList from "./components/ContentsWithList";
import HeaderSlider from "./components/HeaderImage";
import HeaderSelect from "./components/HeaderSelect";

import './components/assets/CSS/Page_global.css';

//数据区
const introducetext = ['量潮科技争做新时代数据分析领导者', '欢迎您的到来'];

const sections = [
    {
        title: '科研服务简介',
        paragraph: [
            '量潮科研服务专为高校、实验室及社科领域的科研人员和团队（包括但不限于经管、金融、市场营销）设计打造，我们的使命是让您从繁琐的数据处理和技术实现中解放出来，全心投入到核心的科研创意之中，共同推动知识的边界。',
            '自成立以来，我们始终怀抱“科技赋能学术，创新引领未来”的愿景，提供一站式科研辅助服务，涵盖数据处理、本地及网络应用定制开发、以及前沿的大模型智能体应用集成，每一项服务均可根据您的特定需求灵活定制，确保精准支持您的科研项目。',
        ],
        imageUrl: ''
    },
    {
        title: '团队',
        paragraph: [
            '我们的团队成员不仅拥有深厚的学术背景，并且自2016年起深耕于科研技术服务领域，积累了多年的丰富项目经验。我们在数据分析、软件开发及人工智能领域造诣颇深，提供从数据采集、预处理到本地/网络应用开发、大模型智能体应用的一站式服务，这些经历不仅验证了我们的技术实力，更为我们赢得了学术界的广泛认可。',
            '凭借对科研流程的深刻理解及卓越的编程技能，我们能够更贴近您的研究需求，提供最契合的解决方案。我们的服务足迹遍布全球，无论是国内顶尖学府，还是海外知名科研机构，量潮科研服务都能为您提供无国界的高质量服务。标准化的服务流程、透明规范的项目管理，确保每一次合作都高效顺畅，让您可以全程无忧地参与到每一个环节，掌握项目动态。',
        ],
        imageUrl: ''
    },
    {
        title: '客户案例',
        paragraph: [
            '我们打造了某自媒体网站动态分析工具，精准跟踪一千余名关键意见领袖，采集一百余万条动态，通过从数据采集到预处理，再到人工标记总计20余项子步骤的精细加工，实现了数据的深度挖掘；我们还制作了某地图网站路径抓取系统，收集大量路径规划及预估时间数据，为城市研究提供了丰富实用的信息资源；我们也曾为区块链研究者高效爬取并智能解析了数千条官方公告，利用大模型自动提取关键信息，大幅缩短信息收集时间。',
            '在某爬虫项目中，客户最初提出了基于其专业视角的、较为粗略且非技术性的需求概要。我们首先通过深入沟通，凭借团队深厚的科研背景与客户达成思维共鸣，确保精准理解其意图。接着，依据我们在数据处理方面的专业知识，将客户的需求转化为具体、清晰且技术可行的方案描述。这一过程中，我们详尽解释了技术实施的路径与预期成果，与客户一起对需求进行了调整与完善，建立了紧密的反馈循环。通过反复讨论与方案修订，双方不断磨合，直至满足客户科研需要，同时在技术上保证可行和高效。',
        ],
        imageUrl: ''
    },
    {
        title: '联系我们',
        paragraph: [
            '我们珍视每一次合作的机会，期待与您共创科研新高度。如果您正寻找一个能够深刻理解并有力支持您科研追求的伙伴，请通过 [页面底部的联系方式] 联系我们，我们的专业顾问团队将第一时间响应，为您量身打造最合适、高效的科研支持方案。',
        ],
        imageUrl: ''
    },
];

const list = ['科研服务简介', '团队', '客户案例', '联系我们'];

const contents = [
    {
        subtitle: '科研服务业务',
        content: <ContentsWithList list={list} sections={sections} />
    }
]

//代码区
function BusinessSystem() {
    /* 页面参考 https://www.nasa.gov/nasa-missions/ 
            https://www.ibm.com/cn-zh/consulting/artificial-intelligence */
    return (
        <div>
            {/* 业务体系页面内容 */}

            <Helmet><title>业务体系 - QuantTide 量潮科技</title></Helmet>

            <Navigation />

            <HeaderSlider title="量潮业务" imageUrl="./assets/images/frequency-wave-7776034.jpg" imageHeight="half" introduces={introducetext} />

            <HeaderSelect mainTitle="" contents={contents} />

            <Footer />
        </div>
    );
}

export default BusinessSystem;
