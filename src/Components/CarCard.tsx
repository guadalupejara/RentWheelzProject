import React, {useState} from 'react';
import RentalModal from './RentalModal';


interface CarCardProps {
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

const CarCard: React.FC<CarCardProps> = ({ car, updateCarArray }) => {
const [showModal, setShowModal] = useState(false);

const handleReserveClick = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};

  return (
    <div className='bg-white max-w-64 max-h-72 m-4 flex flex-col' id='CarCardContainer'>
      <div className='w-full h-1/2'>
        <img className='object-cover h-full w-full' src={car.imageurl} alt={car.carModel} />
      </div>
      <div className='w-full h-1/2 p-4'>
        <h1 className='font-bold text-xl mb-2'>{car.carModel}</h1>
        <p className='mb-2'>{car.carType}</p>
        <p className='text-gray-700'>Rs: {car.rentalPrice}/Hour</p>  
        <button className=' text-red-950 mt-2'onClick={handleReserveClick}>Reserve</button>
      </div>
      <div>{showModal && <RentalModal car={car} onClose={handleCloseModal} updateCarArray={updateCarArray}/>}</div>
    </div>
  )
}

export default CarCard;