import React from 'react';

const s = ['home', 'help', 'notice'];

export const PathInfo = () => {
  return (
    <div className='  text-sm'>
      {s.map((item, index) => {
        return (
          <span key={index}>
            {item} {index === s.length - 1 ? '' : '/'}
          </span>
        );
      })}
    </div>
  );
};
