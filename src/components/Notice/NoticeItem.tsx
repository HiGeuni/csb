import React from 'react';
import { NoticeType } from '@src/types';
import { NoticeStyle } from '@src/assets/noticeStyle';
import moment from 'moment';

const NoticeItem = ({ notice }: { notice: NoticeType }) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mb-4'>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='text-xl font-bold flex gap-x-2 items-center'>
            {notice.title}
            <div
              className={`p-2 rounded-2xl text-xs text-white`}
              style={{
                backgroundColor: NoticeStyle[notice.tag].color,
              }}
            >
              {notice.tag}
            </div>
          </div>
          <div className='text-sm'>{moment(notice.createdAt).format('YYYY-MM-DD')}</div>
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
