import React,{ useState } from 'react';
import CancelModal from './CancelModal';

interface BookingProps {
    car: {
        carModel: string;
        imageurl: string;
        carType: string;
        rentalPrice: number;
        id: number;
        rentalDates: { pickupDate: string; returnDate: string }[],
        status: string;
      };
      updateCarArray: (updatedCar: { 
        carModel: string;
        id: number; 
        rentalDates: { pickupDate: string; returnDate: string }[];
        imageurl: string;
        carType: string;
        rentalPrice: number;
        status: string; // Add status property here
      }) => void;
}

const BookingCard: React.FC<BookingProps> = ({ car , updateCarArray }) => {

const [showModal, setShowModal] = useState(false);

const handleModalClick = () => {
   setShowModal(true);
};
const handleCloseModal = () => {
    setShowModal(false);
}

const calculateTotalPrice = (pickupDate: string, returnDate: string, rentalPrice: number) => {
    // implementation of the calculateTotalPrice function
    const pickup = new Date(pickupDate);
    const returnDay = new Date(returnDate);
    const diff = returnDay.getTime() - pickup.getTime();
    const hours = diff / (1000 * 60 * 60);
    return hours * rentalPrice;
}

const calculatedPrice = calculateTotalPrice(car.rentalDates[0].pickupDate, car.rentalDates[0].returnDate, car.rentalPrice);

// In your JSX
<p className='text-gray-700'>Calculated Price: {calculatedPrice}</p>
  return (
    <div className='bg-white max-w-72 max-h-96 m-4 flex flex-col' id='BookingCardContainer'>
      <div className='w-full h-1/2'>
        <img className='object-cover h-full w-full' src={car.imageurl} alt={car.carModel} />
      </div>
      <div className='w-full h-1/2 p-4 bg-white'>
        <h1 className='font-bold text-xl mb-2'>{car.carModel}</h1>
        <p className='text-gray-400 text-sm'>Dates Rented: {car.rentalDates[0].pickupDate} - {car.rentalDates[0].returnDate} </p>
        <p className='text-gray-700'>Calculated Price: {calculatedPrice} USD</p> 
        <p className='text-gray-700 mb-2'>Status: {car.status}</p>
        {car.status === 'confirmed' && <button className=' text-red-950 mt-2' onClick={handleModalClick}>Cancel</button>}
      </div>
      <div>{showModal && <CancelModal car={car} updateCarArray={updateCarArray} handleCloseModal={handleCloseModal}/>}</div>
    </div>
  )
}

export default BookingCard;