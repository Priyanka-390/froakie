import React from 'react'
import NavBar from './NavBar'
import { SOCIAL_MEDIA_LINKS_LIST } from '../utils/helper';
import PrimaryButton from './common/PrimaryButton';
import froaki from "../assets/images/webp/froaki.webp"
import cloud from "../assets/images/webp/cloud.webp"

const Header = () => {
  return (
    <div className="bg-hero relative z-0 bg-cover xl:px-0 bg-center h-[1229px] pt-6 md:pt-10">
      <NavBar />
      <div className="container max-w-[1180px] xl:px-0">
        <div className="mt-9 max-md:flex-wrap flex justify-between">
          <div className="w-full max-md:mb-9">
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
            <div className="flex max-md:justify-center gap-2 my-4 md:my-8">
              {SOCIAL_MEDIA_LINKS_LIST.map((data, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.url}
                  className="hover:-translate-y-2 duration-300"
                >
                  <img src={data.icons} alt="" />
                </a>
              ))}
            </div>
            <div className="flex max-md:justify-center">
              <PrimaryButton>Get started</PrimaryButton>
            </div>
          </div>
          <div className="flex max-md:justify-center justify-end w-full">
            <img
              src={froaki}
              className="xl:w-[536px] lg:w-[550px] md:w-[500px] sm:h-[400px] h-[300px] lg:h-[464px]"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="absolute lg:bottom-12 xl:-bottom-2 md:bottom-16 sm:bottom-16 bottom-64 -z-10 right-0 w-full left-0">
        <img
          src={cloud}
          className="2xl:h-[720px] xl:h-[680px] md:h-[600px] sm:h-[290px] h-[159px] w-full"
          alt="cloud"
        />
      </div>
    </div>
  );
}

export default Header
