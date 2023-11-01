import './index.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import banner from '../../assets/banner.svg'
import { ArrowRight } from '@phosphor-icons/react'

export default function Home() {

  return (
    <div id="Home">
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Orfony</h1>
          </div>  
        </header>
        <div className="content">
          <div className="banner">
            <h1>Leve felicidade para o mundo</h1>
            <img src={banner} alt="" />
          </div>
        </div>
        <footer>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          <Link  to="/orphanages"><ArrowRight size={28}/></Link>
        </footer>
      </div>
    </div>
  )
}