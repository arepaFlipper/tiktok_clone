import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { topics } from '../utils/constants';

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6 ">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block"></p>
      <div className="flex gap-3 flex-wrap">
        {topics.map((item) => {
          return (
            <Link href={`/?topic=${item.name}`} key={item.name}>
              <div className={(topic === item.name) ? "xl:vorder-2 hover:bg-primary border-[2.5px] xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#FF1997]" : "xl:vorder-2 hover:bg-primary border xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black"}>
                <span className="font-bold text-2xl xl:text-md">
                  {item.icon}
                </span>
                <span className="font-medium text-md hidden xl:block capitalize">
                  {item.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Discover
