import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className="md: mr-20" >
                <a href={route.path}>
                {route.name}
                </a></li>
        </div>
    );
};

export default Link;