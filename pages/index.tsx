import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import MainContent from '../components/MainContent/MainContent'
import NavBar from '../components/NavBar/NavBar'

const Home: NextPage = () => {
  return (
    <div className="app-root">
      <NavBar />
      <MainContent />
      
      <Footer />
    </div>
  )
}

export default Home
