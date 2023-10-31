import marketing from "../assets/marketing.jpg"
import product from "../assets/Afolake_Ismaila.jpg";
import card1 from "../assets/Card_component_v2-small_2x-11.jpg";
import card2 from "../assets/Card_component_v2-small_2x-2.jpg";
export default function TeamCareer() {

    return (
      <section className="py-5 md:px-10 px-2 relative">
        <div className="bg-white rounded-[50px] md:p-7 p-3">
          <div>
            <h2 className="text-[45px] font-semibold max-w-[700px]">
              Move fast in small autonomous teams
            </h2>
            <div className="md:translate-x-10 my-5 max-w-[700px] translate-x-4">
              <p className="text-[20px]">
                We operate in lean teams that move rapidly, resolve dependencies
                quickly, and avoid unnecessary bureaucracy
              </p>
              <div className="mt-6 hover:translate-y-2 duration-75 md:block hidden w-fit">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                  className="button py-3 px-5 text-[#323942]"
                >
                  Download app
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-end">
            <div className="flex flex-col gap-5 translate-y-5">
              <div className="group relative w-fit overflow-hidden rounded-[30px]">
                <img
                  src={marketing}
                  alt="marketing"
                  className="rounded-[20px] max-w-[300px] w-full group-hover:scale-125 duration-500"
                />
                <h4 className="font-semibold text-[25px] duration-500 group-hover:opacity-100 md:opacity-0 md:absolute md:w-full md:h-full md:bg-[#00000031] group-hover:bg-[#00000031] group-hover:text-white md:left-[50%] md:text-white grid place-items-center md:translate-x-[-50%] md:translate-y-[-50%] relative md:top-[50%]">
                  Marketing
                </h4>
              </div>
              <div className="group relative w-fit overflow-hidden rounded-[30px]">
                <img
                  src={product}
                  alt="marketing"
                  className="rounded-[20px] max-w-[300px] w-full group-hover:scale-125 duration-500"
                />
                <h4 className="font-semibold text-[25px] duration-500 group-hover:opacity-100 md:opacity-0 md:absolute md:w-full md:h-full md:bg-[#00000031] group-hover:bg-[#00000031] group-hover:text-white md:left-[50%] md:text-white grid place-items-center md:translate-x-[-50%] md:translate-y-[-50%] relative md:top-[50%]">
                  Product Design
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="group relative w-fit overflow-hidden rounded-[30px]">
                <img
                  src={card1}
                  alt="Operations Manager"
                  className="rounded-[20px] max-w-[300px] w-full group-hover:scale-125 duration-500"
                />
                <h4 className="font-semibold text-[25px] duration-500 group-hover:opacity-100 md:opacity-0 md:absolute md:w-full md:h-full md:bg-[#00000031] group-hover:bg-[#00000031] group-hover:text-white md:left-[50%] md:text-white grid place-items-center md:translate-x-[-50%] md:translate-y-[-50%] relative md:top-[50%]">
                  Operations Manager
                </h4>
              </div>
              <div className="group relative w-fit overflow-hidden rounded-[30px]">
                <img
                  src={card2}
                  alt="Engineer"
                  className="rounded-[20px] max-w-[300px] w-full group-hover:scale-125 duration-500"
                />
                <h4 className="font-semibold text-[25px] duration-500 group-hover:opacity-100 md:opacity-0 md:absolute md:w-full md:h-full md:bg-[#00000031] group-hover:bg-[#00000031] group-hover:text-white md:left-[50%] md:text-white grid place-items-center md:translate-x-[-50%] md:translate-y-[-50%] relative md:top-[50%]">
                  Engineer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}