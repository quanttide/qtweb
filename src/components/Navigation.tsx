import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './assets/CSS/Navigation.css';

export default function Navigation() {

  //下滑菜单栏消失，上滑出现
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  //手机版侧边导航栏
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setShowNav(scrollPos >= currentScrollPos);
    setScrollPos(currentScrollPos);
  }, [scrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  //手机版导航栏
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <nav style={{ top: showNav ? '0' : '-70px' }}>

      {windowWidth <= 768 && (
        <button className='menu' type='button' onClick={() => setMenuOpen(!menuOpen)}>
          点击菜单
        </button>
      )}
      <div className='icon'>
        <a href="/">
          <img src={require('./assets/images/logo200.png')} alt='Logo' width={50} height={50} />
        </a>
        <span style={{marginLeft:'10px'}}>QuantTide</span>
      </div>
      {windowWidth > 768 && (
        <ul className='list'>
          <li><Link to="/">公司简介</Link></li>
          <li><Link to="/business">业务体系</Link></li>
          <li><Link to="/development">成长历程</Link></li>
          <li><Link to="/culture">企业文化</Link></li>
          <li><Link to="/news">公司新闻</Link></li>
          <li><Link to="/joinus">加入我们</Link></li>
          <li><Link to="/team">管理团队</Link></li>
        </ul>
      )}
      {menuOpen && windowWidth <= 768 && (
          <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
            <button className='menu' type='button' onClick={() => setMenuOpen(!menuOpen)}>
              关闭菜单
            </button>
            <ul className='menu-list'>
             <li><Link to="/">公司简介</Link></li>
              <li><Link to="/business">业务体系</Link></li>
              <li><Link to="/development">成长历程</Link></li>
              <li><Link to="/culture">企业文化</Link></li>
              <li><Link to="/news">公司新闻</Link></li>
              <li><Link to="/joinus">加入我们</Link></li>
              <li><Link to="/team">管理团队</Link></li>
            </ul>
          </div>
      )}
    </nav>
  );
}
