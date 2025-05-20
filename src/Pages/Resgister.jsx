import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Resgister = () => {
    const {createUser,setUser, updateUser}= use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
     const [error, setError] = useState('');
    const handleRegister= (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
         const { email, password, photo,name} = Object.fromEntries(formData);
        // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password must have at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    console.log(email,password,photo,name)
    createUser(email,password)
    .then(result=>{
        const user = result.user;
         updateUser({displayName:name, photoURL:photo})
         .then(() => {
         setUser({...user,displayName:name, photoURL:photo})
       }).catch((error) => {
         toast.warn(error)
       });
        toast.success("Account create Succesfully")
        navigate(`${location.state? location.state: "/"}`)
      })
    .catch(error=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.warn(errorCode,errorMessage)
    })
    




    }
    return (
        
             <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name='name'
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
           
            
            required
          />
           <input
            name='photo'
            type="text"
            placeholder="Photo URL"
            className="w-full border p-2 rounded"
           
            
            required
          />
          <input
            name='email'
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          
         
            required
          />
          
          <input
            name='password'
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
           
            
            required
          />
            {error && (
            <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>

        <div className="mt-6">
          <button
            onClick={() => alert('Google Sign Up Logic')}
            className="w-full bg-amber-500 text-white p-2 rounded hover:bg-red-600"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
       
    );
};

export default Resgister;