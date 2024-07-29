import React, { useState, useEffect, useContext } from 'react';
import Cars from '../Data/Cars';
import CarCard from '../Components/CarCard';
import './CarPage.css';
import { Link } from 'react-router-dom';
import RawContext from './MyContext';


type Car = {
    imageurl: string,
    carModel: string,
    carType: string,
    id: number,
    rentalPrice: number,
    rentalDates: { pickupDate: string; returnDate: string }[],
    status: string;
}

function CarsPage (){
    const [raw, setRaw] = useState<Car[]>([]);
    const [component, setComponent] = useState<JSX.Element[]>([]);
    const { setRaw: setContextRaw } = useContext(RawContext);

    useEffect(() => {
        setRaw(Cars);
        setComponent(mapCarsToComponents(Cars));
    }, []);

    useEffect(() => {
        console.log(raw);
        setContextRaw(raw);
    }, [raw]); 
    
    function updateCarArray(updatedCar: {
        imageurl: string,
        carModel: string,
        carType: string,
        id: number,
        rentalPrice: number,
        rentalDates: { pickupDate: string; returnDate: string }[],
        status: string;
    }){
        console.log('upday array touched');
        const updatedCars =raw.map((car: Car) => {
            if(car.id === updatedCar.id){
                setRaw([...raw, updatedCar]);
                setComponent(mapCarsToComponents(raw));
                return raw;
            }
        });
    }
    function mapCarsToComponents(cars: Car[]): JSX.Element[] {
        return cars.map((car: Car) => <CarCard key={car.id} car={car} updateCarArray={updateCarArray}/>);
    }

    return (
        <React.Fragment>
            <RawContext.Provider value={{ raw, setRaw }}>
        <div className='bg-slate-200 min-h-screen' id='CarsPageContainer'>
            <div>
                {/* place a link to booking page */}
                <div> 
                    <Link to='/mybookings'>Take Me To My Bookings </Link>
                </div>
           <div className='card-container'>{component}</div> 
            </div>
        </div>
        </RawContext.Provider>
        </React.Fragment>
    )
}

export default CarsPage;