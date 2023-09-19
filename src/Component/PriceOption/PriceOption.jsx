import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
     const{name, price, features} = option
    return (
        <div className='bg-orange-400 rounded-lg p-4'>
            <h1 className='font-extrabold text-center text-blue-300'>
                <span className='text-7xl'>${price}</span>
                <span className='text-2xl'>/mon</span>
            </h1>
            <h2 className='text-3xl font-extrabold text-center text-white'>{name}</h2>
            <div className='mt-4'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-red-500 text-white font-bold w-full py-2 rounded-lg mt-4'>Purches</button>
        </div>
    );
};

export default PriceOption;