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
          <p className="font-black text-6xl">
            DON'T DO PAIN. <br /> DO YOU.
          </p>
          <p className="pt-5">
            Whether you are seeking relief from everyday aches and pains or looking to maintain a healthy, active life, we can help.
          </p>
        </div>
      </div>

      {/* ----- Q & A? ----- */}
      <div className="bg-red-900 h-screen w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>
        <div className="text-6xl font-black m-10">
          This is a sentence about some stuff!
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