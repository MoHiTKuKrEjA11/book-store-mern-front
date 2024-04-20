import React, { useEffect } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox,MdOutlineDelete } from 'react-icons/md'
import { useState } from 'react';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {

    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [show,setShow]=useState('table');
    useEffect(()=>{
        setLoading(true);
        axios
        .get('/books')
        .then((response)=>{
            setBooks(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);
  return (
    <div className='p-4'>
        <div className='flex items-center justify-center gap-x-4'>
            <button
             className='px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600'
             onClick={()=>setShow('table')}
            >Table</button>
            <button
             className='px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600'
             onClick={()=>setShow('card')}
            >Card</button>
        </div>
        <div className='flex items-center justify-between'>
            <h1 className='my-8 text-3xl'>Books List</h1>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-4xl text-sky-800'/>
            </Link>
        </div>
        {loading ? (
            <Spinner/>
        ) : show==='table' ? (
            <BooksTable books={books}/>
        ) :
        (
            <BooksCard books={books}/>
        )
    }
    </div>
  )
}

export default Home
