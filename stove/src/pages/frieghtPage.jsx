import MobilityHero from "../components/mobilityHero";
import brandsign from "../assets/newHomeVector.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faPersonHiking, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faUser } from "@fortawesome/free-regular-svg-icons";
import GetStarted from "../components/getStarted";
import MobilityCounter from "../components/mobilityCounter";
export default function Cargo({ setActiveNav }) {
    setActiveNav("cargo");
    return (
      <>
            <MobilityHero text="Freight deliveries" empha="at a your price" />
            <section className="mt-10 md:px-10 px-5 py-5">
                <MobilityCounter/>
             </section>
            
        <section className="mt-10 md:px-10 px-5 py-5">
          <h2 className="md:text-[70px] mb-4 relative text-[50px] font-semibold">
            The for fast affordable freight delivery
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
                reliable
              </h3>
              <div>
                <p>
                  Send, receive and track your packages in real-time
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
              <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">
                Transport any cargo
              </h3>
              <div>
                <p>
                 Transport heavy items and things that take up a lot of space
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-white items-start">
              <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
                <FontAwesomeIcon icon={faPersonHiking} />
              </div>
              <h3 className="font-semibold text-[24px] h-auto md:min-h-[58px]">
                Mover`s Service
              </h3>
              <div>
                <p>
                 In the request form you can chose the mover`s needed option
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" p-5 md:p-10">
          <div className="bg-[#323942] rounded-[50px] p-5 md:p-10 flex flex-col gap-4 items-start text-white">
            <h2 className="text-[60px] font-semibold">Businesses chose stove freight</h2>
            <div className="flex items-center lg:flex-row flex-col gap-5 py-10">
              {/* <img src={timing} className="w-[60px]" /> */}

              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                 Intercity freight delivery
                </h3>
                <div>
                  <p>
                   Send your cargo to other cities on yuur terms
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faTruck} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Different vehicle sizes
                </h3>
                <div>
                  <p>
                   Select a vehicle based on cargo size from small to heavy trucks
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
                <div className="grid place-items-center min-h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
                  Safety
                </h3>
                <div>
                  <p>
                  We verify very driver`s basic info and documents before they join
                  </p>
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