
import React from "react"
import { faqData } from "./faqData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons"
export default function Faq() {
    const [toggleFaq, setToggleFaq] = React.useState(1)
    const faqs = faqData.map((items) => {
        return (
          <div
            key={items.id}
            className="bg-white rounded-[30px] p-7"
            onClick={() => setToggleFaq(items.id)}
          >
            <h3
              className={
                items.id === toggleFaq
                  ? "text-[28px] flex w-full justify-between items-center text-[#a8e92f]"
                  : "text-[25px] flex w-full justify-between items-center"
              }
            >
              {items.question}
              <FontAwesomeIcon
                icon={items.id === toggleFaq ? faSubtract : faPlus}
                className={
                  items.id === toggleFaq
                    ? "duration-300 rotate"
                    : "duration-300"
                }
              />
            </h3>
            <div
              className={
                items.id === toggleFaq
                  ? "h-auto text-[20px] duration-200 mt-2"
                  : " duration-200 h-0 overflow-hidden"
              }
            >
              {items.answer}
            </div>
          </div>
        );
    })
    return (
        <section className="faqSection px-5 py-5 md:px-10 flex md:flex-row flex-col items-start justify-between">
            <div className="w-full text-[60px] font-semibold">
                <h1>
                    FAQ<span className="accent">s</span>
                </h1>
            </div>
            <div className="w-full flex flex-col gap-3">
                 {faqs}
            </div>
           
        </section>
    )
}