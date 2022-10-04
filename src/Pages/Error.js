import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/error.css';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Error 404. Page Not Found</h1>
      <button onClick={() => navigate('/')}>Go home</button>
    </div>
  );
};

export default Error;
