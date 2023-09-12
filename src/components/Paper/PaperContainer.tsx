import React from 'react';
import { PaperType } from '@src/types';
import moment from 'moment';
import { Link } from 'gatsby';

interface IProps {
  data: PaperType[];
}
const PaperContainer = ({ data }: IProps) => {
  return (
    <div className='px-8 py-4'>
      <div className='p-2 text-2xl font-bold'>논문</div>
      {data.map((paper) => (
        <div className='p-2' key={paper.slug}>
          <Link className='text-lg font-bold cursor-pointer' to={`/paper/${paper.slug}`}>
            {paper.paperName}
          </Link>
          <p>{moment(paper.publish).format('YYYY-MM-DD')}</p>
        </div>
      ))}
    </div>
  );
};

export default PaperContainer;
