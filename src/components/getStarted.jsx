import { faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function GetStarted() {
  return (
    <section className=" py-5 px-2 md:p-10">
      <div className="bg-[#323942] rounded-[50px] p-5 md:p-10 flex flex-col gap-4 items-start text-white">
        <h2 className="text-[60px] font-semibold">Get Started today</h2>
        <div className="flex items-center lg:flex-row flex-col gap-5 py-10">
          {/* <img src={timing} className="w-[60px]" /> */}

          <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
            <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
              Get the app
            </h3>
            <div>
              <p>
                Download app and start saving time with stove or use the web and
                start ordering.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
            <div className="grid place-items-center min-h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
              <FontAwesomeIcon icon={faCartPlus} />
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
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
              Wait for Order
            </h3>
            <div>
              <p>
                Wait within minutes to receive your order request in your
                prefferred location
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3 md:p-5 w-full rounded-[40px] md:h-fit lg:max-h-[45vh] min-h-[38vh] py-5 bg-[#3a424b] items-start">
            <div className="grid place-items-center min-h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </div>
            <h3 className="font-semibold text-[24px] h-auto md:min-h-[48px]">
              Receive Your Order
            </h3>
            <div>
              <p>
                You are set to receive order.No queues, no stress.
                Simple,Fast,STOVE.
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
  );
}
