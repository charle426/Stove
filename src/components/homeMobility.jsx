import mobi from "../assets/1000_F_356482279_ZszSYAkmkdtPzL6uE6zpjeR1MALnO9an.jpg";
import gasoline from "../assets/freight_delivery_vertical.svg";
import logistics from "../assets/courier_vertical.svg";
import frieght from "../assets/city_vertical.svg";
import { Link } from "react-router-dom";
export default function HomeMobility() {
       const style = {
         backgroundImage: `linear-gradient(to right, #000000b8 30%, transparent), url(${mobi})`,
       };
    return (
      <section className="sm:px-5 py-5 px-2">
        <div className="bg-[#272B33] rounded-[50px] md:p-5 px-3 py-5">
          <div
            style={style}
            className="px-5 mb-2 rounded-[50px] py-5 flex flex-col justify-end items-start md:min-h-[55vh] max-h-[45vh] bg-cover h-[75vh]"
          >
            <div className="rounded-lg py-2 px-3 bg-white mb-1">services</div>
            <h1 className="md:text-[50px] text-[40px] text-white">
              Stove services
            </h1>
          </div>
          <div>
            <h3 className="text-white text-[20px] mb-1">
              Ride or drive, shop or delivery, send or receive - one app for
              all...
            </h3>
            <div className="flex-fit">
              <div className="bg-[#2F353F] flex-grow flex-[260px] min-h-[14rem] w-full hover:bg-[#3A424E] sm:flex-col max-h-[450px] sm:h-[480px] justify-between items-center flex-row-reverse flex text-white p-2 md:p-5 duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={gasoline} className="max-w-[180px]" />
                </div>
                <div className="w-full">
                  <h1 className="text-[1.3rem] sm:text-[2rem]">
                    Gas Distribution
                  </h1>
                  <p className="max-w-[300px]">
                    Get all your gasoline products for your price
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/refill" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] flex-grow flex-[280px]  w-full hover:bg-[#3A424E] sm:flex-col max-h-[450px] sm:h-[480px] justify-between items-center flex-row-reverse flex text-white p-3 md:p-5 duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={frieght} width="250px" />
                </div>
                <div className="w-full">
                  <h1 className="text-[1.3rem] sm:text-[2rem]">
                    Freight Delivery
                  </h1>
                  <p className="max-w-[300px]">
                    Cargo export and import, air, sea and groupage at a fair
                    price
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/refill" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] flex-grow flex-[260px] w-full hover:bg-[#3A424E] sm:flex-col max-h-[450px] sm:h-[480px] justify-between items-center flex-row-reverse flex text-white p-3 md:p-5 duration-200 rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                  <img src={logistics} width="250px" />
                </div>
                <div className="w-full">
                  <h1 className="text-[1.3rem] sm:text-[2rem]">
                    Logistics Delivery
                  </h1>
                  <p className="max-w-[300px]">
                    Choose a courier for and get packages delivered anywhere
                    your price
                  </p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/refill" className="py-2">
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