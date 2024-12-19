import React from 'react';
import './HomeSection1.scss';
import homebg2 from "./img/homebg2.png";
import { useNavigate } from 'react-router-dom';

const HomeSection1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userId = localStorage.getItem('user'); // Adjust the key if it's different
<<<<<<< HEAD
    navigate('/home3');
    // if (userId) {
    //   navigate('/home3'); // Navigate to home3 if userId exists
    // } else {
    //   navigate('/login'); // Navigate to login if userId does not exist
    // }
=======

    if (userId) {
      navigate('/home3'); // Navigate to home3 if userId exists
    } else {
      navigate('/login'); // Navigate to login if userId does not exist
    }
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
  };

  return (
    <div className='home1'>
      <div className="image-container">
        <img src={homebg2} alt="Background" className="background-image" />
        <div className="home1-btn">
<<<<<<< HEAD
          {/* <button onClick={handleClick}>
            Reserve A Cart
          </button> */}
=======
          <button onClick={handleClick}>
            Reserve A Cart
          </button>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
        </div>
      </div>
    </div> 
  );
}

export default HomeSection1;
