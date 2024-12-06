import React from 'react' 
import {single} from '../pages/Single'
import {Link} from 'react-router-dom'
import img1 from '../img/pplay-1.jpg'
import img2 from '../img/image-2.jpeg'
import img3 from '../img/image-3.jpeg'
import img4 from '../img/images-4.jpeg'
import '../style.scss'


const Home = () => {

  const posts=[
    {id:1,
      title:"this is the first post",
      desc:"this is the first post discription",
      img:img1,
    },
    {id:2,
      title:"this is the second post",
      desc:"this is the second post discription",
      img:img2
    },
    {id:3,
      title:"this is the third post",
      desc:"this is the third post discription",
      img:img3
    },
    {id:4,
      title:"this is the fourth post",
      desc:"this is the fourth post discription",
      img:img4
    },

  ]
  return (
    <div>
      {posts.map((post)=>(
        <div className='post' key={post.id}>
          <div className='img'>
            <img src={post.img} alt='post-1'/>
          </div>
          <div className='content'>
            <Link className='link' to={"/single"}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home