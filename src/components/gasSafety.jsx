import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
export default function GasSafety() {
  return (
    <section className="py-5 px-5 md:px-10">
      <div className="bg-[#323942] p-5 text-white rounded-[50px]">
        <h2 className="md:text-[70px] mb-4 relative text-[50px] font-semibold">
          We care about your
          <span className="text-[#a8e92f]"> Safety</span>
        </h2>
        <div className="flex md:flex-row flex-col justify-between gap-[20px] w-full py-7">
          <div className="flex flex-col justify-between items-start w-full">
            <h1 className="md:text-[60px] mb-4 relative text-[40px] font-semibold">
              Old and damaged cylinders put your neighborhood at{" "}
              <span className="animate-pulse text-red-600">risk</span>
            </h1>
            <div>
              <h4>
                We offer{" "}
                <span className="animate-pulse text-[#a8e92f]">free</span>{" "}
                cylinder service
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full md:justify-end items-center">
            <div className="flex lg:flex-row flex-col gap-[20px] w-full">
              <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:min-h-[45vh] max-h-fit h-[50vh] py-5 bg-[#434c57] items-start">
                <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <h3 className="font-semibold text-[20px] h-auto md:min-h-[58px]">
                  You can bring your cylinders for check and servicing every
                  saturday at any stove designated outlet
                </h3>
              </div>
              <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] md:min-h-[45vh] max-h-fit h-[50vh] py-5 bg-[#434c57] items-start">
                <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <h3 className="font-semibold text-[20px] h-auto md:min-h-[58px]">
                  Turn your old cylinders to new ones`s.Bring your old cylinders
                  for repaint at any stove designated outlet
                </h3>
              </div>
                      </div>
                      <div className="w-full text-right">
                         <Link to="/safety" className="text-blue-500 underline"> find out more..</Link>
                      </div>
          </div>
        </div>
      </div>
    </section>
  );
}
