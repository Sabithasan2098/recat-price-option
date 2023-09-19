import React from 'react';
import {AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2 text-white'><AiFillCheckCircle className='text-blue-500'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;