import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Backbutton } from '../components/Backbutton';
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';

export const ShowBooks=()=>{
    const [book,setBook] =useState({});
    const [loading, setLoading]=useState(false);
    const {id }=useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
            .then(respons=>{
                setBook(respons.data);
                setLoading(false);
            })
    },[])
    return <div className=' pl-10 pt-4'>
        <Backbutton/>
        <h1 className='text-3xl my-4'> Show book</h1>
        {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id</span>
                <span> {book._id}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Author</span>
                <span> {book.author}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                <span> {book.publishedYear}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Create time</span>
                <span> {new Date(book.createdAt).toString()}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>update time</span>
                <span> {new Date(book.updatedAt).toString()}</span>
            </div>
        </div>)}
    </div>
}