import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import './style.css';

function foot() {
    return (
        <footer className='footer d-flex justify-content-center'>
            <i><a href='https://github.com/mattroland94'><FaGithub /></a></i>
            <i><a href='https://www.linkedin.com/in/matt-roland-16711b12a/'><FaLinkedin /></a></i>
            <i><a href='https://stackoverflow.com/'><FaStackOverflow /></a></i>
        </footer>
    )
}

export default foot;