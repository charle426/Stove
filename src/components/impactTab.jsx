import planetCare from "../assets/planet_care.svg";
import career from "../assets/career.svg";
import partner from "../assets/our_story.svg";
import frieght from "../assets/city_vertical.svg";
import img3 from "../assets/IMG-20230929-WA0012.jpg";
import { Link } from "react-router-dom";
export default function ImpactTab() {
    const style = {
      backgroundImage: `linear-gradient(to right, #000000b8 30%, transparent), url(${img3})`,
    };
    return (
      <section className="px-5 py-5">
        <div className="bg-[#272B33] rounded-[50px] p-5">
          <div
            style={style}
            className="px-5 mb-2 rounded-[50px] py-5 flex flex-col justify-end items-start md:min-h-[55vh] max-h-[45vh] bg-cover h-[75vh]"
          >
            <div className="rounded-lg py-2 px-3 bg-white mb-1">impact</div>
            <h1 className="md:text-[50px] text-[40px] text-white">
              Impact Projects
            </h1>
          </div>
          <div>
            <h3 className="text-white text-[20px] mb-1">
             From pact to act
            </h3>
            <div className="auto-grid justify-around items-start gap-5 mt-4">
              <div className="bg-[#2F353F] w-full hover:bg-[#3A424E] justify-between sm:flex-col flex-row-reverse flex text-white py-5 px-3 max-h-[520px] h-full duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={planetCare} width="220px" className="max-w-[245px]" />
                </div>
                <div className="w-full">
                  <h1 className="text-[30px]">Healthy Ocean life</h1>
                  <p>
                    Stove clean water and environment sanitation impact projects ensures availability and sustainability management of water and sanitation for all
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/blog" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] w-full hover:bg-[#3A424E] justify-between sm:flex-col flex-row-reverse flex text-white py-5 px-3 max-h-[520px] h-full duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={frieght} width="250px" />
                </div>
                <div className="w-full">
                  <h1 className="text-[30px]">Good health and well-being</h1>
                  <p>
                    Stove Impact projects uses sporting activities to promote people`s well-being and eating health
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/blog" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] w-full hover:bg-[#3A424E] justify-between sm:flex-col flex-row-reverse flex text-white py-5 px-3 max-h-[520px] h-full duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={partner} width="250px" />
                </div>
                <div className="w-full">
                  <h1 className="text-[30px]">Partnership for all</h1>
                  <p>
                    We strengthen the means of implementation and revitalize the  Global partnership for sustainable development
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/blog" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] w-full hover:bg-[#3A424E] justify-between sm:flex-col flex-row-reverse flex text-white py-5 px-3 max-h-[520px] h-full duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={career} width="250px" />
                </div>
                <div className="w-full">
                  <h1 className="text-[30px]">Sustainable cities and communities</h1>
                  <p>
                   Every human deserve abetter living. Stove impact projects make cities and human settlements inclusive, safe, resilient and sustainable
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/blog" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}