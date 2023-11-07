import {availableJobs} from "./jobsData.js"
export default function JobsAvailable() {
    const jobs = availableJobs.map((items, index) => {
        return (
          <a href="https://form.jotform.com/232431717425553" key={index}>
            <div className="rounded-[20px] group hover:-translate-y-2 duration-200 bg-white flex gap-2 flex-col items-start max-w-[350px] w-full p-4">
              <p className="text-[0.7rem]">{items.jobType}</p>
              <div>
                <h4 className="group-hover:text-[#A8E92F] text-[1.5rem] font-medium duration-200 min-h-[60px]">
                  {items.jobTitle}
                </h4>
                <p className="line-clamp-2 group-hover:line-clamp-none duration-200">{ items.jobDesc }</p>
              </div>
              <p className="text-[0.7rem]">{items.jobLocation}</p>
            </div>
          </a>
        );
    })

    return (
        <section className="px-2 py-5 md:px-10">
            <h1 className="text-[2rem] md:text-[4rem] font-bold">Stove`s growing fast; <br/> so should you</h1>
            <div className="auto-grid3 mt-8">
                {jobs}
            </div>
        </section>
    )
}