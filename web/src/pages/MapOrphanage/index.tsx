import './index.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ArrowLeft, ArrowRight, Plus } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg';
import api from '../../api/api';
import Leaflet from 'leaflet';

interface OrphanageProps {
  id: number
  name: string
  latitude: number
  longitude: number
}

const mapStyle = Leaflet.icon({
  iconUrl: logo,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [142, 11]
})

export default function MapOrphanage() {

  const [ orphanages, setOrphanages ] = useState<OrphanageProps[]>([])

  useEffect(() => {
    async function get() {
      await api.get('/orphanages/').then(x => setOrphanages(x.data))
    }
    get()
  }, [])

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
          <MapContainer center={[-29.5239116,-51.9925793]} zoom={6} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              orphanages.map(x => {
                return (
                  <Marker icon={mapStyle} key={x.id} position={[x.latitude, x.longitude]}>
                    <Popup closeButton={false} minWidth={200} maxWidth={200} className="popupMap">
                      <span>{x.name}</span>
                      <Link to={`/orphanage/${x.id}`}>
                        <ArrowRight size={24} />
                      </Link>
                    </Popup>
                  </Marker>
                )
              })
            }
            
          </MapContainer>
          <Link className="create" to="/create-orphanages"><Plus size={28} weight="bold" /></Link>
        </main>
      </div>
    </div>
  )
}