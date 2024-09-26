import Name from "./heroTiles/Name";
import Skills from "./heroTiles/Skills";
import Experience from "./heroTiles/Experience";
import Education from "./heroTiles/Education";

export default function Hero() {
  return (
    <div>
      {/*main layout*/}
      <div className="h-[100vh] md:max-w-6xl md:flex justify-center align-middle hidden sm:ml-[32px]">
        <div className="grid grid-cols-12 grid-rows-3 gap-6 max-h-[85%] w-full m-12">
          <div className=" col-span-6 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            <Experience />
          </div>
          <div className="col-span-3  bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="hero-pfp1.png"
                alt="pfp1"
                className="rounded-lg h-5/6"
              />
            </div>
          </div>
          <div className="col-span-3 row-span-1 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            <Skills />
          </div>
          <div className="col-span-3 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            pic2
          </div>
          <div className="col-span-6 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            <Name />
          </div>
          <div className="col-span-3 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            contact
          </div>
          <div className="col-span-3 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            dog
          </div>
          <div className="col-span-6 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            <Education />
          </div>
        </div>
      </div>
      {/*mobile layout*/}
      <div className="flex md:hidden">mobile</div>
    </div>
  );
}
