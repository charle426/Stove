import QrCode from "../assets/qr-code.svg";
export default function ServiceDownload(){
  
    return (
      <section className="md:px-10 p-2 my-20">
        <div className="bg-[#323942] rounded-[50px] flex flex-col md:flex-row  px-5 py-5 items-center h-fit gap-5 lg:h-[400px] justify-between">
          <div>
            <h1 className="text-white text-[60px]">
              Download our free <span className="text-[#a8e92f]">app</span>
            </h1>
            <p className="text-white text-[17px] md:w-[80%] w-full mb-2">
              Stove is a mobility app for ordering LPG cooking gas from the
              comfort of your home.Stove also presents an inovative way for
              vendors to connect with buyers around their area of service. Stove
              is available in android,IOS and web versions
            </p>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button block w-[220px] px-5 py-3 md:px-10 md:py-4 text-lg overflow-hidden"
              >
                Download the app
              </a>
            </div>
          </div>

          <div className="bg-white hidden rounded-[30px] h-[550px] w-full max-w-[500px] p-5 text-[18px] lg:inline-block">
            <p className="mb-1">Scan the QR code wih your smartphone or your camera</p>
            <div>
              <img src={QrCode} width="100%" />
            </div>
          </div>
        </div>
      </section>
    );
}