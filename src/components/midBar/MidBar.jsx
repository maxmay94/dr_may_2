const MidBar = ({color}) => {
  return (
    <>
      {/* ----- INFO ----- */}
      <div className={color}>
        <div className="h-[1px] ">
        </div>
        <div className="text-center py-5 text-xl">
          73 Church Street
          <br />
           North Adams, MA 01247
          <br />
          (413) 664-9050
          <br />
          docmay@gmail.com
        </div>
      </div>
    </>
  )
}

export default MidBar