import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfilePic } from '../images';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { CertificationLogos } from '../lib';
function CertLogo({ logoSrc }) {
  return (
    <div className=" place-content-center items-center flex flex-[0_0_auto] flex-wrap gap-[60px] h-min max-w-full overflow-visible p-0 relative w-full">
      <div className="[aspect-ratio:2.95652/1] flex-[0_0_auto] h-auto max-h-[46px] overflow-hidden relative w-[136px]">
        <div className=" absolute inset-0 [border-radius:inherit]">
          <img
            src={logoSrc}
            className=" block w-full h-full [border-radius:inherit] [object-position:center_center] bg-cover [image-rendering:auto]"
            alt="certification"
          />
        </div>
      </div>
    </div>
  );
}

CertLogo.propTypes = {
  logoSrc: PropTypes.string,
};
export default function About() {
  return (
    <div className="m-h-screen w-full">
      <div className=" content-center justify-start items-center bg-white flex flex-col gap-0 h-min overflow-hidden p-0  relative">
        {/* about intro section */}
        <div className=" p-[30px] content-center justify-start items-center flex flex-[0_0_auto]  flex-col gap-[50px] h-min max-w-full overflow-visible md:p-[50px] relative w-[700px]">
          <div className=" content-center justify-between items-center flex flex-[0_0_auto] h-min overflow-visible p-0  relative w-full">
            {/* small image icon */}
            <div className=" aspect-square rounded-[41px] flex-[0_0_auto] h-auto max-h-[48px] overflow-visible relative w-[48px]">
              <div
                style={{
                  backgroundImage: `url(${ProfilePic})`,
                }}
                className="bg-cover bg-center border border-[rgb(196,196,196)] absolute [border-radius:inherit] inset-0"
              />
            </div>
            {/* linked */}
            <div className=" content-center justify-end items-center hidden md:flex flex-[0_0_auto] gap-4 h-min overflow-visible p-0  relative w-min">
              <div className=" place-content-center items-center bg-[#f2f2f2] rounded-[50%] flex flex-[0_0_auto] gap-[10px] h-12 overflow-visible p-3 relative w-12">
                <div className=" flex-[0_0_auto] h-6 relative w-6">
                  <a
                    href="https://www.linkedin.com/in/auroiahmorgan/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-black h-full w-full inline-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 flex-[0_0_auto] h-auto overflow-hidden relative  w-full  [overflow-wrap:break-word] [word-break:break-word]  ">
            <h3 className="  text-sm md:text-xl  tracking-tighter md:tracking-normal text-left text-[rgb(0,17,34)] m-0 p-0">
              As a React developer, I bring a passion for creating cutting-edge
              web applications and a deep commitment to delivering exceptional
              user experiences. With a solid foundation in front-end
              development, I have honed my skills in harnessing the power of the
              React JavaScript library to build dynamic, responsive, and
              visually stunning interfaces. My journey in web development has
              equipped me with a strong command of HTML, CSS, and JavaScript,
              allowing me to craft elegant solutions to complex problems. I
              thrive in a fast-paced, collaborative environment, staying current
              with the latest industry trends and best practices to ensure that
              my work remains at the forefront of the ever-evolving web
              development landscape. I am dedicated to pushing the boundaries of
              what is possible in web development and am excited to contribute
              my expertise to innovative projects.
            </h3>
          </div>
        </div>
        {/* end of about intro section */}
        {/* top 3 games */}
        <div className="[border:unset] p-[30px] w-full justify-start items-start flex flex-[0_0_auto] gap-[60px] md:gap-[50px] h-min max-w-full overflow-visible relative md:w-[700px]  ">
          <div className=" flex-[0_0_auto] gap-[30px] w-full content-start justify-center items-start rounded-[28px] flex md:flex-[2_0_0px] flex-col md:gap-5 h-min overflow-visible p-0  relative md:w-min ">
            <div className=" outline-none flex  flex-col justify-start flex-shrink-0 flex-[0_0_auto] h-auto overflow-hidden relative w-full [word-break:break-word] [overflow-wrap:break-word] ">
              <p className=" font-sans font-medium text-xs">
                Top 3 favorite games
              </p>
            </div>
            <div className=" justify-start items-start flex flex-[0_0_auto] gap-5 h-min overflow-visible p-0 relative w-full">
              <div className=" justify-start items-start flex flex-[1_0_0px] flex-col gap-[8px] h-min overflow-visible p-0 relative w-min">
                <div className=" justify-start items-start flex flex-[0_0_auto] flex-col gap-0 h-min overflow-visible p-0 relative w-min">
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <h3 className=" font-sans text-lg font-semibold tracking-tighter text-left text-[rgb(0,17,34)]">
                      Diablo (series)
                    </h3>
                  </div>
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <p className=" text-xs font-sans font-medium tracking-normal text-left text-[rgb(102,102,102)]">
                      {' '}
                      Love this game series since a kid!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start flex flex-[0_0_auto] gap-5 h-min overflow-visible p-0 relative w-full">
              <div className=" justify-start items-start flex flex-[1_0_0px] flex-col gap-[8px] h-min overflow-visible p-0 relative w-min">
                <div className=" justify-start items-start flex flex-[0_0_auto] flex-col gap-0 h-min overflow-visible p-0 relative w-min">
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <h3 className=" font-sans text-lg font-semibold tracking-tighter text-left text-[rgb(0,17,34)]">
                      Division 2
                    </h3>
                  </div>
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <p className=" text-xs font-sans font-medium tracking-normal text-left text-[rgb(102,102,102)]">
                      {' '}
                      PS5 and PC!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start flex flex-[0_0_auto] gap-5 h-min overflow-visible p-0 relative w-full">
              <div className=" justify-start items-start flex flex-[1_0_0px] flex-col gap-[8px] h-min overflow-visible p-0 relative w-min">
                <div className=" justify-start items-start flex flex-[0_0_auto] flex-col gap-0 h-min overflow-visible p-0 relative w-min">
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <h3 className=" font-sans text-lg font-semibold tracking-tighter text-left text-[rgb(0,17,34)]">
                      Gran Turismo 7
                    </h3>
                  </div>
                  <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-hidden relative w-full whitespace-pre [word-break:break-word] [overflow-wrap:break-word]">
                    <p className=" text-xs font-sans font-medium tracking-normal text-left text-[rgb(102,102,102)]">
                      {' '}
                      My favorite car is the Camero ZL1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* certifications */}
        <div className=" p-[60px_20px] md:p-[80px_40px] place-content-center items-center bg-white flex flex-[0_0_auto] flex-col gap-[60px] h-auto overflow-hidden lg:p-[100px_40px] relative w-full">
          <div className=" outline-none flex md:flex-col justify-start  flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-visible relative whitespace-pre w-auto">
            <h2 className=" font-bold text-black text-[16px] tracking-normal md:tracking-[-2.1px] md:text-[50px]  capitalize text-start">
              certifications and affiliations
            </h2>
          </div>
          {/* cert logos */}
          {CertificationLogos.map((logo, index) => (
            <CertLogo logoSrc={logo} key={index} />
          ))}
        </div>
        {/* end certifications */}
      </div>
    </div>
  );
}
