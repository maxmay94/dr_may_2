const Question = ({question}) => {
  let questionPic = "/images/question.jpeg"
  return (
    <>
      <div className="flex pr-5">
        <img 
          className="rounded-full mr-5 md:w-20 md:h-20 h-12 drop-shadow" 
          src={questionPic}
          alt="question" 
        />
        <div className="bg-slate-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
          {question}
        </div>
      </div>
    </>
  )
}

export default Question