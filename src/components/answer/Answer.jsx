const Answer = ({answer, note}) => {
  let dr_pic = "/images/dad_recent.jpeg"
  return (
    <>
      <div className="flex mt-2 pl-5">
        <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
          { note &&
            <div className="text-orange-700">
              Note for Medicare patients:
            </div>
          }
          {answer}
        </div>
        <img 
          className="rounded-full ml-5 md:w-20 md:h-20 h-12 drop-shadow" 
          src={dr_pic}
          alt="dr_peter_may"/>
      </div>
    </>
  )
}

export default Answer