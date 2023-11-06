import './index.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { ArrowLeft } from '@phosphor-icons/react';

export default function CreateOrphanage() {

  return (
    <div id="CreateOrphanage">
      <div className="sideBar">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Link to="/orphanages"><ArrowLeft weight='bold' size={28} /></Link>
        </div>
      </div>
      <div className="content">
        <header className="headerMobile">
          <div className="headMobContainer">
            <Link to="/orphanages"><ArrowLeft weight="bold" size={34} /></Link>
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Orfony</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <h1>oi</h1>
          </div>
        </main>
      </div>
    </div>
  )
}