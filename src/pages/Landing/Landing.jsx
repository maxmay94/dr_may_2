const Landing = () => {
  return (
    <div className="absolute top-[64px]">
      {/* ----- MAIN HEADER AREA ----- */}
      <div className="bg-fixed bg-top bg-happy-people-temp w-screen h-screen contrast-75">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/60 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit contrast-200">
          <p className="font-black text-6xl">
            DON'T DO PAIN. <br /> DO YOU.
          </p>
          <p className="pt-5">
            Whether you are seeking relief from everyday aches and pains or looking to maintain a healthy, active life, we can help.
          </p>
        </div>
      </div>

      {/* ----- INFO? ----- */}
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

      {/* ----- ABOUT? ----- */}
      <div className="bg-slate-900 h-screen w-screen pt-[64px]">
        <div className="h-[1px] ">
        </div>
        <div className="text-6xl font-black m-10">
          This is a sentence about some stuff!
        </div>
      </div>
      

      {/* ----- TESITMONAL? ----- */}
      <div className=" bg-fixed bg-cover bg-x-ray-temp h-screen w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/20 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit ">
          <p className="font-black lg:text-6xl md:text-5xl sm:text-4xl text-2xl">
            {/* MY NECK. <br /> 
            MY BACK. <br />
            MY CHIROPRACTOR. <br />
            FIXED WITH CRACK. */}
            LET ME <br />
            CRACK <br />
            YOU UP
          </p>
          <p className="pt-5">
            Whether you are seeking relief from everyday aches and pains or looking to maintain a healthy, active life, we can help.
          </p>
        </div>
      </div>

      {/* ----- FAQ ----- */}
      <div className="bg-red-900 w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>

        <div className="text-6xl font-black sm:text-center sm:m-10">
          Frequently Asked Questions.
        </div>
        <div className="sm:w-3/4 md:text-base text-sm bg-pink-600/40 rounded-sm p-5 mx-auto">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow" 
              src="/src/images/question.jpeg" 
              alt="question" />
            <div className="bg-red-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              Are you taking new patients? And how far out are you booking?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
              Yes, I am accepting new patients. And, I can usually see them within a few days after
              their call. Sometimes, the same day. My hours are, by appointment.
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow" 
              src="/src/images/dad_headshot.jpeg" 
              alt="dr_peter_may"/>
          </div>
          <br />

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow" 
              src="/src/images/question.jpeg" 
              alt="question" />
            <div className="bg-red-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              Do you take my health insurance?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
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
              className="rounded-full ml-5 w-20 h-20 drop-shadow" 
              src="/src/images/dad_headshot.jpeg" 
              alt="dr_peter_may"/>
          </div>
          <br />

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow" 
              src="/src/images/question.jpeg" 
              alt="question" />
            <div className="bg-red-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              How much is a visit?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
              On the initial office visit we go over the requisite paperwork. Then, we go into the room,
              do a history and exam. Based on that, I will give you a diagnosis that you will understand.
              Next, and most importantly, I will give you explicit verbal and written home instructions to
              expedite healing. Then, I will explain what I am going to do and YES, I DO treat on the
              first visit. All of that takes about 1 hour. $125.00 Subsequent visits are $50.00
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow" 
              src="/src/images/dad_headshot.jpeg" 
              alt="dr_peter_may"/>
          </div>
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
              <div className="text-orange-700">
                Note for Medicare patients:
              </div>
              Medicare and your supplemental insurance DO NOT COVER the initial exam. You are
              responsible for the $125.00 fee. On the initial, and on subsequent, visits Medicare
              covers 80% of the treatment cost and your supplemental insurance, if you have it, will
              probably cover the remaining 20%.
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow" 
              src="/src/images/dad_headshot.jpeg" 
              alt="dr_peter_may"/>
          </div>
          
          <br />



        </div>
        <div className="h-20">
        </div>
      </div>

      {/* ----- INFO? ----- */}
      <div className="bg-orange-900 w-screen">
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