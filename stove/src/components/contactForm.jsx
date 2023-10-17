import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import emailjs from "@emailjs/browser"
// import mailPhp from "./mail.php"

export default function ContactForm() {
    const [mail, setMail] = React.useState({
        name: "", email: "", message: "",
    })

    function handleChange(e) {
        const {value, name} = e.target
        setMail((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        mail.name = ""
        mail.email = ""
        mail.message = ""
        // emailjs.sendForm("service_id", "template_id", e.target, "public_key")
        document.getElementById("submitBtn").textContent = "Sending"
        document.getElementById("submitBtn").style.userSelect = "none"
        document.getElementById("submitBtn").style.pointerEvents = "none"
        document.getElementById("submitBtn").style.opacity = "0.6"
        setTimeout(() => {
            document.getElementById("submitBtn").textContent = "Send";
            document.getElementById("submitBtn").style.userSelect = "all";
            document.getElementById("submitBtn").style.pointerEvents = "1";
        }, 5000);
    }
    
    return (
      <section className="p-5 md:p-10">
        <h2 className="text-[40px] max-w-[550px] mb-7 w-full">
          Do not hesitate to contact us for more information We will answer you
          promptly
        </h2>
        <div className="flex md:flex-row flex-col gap-6 items-start">
          <div className="w-full flex-col flex gap-6">
            <div>
              <h3 className="text-[30px] font-medium text-[#a8e92f] flex items-center gap-2">
                <FontAwesomeIcon icon={faLocation} />
                Head Office
              </h3>
              <p className="font-medium text-[20px] text-black">
                Plot 5 hariwe egege street <br /> ogborhill Aba, Abia State,
                <br /> Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-[30px] font-medium text-[#a8e92f] flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </h3>
              <p className="font-medium text-[20px] text-black">
                quickserve@stove.com.ng
              </p>
            </div>
            <div>
              <h3 className="text-[30px] font-medium text-[#a8e92f] flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                Hotline
              </h3>
              <p className="font-medium text-[20px] text-black">
                +2349071509670
              </p>
            </div>
          </div>
          <form
            action="mailto:charlesakachi4@gmail.com"
            encType="text/plain"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={mail.name}
                  onChange={handleChange}
                  className="outline-none rounded-[10px] px-2 py-3 max-w-[350px] bg-white border border-[#323942] focus:border-[#a8e92f] w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={mail.email}
                  onChange={handleChange}
                  className="outline-none rounded-[10px] px-2 py-3 max-w-[350px] bg-white border border-[#323942] focus:border-[#a8e92f] w-full"
                />
              </div>
              <div className="max-h-[100px] min-h-[100px] w-full ">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={mail.message}
                  onChange={handleChange}
                  className="min-h-[100px] select-none max-h-[100px] outline-none rounded-[10px] px-2 py-3 max-w-[350px] bg-white border border-[#323942] focus:border-[#a8e92f] w-full"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#a8e92f] px-4 mt-3 rounded-lg py-2"
                id="submitBtn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    );
}