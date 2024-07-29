import React, { useState } from 'react';
import BookingCard from '../Components/BookingCard';



   type Car = {
      carModel: string;
      imageurl: string;
      carType: string;
      rentalPrice: number;
      id: number;
      rentalDates: { pickupDate: string; returnDate: string }[],
      status: string;
    };
 
    const initialBookingData = [
        {
            carModel: 'Toyota Corolla',
            imageurl: 'blackCar.jpg',
            carType: 'Sedan',
            rentalPrice: 1000,
            id: 1,
            rentalDates: [{ pickupDate: '2022-08-01', returnDate: '2022-08-03' }],
            status: 'confirmed'
        },
        {
            carModel: 'Honda Civic',
            imageurl: 'oldCar.jpg',
            carType: 'Sedan',
            rentalPrice: 1500,
            id: 2,
            rentalDates: [{ pickupDate: '2022-08-01', returnDate: '2022-08-03' }],
            status: 'completed'
        }
    ];

  const RawContext = React.createContext<Car[]>([]);

function MyBookingsPage() {
    const raw = React.useContext(RawContext);
    console.log(raw);
    const [BookingData, setBookingData] = useState(initialBookingData);
    const [activeTab, setActiveTab] = useState('all');
    
    const updateCarArray = (updatedCar: Car) => {
        setBookingData(prevData => prevData.map(car => car.id === updatedCar.id ? updatedCar : car));
      };
    
    
    const bookingCards = BookingData.map(car => <BookingCard key={car.id} car={car} updateCarArray={updateCarArray} />);

    const filteredCards = bookingCards.filter(card => {
        const car = card.props.car;
        if (car.status === 'available') return false;
        if (activeTab === 'all') return true;
        return car.status === activeTab;
    });

    return (
        <React.Fragment>
            <div className='bg-slate-200 min-h-screen' id='CarsPageContainer'>
                <div className='text-center'>
                    <h1>My Bookings</h1>
                    <div className='flex p-1 space-x-1 bg-slate-100/50 rounded-xl'>
                        <button 
                            className={`w-full py-2.5 text-sm leading-5 font-medium text-slate-900 rounded-lg ${activeTab === 'all' ? 'bg-white' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`w-full py-2.5 text-sm leading-5 font-medium text-slate-900 rounded-lg ${activeTab === 'confirmed' ? 'bg-white' : ''}`}
                            onClick={() => setActiveTab('confirmed')}
                        >
                            Confirmed
                        </button>
                        <button 
                            className={`w-full py-2.5 text-sm leading-5 font-medium text-slate-900 rounded-lg ${activeTab === 'completed' ? 'bg-white' : ''}`}
                            onClick={() => setActiveTab('completed')}
                        >
                            Completed
                        </button>
                        <button 
                            className={`w-full py-2.5 text-sm leading-5 font-medium text-slate-900 rounded-lg ${activeTab === 'cancel' ? 'bg-white' : ''}`}
                            onClick={() => setActiveTab('cancel')}
                        >
                            Cancel
                        </button>
                    </div>
                    <div className='flex flex-wrap justify-center'>
    {filteredCards}
</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyBookingsPage;