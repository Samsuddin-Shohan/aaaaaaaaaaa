import React from 'react';
import headerLogo from '../../assets/Logo.svg'
const Header = () => {
    return (
        <div className='shadow-lg shadow-gray-100 h-16 flex justify-center items-center'>
            <img src={headerLogo} alt="" />
        </div>
    );
};

export default Header;