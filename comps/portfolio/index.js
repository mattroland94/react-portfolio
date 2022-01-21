import React from 'react';
import project from '../project';
import './style.css';

function portfolio() {
    return (
        <section className='portfolio'>
            <div>
                <h2>Portfolio</h2>
                <project />
            </div>
        </section>
    )
}

export default portfolio;