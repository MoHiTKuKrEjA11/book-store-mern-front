import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('an error occured in');
        setLoading(false);
      });
  };


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 Iborder-sky-400 rounded-x1 w- [600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are You Sure You want to delete this book?</h3>
        <button
          className='p-4 m-8 text-white bg-red-600 '
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
