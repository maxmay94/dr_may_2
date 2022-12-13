const Landing = () => {
  return (
    <div className="absolute top-[64px]">
      <div className="bg-fixed bg-top bg-happy-people-temp w-screen h-screen saturation-[100px]">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/20 backdrop-blur-[3px] p-3 m-10 w-fit">
          <p className="font-black lg:text-6xl md:text-5xl sm:text-4xl text-3xl mt">
            DON'T DO PAIN. <br /> DO YOU.
          </p>
        </div>
      </div>
      <div className="bg-slate-900 h-screen w-screen ">
        <div className="h-[1px]">
        </div>
        <div className="text-6xl font-black font-sans-serif m-10">
          This is a sentence about some stuff!
        </div>
      </div>
    </div>
  )
}

export default Landing