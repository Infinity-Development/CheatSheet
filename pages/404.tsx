export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
      <div className="px-6 py-4 rounded shadow-lg bg-slate-800">
        <div className="mb-2 text-xl font-bold">
          <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-8xl lg:text-9xl xl:text-9xl">
            <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
              404!
            </span>{" "}
          </h1>
          <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
            Whatever you are looking for has been moved or no longer exists.
            Please check the URL and Try Again!
          </p>
        </div>
      </div>
    </div>
  );
}
