import React, { useState } from 'react';
import Logo from '../images/abm_logo.png';

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" [order:0]  flex-[0_0_auto] h-auto relative w-full">
      <nav
        className={`${
          menuOpen
            ? 'bg-white w-full transform-none [transform-origin:50%_50%_0px] flex-col flex gap-0 h-auto max-h-screen overflow-auto overscroll-contain content-center justify-start items-center p-0 relative'
            : 'bg-white w-full flex-col gap-0 content-center justify-start items-center flex md:flex-row md:gap-5 h-[64px] overflow-hidden p-0 relative shadow-md after:border-b-gray-500 [transform-origin:50%_50%_0px]'
        } `}
      >
        <div className=" cursor-pointer [gap:unset] justify-between p-[10px] w-full place-content-center items-center flex flex-[0_0_auto] md:gap-0 h-min overflow-visible md:p-[10px_0px_10px_10px]  md:w-min">
          <div className=" flex [background-size:100%_100%] flex-shrink-0 [image-rendering:pixelated] flex-[0_0_auto] h-6 relative w-[26px]">
            <div className=" overflow-hidden absolute p-0">
              <a href="/">
                <img src={Logo} alt="auroiah logo" />
              </a>
            </div>
          </div>
          <div
            className="h-[44px] w-[44px] md:hidden  flex-[0_0_auto] relative overflow-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <>
                <div className="bg-[rgb(153,153,153)] rounded-[50%/500%] [transform:rotate(-45deg)] [transform-origin:50%_50%_0px] [top:calc(50%-1px)] h-[2px] [left:calc(50%-10px)] absolute overflow-hidden w-5 " />
                <div className="bg-[rgb(153,153,153)] rounded-[50%/500%] [transform:rotate(45deg)] [transform-origin:50%_50%_0px] [top:calc(50%-1px)] h-[2px] [left:calc(50%-10px)] absolute overflow-hidden w-5" />
              </>
            ) : (
              <>
                <div className="bg-[rgb(153,153,153)] rounded-[10px] transform-none h-[2px] [left:calc(50%-10px)] overflow-hidden absolute [top:calc(62.5%-1px)] w-5" />
                <div className="bg-[rgb(153,153,153)] rounded-[10px] transform-none h-[2px] [left:calc(50%-10px)] overflow-hidden absolute [top:calc(37.5%-1px)] w-5" />
              </>
            )}
          </div>
        </div>
        {/* menu open */}
        <div
          className={`${
            menuOpen
              ? ' opacity-100 flex  [transform-origin:50%_50%_0px] justify-start flex-col  p-5   flex-[0_0_auto] h-min overflow-visible relative rounded-lg shadow-md place-content-center gap-5  w-full '
              : 'opacity-0 hidden'
          }  `}
        >
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 [transform-origin:50%_50%_0px] flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto ">
            <a
              href="/projects"
              className=" font-sans text-3xl font-semibold text-left "
            >
              <p className="font-sans text-3xl font-semibold text-left">
                Portfolio
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 [transform-origin:50%_50%_0px] flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto ">
            <a
              href="/games"
              className=" font-sans text-3xl font-semibold text-left "
            >
              <p className="font-sans text-3xl font-semibold text-left">
                Games
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 [transform-origin:50%_50%_0px] flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto ">
            <a
              href="/about"
              className=" font-sans text-3xl font-semibold text-left text-black "
            >
              <p className="font-sans text-3xl font-semibold text-left">
                About
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 [transform-origin:50%_50%_0px] flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto ">
            <a
              href="https://www.linkedin.com/in/auroiahmorgan/"
              className=" font-sans text-3xl font-semibold text-left text-black "
              target="blank"
            >
              <p className="font-sans text-3xl font-semibold text-left">
                LinkedIn
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 [transform-origin:50%_50%_0px] flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto ">
            <a
              href="https://github.com/abmdev86"
              className=" font-sans text-3xl font-semibold text-left text-black "
              target="blank"
            >
              <p className="font-sans text-3xl font-semibold text-left">
                Github
              </p>
            </a>
          </div>
        </div>
        {/* menu */}

        <div className=" place-content-center items-center md:flex flex-[0_0_auto] gap-5 h-min overflow-visible p-0 relative w-min hidden ">
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto">
            <a href="/projects">
              <p className=" font-sans text-sm font-semibold leading-[2em]">
                Portfolio
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto">
            <a href="/games">
              <p className=" font-sans text-sm font-semibold leading-[2em]">
                Games
              </p>
            </a>
          </div>
          <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative select-none whitespace-pre w-auto">
            <a href="/about">
              <p className=" font-sans text-sm font-semibold leading-[2em]">
                About
              </p>
            </a>
          </div>
        </div>

        {/* <Menu as="div" className="relative z-100  md:hidden">
        <Menu.Button className="flex items-center space-x-px group">
          <ChevronDownIcon className="w-5 h-5 shrink-0 text-black group-hover:text-current" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="place-content-center items-center flex flex-[0_0_auto] gap-5 h-min overflow-visible p-0 relative w-min md:hidden">
            <div className="flex items-center space-x-2 py-4 px-4 mb-2">
              <div className="flex flex-col truncate">
                <span>Menu</span>
              </div>
              <div className="py-2">
                <div className="px-2 last:border-t last:pt-2 last:mt-2">
                  <Menu.Item>sss</Menu.Item>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu> */}
      </nav>
    </div>
  );
}
