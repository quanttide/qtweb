import { useEffect } from 'react';

const ScreenDimensions = () => {
  useEffect(() => {
    // 获取并打印当前屏幕宽度和高度
    const logScreenDimensions = () => {
      console.log(`Screen Width: ${window.innerWidth}px`);
      console.log(`Screen Height: ${window.innerHeight}px`);
    };

    // 初始打印
    logScreenDimensions();

    // 添加监听器以响应窗口大小变化
    window.addEventListener('resize', logScreenDimensions);

    // 清理函数以移除监听器
    return () => {
      window.removeEventListener('resize', logScreenDimensions);
    };
  }, []);

  return null; // 这个组件不需要渲染任何内容
};

export default ScreenDimensions;
