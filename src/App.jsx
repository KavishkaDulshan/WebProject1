import { Navbar, Hero, About, Products, Services, Contact, Footer } from './components'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-[#faf8f5] to-[#f5f3ef]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
