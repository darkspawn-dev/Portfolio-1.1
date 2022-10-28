
import { useState } from 'react'
import Project2 from '../../images/Project2.jpg'
import Project3 from '../../images/Project3.jpg'
import Project4 from '../../images/error.jpg'
import Project6 from '../../images/error.jpg'
import { Link } from 'react-router-dom'
import './index.scss'



const Portfolio = () => {
 
  let data = [
    {
      id:1,
      imgSrc: Project2,
      description: "Project réservia",
      url: 'https://github.com/darkspawn-dev/JeremyDelahaye_2_23112020'
    },
    {
      id:2,
      imgSrc: Project3,
      description: "Project ohmyfood",
      url: 'https://github.com/darkspawn-dev/JeremyDelahaye_3_06042021'
    },
    {
      id:3,
      imgSrc: Project4,
      description: "Project GameOn",
      url: 'https://github.com/darkspawn-dev/GameOn-website-FR'
    },
    {
      id:4,
      imgSrc: Project6,
      description: "Project Fisheye",
      url: 'https://darkspawn-dev.github.io/JeremyDelahaye_6_06092021/'
    },
   
  ]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');

const getImg = (imgSrc) => {
  setTempImgSrc(imgSrc);
  setModel=(true);
 } 
  return (
    <>
       
    <div className={model? "model open" : "model"}></div>
    <div className="gallery">
      {data.map((item, index) => {
        return (
          <div className="pics" key={index}  onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{width: 'auto'}} />
            <Link to={item.url} className="gallery-link">
            <p className="portfolio-p">{item.description}</p>
            </Link>
          </div>
        )
      })}
   
    </div>

    </>
   
  )
}

export default Portfolio