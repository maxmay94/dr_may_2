import MainHeader from "../../components/mainHeader/MainHeader"
import About from "../../components/about/About"
import Info from "../../components/info/Info"
import FAQ from "../../components/faq/FAQ"
import MidBar from "../../components/midBar/MidBar"
import MaxInfo from "../../components/maxInfo/MaxInfo"

const Landing = () => {
  return (
    <div className="absolute top-[64px]">
      <MainHeader />
      <MidBar color={'bg-emerald-900'} />
      <About />
      <Info />
      <FAQ />
      <MidBar color={'bg-slate-900/90'} />
      <MaxInfo />
      <br />
    </div>
  )
}

export default Landing