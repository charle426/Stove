import { Link } from "react-router-dom";
import mobi from "../assets/IMG-20230929-WA0014.jpg";
import logistics from "../assets/courier_vertical.svg";
export default function HomeServices() {
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
          <div className="rounded-lg py-2 px-3 bg-white mb-1">Gasoline</div>
          <h1 className="md:text-[50px] text-[40px] text-white">
            Gas Mobility
          </h1>
        </div>
        <div>
          <h3 className="text-white text-[20px] mb-3">
            Stove is a mobility app from ordering gas from the comfort of your home
          </h3>
          <div className="flex md:justify-end justify-center items-center">
            <div className="bg-[#2F353F] hover:bg-[#3A424E] md:flex-row-reverse flex-col-reverse flex text-white p-5 duration-200 rounded-[20px] items-center">
              <div>
                <img src={logistics} width="90%" className="max-w-[275px] w-full" />
              </div>
              <div>
                <h1 className="text-[30px] mb-3">Gas Distribution</h1>
                <p>With thousands of local gas vendors around your location,<br/>  you can now order gas and get it delivered anywhere</p>
                <div className="text-[#3d74ff] mt-3 underline text-[18px] font-medium">
                  <Link to="/services" className="py-2">
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
