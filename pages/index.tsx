import Image from "next/image";
import Link from 'next/link';
import Footer from "../components/footer";
import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 dark:text-white ">
        <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-8xl lg:text-9xl xl:text-9xl">
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            Welcome Noob.
          </span>{' '}
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          Here's some Basic Copy Paste Templates that can be used by Any and All Discord Bot List Staff.
        </p>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link href="/approval">
              <a className="flex items-center justify-center w-full px-8 py-3 font-mono text-base no-underline font-medium text-white bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-white dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-slate-500 betterhover:dark:hover:bg-color1 md:py-3 md:text-base md:leading-6 md:px-10">
              ✔️ Approval Templates
              </a>
            </Link>
          </div>
          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <Link href="/denial">
              <a className="flex items-center justify-center w-full px-8 py-3 font-mono text-base no-underline font-medium text-white bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-white dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-slate-500 betterhover:dark:hover:bg-color1 md:py-3 md:text-base md:leading-6 md:px-10">
               ❌ Denial Templates
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
