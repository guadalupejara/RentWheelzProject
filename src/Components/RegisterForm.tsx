import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    // create input validation for all the inputs
    function validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password: string) {
        return password.length > 6;
    }

    function validateFullName(fullName: string) {
        return fullName.length > 0;
    }

    function validateLicenseNumber(licenseNumber: string) {
        return licenseNumber.length > 0;
    }

    function validateConfirmPassword(password: string, confirmPassword: string) {
        return password === confirmPassword;
    }
  const navigate = useNavigate();
    // create a function to handle the form submission
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
        const licenseNumber = (document.getElementById('licenseNumber') as HTMLInputElement).value;

        if (!validateFullName(fullName)) {
            alert('Invalid full name');
        } else if (!validateEmail(email)) {
            alert('Invalid email');
        } else if (!validatePassword(password)) {
            alert('Invalid password- Needs to be greater than 6 characters');
        } else if (!validateConfirmPassword(password, confirmPassword)) {
            alert('Passwords do not match');
        } else if (!validateLicenseNumber(licenseNumber)) {
            alert('Invalid license number');
        } else {
            alert('Form submitted');
            navigate('/login')
            
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className='flex justify-center'>
                    <div className='bg-slate-400/75 p-4 rounded-lg'>
                        <h1 className='text-2xl text-center text-lime-900'>Register Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor='fullName' className='text-lime-900'>Full Name</label>
                                <input type='text' name='fullName' id='fullName' className='p-2 m-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='text-lime-900'>Email</label>
                                <input type='email' name='email' id='email' className='p-2 m-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='password' className='text-lime-900'>Password</label>
                                <input type='password' name='password' id='password' className='p-2 m-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='confirmPassword' className='text-lime-900'>Confirm Password</label>
                                <input type='password' name='confirmPassword' id='confirmPassword' className='p-2 m-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='licenseNumber' className='text-lime-900'>License Number</label>
                                <input type='text' name='licenseNumber' id='licenseNumber' className='p-2 m-2 rounded-lg' />
                            </div>
                            {/* create a check box with a line of text that reads "Agree to Terns & Conditions" */}
                            <div className='flex items-center'>
    <input type='checkbox' id='terms' className='mr-2' />
    <label htmlFor='terms' className='text-lime-900'>Agree to Terms & Conditions</label>
</div>
                            <div className='flex justify-center'>
                                <button type='submit' className='bg-lime-900 text-slate-400 p-2 m-2 w-full rounded-lg'>Register</button>
                            </div>
                        </form>
                        <div className='text-lime-900 text-center'>
                            <p className='text-black'>Already have an account? <Link to='/login' className='text-lime-900'>Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RegisterForm;