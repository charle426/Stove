import bg from "../assets/IMG-20230929-WA0010.jpg";
import CareerServices from "../components/CareerServices";
import StepsCareer from "../components/StepsCareer";
import TeamCareer from "../components/TeammCareer";
import AccelerateCareer from "../components/accelerateCareer";
import JobsAvailable from "../components/jobsAvailable";
import Cities from "../components/cities"
import CareerLeading from "../components/careerLeading";
import CareerWhyWeAreHere from "../components/CareerWhyWeAreHere";
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
            <h1 className="md:text-[4rem] text-white text-[2rem] font-semibold">
             Let`s make gas available for <span className="text-[#a8e92f]">people, not Stations</span>
            </h1>
          </div>
        </section>
        <Cities />
        <CareerLeading/>
        <CareerServices />
        <CareerWhyWeAreHere/>
        <AccelerateCareer />
        <TeamCareer/>
        <StepsCareer/>
        <JobsAvailable/>
      </>
    );
}