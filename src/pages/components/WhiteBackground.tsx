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

export default function WhiteBackground({ pattern, dataTextUnderImage, mainTitle, link, data, introduces }: Props) {
  return (
    <div className='outer-container'>
      <div id='all-items'>
        {/* mainTitle为空就不显示标题栏 */}
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
                <div style={{ marginBottom: '10px' }}>
                  <img src={require(`${item.imageUrl}`)} alt={item.title} />
                </div>
                {dataTextUnderImage && (
                  <div className='introduce-white-under'>
                    <h2>{item.title}</h2>
                    {item.subtitles.map((subtitle, subIndex) => (
                      <p key={subIndex}>{subtitle}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {introduces && 
          <div className='whitebackground-introduce' style={{marginTop:'5%'}}>
            {introduces.map((introduce) => (
              <p>{introduce}</p>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
