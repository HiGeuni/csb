import React from 'react';
import { PaperType } from '@src/types';
import moment from 'moment';
import { Link } from 'gatsby';

interface IProps {
  data: PaperType[];
}
const ProductContainer = ({ data }: IProps) => {
  return (
    <div className='container mx-auto'>
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

export default ProductContainer;
