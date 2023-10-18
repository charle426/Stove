import AnimatedCounter from "./counter";
import worldwide from "../assets/testimonial.png";

export default function MobilityCounter() {
    return (
      <div className="flex md:flex-row flex-col items-center gap-9 justify-between w-full">
        <div className="grid-cols-2 grid gap-4 items-start w-full">
          <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
            <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
              <AnimatedCounter
                from={0}
                to={155}
                fontFamily="poppins"
                color={"#323942"}
              />
            </h1>
            <p>cities</p>
          </div>
          <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
            <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
              <AnimatedCounter
                from={0}
                to={8}
                fontFamily="poppins"
                color={"#323942"}
              />
            </h1>
            <p>countries</p>
          </div>
          <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
            <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
              <AnimatedCounter
                from={0}
                to={17}
                fontFamily="poppins"
                color={"#323942"}
              />
            </h1>
            <p>thousand deliveries</p>
          </div>
          <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
            <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
              <AnimatedCounter
                from={0}
                to={20}
                fontFamily="poppins"
                color={"#323942"}
              />
            </h1>
            <p>thousand app install</p>
          </div>
        </div>
        <div className="w-full">
          <img src={worldwide} className="w-full" alt="clients world wide" />
        </div>
      </div>
    );
}