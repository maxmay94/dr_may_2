const Landing = () => {
  return (
    <main className="relative w-screen h-full">
      <div className="lg:w-2/3 mx-auto">

        <div className="relative">
          <img className="saturate-[.8]" src="src/images/happy_people_temp.jpeg" alt="happy_people_temp" />
          <div className="absolute bottom-1">
            <p className="font-bold text-3xl rounded-xl backdrop-blur-[3px] bg-slate-900/30 p-3">
              Tired of back pain  and <br /> some other stuff <br /> ruining you <br /> life  all the time?
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Landing