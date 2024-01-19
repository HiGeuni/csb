import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type PaginationProps = {
  currentPage: number;
  numPages: number;
};

const LinkPrefix = '/help/notice/';

export const Pagination = ({ currentPage, numPages }: PaginationProps) => {
  const prevPossible = currentPage > 10;
  const nextPossible = numPages > Math.ceil(currentPage / 10) * 10;

  const prevPage = LinkPrefix + (Math.floor(currentPage / 10) * 10).toString();
  const nextPage = LinkPrefix + (Math.ceil(currentPage / 10) * 10 + 1).toString();

  const unit = currentPage > 10 ? Math.floor(currentPage / 10) * 10 : 0;
  const array = Array.from({ length: Math.min(10, numPages - unit) }, (_, i) => i + 1 + unit);

  return (
    <section className='flex gap-2 items-center'>
      {prevPossible && (
        <Link to={prevPage} className={`flex text-sm items-center gap-1`}>
          <FaChevronLeft /> 이전
        </Link>
      )}
      {array.map((page) => (
        <Link
          key={page}
          className={`border rounded-md w-8 h-8 flex justify-center items-center ${
            currentPage === page && 'bg-accent text-white border-accent'
          }`}
          to={`/help/notice/${page === 1 ? '' : page}`}
        >
          {page}
        </Link>
      ))}
      {nextPossible && (
        <Link to={nextPage} className={`flex text-sm items-center gap-0.5`}>
          다음
          <FaChevronRight />
        </Link>
      )}
    </section>
  );
};
