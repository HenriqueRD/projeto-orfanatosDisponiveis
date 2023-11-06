import './index.css'
import logo from '../../assets/logo.svg'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, WarningCircle, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

interface OrphanageProps {
  name: string
  description: string
  latitude: number
  longitude: number
  instructions: string
  open_week: boolean
  open_time: string
  phone: string
  images: [
    {
      id: number
      image_url: string
    }
  ]
}

const mapStyle = Leaflet.icon({
  iconUrl: logo,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [142, 11]
})

export default function Orphanage() {
  
  const { id } = useParams()
  const [ orphanage, setOrphanage ] = useState<OrphanageProps>()
  const [ image, setImage ] = useState(0)

  useEffect(() => {
    async function get() {
      await api.get(`/orphanages/${id}`).then(x => setOrphanage(x.data))
    } 
    get()
  }, [id])

  return (
    <div id="Orphanage">
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
            <div className="imagePrimary">
              <img src={orphanage?.images[image].image_url} />
            </div>
            <div className="images">
              {
                orphanage?.images.map((x, i) => {
                  console.log(orphanage.open_week)
                  return (
                    <button key={x.id} onClick={() => setImage(i)}>
                      <img src={x.image_url} className={`${image == i && 'active'}`}/>
                    </button>
                  )
                })
              }
            </div>
            <div className="info">
              <div className="desc">
                <h1>{orphanage?.name}</h1>
                <p>{orphanage?.description}</p>
                <div>
                  {
                    orphanage && (
                      <MapContainer center={[orphanage.latitude, orphanage.longitude]} zoom={12}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={mapStyle} position={[orphanage.latitude , orphanage.longitude]} />
                      </MapContainer>
                    )
                  }
                </div>
              </div>
              <hr />
              <div className="desc">
                <h2>Instruções para visita</h2>
                <p>{orphanage?.instructions}</p>
                <div className="hours">
                  <div className="containerHours">
                    <div>
                      <Clock size={38} />
                      <p>{orphanage?.open_time}</p>
                    </div>
                    <div className={`${orphanage?.open_week ? "yes" : "no"}`}>
                      <WarningCircle size={38} />
                      <p>{orphanage?.open_week ? "Atendemos fim de semana" : "Não atendemos fim de semana"}</p>
                    </div>
                  </div>
                </div>
                <button className="whats">
                  <WhatsappLogo size={28} />
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}