import React from 'react'
import Heading from './common/Heading';
import phone from "../assets/images/webp/buy.webp"
import Icons from './common/Icons';
import Paragraph from './common/Paragraph';
import { BUY_DATA_LIST } from '../utils/helper';

const HowBuy = () => {
  return (
    <div id="developers" className="lg:pb-[133px] lg:pt-[77px] relative z-0 md:py-20 sm:py-16 py-14">
      <div className="container max-w-[1180px] xl:px-0">
        <Heading className="text-center md:mb-20 sm:mb-14 mb-7 lg:mb-[89px]">
          How To Buy
        </Heading>
        <div className="flex max-lg:flex-wrap justify-between gap-6 items-center">
          <div className="xl:max-w-[790px] max-lg:justify-center max-lg:mx-auto flex w-full">
            <img
              src={phone}
              className="xl:w-[790px] lg:-translate-x-16 sm:-translate-x-10 -translate-x-4 max-sm:size-[300px] lg:w-[600px] xl:h-[653px]"
              alt="phone"
            />
          </div>
          <div className="max-lg:flex max-lg:justify-center md:w-[900px] xl:w-[530px] max-lg:w-full max-lg:mt-6 max-lg:flex-col">
            {BUY_DATA_LIST.map((data, i) => (
              <div
                key={i}
                className="xl:w-[530px] max-lg:mx-auto mb-3 md:mb-[15px]"
              >
                <div className="flex items-center group justify-between max-w-[530px]">
                  <p className="font-cabin group-hover:text-circle-blue duration-300 !leading-160 font-bold text-xl text-dark-blue">
                    {data.title}
                  </p>
                  <div className="lg:size-14 sm:size-11 size-9 rounded-full group-hover:bg-dark-blue group-hover:border-none duration-300 border border-circle-blue bg-transparent hover:bg-dark-blue flex justify-center items-center">
                    <Icons icon="buy-arrow" />
                  </div>
                </div>
                <Paragraph className="max-w-[531px] sm:my-4 my-3 lg:my-6">
                  {data.Paragraph}
                </Paragraph>
                <div className="w-full bg-light-grey2 bg-opacity-35 h-[1px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowBuy
