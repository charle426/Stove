import bg from "../assets/IMG-20230929-WA0010.jpg";
import CareerServices from "../components/CareerServices";
import StepsCareer from "../components/StepsCareer";
import TeamCareer from "../components/TeammCareer";
import AccelerateCareer from "../components/accelerateCareer";
import Cities from "../components/cities"
export default function Career({ setActiveNav }) {

     setActiveNav("career")
         const style = {
           backgroundImage: `linear-gradient(to right, #1111116d 30%, transparent), url(${bg})`,
    };
    
    return (
      <>
        <section className="md:px-10 md:pb-10 px-2">
          <div
            style={style}
            className="bg-cover relative py-10 md:px-10 px-4 bg-left-top min-h-[55vh] duration-500 w-full md:h-[85vh] h-[55vh] rounded-[50px] flex justify-start items-end"
          >
            <h1 className="md:text-[70px] text-white text-[55px] font-semibold">
            Careers <span className="text-[#a8e92f]">at Stove</span>
            </h1>
          </div>
        </section>
        <Cities />
        <CareerServices/>
        <AccelerateCareer />
        <TeamCareer/>
        <StepsCareer/>
      </>
    );
}