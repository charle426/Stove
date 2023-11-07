export default function StepsCareer() {
  return (
    <section className="py-5 md:px-10 px-2 relative">
      <div className="bg-white rounded-[50px] md:p-7 p-3">
        <div>
          <h2 className="text-[45px] font-semibold max-w-[700px]">
            Three steps towards your future
          </h2>
          <div className="md:translate-x-10 my-5 max-w-[700px] translate-x-4">
            <p className="text-[20px]">
              We want to work with collaborative pragmatic people, who enjoy
              helping those around them succeed
            </p>
            <div className="mt-6 hover:translate-y-2 duration-75 md:block hidden w-fit">
              <a
                href="https://play.google.com/store/apps/details?id=com.stove.stoveapp"
                className="button py-3 px-5 text-[#323942]"
              >
                Download app
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:flex-row flex-col items-center justify-end">
          <div className="sm:translate-y-5">
            <div className="flex flex-col gap-3 group bg-[#F7F8F7] w-full max-w-[300px] p-4 rounded-[30px]">
              <h3 className="text-[20px] duration-300 group-hover:text-[#a8e92f] font-medium">Step 1: Apply</h3>
              <p className=" group-hover:text-[#000] text-[#323942b0] duration-300">
                Just find a role that interests you and send in you application.
                Our positions remain open until we find the right candidate.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 group duration-300 bg-[#F7F8F7] w-full max-w-[300px] p-4 rounded-[30px]">
              <h3 className=" group-hover:text-[#a8e92f] duration-300 text-[20px] font-medium">
                Step 2: Interviews and a home task
              </h3>
              <p className="group-hover:text-[#000] text-[#323942b0] duration-300">
                Every role is different but, typically you will be asked to
                complete a home task. Next you will have interviews with the
                recruiter, hiring manager and other team members before we make
                a final decision.
              </p>
            </div>
            <div className="flex flex-col gap-3 group bg-[#F7F8F7] w-full max-w-[300px] p-4 rounded-[30px]">
              <h3 className="text-[20px] font-medium group-hover:text-[#a8e92f] duration-300">Step 3: Decision</h3>
              <p className=" group-hover:text-[#000] text-[#323942b0] duration-300">
                If its a great fit for you and us, we would invite you to join
                the team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
