import './index.css'
import logo from '../../assets/logo.svg'
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, WarningCircle, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
<<<<<<< HEAD
import Leaflet from 'leaflet';
=======
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654

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
<<<<<<< HEAD
      image_url: string
=======
      image_uirl: string
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
    }
  ]
}

<<<<<<< HEAD
const mapStyle = Leaflet.icon({
  iconUrl: logo,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [142, 11]
})

=======
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
export default function Orphanage() {
  
  const { id } = useParams()
  const [ orphanage, setOrphanage ] = useState<OrphanageProps>()
<<<<<<< HEAD
  const [ image, setImage ] = useState(0)
=======
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654

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
<<<<<<< HEAD
            <Link to="/orphanages"><ArrowLeft weight="bold" size={34} /></Link>
=======
            <Link to="/"><ArrowLeft weight="bold" size={34} /></Link>
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Orfony</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
<<<<<<< HEAD
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
=======
            <div className="images">
              <img src="https://blog.causeiobem.org/wp-content/uploads/2022/06/proteger-a-infancia-704x454.jpg" alt="" />
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
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
<<<<<<< HEAD
                        <Marker icon={mapStyle} position={[orphanage.latitude , orphanage.longitude]} />
=======
                        <Marker position={[orphanage.latitude , orphanage.longitude]} />
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
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