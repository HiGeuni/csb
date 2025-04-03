import React from 'react';
import { Card, Image, Text } from '@mantine/core';
import { NewsType } from '@src/types';
import { StaticImage } from 'gatsby-plugin-image';

const NewsWrapper = ({ data }: { data: NewsType[] }) => {
  console.log(data);
  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.length > 0 &&
            data.map((item, index) => (
              <Card
                className='w-[18rem] flex flex-col justify-center items-center'
                key={index}
                shadow='sm'
                padding='xl'
                component='a'
                href={item.newsUrl ? item.newsUrl : 'http://pennbit.com/'}
                target='_blank'
              >
                <Card.Section>
                  {item.imgUrl ? (
                    <Image radius='sm' src={item.imgUrl} w='auto' alt='No way!' />
                  ) : (
                    <StaticImage alt='logo' src='../../images/logo.png' width={200} />
                  )}
                </Card.Section>
                <div className='w-full'>
                  <Text fw={500} size='lg' mt='md'>
                    {item.title}
                  </Text>

                  <Text mt='xs' c='dimmed' size='sm'>
                    {item.content?.content}
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
