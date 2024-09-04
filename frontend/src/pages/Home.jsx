import React, { useEffect, useState } from 'react'
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import{BsInfoCircle} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Home=()=>{
    const [books,setBooks]=useState([]);
    const[loading , setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:3000/books")
            .then(response=>{
                setBooks(response.data.data);
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            });
    },[])
    return <div className='p-4'>
    
        <div className='flex border-r-4 border-b-4 justify-between items-center'>
            <h1 className='text-3xl my-8 pl-5'>Books List</h1>
            <Link to={'/books/create'}>

            <MdOutlineAddBox className=" text-sky-800  text-4xl hover:"/>
            </Link>
        </div>
        {loading?(
            <Spinner/>
        ):(
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>
                            No
                        </th>
                        <th className='border border-slate-600 rounded-md'>
                            title
                        </th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                           Author
                        </th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                          publish Year
                        </th>
                        <th className='border border-slate-600 rounded-md '>
                          operations
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index)=>(
                        <tr key={book._id} className='h-8'>
                            <td className='bg-yellow-50 border border-sla-700 font-light p-2 ml-2 rounded-md text-centre '>
                                {index+1}
                            </td>
                            <td className='bg-blue-50 border border-sla-700 p-2 ml-2 text-amber-950 font-semibold  rounded-md text-centre'>
                                {book.title} 
                            </td>
                            <td className='bg-gray-50 border border-sla-700 p-2 ml-2 font-light rounded-md text-centre'>
                                {book.author}
                            </td>
                            <td className='bg-green-50 border border-sla-700 p-2 ml-2  font-light  rounded-md text-centre'>
                                {book.publishedYear}
                            </td>
                            <td className='border border-sla-700 rounded-md text-centre'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-geen-800 hover:scale-110'/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:scale-125'/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-500 hover:scale-125'/>
                                    </Link>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
           <div className='flex justify-center pt-20 text-slate-600 text-8xl font-mono opacity-10 border  border-t-2'>
        Library
        </div>
    </div>
}