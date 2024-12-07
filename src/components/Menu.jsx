import React from 'react'
import img1 from '../img/pplay-1.jpg'
import img2 from '../img/image-2.jpeg'
import img3 from '../img/image-3.jpeg'
import img4 from '../img/images-4.jpeg'
import '../style.scss'

const Menu = () => {
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
    <div className='menu'>
        <h1>other posts you may like</h1>
        {posts.map((post)=>(
            <div className='post' key={post.id}> 
                <img src={post.img} alt=''/>
                <h2>{post.title}</h2>
                <button>read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu