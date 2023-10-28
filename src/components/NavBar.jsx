import { Menu, Transition } from '@headlessui/react';

import {
  ChevronDownIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';

const links = [
  {
    href: '/projects',
    label: 'Projects',
    icon: (
      <BookOpenIcon className="w-5 h-5 inline-block shrink-0 text-gray-500" />
    ),
  },
  {
    href: '/games',
    label: 'Games',
    icon: (
      <PuzzlePieceIcon className="w-5 h-5 inline-block shrink-0 text-gray-500" />
    ),
  },
  {
    href: 'https://github.com/abmdev86',
    label: 'Github',
    icon: <i className="fa-brands fa-github"></i>,
  },
  {
    href: 'https://twitter.com/abm_dev',
    label: 'Twitter',
    icon: <i className="fa-brands fa-linkedin"></i>,
  },
  {
    href: 'https://www.linkedin.com/in/auroiahmorgan/',
    label: 'LinkedIn',
    icon: <i className="fa-brands fa-twitter"></i>,
  },
];

const Navbar = () => {
  return (
    <header className="h-16 w-full shadow-md">
      <div className="h-full  mx-auto">
        <div className="h-full px-4 flex justify-between items-center space-x-4">
          <a href="/" className="flex items-center space-x-1 no-underline">
            <span className="text-xl font-semibold tracking-wide">
              Auroiah<span className="text-rose-600">Morgan</span>
            </span>
          </a>
          <div className="flex items-center space-x-4">
            {links.map(link => (
              <a
                href={link.href}
                className="hidden sm:block hover:bg-gray-200 transition px-3 py-1 rounded-md "
              >
                <span className="inline-block p-1">{link.icon}</span>

                {link.label}
              </a>
            ))}

            <Menu as="div" className="relative z-50 md:hidden">
              <Menu.Button className="flex items-center space-x-px group">
                <ChevronDownIcon className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-current" />
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
                <Menu.Items className="absolute right-0 w-72 overflow-hidden mt-1 divide-y divide-gray-100 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex items-center space-x-2 py-4 px-4 mb-2">
                    <div className="flex flex-col truncate">
                      <span>Menu</span>
                    </div>
                    <div className="py-2">
                      <div className="px-2 last:border-t last:pt-2 last:mt-2">
                        {links.map(link => (
                          <Menu.Item>
                            <a
                              href={link.href}
                              className="flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100"
                            >
                              {link.icon}
                              <span>{link.label}</span>
                            </a>
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
