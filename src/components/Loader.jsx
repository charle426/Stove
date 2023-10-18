import logo from "../assets/IMG-20231007-WA0005-removebg-preview.png";

export default function Loader() {
     document.onreadystatechange = function () {
       if (document.readyState !== "complete") {
         document.querySelector("body").style.visibility = "hidden";
         document.querySelector(".loader").style.visibility = "visible";
         document.querySelector(".curtain1").classList.remove("loads");
         document.querySelector(".curtain2").classList.remove("loads");
       } else {
         setTimeout(() => {
           document.querySelector("body").style.visibility = "visible";
           document.querySelector(".curtain1").classList.add("loads");
           document.querySelector(".curtain2").classList.add("loads");
           document.querySelector(".loader").style.width = "0%";
           document.querySelector(".loader").style.height = "0%";
         }, 2000);
       }
     };
  return (
    <section className="loader duration-500 flex flex-col md:flex-row overflow-hidden items-center h-[100vh] w-full bg-[#F7F8F7] fixed top-0 left-0 z-[2000]">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="w-[50%] curtain1 absolute h-[100vh] top-0 duration-500 left-0"></div>
        <div className="w-[50%] curtain2 absolute h-[100vh] top-0 duration-500 right-0"></div>
      </div>
      <div className="absolute fle items-center justify-center h-[100px] w-[100px] right-[50%] p-7 rounded-full bg-white translate-x-[-50%] translate-y-[-50%] transform animate-bounce origin-center">
        <img src={logo} alt="logo" className="md:w-[200px] w-[140px]" />
      </div>
    </section>
  );
}
