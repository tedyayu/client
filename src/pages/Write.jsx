import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const [value, setValue] = useState('');

  
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title'/>
        <div className='editorContainer'>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <label htmlFor='file'>Uppload Image</label>
          <input type='file' className='file' name='file' id=''/>
          
          <div className='button'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Catagory</h1>

          <div className="cat">
            <input type='radio' name='cat' value="art" id='art'/>
            <label htmlFor='art'>Art</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value="science" id='science'/>
            <label htmlFor='science'>Science</label>
          </div>
          
          <div className="cat">
            <input type='radio' name='cat' value="technology" id='technology'/>
            <label htmlFor='technology'>Technology</label>
          </div>
          
          <div className="cat">
            <input type='radio' name='cat' value="cenima" id='cenima'/>
            <label htmlFor='cenima'>Cenima</label>
          </div>
          
          <div className="cat">
            <input type='radio' name='cat' value="design" id='design'/>
            <label htmlFor='design'>Design</label>
          </div>
         
          <div className="cat">
            <input type='radio' name='cat' value="food" id='food'/>
            <label htmlFor='food'>Food</label>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Write