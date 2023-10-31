import bg from "../assets/Background_2x.jpg"
export default function AccelerateCareer() {

    const style = {
        backgroundImage: `linear-gradient(to right, #1111116d 30%, transparent), url(${bg})`,
     };

    return (
      <section className="py-5 md:px-12 px-2 relative">
        <div
          style={style}
          className="rounded-[50px] md:p-10 p-5 bg-cover bg-fixed"
        >
          <div className="flex flex-col md:flex-row min-h-[80vh] text-white items-start justify-between">
            <div className="w-full mb-5">
              <h1 className="md:text-[55px] text-[40px] max-w-[490px]">
                Accelerate your Career with{" "}
                <span className="relative z-40">
                  Stove
                  <div className="w-full absolute h-[12px] md:h-[20px] bg-[#a8e92f] bottom-[18px] rounded-full left-0 -z-10"></div>
                </span>
              </h1>
              <div className="mt-10 hover:translate-y-2 duration-75 md:block hidden w-fit">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                  className="button py-3 px-5 text-[#323942]"
                >
                  Download app
                </a>
              </div>
            </div>
            <div className="md:w-[50%] w-full flex flex-col gap-7 justify-center  pr-3">
              <div>
                <h3 className="text-[25px] font-[500] mb-3">Speed and scale</h3>
                <p className="max-w-[390px]">
                  We move fast. it us 12 months to launch Stove, in over 50
                  cities.
                </p>
              </div>
              <div>
                <h3 className="text-[25px] font-[500] mb-3">Opportunities</h3>
                <p className="max-w-[390px]">
                  As our company grows new opportunities arise. We encourage our
                  people to take on challenges so they progress in their career
                  faster than anywhere else.
                </p>
              </div>
              <div>
                <h3 className="text-[25px] font-[500] mb-3">Impact</h3>
                <p className="max-w-[390px]">
                  We empower people to take the intuitive and own their area of
                  responsibility. As a result, they can continuously impact one
                  of the largest global industries.{" "}
                </p>
              </div>
              <div className="mt-5 hover:-translate-y-2 duration-75 md:hidden block w-fit">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                  className="button py-3 px-5 text-[#323942]"
                >
                  Download app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    
}