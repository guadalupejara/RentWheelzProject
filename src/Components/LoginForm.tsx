import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
      // create input validation for both the email and password inputs
      function validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }   
    function validatePassword(password: string) {
        return password.length > 6;
    }
    const navigate = useNavigate();
    // create a function to handle the form submission
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        if (!validateEmail(email)) {
            alert('Invalid email');
        } else if (!validatePassword(password)) {
            alert('Invalid password- Needs to be 7+ characters long');
        } else {
            alert('Form submitted');
            navigate('/cars');
        }
    }
    return (
        <React.Fragment>       
        <div>
        <div className='flex justify-center'>
            <div className='bg-slate-400/75 p-4 rounded-lg'>
                <h1 className='text-2xl text-center text-lime-900'>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='text-lime-900'>Email</label>
                        <input type='email' name='email' id='email' className='p-2 m-2 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password' className='text-lime-900'>Password</label>
                        <input type='password' name='password' id='password' className='p-2 m-2 rounded-lg' />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-lime-900 text-slate-400 p-2 m-2 rounded-lg'>Submit</button>
                    </div>
                </form>
                {/* create a line of text saying "don't have an account register here" with a link to the text register here that will lead to the register.tsx */}
                <div className='text-lime-900 text-center'>
                    <p className='text-black'>Don't have an account? <Link to='/' className='text-lime-900'>Register here</Link></p>
                    </div>
            </div>
        </div>
    </div>
    </React.Fragment> 
    );
} 
export default LoginForm;
 