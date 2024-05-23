import GithubLogo from './assets/images/github.svg';
import './assets/CSS/Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div className="container">

                <div className="contact-us">
                    <h3>联系我们</h3>
                    <p>官方邮箱：we@xmucpp.com</p>
                    <p>数据服务：services@xmucpp.com</p>
                </div>

                <div className="attention-us">
                    <h3>关注我们</h3>
                    <img src={require('./assets/images/WeChat qr code.jpg')} className="qr" alt="WeChat QR Code" width={100} height={100}/>
                </div>

                <div className="more-links">
                    <h3>更多链接</h3>
                    <a href="https://github.com/quanttide">
                        <img src={GithubLogo} alt="Github" width={50} height={50}/>
                        <p>Github</p>
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2024.QuantTide, All rights reserved.</p>
            </div>

        </div>
    );
}
  
export default Footer;