import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './assets/CSS/Navigation.css';

/**
 * 上方导航栏
 * @returns 
 */
export default function Navigation() {
  const location = useLocation();

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

  const navLinks = [
    { path: '/', label: '公司简介' },
    { path: '/business', label: '业务体系' },
    { path: '/news', label: '公司博客' },
    { path: '/aboutus', label: '关于我们' },
    { path: '/joinus', label: '加入我们' },
  ];

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
        <span style={{ marginLeft: '10px' }}>QuantTide</span>
      </div>
      {windowWidth > 768 && (
        <ul className='list'>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {menuOpen && windowWidth <= 768 && (
        <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <button className='menu' type='button' onClick={() => setMenuOpen(!menuOpen)}>
            关闭菜单
          </button>
          <ul className='menu-list'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
