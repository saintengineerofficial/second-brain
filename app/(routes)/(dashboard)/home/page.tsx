import React from 'react'
import HomeContent from './_components/HomeContent';
import { generateUUID } from '@/lib/utils';

const Page = () => {
  const id = generateUUID();

  return <HomeContent key={id} id={id} />;
}

export default Page