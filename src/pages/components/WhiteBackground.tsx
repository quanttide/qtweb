import './assets/CSS/WhiteBackground.css';

interface Props {
  pattern: 'monospaced' | 'highlight_header';
  mainTitle: string;
  link: string;
  data: {
    imageUrl: string;
    title: string;
    subtitles: string[];
  }[];
}

export default function WhiteBackground({pattern,mainTitle,link,data}:Props) {
  return (
    <div className='outer-container'>
      <div id = 'all-items'>
        <div id='title-line'>
          <h1 className='main-title' >{mainTitle}</h1> 
          <a href={link} className='white-more' >
            详细
          </a>
        </div>
        <div className="items">
          {data.map((item, index) => {
            const itemClass = (index === 0 && pattern === 'highlight_header') ? 'item item-first' : 'item other-items';

            return (
              <div key={index} className={itemClass}>
                <div style={{ marginBottom: '10px' }}>
                  <img src={require(`${item.imageUrl}`)} alt={item.title} />
                </div>
                <div className='introduce-white'>
                  <h2 >{item.title}</h2>
                  {item.subtitles.map((subtitle, subIndex) => (
                    <p key={subIndex} >{subtitle}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
