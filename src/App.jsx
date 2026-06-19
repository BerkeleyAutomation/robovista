import SideNav from './components/SideNav.jsx'
import Hero from './components/Hero.jsx'
import Teaser from './components/Teaser.jsx'
import Tldr from './components/Tldr.jsx'
import RQAFramework from './components/RQAFramework.jsx'
import Benchmark from './components/Benchmark.jsx'
import Method from './components/Method.jsx'
import Results from './components/Results.jsx'
import Physical from './components/Physical.jsx'
import KeyFindings from './components/KeyFindings.jsx'
import FutureWork from './components/FutureWork.jsx'
import Citation from './components/Citation.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <SideNav />
      <Hero />
      <Teaser />
      <Tldr />
      <RQAFramework />
      <Method />
      <Benchmark />
      <Results />
      <Physical />
      <KeyFindings />
      <FutureWork />
      <Citation />
      <Footer />
    </>
  )
}
