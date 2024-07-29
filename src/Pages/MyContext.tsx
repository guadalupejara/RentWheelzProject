import React from 'react';


type Car = {
    imageurl: string,
    carModel: string,
    carType: string,
    id: number,
    rentalPrice: number,
    rentalDates: { pickupDate: string; returnDate: string }[],
    status: string
}

type RawContextType = {
  raw: Car[];
  setRaw: (value: Car[]) => void;
};

const RawContext = React.createContext<RawContextType>({
  raw: [],
  setRaw: () => {},
});

export default RawContext;