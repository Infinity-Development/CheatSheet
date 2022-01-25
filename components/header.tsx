import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { HomeIcon } from '@heroicons/react/outline';
import { SupportIcon } from '@heroicons/react/outline';
import { CodeIcon } from '@heroicons/react/outline';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-slate-800">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image
            src="/DBL.png"
            width={40}
            height={40}
            className="rounded-full"
            priority
            alt="logo"
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              DBL Templates
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul className={cn("md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto", mobileMenuIsOpen ? `block` : `hidden`)}>
         <li className="mt-3 md:mt-0 md:ml-6" key='Home'>
          <Link href='/'>
            <a className="flex text-white"><HomeIcon className="w-5 h-5" />&nbsp;Home</a>
          </Link>
         </li>
         <li className="mt-3 md:mt-0 md:ml-6" key='Support'>
          <Link href='https://infinitybots.gg/discord'>
          <a className="flex text-white" target="_blank"><SupportIcon className="w-5 h-5" />&nbsp;Support</a>
          </Link>
         </li>
         <li className="mt-3 md:mt-0 md:ml-6" key='Source'>
          <Link href='https://github.com/InfinityBotList/CheatSheet'>
          <a className="flex text-white" target="_blank"><CodeIcon className="w-5 h-5" />&nbsp;Source</a>
          </Link>
         </li>
        </ul>
      </div>
    </header>
  );
}
