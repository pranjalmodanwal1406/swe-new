<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
=======
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import homebg1 from './img/homebg1.png';
// import Group from './img/Group.png';
// import './Reserve.scss';

// const Reserve = () => {
//     const [vehicleDetails, setVehicleDetails] = useState(null);
//     const [reservationDates, setReservationDates] = useState(null);
//     const vehicleId = localStorage.getItem('vehicleId'); // assuming vehicleId is stored in localStorage
//     const reservationId = localStorage.getItem('reservationId'); // assuming reservationId is stored in localStorage

//     const navigate = useNavigate();

//     // Helper function to format dates
//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-GB', {
//             day: 'numeric',
//             month: 'long',
//             year: 'numeric'
//         });
//     };

//     // Fetch vehicle details from API
//     useEffect(() => {
//         if (vehicleId) {
//             fetch(`http://44.196.64.110:5001/api/vehicle/vehicles/${vehicleId}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setVehicleDetails(data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching vehicle details:', error);
//                 });
//         }
//     }, [vehicleId]);

//     // Fetch reservation dates from API
//     useEffect(() => {
//         if (reservationId) {
//             fetch(`http://44.196.64.110:5001/api/reserve/reservation/${reservationId}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setReservationDates(data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching reservation dates:', error);
//                 });
//         }
//     }, [reservationId]);
//     const handleCheckoutClick = () => {
//         navigate('/checkout'); // Navigate to the checkout page
//     };
//     const price=((vehicleDetails.vprice)*(reservationDates.days))

//     return (
//         <div className='Reserve'>
//             <img className='aa' src={homebg1} alt="" />
//             <div className='week'>
//                 <div className='weekName'>
//                     <img src={vehicleDetails?.vimage || Group} alt="" />
//                 </div>
//                 <div className='week2'>
//                     <h3>
//                         {vehicleDetails?.vname || 'Vehicle Name'} 
//                         &nbsp;<span>{`${vehicleDetails?.vseats || '4'} Passengers`}</span>
//                     </h3>
//                     <h4>
//                         Price: <span>${price || '800'}</span>
//                     </h4>
                    
//                     <p>
//                         Start Date: <span>{reservationDates?.pickdate ? formatDate(reservationDates.pickdate) : '2 October 2024'}</span>
//                     </p>
                    
//                     <p>
//                         End Date: <span>{reservationDates?.dropdate ? formatDate(reservationDates.dropdate) : '5 October 2024'}</span>
//                     </p>
//                 </div>
//             </div>
//             <div className='book'>
//                 <button onClick={handleCheckoutClick}>
//                     Request Booking
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Reserve;
    // import React, { useEffect, useRef, useState } from 'react';
    // import { useNavigate, useLocation } from 'react-router-dom';
    // import homebg1 from './img/homebg1.png';
    // import Group from './img/Group.png';
    // import './Reserve.scss';

    // const Reserve = () => {
    //     const [vehicleDetails, setVehicleDetails] = useState(null);
    //     const [reservationDates, setReservationDates] = useState(null);
        
    //     const reservationId = localStorage.getItem('reservationId');
    //     const canvasRef = useRef(null);

    //     const navigate = useNavigate();
    //     const location = useLocation();
    //     const { season, day,vehicleId  } = location.state || {};

    //     // Helper function to format dates
    //     const formatDate = (dateString) => {
    //         const date = new Date(dateString);
    //         return date.toLocaleDateString('en-GB', {
    //             day: 'numeric',
    //             month: 'long',
    //             year: 'numeric'
    //         });
    //     };


    //     useEffect(() => {
    //         if (vehicleId && season && day) {
    //             fetch(`http://44.196.64.110:8132/api/vehicle/price/${vehicleId}?season=${season}&day=${day}`)
    //                 .then(response => response.json())
    //                 .then(data => setVehicleDetails(data))
    //                 .catch(error => console.error('Error fetching vehicle details:', error));
    //         }
    //     }, [vehicleId, season, day]);

    //     useEffect(() => {
    //         if (reservationId) {
    //             fetch(`http://44.196.64.110:5001/api/reserve/reservation/${reservationId}`)
    //                 .then(response => response.json())
    //                 .then(data => setReservationDates(data))
    //                 .catch(error => console.error('Error fetching reservation dates:', error));
    //         }
    //     }, [reservationId]);

    //     useEffect(() => {
    //         if (vehicleDetails && reservationDates) {
    //             const calculatedPrice = vehicleDetails.price * reservationDates.days;
    //             localStorage.setItem('price', calculatedPrice);
    //         }
    //     }, [vehicleDetails, reservationDates]);

       
    //     useEffect(() => {
    //         const canvas = canvasRef.current;
    //         const ctx = canvas.getContext('2d');
    //         const image = new Image();
          
    //         const canvasWidth = 300;
    //         const canvasHeight = 200;
    //         canvas.width = canvasWidth;
    //         canvas.height = canvasHeight;

        
    //         image.src = vehicleDetails?.image || Group;
    //         image.onload = () => {
              
    //             const aspectRatio = image.width / image.height;
    //             let renderWidth, renderHeight, offsetX, offsetY;

    //             if (aspectRatio > canvasWidth / canvasHeight) {
    //                 renderWidth = canvasWidth;
    //                 renderHeight = renderWidth / aspectRatio;
    //                 offsetX = 0;
    //                 offsetY = (canvasHeight - renderHeight) / 2;
    //             } else {
    //                 renderHeight = canvasHeight;
    //                 renderWidth = renderHeight * aspectRatio;
    //                 offsetX = (canvasWidth - renderWidth) / 2;
    //                 offsetY = 0;
    //             }

    //             // Clear canvas and draw the image
    //             ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //             ctx.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
    //         };
    //     }, [vehicleDetails]);

    //     const handleCheckoutClick = async () => {
    //         console.log('button clicked');
            
    //         if (!vehicleId || !reservationId) {
    //             alert("Vehicle ID or Reservation ID is missing.");
    //             return;
    //         }
        
    //         try {
    //             const response = await fetch(`http://44.196.64.110:5001/api/reserve/reservation/${reservationId}`, {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ vehicleId }),
    //             });
        
    //             if (response.ok) {
    //                 const result = await response.json();
    //                 console.log('Update successful:', result);
    //                 navigate('/checkout', { state: { season, day } });
    //             } else {
    //                 console.error('Failed to update reservation:', response.statusText);
    //                 alert('Failed to update the reservation. Please try again.');
    //             }
    //         } catch (error) {
    //             console.error('Error in handleCheckoutClick:', error);
    //             alert(`An unexpected error occurred: ${error.message}`);
    //         }
    //     };
        
        

    //     const price = localStorage.getItem('price') || '800';

    //     return (
    //         <div className='Reserve'>
    //             <img className='aa' src={homebg1} alt="" />
    //             <div className='week'>
    //                 <div className='weekName'>
    //                     <canvas ref={canvasRef}></canvas>
    //                 </div>
    //                 <div className='week2'>
    //                     <h3>
    //                         {vehicleDetails?.vname || 'Vehicle Name'}
    //                         &nbsp;<span>{`${vehicleDetails?.passenger || '4'} `}</span>
    //                     </h3>
    //                     <h4>
    //                         Price: <span>${price}</span>
    //                     </h4>
                        
    //                     <p>
    //                         Start Date: <span>{reservationDates?.pickdate ? formatDate(reservationDates.pickdate) : '2 October 2024'}</span>
    //                     </p>
                        
    //                     <p>
    //                         End Date: <span>{reservationDates?.dropdate ? formatDate(reservationDates.dropdate) : '5 October 2024'}</span>
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className='book'>
    //                 <button onClick={handleCheckoutClick}>
    //                     Request Booking
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // };

    // export default Reserve;
    import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
import homebg1 from './img/homebg1.png';
import Group from './img/Group.png';
import './Reserve.scss';

const Reserve = () => {
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [reservationDates, setReservationDates] = useState(null);
<<<<<<< HEAD
    const [searchParams] = useSearchParams();
=======

    const reservationId = localStorage.getItem('reservationId');
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
    const canvasRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();
    const { season, day, vehicleId } = location.state || {};
<<<<<<< HEAD
    const [reservationId, setReservationId] = useState('');
    const [calcPrice, setCalcPrice] = useState('');
    // const reservationId = searchParams.get('reservationId');
    // const [searchParams] = useSearchParams();

    useEffect(() => {
        const storedReservationId = localStorage.getItem('reservationId'); // Retrieve the value
        setReservationId(storedReservationId); // Update state with the retrieved value
    }, []);

=======
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8

    // Helper function to format dates
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    // Fetch vehicle details
    useEffect(() => {
        if (vehicleId && season && day) {
            fetch(`http://44.196.64.110:8132/api/vehicle/price/${vehicleId}?season=${season}&day=${day}`)
                .then(response => response.json())
                .then(data => {
<<<<<<< HEAD
                    console.log(data)
                    setVehicleDetails(data);
                    // if (data?.price) {
                    //     localStorage.setItem('price', data.price);
                    // }
=======
                    setVehicleDetails(data);
                    if (data?.price) {
                        localStorage.setItem('price', data.price);
                    }
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
                })
                .catch(error => console.error('Error fetching vehicle details:', error));
        }
    }, [vehicleId, season, day]);

    // Fetch reservation dates
    useEffect(() => {
        if (reservationId) {
            fetch(`http://44.196.64.110:5001/api/reserve/reservation/${reservationId}`)
                .then(response => response.json())
                .then(data => setReservationDates(data))
                .catch(error => console.error('Error fetching reservation dates:', error));
        }
    }, [reservationId]);

    // Calculate price and store in localStorage
    useEffect(() => {
        if (vehicleDetails && reservationDates) {
            const calculatedPrice = vehicleDetails.price * reservationDates.days;
<<<<<<< HEAD
            setCalcPrice(calculatedPrice);
=======
            localStorage.setItem('price', calculatedPrice);
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
        }
    }, [vehicleDetails, reservationDates]);

    // Update canvas with vehicle image
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();

        const canvasWidth = 300;
        const canvasHeight = 200;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        image.src = vehicleDetails?.image || Group;
        image.onload = () => {
            const aspectRatio = image.width / image.height;
            let renderWidth, renderHeight, offsetX, offsetY;

            if (aspectRatio > canvasWidth / canvasHeight) {
                renderWidth = canvasWidth;
                renderHeight = renderWidth / aspectRatio;
                offsetX = 0;
                offsetY = (canvasHeight - renderHeight) / 2;
            } else {
                renderHeight = canvasHeight;
                renderWidth = renderHeight * aspectRatio;
                offsetX = (canvasWidth - renderWidth) / 2;
                offsetY = 0;
            }

            // Clear canvas and draw the image
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
        };
    }, [vehicleDetails]);

    const handleCheckoutClick = async () => {
        if (!vehicleId || !reservationId) {
            alert("Vehicle ID or Reservation ID is missing.");
            return;
        }

        try {
            const response = await fetch(`http://44.196.64.110:5001/api/reserve/reservation/${reservationId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
<<<<<<< HEAD
                body: JSON.stringify({ vehicleId, reserveAmount: calcPrice }),

            });

            console.log(response, "response-----");

            if (response.ok) {
                const reservationId = localStorage.getItem('reservationId');
                const storedVehicleId = localStorage.getItem('vehicleId');
                const token = localStorage.getItem('token');
                if (reservationId && storedVehicleId && token) {
                    navigate(`/checkout?vehicleId=${storedVehicleId}`);
                } else{
                    navigate(`/login`);
                }
                localStorage.removeItem("price");
=======
                body: JSON.stringify({ vehicleId }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Update successful:', result);
                navigate('/checkout', { state: { season, day } });
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
            } else {
                console.error('Failed to update reservation:', response.statusText);
                alert('Failed to update the reservation. Please try again.');
            }
        } catch (error) {
            console.error('Error in handleCheckoutClick:', error);
            alert(`An unexpected error occurred: ${error.message}`);
        }
    };

    return (
        <div className='Reserve'>
            <img className='aa' src={homebg1} alt="" />
            <div className='week'>
                <div className='weekName'>
                    <canvas ref={canvasRef}></canvas>
                </div>
                <div className='week2'>
                    {vehicleDetails && (
                        <>
                            <h3>
<<<<<<< HEAD
                                {vehicleDetails.vname || 'Vehicle Name'}
=======
                                {vehicleDetails.vname || 'Vehicle Name'}   
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
                                &nbsp;<span>{`${vehicleDetails.passenger || '4'} `}</span>
                            </h3>
                            <h4>
                                Price: <span>${vehicleDetails.price}</span>
                            </h4>
                        </>
                    )}
                    {reservationDates && (
                        <>
                            <p>
                                Start Date: <span>{formatDate(reservationDates.pickdate)}</span>
                            </p>
                            <p>
                                End Date: <span>{formatDate(reservationDates.dropdate)}</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
            <div className='book'>
                <button onClick={handleCheckoutClick}>
                    Request Booking
                </button>
            </div>
        </div>
    );
};

export default Reserve;
