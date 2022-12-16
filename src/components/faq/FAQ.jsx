import Question from "../question/Question"
import Answer from "../answer/Answer"

const FAQ = () => {
  let question = "bg-slate-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded"
  let answer = "bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded"
  let questionPic = "/images/question.jpeg"
  let dr_pic = "/images/dad_recent.jpeg"
  
  return (
    <>
      <div className="bg-gradient-to-b from-emerald-800/70 to-slate-900/90  w-screen pt-[64px]">
        <div className="h-[1px]">
        </div>

        <div className="text-6xl font-black sm:text-center sm:m-10">
          Frequently Asked Questions.
        </div>
        <div className="md:w-3/4 md:text-base text-sm md:bg-emerald-700/30  rounded-sm p-5 mx-auto">

          <Question question={'Are you taking new patients? And how far out are you booking?'}/>
          <Answer  answer={'Yes, I am accepting new patients. And, I can usually see them within a few days after their call. Sometimes, the same day. My hours are, by appointment.'} />
          <br />

          <Question question={'Do you take my health insurance?'} />
          <Answer answer={'Currently, I am only accepting BC/BS of Massachusetts and Medicare. I am not on other provider panels. You still have insurance. But, you will have to pay as you go, submit the claim yourself, and accept whatever they reimburse you. You will need to discuss this with your insurance company to find out their reimbursement for “out-of-network providers.” Whatever insurance you have, you are always responsible for deductibles and co- pays. For most patients with insurance, this means they are paying close to my self-pays fees anyway. Note: your insurance doesn\'t\ pay for your electrician, plumber, or even your hair and nail appointments, etc. But, you still use them and pay for them, when needed. Isn\'t\ your health as, or more, important?'} />
          <br />

          <Question question={'How much is a visit?'} />
          <Answer answer={'On the initial office visit we go over the requisite paperwork. Then, we go into the room, do a history and exam. Based on that, I will give you a diagnosis that you will understand. Next, and most importantly, I will give you explicit verbal and written home instructions to expedite healing. Then, I will explain what I am going to do and YES, I DO treat on the first visit. All of that takes about 1 hour. $125.00 Subsequent visits are $50.00'} />
          <Answer note={true} answer={'Medicare and your supplemental insurance DO NOT COVER the initial exam. You are responsible for the $125.00 fee. On the initial, and on subsequent, visits Medicare covers 80% of the treatment cost and your supplemental insurance, if you have it, will probably cover the remaining 20%.'} />          

        </div>
      </div>
    </>
  )
}

export default FAQ