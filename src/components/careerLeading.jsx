import img from "../assets/IMG-20231107-WA0004.jpg";
export default function CareerLeading() {
    return(
        <section className="py-10 px-3 md:p-10">
            <div className="rounded-[30px] bg-white md:p-5 p-2">
                <div className="flex flex-col gap-2 items-center text-center mb-10">
                    <h1 className="text-[1.5rem] md:text-[3.5rem] font-semibold max-w-[800px]">Stove is one of the leading mobility gas platform in Africa</h1>
                    <p className="sm:ml-10 ml-0">By solving our own gas refill need, we are now solving millions of our use`s gas refill needs</p>
                </div>
                <div className="flex sm:justify-end justify-center">
                    <img src={img} alt="image" className="rounded-[50px] relative max-w-[800px] w-full img-mask group-hover:after:bg-transparent" />
                </div>
            </div>
        </section>
    )
}