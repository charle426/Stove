import { faLightbulb} from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StickWithUS(){
    return (
      <section className="px-5 md:px-10 mt-7 flex flex-col gap-4 items-start">
        <h1 className="md:text-[60px] text-[45px] font-medium">
          People love us because
        </h1>
        <div className="flex items-center md:flex-row flex-col gap-5 py-4">
          {/* <img src={timing} className="w-[60px]" /> */}

          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3 className="font-semibold text-[22px]">
              The process is fast and clear
            </h3>
            <div>
              <p>
                Directly contact your courier and see his current location via
                the app without a middleman and further discuss all the the your
                going to need
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <h3 className="font-semibold text-[22px]">All vendors are rated</h3>
            <div>
              <p>
                You can choose your vendor based on his rating points and
                reviews or mark your favorite vendor based on your experience
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
            <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <h3 className="font-semibold text-[22px]">Client Satisfaction</h3>
            <div>
              <p>
                At stove we take our clients satisfaction seriously.From product
                order to delivery we put you first.
              </p>
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
            className="button px-5 py-3 block mb-3 md:px-10 md:py-4 text-lg overflow-hidden"
          >
            Download the app
          </a>
        </div>
      </section>
    );
}