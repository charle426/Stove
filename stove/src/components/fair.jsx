import thumb from "../assets/humbleicons_thumb.svg";
import { faFireFlameCurved, } from "@fortawesome/free-solid-svg-icons";
import { faClock, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Fair() {



  return (
    <section className="px-5 md:px-10 mt-7">
      <h1 className="md:text-[60px] text-[45px] font-medium">Because a fare price is something you can offer not hope for</h1>
      <div className="flex items-center md:flex-row flex-col gap-5 py-10">
        {/* <img src={timing} className="w-[60px]" /> */}

        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
          <div className=" rounded-[30px]">
            <img src={thumb} className="w-[60px]" />
          </div>
          <h3 className="font-semibold text-[22px]">Fair price</h3>
          <div>
            <p>
              We are here to prove that people can always come to an agreement
              despite the destination,the weather or traffic our price will
              always be fair with total transparency
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
          <div className="grid place-items-center h-[60px] text-[20px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f]">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <h3 className="font-semibold text-[22px]">Convenience</h3>
          <div>
            <p>
              We always insure that your order would be delivered on time, you
              could save more and do more while we carefully handle your orders
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 md:p-7 w-full rounded-[40px] min-h-[40vh] h-[50vh] py-5 bg-white items-start">
          <div className="grid place-items-center h-[60px] rounded-full w-[60px] border-[2px] border-solid border-[#a8e92f] ">
            <FontAwesomeIcon icon={faFireFlameCurved} />
          </div>
          <h3 className="font-semibold text-[22px]">Safe Delivery</h3>
          <div>
            <p>
              Our team of highly trained professionals is highly skilled in,
              efficient gasoline delivery, ensuring a seamless experience
              tailored to your requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
