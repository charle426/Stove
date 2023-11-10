import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { availableJobs } from "./jobsData.js"
import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function JobsAvailable() {
    const jobs = availableJobs.map((items, index) => {
        return (
          <div key={index} className="" data-id={index}>
            <div className="rounded-[20px] hover:-translate-y-2 duration-200 bg-white flex gap-2 flex-col items-start max-w-[350px] w-full p-4">
              <p className="text-[0.7rem]">{items.jobType}</p>
              <div>
                <h4 className="text-[1.5rem] font-medium duration-200 min-h-[60px]">
                  {items.jobTitle}
                </h4>
                <div className="flex items-start group justify-between w-full job-list" onClick={setToggleDesc}>
                <p className="line-clamp-2 duration-200 max-w-[80%] jobDesc">
                  {items.jobDesc}
                  </p>
                  <div>
                    <FontAwesomeIcon icon={faAngleDown} className="rotate-0 duration-200 job-angle" />
                  </div>
                </div>
              </div>
              <p className="text-[0.7rem]">{items.jobLocation}</p>
            <div className="flex justify-end w-full">
              <a
                  href={ items.link }
                className="bg-[#A8E92F] rounded-[30px] py-2 px-5 font-semibold"
              >
                apply
              </a>
            </div>
            </div>
          </div>
        );
    })

  function setToggleDesc(e) {
    const current = e.currentTarget
    const jobList = document.querySelectorAll(".job-list")
    jobList.forEach((job) => {
      if (current !== job)
      {
        job.classList.remove("toggleJob")
      } else
      {
        current.classList.toggle("toggleJob");
      }
    })
  }

    return (
        <section className="px-2 py-5 md:px-10">
            <h1 className="text-[2rem] md:text-[4rem] font-bold">Stove`s growing fast; <br/> so should you</h1>
            <div className="auto-grid3 mt-8">
                {jobs}
            </div>
        </section>
    )
}