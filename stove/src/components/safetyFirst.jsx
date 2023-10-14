import { Link } from "react-router-dom";
import safeCommunties from "../assets/local_communities.svg";
export default function SafetyFirst() {
    return (
      <section className="px-5 md:px-10 py-5">
        <div className="flex items-center flex-col bg-white rounded-[50px] lg:px-10 px-5 py-5 md:flex-row">
          <div className="w-full">
            <h1 className="md:text-[70px] text-[40px] mb-2 font-semibold">
              Safety first
            </h1>
            <p className="lg:text-[20px] text-[18px]">
              And safety for everyone. Stove prioritizes safety from both sides
              -customer and deliverer - while working diligently on new safety
              features. We are also encouraging everyone to follow safety
              guidelines
            </p>
            <div className="text-[#3d74ff] mt-3 underline">
              <Link to="/safety" className="p-2">know more</Link>
            </div>
          </div>
          <div>
            <img src={safeCommunties} width="100%" alt="communities" />
          </div>
        </div>
      </section>
    );
}