import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form  className="space-y-4">
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
          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>

        <div className="mt-6">
          <button
            
            className="w-full bg-amber-500 text-white p-2 rounded hover:bg-red-600"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default Login;