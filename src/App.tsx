import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import CarsPage from './Pages/CarsPage';
import MyBookings from './Pages/MyBookingsPage';
import RawContext from '../src/Pages/MyContext';

type Car = {
    imageurl: string,
    carModel: string,
    carType: string,
    id: number,
    rentalPrice: number,
    rentalDates: { pickupDate: string; returnDate: string }[],
    status: string
}

function App() {
    const [raw, setRaw] = useState<Car[]>([]); // Maintain the raw state here

    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <RawContext.Provider value={{ raw, setRaw }}> {/* Provide the RawContext */}
                    <Routes>
                        <Route path="/" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cars" element={<CarsPage />} />
                        <Route path="/mybookings" element={<MyBookings />} />
                    </Routes>
                </RawContext.Provider>
            </Router>
        </React.Fragment>
    );
}

export default App;
