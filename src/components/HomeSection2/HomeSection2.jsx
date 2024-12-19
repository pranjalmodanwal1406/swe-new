import React from 'react'
import './HomeSection2.scss'
import Cart1 from './img/Cart1.png'
import Cart2 from './img/Cart2.png'
import Cart3 from './img/Cart3.png'
import Cart4 from './img/Cart4.png'
import Cart5 from './img/Cart5.png'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

const HomeSection4 = () => {
    const navigate = useNavigate();
    const handleClick = (passenger) => {
        navigate(`/home3?passenger=${passenger}`);
    };
    return (
        <div className='home-section4'>
            <div className="service-areas1">
                <h2>Our Street Legal Golf Carts</h2>
                <div className="areas">
                    <div className="area">
                        <img src={Cart1} alt="Area 1" onClick={()=> handleClick("sixPassenger")} />
                    </div>
                    <div className="area">
                        <img src={Cart2} alt="Area 1" onClick={()=> handleClick("fourPassenger")} />
=======


const HomeSection4 = () => {
    return (
        <div className='home-section4'>
            <div className="service-areas1">
            <h2>Our Street Legal Golf Carts</h2>
            <div className="areas">
                    <div className="area">
                        <img src={Cart1} alt="Area 1" />
                    </div>
                    <div className="area">
                        <img src={Cart2} alt="Area 1" />
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
                    </div>
                </div>
            </div>
            <div className="service-areas2">

                <div className="areas">
                    <div className="area">
<<<<<<< HEAD
                        <img src={Cart3} alt="Area 1" onClick={()=> handleClick("fourPassenger")} />
                    </div>
                    <div className="area">
                        <img src={Cart4} alt="Area 1" onClick={()=> handleClick("sixPassenger")} />
                    </div>
                    <div className="area">
                        <img src={Cart5} alt="Area 1" onClick={()=> handleClick("eightPassenger")} />
=======
                        <img src={Cart3} alt="Area 1" />
                    </div>
                    <div className="area">
                        <img src={Cart4} alt="Area 1" />
                    </div>
                    <div className="area">
                        <img src={Cart5} alt="Area 1" />
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeSection4
