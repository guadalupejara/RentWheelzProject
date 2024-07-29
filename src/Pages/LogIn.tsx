import React from 'react';
import LoginForm from '../Components/LoginForm';
import './Login.css';

function LogIn() {
  

    return (
        <React.Fragment>
            <div className='bg-cover bg-center h-screen '  id='LoginPageContainer'>
            <div className='text-5xl text-center text-lime-900 bg-slate-400/75 login-text'>
                <h6>Log In</h6> 
                </div>
                <div className='flex justify-center mt-10'> <LoginForm/> </div>
            </div>
        </React.Fragment>
    );
}
export default LogIn;