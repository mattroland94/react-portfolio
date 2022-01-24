import React from 'react';
import './style.css';

function navi(props) {
    let name = 'Matt Roland';

    return (
        <header className='flex-wrap'>
            <h1 className='fw-bold'>
                {name}
            </h1>
            <nav className='d-flex flex-wrap'>
                <ul className='d-flex justify-content-between mb-0'>
                    <li>
                        <a href='#about' className='text-decoration-none' onClick={() => props.setCurrentDisplay("about")}>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='text-decoration-none' onClick={() => props.setCurrentDisplay("portfolio")}>Portfolio</a>
                    </li>
                    <li>
                        <a href='#resume' className='text-decoration-none' onClick={() => props.setCurrentDisplay("resume")}>Resume</a>
                    </li>
                    <li>
                        <a href='#contact' className='text-decoration-none' onClick={() => props.setCurrentDisplay("contact")}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default navi;