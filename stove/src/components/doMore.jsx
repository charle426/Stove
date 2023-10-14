import thumb from "../assets/humbleicons_thumb.svg";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import brandsign from "../assets/newHomeVector.svg";
export default function DoMore() {
  return (
    <section className="mt-10">
      <h2 className="md:text-[70px] mb-4 relative text-[50px] font-semibold">
        Do more with less effort
        <img
          src={brandsign}
          width="100%"
          className="absolute left-0 bottom-0 -z-50"
        />
      </h2>

      <div className="flex items-center md:flex-row flex-col gap-5 py-10">
        {/* <img src={timing} className="w-[60px]" /> */}

        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
          <div className=" rounded-[30px]">
            <img src={thumb} className="w-[60px]" />
          </div>
          <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">Never run out of gas again</h3>
          <div>
            <p>
             With thousand of local gas vendors around your location, you can now order gas and get it delivered to from the comfort of your home
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
          <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">Fast deliveries from your favorite vendors!</h3>
          <div>
            <p>
             Enjoy super fast deliveries from your preferred vendors. Track location in real-time, chat and communicate with delivery personnel on the go 
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
          <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
            <FontAwesomeIcon icon={faFireFlameCurved} />
          </div>
          <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">Sign up as a vendor and sell to customers!</h3>
          <div>
            <p>
                          Become a vendor and sell your products.
                          Get paid on or before point of delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
