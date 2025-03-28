import './assets/CSS/WhiteBackground.css';

interface Props {
  pattern: 'monospaced' | 'highlight_header';
  dataTextUnderImage: Boolean;
  mainTitle: string;
  link: string;
  data: {
    imageUrl: string;
    title: string;
    subtitles: string[];
  }[];
  introduces: string[];
}

/**
 * 一个横向的，多图片组件
 * @param pattern - 布局，monospaced 图片大小相等，间距相等 | highlight_header 第一个图片大于其它图片
 * @param dataTextUnderImage - 决定文字和图片相对位置，文字在图片下方 或 在图片上层
 * @param mainTitle - 这个组件的大标题
 * @param link - 详细按钮的跳转链接
 * @param data - 每张图片的相关信息
 * @param data.imageUrl - 图片路径
 * @param data.title - 图片文字小标题
 * @param data.subtitles - 具体内容，列表
 * @param introduces - 对于整个组件的描述文字，在组件最下方，列表
 * @returns 
 */
export default function WhiteBackground({ pattern, dataTextUnderImage, mainTitle, link, data, introduces }: Props) {
  return (
    <div className='outer-container'>
      <div id='all-items'>
        {mainTitle &&
          <div id='title-line'>
            <h1 className='main-title'>{mainTitle}</h1>
            <a href={link} className='white-more'>
              详细
            </a>
          </div>
        }
        <div className="items">
          {data.map((item, index) => {
            const itemClass = (index === 0 && pattern === 'highlight_header') ? 'item item-first' : 'item other-items';
            return (
              <div key={index} className={itemClass}>
                {!dataTextUnderImage && (
                  <div className='introduce-white'>
                    <h2>{item.title}</h2>
                    {item.subtitles.map((subtitle, subIndex) => (
                      <p key={subIndex}>{subtitle}</p>
                    ))}
                  </div>
                )}
                <div>
                  <img src={require(`${item.imageUrl}`)} alt={item.title} />
                  {dataTextUnderImage && (
                  <div className='introduce-white-under'>
                    <h2>{item.title}</h2>
                    {item.subtitles.map((subtitle, subIndex) => (
                      <p key={subIndex}>{subtitle}</p>
                    ))}
                  </div>
                  )}
                </div>
              </div>
            );
          })}  
        </div>
        {introduces &&
          <div className='whitebackground-introduce'>
            {introduces.map((introduce) => (
              <p>{introduce}</p>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
