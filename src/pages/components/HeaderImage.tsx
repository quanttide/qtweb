import './assets/CSS/HeaderSlider.css'

interface Props {
    title: string;
    imageUrl: string;
    introduces: string[];
}

export default function HeaderSlider({title,imageUrl,introduces}:Props) {
  /*
    页面头图组件
  */
    return (
      <div className='header-slider'>
        <img src={require(`${imageUrl}`)} alt="" />
        <div className="caption">
          <h1>{title}</h1>
          {introduces.map((introduce) => (
            <p>{introduce}</p>
          ))}
        </div>
      </div>
    );
  }
  
  