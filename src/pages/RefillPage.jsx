import DoMore from "../components/doMore";
import Faq from "../components/faq";
import GasSafety from "../components/gasSafety";
import GetStarted from "../components/getStarted";
import MobilityCounter from "../components/mobilityCounter";
import MobilityHero from "../components/mobilityHero";
import ServiceDownload from "../components/serviceDownload";

export default function Refill({setActiveNav}) {
    setActiveNav("refill");
    return (
      <>
        <MobilityHero text="A Stove you can" empha="trust" />
        <section className="md:px-10 px-5 py-5">
          <h2 className="md:text-[70px] mb-7 text-[50px] font-semibold">
            Our coast to coast gasoline delivery network is expanding daily
          </h2>
          <MobilityCounter />
          <DoMore />
        </section>
        <GasSafety />
        <GetStarted />
        <ServiceDownload />
        <Faq />
      </>
    );
}