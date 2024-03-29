import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreateBook = () => {
  const navigate=useNavigate();
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear,setpublishYear]=useState('');
  const [loading,setLoading]=useState(false);

  const handleSaveBook=()=>{
    const data={
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .post('https://backend-book-store-gs3k.onrender.com/books',data)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
      alert('An error occured,,Please check console');
    })
  };

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='my-4 text-3xl'>Create Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-500'
          />
        </div>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-500'
          />
        </div>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e)=>setpublishYear(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-500'
          />
        </div>
        <button className='p-2 m-8 bg-sky-300' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook
