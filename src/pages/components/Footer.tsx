import GithubLogo from './assets/images/github.svg';
import './assets/CSS/Footer.css'
import ZhihuLog from './assets/images/zhihu.svg'

/**
 * 页脚组件
 * @returns 
 */
export default function Footer() {
    // 使用的原版页脚 https://github.com/quanttide/qtweb-flutter
    return (
        <div className="footer">

            <div className="container">

                <div className="contact-us">
                    <h3>联系我们</h3>
                    <p>官方邮箱：we@quanttide.com</p>
                    <p>科研服务：research@quanttide.com</p>
                </div>

                <div className="attention-us">
                    <h3>关注我们</h3>
                    <div className='attention-us-content'>
                        <div>
                            <img src={require('./assets/images/WeChatQR.png')} className="qr" alt="WeChat QR Code" width={100} height={100} />
                            <p>微信公众号</p>
                        </div>
                    </div>
                </div>

                <div className="more-links">
                    <h3>更多链接</h3>
                    <div className='more-links-content'>
                        <a href="https://github.com/quanttide" target='blank'>
                            <img src={GithubLogo} alt="Github" width={50} height={50} />
                            <p>Github</p>
                        </a>
                        <a href="https://www.zhihu.com/org/liang-chao-ke-ji" target='blank'>
                            <img src={ZhihuLog} alt="Zhuhu" width={50} height={50} />
                            <p>知乎机构号</p>
                        </a>
                        <a href="https://www.zhihu.com/people/zhang_guo" target='blank'>
                            <img src={require('./assets/images/Zhihui_iGuo.png')} alt="Zhihu_iGuo" width={50} height={50} style={{ borderRadius: '50px' }} />
                            <p>知乎：iGuo</p>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2024.QuantTide, All rights reserved.</p>
            </div>

        </div>
    );
}
