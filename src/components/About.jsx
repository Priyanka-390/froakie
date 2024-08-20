import ellipse from "../assets/images/svg/about-elipse.svg"
import about from "../assets/images/webp/froaki-about.webp"
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import PrimaryButton from './common/PrimaryButton';

const About = () => {
  return (
    <div className="md:-mt-56 sm:-mt-28 xl:pb-14 -mt-64 max-lg:bg-light-sky overflow-hidden z-10 relative">
      <div className="container relative z-0 max-w-[1180px] xl:px-0">
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute right-[-8%] -z-10 lg:-bottom-[500%] xl:block hidden pointer-events-none 2xl:bottom-[-538%]"
        />
        <Heading className="text-center md:mb-3 mb-2">
          About Our Froakie
        </Heading>
        <Paragraph className="max-w-[766px] !font-cabin md:mb-10 mb-6 text-center mx-auto">
          {" "}
          children="Pepe is the most memeable memecoin around the world, it‘s
          time to make memecoins great again and add some frog beside all dog
          memecoins."{" "}
        </Paragraph>
      </div>
      <div className="bg-light-sky px-4">
        <div className="bg-white max-w-[1180px] relative mx-auto xl:pl-16 z-10 rounded-[35px] sm:p-8 p-5 md:p-11 xl:py-8">
          <div className="flex items-center max-md:flex-wrap xl:gap-10 gap-8 2xl:gap-14">
            <div className="md:max-w-[477px] max-md:w-full flex max-md:justify-center">
              <img
                src={about}
                className="2xl:w-[477px] w-[300px] h-[330px] md:w-[470px] md:h-[420px] 2xl:h-[489px]"
                alt="about"
              />
            </div>
            <div className="2xl:mr-12 max-md:w-full">
              <div className="font-cabin max-md:mx-auto font-normal max-w-[86px] lg:mb-8 mb-4 !leading-155 border-light-border rounded-full pr-6 pl-5 border  py-[7px] text-base sm:text-base">
                About
              </div>
              <h3 className="text-dark-blue  font-cabin font-medium lg:text-custom-3xl max-md:text-center sm:text-3xl text-2xl !leading-121">
                What Froakie is All About
              </h3>
              <Paragraph className="max-md:text-center max-md:mx-auto max-w-[532px]">
                Come join the pond! Whether you’re launching bubbles or laying
                out on a lily pad, there’s a little something for everyone here.
                Hosted on the Ethereum blockchain, Froakie brings water types
                from all walks of life together.
              </Paragraph>
              <Paragraph className="max-md:text-center max-md:mx-auto max-w-[532px]">
                As we continue to evolve, community makes our growth possible…
                Even if that means protecting one another with a flurry of
                frubbles from time to time. Meanwhile, we’ve always got one
                finger on the water pulse by keeping our community in the know.
              </Paragraph>
              <Paragraph className="max-md:text-center max-md:mx-auto lg:mb-8 mb-4 max-w-[532px]">
                So if you’re ready to hop on over as a Froakie holder, prepare
                to make a splash. That’s because together, we’re taking one
                giant leap for amphibians far and wide.
              </Paragraph>
              <div className="max-md:justify-center flex">
                <PrimaryButton>Hop In</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
