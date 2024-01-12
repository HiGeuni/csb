import React from 'react';
import { newsDummy } from '@src/assets/dummy/newsDummy';
import { Card, Image, Text } from '@mantine/core';

const NewsWrapper = () => {
  const data = newsDummy;
  return (
    <>
      <div className='w-full h-8 pt-2 font-bold text-lg'>보도 자료</div>
      <hr />
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4'>
          {data.map((item, index) => {
            return (
              <Card className='w-[18rem]' key={index} shadow='sm' padding='xl' component='div'>
                <Card.Section>
                  <Image
                    radius='sm'
                    src='https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                    w='auto'
                    alt='No way!'
                  />
                </Card.Section>
                <div>
                  <Text fw={500} size='lg' mt='md'>
                    {item.title}
                  </Text>

                  <Text mt='xs' c='dimmed' size='sm'>
                    Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                  </Text>
                  <Text mt='xs' c='dimmed' size='sm'>
                    2024.01.11
                  </Text>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsWrapper;
