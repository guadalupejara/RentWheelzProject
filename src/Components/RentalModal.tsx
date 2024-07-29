import React from 'react';


interface RentalModalProps {
  car: {
    carModel: string;
    id: number;
    rentalDates: { pickupDate: string; returnDate: string }[];
    imageurl: string; // Add this line
    carType: string; // Add this line
    rentalPrice: number; // Add this line
    status: string; // Add this line
  };
  
  onClose: () => void;

  updateCarArray: (updatedCar: {
    carModel: string;
    id: number;
    rentalDates: { pickupDate: string; returnDate: string }[];
    imageurl: string;
    carType: string;
    rentalPrice: number;
    status: string;
  }) => void;
}

const RentalModal: React.FC<RentalModalProps> = ({ car , onClose, updateCarArray }) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!validateInputs()) {
        console.log('invalid inputs');
        alert('Please fill out all inputs');
        return;
      }
      else {
        const pickupDateElement = document.getElementById('pickupDate') as HTMLInputElement;
        const returnDateElement = document.getElementById('returnDate') as HTMLInputElement;
        car.rentalDates.push({ pickupDate: pickupDateElement.value, returnDate: returnDateElement.value });
  
        // Update status based on pickup date
        const pickupDate = new Date(pickupDateElement.value);
        const currentDate = new Date();
        if (pickupDate < currentDate) {
          car.status = 'completed';
        } else {
          car.status = 'confirmed';
        }
  
        updateCarArray(car);
        alert('Car Reserved!');
        onClose(); // Call onClose when the submit button is clicked
      }
    } catch (error) {
        console.error(error);
    }
  };
      const handleCancel = () => {
        onClose(); // Call onClose when the cancel button is clicked
      };

    const validateInputs = () => {
        const pickupDateElement = document.getElementById('pickupDate') as HTMLInputElement;
        const returnDateElement = document.getElementById('returnDate') as HTMLInputElement;
        const passengerCountElement = document.getElementById('passengerCount') as HTMLInputElement;
    
        if (!pickupDateElement || !returnDateElement || !passengerCountElement) {
            console.error('One or more elements could not be found');
            return false;
        }
    
        const pickupDate = pickupDateElement.value;
        const returnDate = returnDateElement.value;
        const passengerCount = passengerCountElement.value;
    
        if (pickupDate === '' || returnDate === '' || passengerCount === '') {
            return false;
        }
        return true;
    }

    return (
        <div className='bg-white max-w-64 max-h-72 m-3 flex flex-col' id='RentalModalContainer'>
          <div className='w-full h-1/2 mx-2'>
            <h1 className='font-bold text-xl mb-3 mt-3 text-center mr-4'>Reserve {car.carModel}</h1>
            <form onSubmit={handleSubmit}>
              <p>Pickup Date:</p>
              <input id='pickupDate' type='date' className='mb-2 mt-1 bg-slate-100' />
              <p>Return Date:</p>
              <input id='returnDate' type='date' className='mb-2 mt-1  bg-slate-100' />
              <p>Passenger Count</p>
              <input id='passengerCount' type='number' className='mb-2 mt-1 bg-slate-100' />
              <button type='submit' className='bg-lime-900 text-white mb-2 mr-2 p-2 '>Submit</button>
              <button type='button' className='bg-red-950 text-white p-2' onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      )
    }
    export default RentalModal;