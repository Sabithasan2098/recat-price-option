import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className="md: mr-20 hover:bg-gray-400 p-2 rounded-md" >
                <a href={route.path}>
                {route.name}
                </a></li>
        </div>
    );
};

export default Link;