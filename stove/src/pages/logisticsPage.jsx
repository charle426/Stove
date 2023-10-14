import MobilityHero from "../components/mobilityHero";
import brandsign from "../assets/newHomeVector.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFireFlameCurved, faLocationPinLock, faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import GetStarted from "../components/getStarted";
export default function Logistics({ setActiveNav }) {
    setActiveNav("logistics");
    return (
      <>
        <MobilityHero text="Courier deliveries at a fair" empha="price" />
        <section className="mt-10 md:px-10 px-5 py-5">
          <h2 className="md:text-[70px] mb-4 relative text-[50px] font-semibold">
            The for fast affordable courier delivery
            <img
              src={brandsign}
              width="100%"
              className="absolute left-0 bottom-0 -z-50"
            />
          </h2>

          <div className="flex items-center md:flex-row flex-col gap-5 py-10">
            {/* <img src={timing} className="w-[60px]" /> */}

            <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
              <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
              <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">
                Offer your Price
              </h3>
              <div>
                <p>
                  Send packages up to 20kg door-to-door at any time of the day
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
              <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                <FontAwesomeIcon icon={faPersonHiking} />
              </div>
              <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">
                Chose your courier
              </h3>
              <div>
                <p>
                  You will the courier rating and all how many offer they have
                  completed in advance
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
              <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
                <FontAwesomeIcon icon={faFireFlameCurved} />
              </div>
              <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">
                Be secure in your choice
              </h3>
              <div>
                <p>
                  We verify every courier basic info and documents before they
                  join the ap
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" p-5 md:p-10">
          <div className="bg-[#323942] rounded-[50px] p-5 md:p-10 flex flex-col gap-4 items-start text-white">
            <h2 className="text-[60px] font-semibold">
              Businesses chose stove couriers
            </h2>
            <div className="flex items-center lg:flex-row flex-col gap-5 py-10">
              {/* <img src={timing} className="w-[60px]" /> */}

              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Delivery 24/7
                </h3>
                <div>
                  <p>Order delivered at anytime that is convenient for you</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Book & checkout
                </h3>
                <div>
                  <p>
                    Open the app anytime.Order and pay for gas or fuel delivery,
                    cylinder servicing or oil change
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
                  <FontAwesomeIcon icon={faLocationPinLock} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Package tracking
                </h3>
                <div>
                  <p>track the route of your courier in the app</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
                  <FontAwesomeIcon icon={faCheckSquare} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Fast delivery packages
                </h3>
                <div>
                  <p>Usually couriers pick up a package within 10 minutes</p>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button px-5 py-3 text-center mb-5 text-[#323942]"
              >
                Download app
              </a>
            </div>
          </div>
        </section>
        <GetStarted />
      </>
    );
}