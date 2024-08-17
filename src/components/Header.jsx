import React from 'react'
import NavBar from './NavBar'
import { SOCIAL_MEDIA_LINKS } from '../utils/helper';
import PrimaryButton from './common/PrimaryButton';
import froaki from "../assets/images/webp/froaki.webp"
import cloud from "../assets/images/webp/cloud.webp"

const Header = () => {
  return (
    <div className="bg-hero relative z-0 bg-cover xl:px-0 bg-center h-[1229px] pt-10">
      <NavBar />
      <div className="container max-w-[1180px] xl:px-0">
        <div className="mt-9 max-md:flex-wrap flex justify-between">
          <div className="max-md:w-full">
            <div className="max-w-[214px] max-md:mx-auto w-full rounded-full p-[5px] flex gap-2.5 items-center bg-sky mb-3">
              <span className=" text-white font-cabin text-xs font-bold bg-sky-blue py-2 px-5 rounded-full !leading-121">
                Coin
              </span>
              <p className="text-sm text-white font-cabin !leading-150 font-normal">
                # Second_Chance
              </p>
            </div>
            <h1 className="my-3 max-md:text-center text-custom-6xl text-white font-bold font-cabin !leading-130">
              $Froakie
            </h1>
            <p className="text-white text-lg max-md:text-center font-normal font-cabin !leading-150">
              Froakie Coin, fully decentralized version, that‘s how crypto
              should be.
            </p>
            <p className="text-white mt-3 max-md:text-center text-lg font-normal font-cabin !leading-150">
              CA: 0xf940400F89B8eA896b67110a0D
              <span className="block"></span> CE492FF6326b10
            </p>
            <div className="flex max-md:justify-center gap-2 my-8">
              {SOCIAL_MEDIA_LINKS.map((data, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.url}
                >
                  <img src={data.icons} alt="" />
                </a>
              ))}
            </div>
            <div className="flex max-md:justify-center">
              <PrimaryButton children="Get started" />
            </div>
          </div>
          <div>
            <img
              src={froaki}
              className="xl:w-[536px] lg:w-[550px] md:w-[600px] h-[400px] lg:h-[464px]"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="absolute lg:-bottom-7 md:-bottom-2 bottom-1 -z-10 right-0 w-full left-0">
        <img src={cloud} className="md:h-[720px] w-full" alt="cloud" />
      </div>
    </div>
  );
}

export default Header
