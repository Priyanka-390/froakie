import ellipse from "../assets/images/svg/about-elipse.svg";
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import Icons from './common/Icons';
import { TOKENOMICS_DATA_LIST } from '../utils/helper';

const Tokenomics = () => {
  return (
    <div id="faq" className='lg:pb-[74px]'>
      <div className="container max-w-[1180px] xl:px-0">
        <Heading className="text-center md:mb-3 mb-2">TOKENOMICS</Heading>
        <Paragraph className="max-w-[766px] !font-cabin md:mb-12 mb-5 text-center mx-auto">
          {" "}
          Pepe is the most memeable memecoin around the world, it‘s time to make
          memecoins great again and add some frog beside all dog memecoins."{" "}
        </Paragraph>
              <div className="grid gap-3.5 relative sm:grid-cols-2 z-0 grid-cols-1 justify-center lg:grid-cols-4">
                  <img src={ellipse} className="absolute pointer-events-none -z-10 bottom-[-23%] md:block hidden left-[-5%]" alt="ellipse" />
                  {TOKENOMICS_DATA_LIST.map((data,i)=>(
                   <div key={i} className={`col-span-1 flex max-sm:justify-center max-md:flex ${ i===2 && "sm:justify-end"} ${i === 0 && "sm:justify-end"}`}>
            <div className="p-[25px] max-w-[283px] flex-col flex justify-center items-center rounded-3xl  md:h-[207px] bg-light-white">
              <p className="font-outfit mb-5 font-semibold xl:text-custom-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-circle-blue">
                                  {data.title}%
              </p>
              <Icons icon="dotted-line" />
                              <p className='font-outfit text-grey-text mt-5 !leading-66 font-medium sm:text-xl text-lg md:text-2xl'>{data.description}</p>
            </div>
          </div>
                  ))}
         
        </div>
      </div>
    </div>
  );
}

export default Tokenomics
