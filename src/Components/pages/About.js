import '../../App.css';
import React from 'react'
import { useStateValue } from '../../StateProvider';

function About() {
    const [{user}] = useStateValue();
    return (
        <div className='about'>
            <h1>Hello {user}</h1>
        </div>
    )
}

export default About
