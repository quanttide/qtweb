import './assets/CSS/HeaderSlider.css'

interface Props {
  title: string;
  imageUrl: string;
  imageHeight: 'full' | 'half' | 'quarter';
  introduces: string[];
}
/**
 * 页面头图组件
 * @param title - 标题
 * @param imageUrl - 图片地址
 * @param imageHeight - 图片高度：整个屏幕 full | 半屏 half | 四分之一 quarter
 * @param introduce - 详细若干行介绍
 * @returns 
 */
export default function HeaderSlider({ title, imageUrl, imageHeight, introduces }: Props) {
  return (
    <div className={`header-slider ${imageHeight}`}>
      <img src={require(`${imageUrl}`)} alt="" />
      <div className="caption">
        <h1>{title}</h1>
        {introduces.map((introduce, index) => (
          <p key={index}>{introduce}</p>
        ))}
      </div>
    </div>
  );
}
