import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph';
import {FOOTER_LINK_LIST, SOCIAL_MEDIA_LINKS_LIST } from '../utils/helper';

const Contact = () => {
  return (
    <div id='contact' className="bg-footer pt-[95px] pb-[99px] bg-cover bg-center">
      <div className="container max-w-[1180px]">
        <div className="bg-contact bg-full bg-center xl:h-[509px] lg:h-[470px] md:h-[400px] max-md:pb-12 sm:h-[300px] h-[270px] px-4 flex flex-col justify-center items-center">
          <Heading className="!text-white text-center" children="Contact" />
          <Paragraph
            className="text-center md:mb-8 mb-4 !font-cabin !text-base sm:!text-lg max-w-[766px] mx-auto !text-white"
            children="Pepe is the most memeable memecoin around the world, it‘s time to make memecoins great again and add some frog beside all dog memecoins."
          />
          <div className="flex justify-center gap-2">
            {SOCIAL_MEDIA_LINKS_LIST.map((data, i) => (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={data.url}
              >
                <img
                  src={data.icons}
                  className="md:size-14 size-8"
                  alt="media-icon"
                />
              </a>
            ))}
          </div>
        </div>
        <div className='flex items-center max-md:flex-col md:mt-[82px] mt-5 md:gap-12 justify-center max-md:pt-4 md:justify-between'>
          <div className="flex items-center  gap-4 lg:gap-10">
            {FOOTER_LINK_LIST.map((data, i) => (
              <a
                key={i}
                href={data.url}
                className="font-jost hover:text-circle-blue duration-300 font-semibold !leading-146 text-sm text-dark-blue"
              >
                {data.title}
              </a>
            ))}
          </div>
          <p className="font-jost font-medium !leading-146 text-sm text-dark-blue">
            © 2000-2024, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact
