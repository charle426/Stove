import stars from "../assets/star-yellow.svg";
import downloadpic from "../assets/mobile_app.webp";
import Logo from "./logo.jsx"
export default function HeroDownloadApp() {
    return (
      <section className="px-5 md:px-10 py-10">
        <div className="bg-white flex md:flex-row h-fit flex-col-reverse items-center rounded-[50px] px-5">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <div>
               <Logo/>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <img src={stars} width="100%" />
                  <img src={stars} width="100%" />
                  <img src={stars} width="100%" />
                  <img src={stars} width="100%" />
                  <img src={stars} width="100%" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[50px]">Mobile App</h1>
              <p>
                One app for your gasoline delivery,cargo and logistics - your
                choice
              </p>
              <div className="md:mt-5 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                  className="button px-5 py-3 md:px-10 md:py-4 text-lg overflow-hidden"
                >
                  Download the app
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={downloadpic} width="100%" />
          </div>
        </div>
      </section>
    );
}