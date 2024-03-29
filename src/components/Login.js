import React, { useState } from 'react';
import { useAppContext } from '../context/AppContextProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user: { setIsLoggedIn ,setName} } = useAppContext();

  const loginList=[{u:'admin',p:'admin'},{u:'santosh',p:'santosh1234'},{u:'habi',p:'habi1234'},{u:'anil',p:'anil1234'}]
  const verifyPassword=()=>{
    return loginList.find((val)=>val.u===username&&val.p===password)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check username and password
    // if (username === 'admin' && password === 'admin') {
    if (verifyPassword()) {
      // Login successful
      console.log('Login successful');
      setIsLoggedIn(true);
      setName(username)
      localStorage.setItem("santosh_login",true)
      // You can redirect or perform other actions here
    } else {
      // Login failed
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Login</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
