import Image from "next/image";
import Footer from "../components/footer";
import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import denyFeatures from "../components/denial/features";

export default function DenialPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-8xl lg:text-9xl xl:text-9xl">
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            Denial Reasons.
          </span>{' '}
      </h1>
      <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          Pre-Configured list of Reasons why a Bot has been denied
      </p>
        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {denyFeatures.map((feature) => (
            <div
              className="p-10 w-auto bg-slate-800 shadow-lg rounded-xl dark:bg-opacity-5 "
              key={feature.name}
            >

              <div className="mt-4">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base font-medium text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div className="mb-3 xl:w-96">
                <br />
                <button
                  onClick={feature.click}
                  className="items-center justify-center w-50 px-8 py-3 font-mono text-md font-medium text-white bg-slate-850 border rounded border-slate-500"
                >Copy to Clipboard!</button>
              </div>
           </div>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
