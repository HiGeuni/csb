import React from 'react';

interface IProps {
  title: string;
  isSplit?: boolean;
}

const Title = ({ title, isSplit }: IProps) => {
  return (
    <>
      <div className='text-2xl font-bold flex justify-center'>{title}</div>
      {/*{isSplit && <hr className='text-gray' />}*/}
    </>
  );
};

export default Title;
