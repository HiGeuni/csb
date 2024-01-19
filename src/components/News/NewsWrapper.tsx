import React from 'react';
import { Card, Image, Text } from '@mantine/core';
import { NewsType } from '@src/types';

const NewsWrapper = ({ data }: { data: NewsType[] }) => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4'>
          {data.map((item, index) => (
            <Card
              className='w-[18rem]'
              key={index}
              shadow='sm'
              padding='xl'
              component='a'
              href={'https://google.com'}
              target='_blank'
            >
              <Card.Section>
                <Image radius='sm' src={item.imgUrl} w='auto' alt='No way!' />
              </Card.Section>
              <div>
                <Text fw={500} size='lg' mt='md'>
                  {item.title}
                </Text>

                <Text mt='xs' c='dimmed' size='sm'>
                  {item.content.content}
                </Text>
                <Text mt='xs' c='dimmed' size='sm'>
                  2024.01.11
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsWrapper;
