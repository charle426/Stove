import bg from "../assets/IMG-20230929-WA0010.jpg";
export default function ServicesHero() {
    const style = {
      backgroundImage: `linear-gradient(to right, #1111116d 30%, transparent), url(${bg})`,
    };
    return (
      <section className="md:px-10 md:pb-10 px-5">
        <div
          style={style}
          className="bg-cover relative py-10 px-10 bg-left-top min-h-[55vh] duration-500 w-full md:h-[85vh] h-[55vh] rounded-[50px] flex justify-start items-end"
        >
          <h1 className="md:text-[70px] text-white text-[55px] font-semibold">
            Stove <span className="text-[#a8e92f]">services</span>
          </h1>
        </div>
      </section>
    );
}