import logo from "../assets/IMG-20231007-WA0005-removebg-preview.png";
import { useEffect , useState} from "react";
export default function Loader() {
    
 const [render, setRender] = useState(1)
  const ready = document.readyState
  useEffect(() => {
      if (ready === "complete") {
        setTimeout(() => {
           document.querySelector(".loader").style.visibility = "hidden";
           document.querySelector(".loader").style.display = "none";
        }, 2000);
      } 
  }, [ready, render])

  if (ready === "interactive")
  {
    setInterval(() => {
      setRender(prev => prev + 1)
    }, 2000);
  } 

   
  return (
    <>
      <section className="loader duration-500 flex flex-col md:flex-row overflow-hidden items-center justify-center min-h-[100%] w-full bg-[#F7F8F7] fixed z-[2000]">
        <div className="items-center justify-center h-[100px] w-[100px] p-7 rounded-full bg-white animate-bounce origin-center">
          <img src={logo} alt="logo" className="md:w-[200px] w-[140px]" />
        </div>
      </section>
    </>
  );
}
