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
/**
 * 一侧为文字，一侧为图片的组件
 * @param maintitle - 外部大标题，空时不显示
 * @param subtitle - 文字内容的小标题
 * @param introduce - 具体文字内容段
 * @param image_url - 图片路径
 * @param link - 详细按钮的跳转页面
 * @param imagePosition - 图片与文字布局，left 文字在右，图片在左 | right 文字在左，图片在右
 * @param bottomBar - 是否显示底部的横线，用于堆叠许多组件时进行分割
 */
export default function TextWithImage({ maintitle, subtitle, introduce, image_url, link, imagePosition, bottomBar }: Props) {

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
