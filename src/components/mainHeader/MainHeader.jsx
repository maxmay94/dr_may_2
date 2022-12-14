const MainHeader = () => {
  return (
    <>
      <div className="bg-fixed sm:bg-cover bg-[length:1000px_1000px] bg-woods-walk bg-bottom w-screen h-screen contrast-75">
        {/* bg-[length:1400px_900px] */}
        <div className="h-[1px]">
        </div>
        <div className="bg-slate-900/60 backdrop-blur-[3px] backdrop-grayscale p-3 m-10 w-fit contrast-200 text-slate-200">
          <p className="font-black lg:text-8xl md:text-6xl sm:text-4xl text-3xl">
            DON'T LET <br /> 
            PAIN CONTROL <br /> 
            YOUR LIFE.
          </p>
          <p className="pt-5 lg:text-2xl md:text-xl text-base font-bold">
            Say goodbye to everyday aches and pains. <br />
            Dr. May is here to help you live a healthier, more active lifestyle.
          </p>
        </div>
      </div>
    </>
  )
}

export default MainHeader