import homeVector from "../assets/newHomeVector.svg";
import AnimatedCounter from "../components/counter";


export default function Cities() {
    return (
      <>
        <section className="px-5 md:px-10 py-5">
          <div>
            <div className="relative mb-[30px]">
              <h1 className="md:text-[60px] w-full text-[40px] relative z-10 font-medium md:w-[85%]">
                Challenging injustice to make the world a fairer place for 1
                billion+ People
              </h1>
              <img
                src={homeVector}
                width="400px"
                className="absolute bottom-[10px] -z-10 right-[10px] md:w-[650px]"
              />
            </div>

            <div className="flex gap-4 items-start">
              <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
                <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
                  <AnimatedCounter from={0} to={155} fontFamily="poppins" color={"#323942"} />
                </h1>
                <p>cities</p>
              </div>
              <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
                <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
                  <AnimatedCounter from={0} to={8} fontFamily="poppins" color={"#323942"} />
                </h1>
                <p>countries</p>
              </div>
              <div className="py-4 border-t-[2px] border-[#a8e92f] border-solid w-full">
                <h1 className="md:text-[80px] font-semibold text-[60px] mb-4">
                  <AnimatedCounter from={0} to={17} fontFamily="poppins" color={"#323942"} />
                </h1>
                <p>thousand deliveries</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}