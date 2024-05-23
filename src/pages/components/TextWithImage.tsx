import './assets/CSS/TextWithImage.css'; // Make sure to create this CSS file

interface Props {
    maintitle: string;
    subtitle: string;
    introduce: string;
    image_url:string;
    link:string
}

export default function TextWithImage({maintitle,subtitle,introduce,image_url,link}:Props) {
    /* 
    左侧为文字，右侧为图片的组件
    */
    return (
        <div className='outer-container'>
            <div id='title-line'>
            {/* maintitle为空时不显示 */}
            {maintitle && 
            
                <>
                <h1 className='main-title'>{maintitle}</h1>
                    <a href={link} className='white-more' >
                        详细
                    </a>
                </> 
            }
                
            </div>
            <div className='row-container'>
                <div className="content">
                    <h1 className='sub-title'>{subtitle}</h1>
                    <p>{introduce}</p>
                </div>
                <div className="text-image-block">
                    <img src={require(`${image_url}`)} alt="" />
                </div>
            </div>
        </div>
           
    );
}
