import React from 'react';

interface CancelModalProps {
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
      handleCloseModal: () => void;
}

const CancelModal: React.FC<CancelModalProps> = ({ car, updateCarArray, handleCloseModal }) => {

    const handleCancelClick = () => {
        console.log('cancel clicked');
        updateCarArray({ ...car, status: 'cancel' });
        console.log('car updated', car);
        handleCloseModal();

    };

    return (
        <div className='bg-white max-w-72 max-h-72 m-4 flex flex-col' id='CancelModalContainer'>
            <h1 className='font-bold text-xl mb-2'>Are you sure you want to cancel this booking?</h1>
            <div className='flex justify-between'>
                <button className='bg-red-500 text-white p-2' onClick={handleCancelClick}>Yes</button>
                <button className='bg-green-500 text-white p-2' onClick={handleCloseModal}>No</button>
            </div>
        </div>
    )
}

export default CancelModal;