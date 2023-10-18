import bg from "../assets/IMG-20230929-WA0010.jpg";
import QrCode from "../assets/qr-code.svg";
export default function MobilityHero({text, empha}) {
  const style = {
    backgroundImage: `linear-gradient(to right, #1111116d 30%, transparent), url(${bg})`,
  };
  return (
    <section className="md:px-10 md:pb-10 px-3 pb-2">
      <div
        style={style}
        className="bg-cover relative md:py-8 md:px-10 p-5 bg-left-top min-h-[70vh] duration-500 w-full md:h-[85vh] h-[85vh] rounded-[50px] flex justify-start items-end"
      >
        <div className="flex md:flex-row flex-col justify-between w-full gap-10 items-start md:items-end">
          <h1 className="md:text-[70px] text-white text-[55px] font-semibold p-0 m-0">
            {text} <span className="text-[#a8e92f]">{ empha }</span>
          </h1>

          <div className="flex flex-col gap-3 items-center">
            <div className="bg-white rounded-[30px] hidden md:flex h-[400px] w-full max-w-[400px] p-4 text-[18px] flex-col gap-1">
              <p>Scan the QR code wih your smartphone or your camera</p>
              <div className="flex items-center justify-center">
                <img src={QrCode} width="300px"  />
              </div>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button md:w-[300px] w-[80%] py-3 text-center mb-5">
              Download app
           </a>
          </div>
        </div>
      </div>
    </section>
  );
}
