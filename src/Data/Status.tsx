const Status = [
    {
        imageurl: 'redCar.jpg',
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        id: 1,
        rentalPrice: 300,
        rentalDates:[{ pickupDate: '2022-11-01', returnDate: '2022-11-03' }],
        status: 'confirm'
    },

    {
        imageurl: 'blueCar.jpg',
        carModel: 'Toyota Corolla 2',
        carType: 'Sedan',
        id: 2,
        rentalPrice: 400,
        rentalDates:[{ pickupDate: '2022-06-01', returnDate: '2022-06-03' }],
        status: 'complete'
    },

    {
        imageurl: 'oldCar.jpg',
        carModel: 'Toyota Corolla 3',
        carType: 'Sedan',
        id: 3,
        rentalPrice: 500,
        rentalDates:[],
        status: 'available'
    },

    {
        imageurl: 'blackCar.jpg',
        carModel: 'Toyota Corolla 4',
        carType: 'Sedan',
        id: 4,
        rentalPrice: 600,
        rentalDates:[{ pickupDate: '2022-08-01', returnDate: '2022-08-03' }],
        status: 'confirm'
    },

    {
        imageurl: 'https://www.cars.com/cstatic-images/car-pictures/xl/USC90TOC041A021001.png',
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        id: 5,
        rentalPrice: 300,
        rentalDates:[],
        status: 'available'
    }
]
export default Status;