import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { logIn, logInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;

      
        localStorage.setItem('userEmail', user.email);

        toast.success('Log In Successfully');
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.warn(`${errorCode} - ${errorMessage}`);
      });
  };

  const handleGoogleLogin = () => {
    logInGoogle()
      .then((result) => {
        const user = result.user;

       
        localStorage.setItem('userEmail', user.email);

        toast.success('Log In Successfully');
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.warn(`${errorCode} - ${errorMessage}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Helmet>
              
         <title>User Login</title>
                  
       </Helmet>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="password"
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
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
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
