import { Link } from "react-router-dom";
import instagram from "../assets/instagram-white.svg";
import facebook from "../assets/facebook-white.svg";
import twitter from "../assets/twitter-white.svg";
import play from "../assets/play_market.webp";
import apple from "../assets/app_store.webp";
import Logo from "./logo";
// import {motion} from "framer-motion"

export default function Footer() {
    return (
      <footer className="bg-[#1A1A1A] rounded-t-[50px] py-2 md:px-2 flex flex-col items-start lg:px-10 px-5 md:py-7 text-[#f7f8f7] min-h-[80vh] h-fit">
        <div className="flex md:flex-row flex-col md:gap-[150px] flex-wrap ">
          <div>
            <Logo/>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <ul className="list-none flex flex-col gap-2 items-start">
              <h2 className="md:text-[18px] mb-3">Stove Mobility</h2>
              <Link to="/refill">
                <li>Gasoline Distribution</li>
              </Link>
              <Link to="/contact">
                <li>Logistics</li>
              </Link>
              <Link to="/cargo">
                <li>cargo</li>
              </Link>
            </ul>
            <ul className="list-none flex flex-col gap-2 items-start">
              <h2 className="md:text-[18px] mb-3">About Us</h2>
              <Link to="/contact">
                <li>Contacts</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
              <Link to="/safety">
                <li>Safety</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col mt-9 md:w-full">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex items-center gap-2">
              <div>
                <a href="https://www.facebook.com/stoveofficialng">
                  <img src={facebook} width="100%" />
                </a>
              </div>
              <div>
                <a href="https://instagram.com/stove_officialng">
                  <img src={instagram} width="100%" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/STOVE_OFFICIAL">
                  <img src={twitter} width="100%" />
                </a>
              </div>
            </div>
            <div className=" text-[#adadad] max-w-[450px] w-full">
              <p>
                Stove is an online aggregator. We do not participate in
                cooperations between our users: they create and perform all
                operations in our app on their own
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="border border-[#adadad] rounded-[10px] overflow-hidden"
              >
                <img src={play} width="180px" className="m-[2px]" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="border border-[#adadad] rounded-[10px] overflow-hidden"
              >
                <img src={apple} width="180px" className="m-[2px]" />
              </a>
            </div>
            <p className=" flex items-center flex-wrap gap-2">
              © with{" "}
              <span className="text-rose-600 text-[25px] animate-pulse">
                {" "}
                ♥{" "}
              </span>
              from Stove Technologies
            </p>
          </div>
        </div>
      </footer>
    );
}