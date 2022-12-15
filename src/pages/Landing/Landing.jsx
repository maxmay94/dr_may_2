const Landing = () => {
  let question = "bg-slate-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded"
  let answer = "bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded"
  let questionPic = "/images/question.jpeg"
  let dr_pic = "/images/dad_recent.jpeg"

  return (
    <div className="absolute top-[64px]">
      {/* ----- MAIN HEADER AREA ----- */}
      {/* <div className="bg-fixed bg-top bg-[url('public/images/happy_people_temp.jpeg')] w-screen h-screen contrast-75"> */}
      <div className="bg-fixed bg-top bg-happy-people-temp w-screen h-screen contrast-75">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/60 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit contrast-200">
          <p className="font-black lg:text-8xl md:text-6xl sm:text-4xl text-3xl">
            DON'T LET <br /> 
            PAIN CONTROL <br /> 
            YOUR LIFE.
          </p>
          <p className="pt-5 lg:text-2xl md:text-xl text-base font-bold">
            Whether you are seeking relief from everyday aches and pains <br />
            or looking to maintain a healthy, active life, Dr. May can help.
          </p>
        </div>
      </div>

      {/* ----- INFO ----- */}
      <div className="bg-emerald-900 w-screen">
        <div className="h-[1px] ">
        </div>
        <div className="text-center py-5">
          73 Church Street
          <br />
           North Adams, MA 01247
          <br />
          (413) 664-9050
        </div>
      </div>

      {/* ----- ABOUT ----- */}
      <div className="bg-slate-900 w-screen pt-[64px]">
        <div className="h-[1px] ">
        </div>
        <div className="lg:text-6xl md:text-5xl text-3xl font-black m-10">
          Proudly cracking necks and cashing checks in the North Adams community for over 25 years!
          <p className="md:text-xl text-base md:p-10 py-10">
            In my 36+ years as a chiropractor I have helped 1000&#39;s of patients in our community
            with problems ranging from routine neck and back pain, to “pinched nerves”, headaches, a
            variety of arm-shoulder-wrist pain and hip-knee-ankle-foot pain, and more. Every
            complaint is unique to the individual. I will do everything I can to help you. Most importantly, I
            will give you excellent advice and home instructions on how to help yourself get better faster.
            And, if you are interested, I will go beyond that and give you vitally important information,
            instruction, and advice on how to improve your overall health.
          </p>
          <img 
            src="/images/office_cover_photo.jpeg" 
            alt="office_photo" 
            className="lg:px-10"  
          />
        </div>
        <div className="h-20">
        </div>
      </div>
      

      {/* ----- ABOUT ----- */}
      {/* <div className="bg-[url('../public/images/x-ray_film_temp.jpeg')] bg-fixed bg-cover h-screen w-screen pt-[64px]"> */}
      <div className=" bg-fixed bg-cover bg-x-ray-temp h-screen w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/20 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit contrast-200">
          <div className="flex">
            <p className=" grow font-black lg:text-6xl md:text-5xl sm:text-4xl text-2xl">
              LET ME <br />
              CRACK <br />
              YOU UP.
            </p>
            <div className="px-3">
              <img
                className="rounded-full md:h-40 h-24 drop-shadow-md contrast-[.6]"
                src="/images/dad_recent.jpeg" 
                alt="peter_may" 
              />
          </div>
          </div>
          <p className="py-5 pr-5 font-bold w-2/3">
            Book an appointment today! <br /> 
            You can reach me at <br />
            <span className="inline-block text-orange-500">(413) 664-9050</span> or 
            <span className="text-orange-500"> docmay@gmail.com</span> <br />
            My office conveniently is located at
            73 Church Street in downtown North Adams
          </p>
        </div>
      </div>

      {/* ----- FAQ ----- */}
      <div className="bg-gradient-to-b from-emerald-800/70 to-slate-900/90 w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>

        <div className="text-6xl font-black sm:text-center sm:m-10">
          Frequently Asked Questions.
        </div>
        <div className="sm:w-3/4 md:text-base text-sm bg-emerald-700/40 rounded-sm p-5 mx-auto">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={questionPic}
              alt="question" />
            <div className={question}>
              Are you taking new patients? And how far out are you booking?
            </div>
          </div>
          {/* ANSWER */}
          <div className="lg:pl-60 flex mt-2">
            <div className={answer}>
              Yes, I am accepting new patients. And, I can usually see them within a few days after
              their call. Sometimes, the same day. My hours are, by appointment.
            </div>
            <img 
              className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={dr_pic}
              alt="dr_peter_may"/>
          </div>
          <br />

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={questionPic}
              alt="question" />
            <div className={question}>
              Do you take my health insurance?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className={answer}>
              Currently, I am only accepting BC/BS of Massachusetts and Medicare. I am not on
              other provider panels. You still have insurance. But, you will have to pay as you go, submit
              the claim yourself, and accept whatever they reimburse you. You will need to discuss this
              with your insurance company to find out their reimbursement for “out-of-network
              providers.”
              Whatever insurance you have, you are always responsible for deductibles and co-
              pays. For most patients with insurance, this means they are paying close to my self-pays
              fees anyway.
              Note: your insurance doesn&#39;t pay for your electrician, plumber, or even your hair and
              nail appointments, etc. But, you still use them and pay for them, when needed. Isn&#39;t your
              health as, or more, important?
            </div>
            <img 
              className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={dr_pic} 
              alt="dr_peter_may"/>
          </div>
          <br />

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={questionPic} 
              alt="question" />
            <div className={question}>
              How much is a visit?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className={answer}>
              On the initial office visit we go over the requisite paperwork. Then, we go into the room,
              do a history and exam. Based on that, I will give you a diagnosis that you will understand.
              Next, and most importantly, I will give you explicit verbal and written home instructions to
              expedite healing. Then, I will explain what I am going to do and YES, I DO treat on the
              first visit. All of that takes about 1 hour. $125.00 Subsequent visits are $50.00
            </div>
            <img 
              className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={dr_pic} 
              alt="dr_peter_may"/>
          </div>
          <div className="flex mt-2">
            <div className={answer}>
              <div className="text-orange-700">
                Note for Medicare patients:
              </div>
              Medicare and your supplemental insurance DO NOT COVER the initial exam. You are
              responsible for the $125.00 fee. On the initial, and on subsequent, visits Medicare
              covers 80% of the treatment cost and your supplemental insurance, if you have it, will
              probably cover the remaining 20%.
            </div>
            <img 
              className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
              src={dr_pic}
              alt="dr_peter_may"/>
          </div>
          
          <br />
        </div>
      </div>

      {/* ----- INFO ----- */}
      <div className="bg-slate-900/90 w-screen">
        <div className="h-[1px] ">
        </div>
        <div className="text-center py-5 mb-[30px]">
          73 Church Street
          <br />
           North Adams, MA 01247
          <br />
          (413) 664-9050
        </div>
      </div>

    </div>
  )
}

export default Landing