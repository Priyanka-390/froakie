import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph';
import { SOCIAL_MEDIA_LINKS } from '../utils/helper';

const Contact = () => {
  return (
    <div className='bg-footer bg-cover bg-center'>
        <div className="container max-w-[1180px]">
          <div className="bg-contact bg-full bg-center xl:h-[509px] lg:h-[470px] md:h-[400px] max-md:pb-12 sm:h-[300px] h-[270px] px-4 flex flex-col justify-center items-center">
            <Heading className="!text-white text-center" children="Contact" />
            <Paragraph
              className="text-center md:mb-8 mb-4 !font-cabin !text-base sm:!text-lg max-w-[766px] mx-auto !text-white"
              children="Pepe is the most memeable memecoin around the world, it‘s time to make memecoins great again and add some frog beside all dog memecoins."
            />
            <div className="flex justify-center gap-2">
              {SOCIAL_MEDIA_LINKS.map((data, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.url}
                >
                  <img src={data.icons} className='md:size-14 size-8' alt="media-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contact
