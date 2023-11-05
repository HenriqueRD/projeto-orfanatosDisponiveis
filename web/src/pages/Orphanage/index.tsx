import './index.css'
import logo from '../../assets/logo.svg'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, WarningCircle, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

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
      image_uirl: string
    }
  ]
}

export default function Orphanage() {
  
  const { id } = useParams()
  const [ orphanage, setOrphanage ] = useState<OrphanageProps>()

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
            <Link to="/"><ArrowLeft weight="bold" size={34} /></Link>
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Orfony</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="images">
              <img src="https://blog.causeiobem.org/wp-content/uploads/2022/06/proteger-a-infancia-704x454.jpg" alt="" />
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
                        <Marker position={[orphanage.latitude , orphanage.longitude]} />
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