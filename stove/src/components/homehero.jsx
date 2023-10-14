import img1 from "../assets/IMG-20230929-WA0011.jpg"
import img2 from "../assets/grab-2eeeuYORqBg-unsplash.jpg"
import img3 from "../assets/IMG-20230929-WA0012.jpg"
import React from "react"
export default function HomeHero() {
  const [Bg, setbG] = React.useState(0)   
  let interval;
  let timing = 6000
    const heroSlide = [
        {
            src: img1
        },
        {
            src: img2
        },
        {
            src: img3
        },
    ]
    const style = {
      backgroundImage: `linear-gradient(to right, #000000b8 30%, transparent), url(${heroSlide[Bg].src})`,
  };
   
    function impact() {
        if (Bg === 0)
        {
             return ( 
            <h1 className="md:text-[50px] max-w-[550px] w-full text-[30px] text-white">
                Gasoline Delivery,Logistics, Freight at <span className="text-[#a8e92f]">your price</span>
            </h1>
        )
        }else if (Bg === 1){
            return (
              <h1 className="md:text-[50px] max-w-[550px] w-full text-[30px] mt-7 text-white">
                Trusted specialist for our tasks at a
                <span className="text-[#a8e92f]"> fair price</span>
              </h1>
            );
                
        } else
        {
            return (
              <h1 className="md:text-[50px] max-w-[550px] w-full text-[30px] text-white">
                No more heavy lifting get all your gasoline products at 
                <span className="text-[#a8e92f]"> your convenience</span>
              </h1>
            );
        }
       
  }
  


  document.querySelectorAll(".progress").forEach((items, index) => {
    if (Bg === index)
    {
      items.classList.add("timingProgress");
    } else
    {
      items.classList.remove("timingProgress");
    }

  })

  
  function toggleHero() {
      // const check = Bg >= heroSlide.length - 1 ? 0 : Bg + 1;
      setbG((prev) => prev >= heroSlide.length - 1 ? prev = 0 : prev + 1);
  }

  window.onload = function () {
    interval = setInterval(toggleHero, timing);
  }

   

    function resetInterval(n) {
      clearInterval(interval);
      window.clearInterval(interval)
      setbG(n);
      timing = 6000
      setTimeout(interval, timing);
    }

 
    
    return (
      <section className=" px-5 mb-5 ">
        <div
          style={style}
          className="bg-cover relative py-16 px-16 bg-left-top min-h-[55vh] duration-500 md:h-[85vh] h-[55vh] rounded-[50px] hero"
        >
          <div className="flex items-center gap-6 w-full heroSelector">
            <div
              className="w-[100px] text-[#f7f8f7] cursor-pointer flex items-center flex-col"
              onClick={() => resetInterval(0)}
            >
              <p>Mobility</p>
              <div className="w-full h-[2px] mt-3 bg-[#0004]">
                <div className="progress timingProgress h-full w-0 bg-white"></div>
              </div>
            </div>
            <div
              className="w-[100px] text-[#f7f8f7] cursor-pointer flex items-center flex-col"
              onClick={() => resetInterval(1)}
            >
              <p>Services</p>
              <div className="w-full h-[2px] mt-3 bg-[#0004]">
                <div className="progress h-full w-0 bg-white"></div>
              </div>
            </div>
            <div
              className="w-[100px] text-[#f7f8f7] cursor-pointer flex items-center flex-col"
              onClick={() => resetInterval(2)}
            >
              <p>Impact</p>
              <div className="w-full h-[2px] mt-3 bg-[#0004]">
                <div className="progress h-full w-0 bg-white"></div>
              </div>
            </div>
          </div>
          <div>
            {impact()}
            <div className="mt-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button px-5 py-3 md:px-10 md:py-4 text-lg overflow-hidden"
              >
                Download the app
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}