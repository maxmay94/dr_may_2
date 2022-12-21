const Info = () => {
  return (
    <>
      <div className="bg-fixed sm:bg-cover bg-[length:1250px_1000px] bg-bottom bg-spine h-screen w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/50 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit contrast-200">
          <div className="flex">
            <p className=" grow font-black lg:text-6xl md:text-5xl text-4xl">
              LET ME <br />
              CRACK <br />
              YOU UP.
            </p>
            <div className="px-3">
              <img
                className="rounded-full md:h-60 h-32 drop-shadow-md contrast-[.6]"
                src="/images/dad_wes_milo.jpeg" 
                alt="peter_may" 
              />
          </div>
          </div>
          <p className="md:py-0 py-5 pr-5 font-bold w-2/3">
            Book an appointment today! <br /> 
            You can reach me at <br />
            <span className="inline-block text-orange-500">(413) 664-9050</span> or 
            <span className="text-orange-500"> docmay@gmail.com</span> <br />
            My office is conveniently located at
            73 Church Street in downtown North Adams
          </p>
        </div>
      </div>
    </>
  )
}

export default Info