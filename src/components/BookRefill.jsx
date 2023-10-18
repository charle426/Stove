import ladyCall from "../assets/ladycall.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BookRefill() {
    return (
      <section className="p-5 md:px-10">
        <div className="bg-[#323942] rounded-[50px] p-5 text-white">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full">
              <img
                src={ladyCall}
                width="100%"
                alt="customer Care services"
                className=" rounded-[30px]"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-[40px] font-medium">
                Place a call and book a Refill
              </h3>
              <p className="text-[18px]">
                Feeling worried that you dont have internet or that you are
                unfamiliar with stove app? Dont feel worried!. We would help you
                get through this. Simple place a call to us and we would help
                you get a refill.
              </p>
              <div>
                <h3 className="text-[30px] font-medium text-[#a8e92f] flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />
                  Hotline
                </h3>
                <p className="font-medium text-[20px]">
                  +2349071509670
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}