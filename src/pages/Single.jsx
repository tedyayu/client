import React from 'react'
import img1 from '../img/pplay-1.jpg'
import '../style.scss'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={img1} alt="my-image"/>
      
      <div className="user">
        <img src={img1} alt="user profile"/>
      
      <div className="info">
        <span>John</span>
        <p>posted 2 days ago</p>
      </div>
      <div className='edit'>
        <Link to={`/write?edit=2`}>
          <img src={Edit} alt=''/>
        </Link>
        <img src={Delete} alt=''/>
      </div>
      </div>
      <h1>lorem ipsum doro sit amet</h1>
      <p>Lorem ipsum dolor sit, amet conse
        ctetur adipisicing elit. Itaque mo
        lestias iste officia sit totam per
        spiciatis. Asperiores facilis itaq
        ue voluptatum, iure numquam ad ali
        as omnis labore repellat assumenda
         aspernatur delectus nemo! Lorem 
         ipsum dolor sit amet consectetur
          adipisicing elit. Ab architecto 
          obcaecati facere optio sed. Eaque
          , necessitatibus. Rem beatae quae
           dolorem? Lorem ipsum dolor sit amet 
           consectetur adipisicing elit. Ipsum, 
           quas! Magni aut molestias natus vero 
           earum culpa cum ut. Rem illum recusan
           dae optio minima un
           de pariatur cum ab tenetur molestiae? 
           Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui, vero commodi 
            reiciendis eveniet velit placeat par
            iatur, dolorum repellat molestiae fa
            cilis repudiandae officia enim odit 
            a quasi consequuntur aliquam quisqua
            m labore exercitationem id doloremqu
            e iste culpa excepturi! Distinctio a
            periam illo soluta veritatis iusto a
            . Qui deleniti minima fugiat et volu
            ptate ipsum?</p>
      </div>
      <Menu/>

    </div>
  )
}

export default Single