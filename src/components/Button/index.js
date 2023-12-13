import React from 'react';

const Buttoon = ({
    label='Button',
    type = 'button',
    className='',
    disabled=false,
}) => {
    
  return (
    <button type={type} className={`bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full m-4 ${className}`}
        disabled={disabled}>{label}
    </button>
  );
};

export default Buttoon;
