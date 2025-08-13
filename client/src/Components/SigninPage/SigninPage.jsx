import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SigninPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!usernameOrEmail.trim() || !password.trim()) {
      setError('Please provide an email or username and a password');
      return;
    }

    try {
      const response = await axios.post('https://final-year-project-4-c46q.onrender.com/api/auth/signin', {
        usernameOrEmail,
        password,
      });
      if (response.status === 200) {
        // Save user name to localStorage if available
        const user = response.data?.user || response.data;
        if (user && user.name) {
          localStorage.setItem('userName', user.name);
        }
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 2000); 
      }
    } catch (err) {
      console.error('Error from backend:', err.response?.data);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <div className='card p-5 col-md-6'>
            <h3 className='text-center'>Login to Your Account</h3>
            <form onSubmit={handleSubmit}>
                <div className="py-2 ">
                    <input
                        type="text"
                        className="form-control rounded-4"
                        placeholder='Email or Username'
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                </div>
                <div className="py-2 ">
                    <input
                        type="password"
                        className="form-control rounded-4"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <button type="submit" className="btn btn-dark w-100 mt-3">Login</button>
                <div className='mt-3 text-center'>
                    <p>Don’t have an acgcount? <Link to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    </div>
);
};

export default SigninPage;