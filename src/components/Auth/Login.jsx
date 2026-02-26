// import { useState } from "react";

import { useState } from "react";


const Login = () => {

   
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-900 p-12 rounded-xl '>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                className='flex flex-col items-center justify-center'>
                    <input 
                    onChange={(e)=> {
                        console.log(e.target.value)
                    }}
                    required 
                    className='text-2xl outline-none border-2 border-emerald-600 py-1 px-10 rounded-full my-2 bg-transparent placeholder:text-gray-400' type="email" placeholder='enter your email' />
                    <input required className='text-2xl outline-none border-2 border-emerald-600 py-1 px-10 rounded-full my-2 bg-transparent placeholder:text-gray-400' type="password" placeholder='enter your password' />
                    <button className='text-2xl outline-none border-none bg-emerald-600 py-1 px-10 rounded-full my-2'>Log in</button>
                </form>
            </div>
             
        </div>
    );
};

export default Login;