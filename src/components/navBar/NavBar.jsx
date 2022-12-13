const NavBar = () => {
  return (
    <div className="flex justify-around bg-slate-200/90 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className='font-sans w-screen'>
        <nav className="">
          <ul className="flex flex-row">

            <li className="grow m-2 font-unna font-bold text-2xl text-teal-900">
              <p>
                Dr. Peter May
              </p>
              <p className="text-xs">
                Church Street Chirporactic
              </p>
            </li>

            <li className="m-3 text-sm font-light">
              <p className="text-slate-900 text-right">
                (413) 664-9050
              </p>
              <p className="text-slate-900 text-right">
                docmay@gmail.com
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar