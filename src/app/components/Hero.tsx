import Name from "./heroTiles/Name";
import Skills from "./heroTiles/Skills";

export default function Hero() {
  return (
    <div>
      {/*main layout*/}
      <div className="h-[100vh] md:max-w-6xl md:flex justify-center align-middle hidden sm:ml-[32px]">
        <div className="grid grid-cols-12 grid-rows-3 gap-6 max-h-[85%] w-full m-12">
          <div className="col-span-6 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            exp
          </div>
          <div className="col-span-3 bg-soft-gray dark:bg-soft-dark-gray drop-shadow-md transition-all duration-300 rounded-3xl flex justify-center items-center">
            pic1
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
            education
          </div>
        </div>
      </div>
      {/*mobile layout*/}
      <div className="flex md:hidden">mobile</div>
    </div>
  );
}
