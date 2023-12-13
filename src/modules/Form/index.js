import React from 'react'
import { useState } from 'react';
import Input from '../../components/input';
import Buttoon from '../../components/Button';

const Form = ({
  isSignInPage=false,
}) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: ''
    }),
    email:'',
    password:''
}) 

console.log(data);
  return (
    <div className='bg-light h-screen flex items-center justify-center'>
      <div className='bg-white w-[600px] h-[80vh] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-6xl font-extrabold mb-4 text-red-500'>Welcome{isSignInPage && ' Back'}</div>
        <div className='text-2xl mb-10 '>{isSignInPage ? "Enter the data" :"SignUp to get Started"}</div>
        <form className='flex flex-col items-center w-full m-4' onSubmit={()=>console.log('submitted')}>
          {!isSignInPage && <Input label='Full Name' name='name' placeholder='Enter your Name 'className='mb-6 is' value = {data.fullName} onChange= {(e)=> setData({...data,fullName:e.target.value})} /> }
          <Input label='Email address' type='email' name='email' placeholder='Enter your Email 'className='mb-6' value={data.email} onChange= {(e)=> setData({...data,email:e.target.value})}/>
          <Input label='Password' type='password' name='password' placeholder='Enter your password 'className='mb-6' value={data.password} onChange= {(e)=> setData({...data,password:e.target.value})}/>
          <Buttoon label={isSignInPage?"Sign in":'Sign up'}></Buttoon>
        </form>
        <div>{isSignInPage ? "Didn't have an account? ": "Already have an account?"} <span className='text-blue-600 cursor-pointer underline'>{isSignInPage ? "Sign up": "Sign in"}</span></div>
      </div>
    </div>
  )
}

export default Form;