import './assets/CSS/TextWithImage.css'; // Make sure to create this CSS file

interface Props {
    maintitle: string;
    subtitle: string;
    introduce: string;
    image_url: string;
    link: string;
    imagePosition: 'left' | 'right';
    bottomBar: boolean;
}

export default function TextWithImage({ maintitle, subtitle, introduce, image_url, link, imagePosition, bottomBar}: Props) {
    /* 
    一侧为文字，一侧为图片的组件
    */
    return (
        <div className='outer-container'>
            <div className={`text-with-image-container ${bottomBar ? 'with-bottom' : 'none'}`}>
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
            <div className={`row-container ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
                {image_url && 
                    <div className="text-image-block">
                        <img src={require(`${image_url}`)} alt="" />
                    </div>
                }
                <div className="content">
                    <h1 className='sub-title'>{subtitle}</h1>
                    <p>{introduce}</p>
                </div>
            </div>
            </div>

        </div>
    );
}
