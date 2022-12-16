const About = () => {
  return (
    <>
      <div className="bg-slate-900 w-screen pt-[64px]">
        <div className="h-[1px] ">
        </div>
        <div className="lg:text-6xl md:text-5xl text-3xl font-black mx-10">
          Proudly <span className="animate-pulse text-amber-500">cracking necks and cashing checks</span> in the North Adams community for over 25 years!
          <p className="md:text-xl text-base md:p-10 py-10">
            In my 36+ years as a chiropractor I have helped 1000&#39;s of patients in our community
            with problems ranging from routine neck and back pain, to “pinched nerves”, headaches, a
            variety of arm-shoulder-wrist pain and hip-knee-ankle-foot pain, and more. Every
            complaint is unique to the individual. I will do everything I can to help you. Most importantly, I
            will give you excellent advice and home instructions on how to help yourself get better faster.
            And, if you are interested, I will go beyond that and give you vitally important information,
            instruction, and advice on how to improve your overall health.
          </p>
        </div>
          <img 
            src="/images/office_cover_photo.jpeg" 
            alt="office_photo" 
            className="sm:px-10 px-3"  
          />
        <div className="h-20">
        </div>
      </div>
    </>
  )
}

export default About