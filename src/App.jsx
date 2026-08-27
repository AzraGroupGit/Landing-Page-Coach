import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import About from './components/About.jsx'
import Masterclass from './components/Masterclass.jsx'
import Private from './components/Private.jsx'
import Speaker from './components/Speaker.jsx'
import Clients from './components/Clients.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div aria-hidden="true" className="grain" />
      <Nav />
      <main id="konten" className="w-full max-w-full overflow-x-clip">
        <Hero />
        <Programs />
        <About />
        <Masterclass />
        <Private />
        <Speaker />
        <Clients />
      </main>
      <Footer />
    </>
  )
}
