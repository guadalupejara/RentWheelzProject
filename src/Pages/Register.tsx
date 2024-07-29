import React from 'react';
import RegisterForm from '../Components/RegisterForm';
import './Register.css';

function Register() {
  

    return (
        <React.Fragment>
            <div className='bg-cover bg-center h-screen '  id='RegisterPageContainer'>
            <div className='text-5xl text-center text-lime-900 bg-slate-400/75 login-text'>
                <h6>Register</h6> 
                </div>
                <div className='flex justify-center mt-10'> <RegisterForm/> </div>
            </div>
        </React.Fragment>
    );
}
export default Register;