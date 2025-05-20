import React from 'react';
import { Link } from 'react-router';

const Resgister = () => {
    return (
        
             <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form  className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
           
            
            required
          />
           <input
            type="text"
            placeholder="Photo URL"
            className="w-full border p-2 rounded"
           
            
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          
         
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
           
            
            required
          />

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