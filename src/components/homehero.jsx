import img1 from "../assets/IMG-20230929-WA0011.jpg"
import img2 from "../assets/grab-2eeeuYORqBg-unsplash.jpg"
import img3 from "../assets/IMG-20230929-WA0012.jpg"
import React from "react"
export default function HomeHero() {
  const [Bg, setbG] = React.useState(0)   
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

  const slideLength = heroSlide.length - 1;

  React.useEffect(() => {
  setTimeout(() => {
        setbG((prev) => (prev >= slideLength ? (prev = 0) : prev + 1));
      }, 6000);
  },[Bg, slideLength])

  // function ChangSlide(){
  //      setTimeout(() => {
  //        setbG((prev) => (prev >= slideLength ? (prev = 0) : prev + 1));
  //      }, 6000);
  // }
   
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
              <h1 className="md:text-[50px] max-w-[550px] w-full text-[30px] md:mt-7 mt-0 text-white">
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


    function resetInterval(n) {
      setbG(n);
      
    }

 
    
    return (
      <section className="px-3 md:px-5 mb-5 py-5 w-full overflow-hidden">
        <div
          style={style}
          className="bg-cover relative py-5 flex flex-col items-start justify-center md:px-16 md:py-16 px-5 bg-left-top min-h-[65vh] duration-500 md:h-[85vh] h-[60vh] rounded-[50px] hero"
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
          <div className="flex flex-col items-start justify-center">
            {impact()}
            <div className="md:mt-5 mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button px-3 py-2 md:px-10 md:py-4 text-lg overflow-hidden"
              >
                Download the app
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}