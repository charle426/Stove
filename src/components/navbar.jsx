import React from "react"
import { Link, useLocation } from "react-router-dom"
export default function Navbar({activeNav}) {
    const [navcheck, setNavCheck] = React.useState(false)
    // const nav = document.getElementById("nav")
  const { pathname } = useLocation()
  const ref = React.useRef()
  const navlinks = document.querySelectorAll(".navlink")
  // console.log(navlinks)
  navlinks.forEach((nav) => {
      // console.log(nav.dataset.id)
        if (nav.dataset.id !== activeNav)
        {
          nav.style.color = "#adadad"
        }
        
        else
        {
          nav.style.color = "black"
          
          }
          
        })
        
  
  React.useEffect(() => {
        window.scrollTo(0, 0)
    setNavCheck(false)
    if (
      activeNav === "refill" ||
      activeNav === "logistics" ||
      activeNav === "cargo"
    ) {
      document.querySelector(".containNav").style.color = "black";
      document.querySelector(".containNav2").style.color = "#adadad";
    } else if (activeNav === "blog" || activeNav === "contact") {
      document.querySelector(".containNav2").style.color = "black";
      document.querySelector(".containNav").style.color = "#adadad";
    } else {
      document.querySelector(".containNav2").style.color = "#adadad";
      document.querySelector(".containNav").style.color = "#adadad";
    }
    }, [pathname, activeNav])
  let prevNavScroll = window.scrollY
  function scrollFunction() {
    const currentNavScroll = window.scrollY;
     if (prevNavScroll > currentNavScroll)
        {
            ref.current.classList.add("stickyNav")
      }else
        {
            ref.current.classList.remove("stickyNav");
    }
     prevNavScroll = currentNavScroll;
  }
 window.addEventListener("scroll", () => {
   if (window.scrollY > 400)
   {
       scrollFunction()
   } else
   {
     ref.current.classList.remove("stickyNav");
     }
    } )

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700)
    {
      setNavCheck(false)
    }
  })
    return (
      <>
        <nav
          id="nav"
          ref={ref}
          className="relative duration-500 py-2 md:px-2 lg:px-10 px-5 md:py-5 z-[999] flex justify-between flex-row-reverse w-full items-center"
        >
          <input
            type="checkbox"
            id="navtoggle"
            checked={navcheck}
            onChange={() => setNavCheck((prev) => !prev)}
            className="hidden navtoggle"
          />
          <div className="md:hidden block relative p-2">
            <label
              htmlFor="navtoggle"
              className="navlabel flex flex-col gap-2 relative w-[30px] h-[30px] items-center"
            >
              <div></div>
              <div></div>
              <div></div>
            </label>
          </div>
          <div className="flex lg:gap-7 md:gap-2 items-center w-full contain-nav">
            <div className="">
              <Link to="/">
                <h3 className="uppercase flex items-center gap-2 lg:gap-2 md:gap-1 w-full md:text-[30px] px-1 text-[23px] font-semibold">
                  stove
                  <span className="w-full relative z-10">
                    <div className="absolute h-2 w-full bottom-[10px] -z-10 rounded-full bg-[#a8e92f]"></div>
                    app
                  </span>
                </h3>
              </Link>
            </div>
            <div className="mobile-nav flex md:opacity-100 md:flex-row flex-col md:w-full w-[0] rounded-2xl duration-500 md:justify-between justify-normal md:relative md:bg-[#f7f8f7] h-0 md:overflow-visible overflow-hidden py-5 px-2 md:px-0 lg:px-2 opacity-0 bg-white absolute items-start md:items-center gap-1">
              <ul className="list-none flex md:flex-row flex-col md:items-center items-start md:gap-1 gap-2">
                <Link to="/">
                  <li className="navlink" data-id="home">
                    Home
                  </li>
                </Link>
                <li className="group duration-100 containNav relative cursor-pointer">
                  <span className="lg:inline-block hidden">Stove</span> Mobility
                  <ul className="list-none flex duration-500 flex-col md:absolute h-0 group-hover:h-auto relative overflow-hidden w-[200px] translate-y-[10px] rounded-md md:p-2 items-start md:gap-3 gap-1 bg-[#fff] group-hover:opacity-100 group-hover:z-10 -z-10 opacity-0">
                    <Link to="/refill">
                      <li className="navlink" data-id="refill">
                        Gasoline Distribution
                      </li>
                    </Link>
                    <Link
                      to="/delivery
                    "
                    >
                      <li className="navlink" data-id="logistics">
                        Logistics
                      </li>
                    </Link>
                    <Link to="/cargo">
                      <li className="navlink" data-id="cargo">
                        cargo
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="group duration-100 relative cursor-pointer containNav2">
                  About Us
                  <ul className="list-none flex duration-500 flex-col md:absolute h-0 group-hover:h-auto relative overflow-hidden  w-[200px] translate-y-[10px] rounded-md md:p-2 items-start gap-3 bg-[#fff] group-hover:opacity-100 group-hover:z-10 -z-10 opacity-0">
                    <Link to="/blog">
                      <li className="navlink" data-id="blog">
                        Blog
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="navlink" data-id="contact">
                        Contact
                      </li>
                    </Link>
                  </ul>
                </li>
                <Link to="/services">
                  <li
                    className="flex items-center gap-1 navlink"
                    data-id="services"
                  >
                    <span className="lg:block hidden">Stove</span> Services
                  </li>
                </Link>
              </ul>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.stove.stoveapp">
                  <div
                    data-id="becomeDriver"
                    className="border-dotted border-[2px] navlink rounded-2xl duration-200 text-[20px] text-[#adadad] hover:text-[#323942] border-[#A8E92F] hover:rounded-md hover:px-5 lg:px-6 lg:py-3 py-2 px-3 "
                  >
                    Become a Driver
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}