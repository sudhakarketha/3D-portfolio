import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Tech, Navbar, Works } from './components/components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-secondary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />

        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
