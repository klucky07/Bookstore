import React, { useState,useEffect } from 'react'
import { Backbutton } from '../components/Backbutton';
import { Spinner } from '../components/Spinner';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

export const EditBook=()=>{
    const [postinputs,setPostinputs]=useState(
    {title:"",
    author:"",
    publishedYear:""
})
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
setLoading(true);
axios.get(`http://localhost:3000/books/${id}`)
    .then((response) =>{
        setPostinputs({
            title: response.data.title,
            author: response.data.author,
            publishedYear: response.data.publishedYear
          });
          setLoading(false);
    }).catch((error)=>{
        setLoading(false);
        alert('an error')
    })
},[])
const handleeditBook=()=>{
 
   setLoading(true);
   axios.put(`http://localhost:3000/books/${id}`,postinputs)
    .then(()=>{
        setLoading(false);
        navigate('/')
    })
    .catch((error)=>{
        setLoading(false);
        alert( "error in editing book")
    })
}
  
return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={postinputs.title}
            onChange={(e) => setPostinputs( c =>({
                ...c,
                title:e.target.value
            })
                )}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={postinputs.author}
            onChange={(e) => setPostinputs( c =>({
                ...c,
                author:e.target.value
            })
                )}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={postinputs.publishedYear}
            onChange={(e) => setPostinputs( c =>({
                ...c,
                publishedYear:e.target.value
            })
                )}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleeditBook}>
          Save
        </button>
      </div>
    </div>
  );
}