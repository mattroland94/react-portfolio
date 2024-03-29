import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({[e.target.name]: e.target.value});
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }
    };

    return (
        <div className='contact-container d-flex justify-content-center row'>
            <h2>Contact Me</h2>
            <section className='contact col-lg-4 col-md-8 col-sm-8'>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-box'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div className='form-box'>
                            <label htmlFor='email'>Email:</label>
                            <input type='text' name='email' defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className='form-box'>
                            <label htmlFor='message'>Message:</label>
                            <textarea name='name' rows='5' defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}
                        <button className='btn btn-success' type='submit'>Send Message</button>
                    </form>
                </div>
            </section>
            <section className='info col-lg-4 col-md-8 col-sm-8'>
                <h3>Let me know what you think about my projects or just introudce yourself. I would love to hear from you.
                    <br></br>
                    Just fill out this for and send me an email.
                    <br></br>
                    <br></br>
                    Thanks!
                </h3>
            </section>
        </div>
    )
}

export default Contact;