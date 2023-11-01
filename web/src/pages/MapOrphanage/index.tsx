import './index.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { MapContainer, TileLayer } from 'react-leaflet'
import { ArrowLeft, Plus } from '@phosphor-icons/react'

export default function MapOrphanage() {

  return (
    <div id="MapOrphanage">
      <div className="sideBar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="info">
          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </div>
        <Link to="/"><ArrowLeft size={28} /></Link>
      </div>
      <div className="content">
        <header className="headerMobile">
          <Link to="/"><ArrowLeft weight="bold" size={34} /></Link>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Orfony</h1>
          </div>
        </header>
        <main className="map">
          <MapContainer center={[53, 10]} zoom={12} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          <Link className="create" to="/create-orphanages"><Plus size={28} weight="bold" /></Link>
        </main>
      </div>
    </div>
  )
}