import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CareerServices() {
    return (
      <section className="py-5 md:px-12 px-2">
        <div className="mb-5">
          <h2 className="font-semibold md:text-[60px] text-[30px]">
            Our{" "}
            <span className="relative">
              {" "}
              Services{" "}
              <div className="w-full absolute h-[20px] bg-[#a8e92f] bottom-[18px] rounded-full left-0 -z-40"></div>
            </span>
          </h2>
        </div>
        <div className="auto-grid">
          <div className="bg-white rounded-[30px] py-7 px-5 max-w-[350px] flex flex-col gap-3">
            <div className="w-[60px] h-[60px] rounded-full border-[1.5px] border-[#a8e92f] grid place-items-center">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <p className="text-[22px]">Gas Delivery</p>
          </div>
          <div className="bg-white rounded-[30px] py-7 px-5 max-w-[350px] flex flex-col gap-3">
            <div className="w-[60px] h-[60px] rounded-full border-[1.5px] border-[#a8e92f] grid place-items-center">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <p className="text-[22px]">Logistics</p>
          </div>
          <div className="bg-white rounded-[30px] py-7 px-5 max-w-[350px] flex flex-col gap-3">
            <div className="w-[60px] h-[60px] rounded-full border-[1.5px] border-[#a8e92f] grid place-items-center">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <p className="text-[22px]">Freight Delivery</p>
          </div>
        </div>
      </section>
    );
}