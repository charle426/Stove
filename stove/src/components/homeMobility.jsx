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
      <section className="px-5 py-5">
        <div className="bg-[#272B33] rounded-[50px] p-5">
          <div
            style={style}
            className="px-5 mb-2 rounded-[50px] py-5 flex flex-col justify-end items-start md:min-h-[55vh] max-h-[45vh] bg-cover h-[75vh]"
          >
            <div className="rounded-lg py-2 px-3 bg-white mb-1">Mobility</div>
            <h1 className="md:text-[50px] text-[40px] text-white">
              Stove Mobility
            </h1>
          </div>
          <div>
            <h3 className="text-white text-[20px] mb-1">
              Ride or drive, shop or delivery, send or receive - one app for all
              fair deals
            </h3>
            <div className="flex md:flex-row md:flex-nowrap flex-wrap justify-around items-center gap-5">
              <div className="bg-[#2F353F] hover:bg-[#3A424E] md:flex-col flex-row-reverse flex text-white p-5 duration-200 rounded-[20px]">
                <div>
                  <img src={gasoline} width="90%" className="max-w-[275px]" />
                </div>
                <div>
                  <h1 className="text-[30px]">Gasoline Distribution</h1>
                  <p>Get all your gasoline products for your price</p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/refill" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] hover:bg-[#3A424E] md:flex-col flex-row-reverse flex text-white p-5 duration-200 rounded-[20px]">
                <div>
                  <img src={frieght} width="90%" />
                </div>
                <div>
                  <h1 className="text-[30px]">Freight Delivery</h1>
                  <p>Cargo importation fro your price</p>
                  <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                    <Link to="/refill" className="py-2">
                      know more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F353F] hover:bg-[#3A424E] md:flex-col flex-row-reverse flex text-white p-5 duration-200 rounded-[20px]">
                <div>
                  <img src={logistics} width="90%" />
                </div>
                <div>
                  <h1 className="text-[30px]">Logistics Delivery</h1>
                  <p>Choose a courier for your price</p>
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