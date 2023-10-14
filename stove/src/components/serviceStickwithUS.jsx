import { faBoltLightning, faCoins, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceStickWithUS() {
  return (
    <section className="px-5 md:px-10 mt-7 flex flex-col gap-4 mt-5 items-start">
      <h1 className="md:text-[60px] text-[45px] font-medium">
        People stick with us because
      </h1>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-center md:flex-row flex-col w-full  mx-auto gap-10 py-4">
          {/* <img src={timing} className="w-[60px]" /> */}

          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] h-[50vh] max-h-[30vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faBoltLightning} />
            </div>
            <h3 className="font-semibold text-[22px]">
              The process is fast and clear
            </h3>
          </div>
          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] h-[50vh] max-h-[30vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <h3 className="font-semibold text-[22px]">
              Our couriers are verified and qualified
            </h3>
          </div>
          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] h-[50vh] max-h-[30vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
              <FontAwesomeIcon icon={faCoins} />
            </div>
            <h3 className="font-semibold text-[22px]">Prices are fair</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
