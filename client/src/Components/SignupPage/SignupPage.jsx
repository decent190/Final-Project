import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import image10 from '../../assets/image 10.png';

const SignupPage = () => {
  const [name, setName] = useState('');
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
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
       

      const response = await axios.post('https://final-year-project-4-c46q.onrender.com/api/auth/signup', {
        name,
        usernameOrEmail,
        password,
      });
      if (response.status === 201) {
        
        const user = response.data?.user || response.data;
        if (user && user.name) {
          localStorage.setItem('userName', user.name);
        }
        setSuccess('Signup successful! You can now log in.');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      console.error('Error from backend:', err.response?.data);
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className='card mt-5' style={{ backgroundColor: "#171728", borderRadius: "10px" }}>
        <div className='my-5 mx-3 row' style={{ backgroundColor: "#ffffff", borderRadius: "20px" }}>
          <div className='col-lg-6  flex justify-content-center align-items-center'>
            <img src={image10} alt="Signup" className="img-fluid w-75 ms-4 py-4" />
          </div>
          <div className='col-lg-6'>
            <div className='text-center mt-5'>
              <h4>Join Us Now</h4>
              <p>Your adventure in tech starts here</p>
              <form className='m-4' onSubmit={handleSubmit}>
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    placeholder='Full Name '
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    placeholder='Email or Username'
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                  />
                </div>
                <div className="py-2">
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
                <button type="submit" className="btn btn-dark w-100 mt-4">Register</button>
                <div className='mt-3'>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;