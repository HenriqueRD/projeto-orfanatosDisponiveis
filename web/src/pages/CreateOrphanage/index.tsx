import './index.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { ArrowLeft, Plus } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import Leaflet from 'leaflet'
import api from '../../api/api';

export default function CreateOrphanage() {

  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ instructions, setInstructions ] = useState('')
  const [ openTime, setOpenTime ] = useState('')
  const [ openWeek, setOpenWeek ] = useState(false)
  const [ images, setImages ] = useState<File[]>([])
  const [ position, setPosition ] = useState<[number, number]>([0, 0]);
  
  const [ imagesPreview, setImagesPreview ] = useState<string[]>([])
  const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleAddImage(e: ChangeEvent<HTMLInputElement>) {
    if(!e.target.files) {
      return 
    }
    if(images.length >= 6) {
      alert("Somente 6 imagens")
      return 
    }
    const select = e.target.files[0]
    if(select.type != 'image/png' && select.type != 'image/jpeg') {
      alert("Somente imagens .png ou .jpeg")
      return 
    }

    setImages([ ...images, select])
    setImagesPreview([...imagesPreview, URL.createObjectURL(select)])
  }

  function handleDeleteImage(id: number) {
    const newImages = images.filter((_, i) => i !== id)
    const newPreview = imagesPreview.filter((_, i) => i !== id)

    setImages(newImages)
    setImagesPreview(newPreview)
  }

  function LocationMarker() {
    useMapEvents({
      click(x) {
        setPosition([x.latlng.lat, x.latlng.lng])
      },
    })
    return position === null ? null : (
      <Marker icon={mapStyle} position={position} />
    )
  }

  function handleOpenWeek() {
    if(openWeek) {
      setOpenWeek(!openWeek)
    }
    else {
      setOpenWeek(!openWeek)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = new FormData()
    
    data.append('name', name)
    data.append('description', description)
    data.append('phone', phone)
    data.append('instructions', instructions)
    data.append('latitude', String(position[0]))
    data.append('longitude', String(position[1]))
    data.append('open_time', openTime)
    data.append('open_week', String(openWeek))
    images.map(x => {
      return (
        data.append('images', x)
      )
    })

    api.post('/orphanages/', data).catch(x => alert(x))
  }

  const mapStyle = Leaflet.icon({
    iconUrl: logo,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [142, 11]
  })

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
            <form onSubmit={handleSubmit}>
              <div className="chield">
                <div className="head">
                  <h2>Dados</h2>
                  <hr />
                </div>
                <div className="input">
                  <div className="head">
                    <label htmlFor="local">Localização</label>
                    <span>Clique na sua localização</span>
                  </div>
                  {
                    initialPosition[0] !== 0 && (
                      <MapContainer center={initialPosition} zoom={12}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                      </MapContainer>
                    )
                  }
                  
                </div>
                <div className="input">
                  <label htmlFor="name">Nome</label>
                  <input value={name} onChange={x => setName(x.target.value)} id="name" type="text" />
                </div>
                <div className="input">
                  <label htmlFor="about">Sobre</label>
                  <textarea id="about" value={description} onChange={x => setDescription(x.target.value)} />
                </div>
                <div className="input">
                  <label htmlFor="name">Número do Whatsapp</label>
                  <input id="name" type="number" value={phone} onChange={x => setPhone(x.target.value)} />
                </div>
                <div className="input">
                  <div className="head">
                    <label htmlFor="name">Fotos</label>
                    <span>Máximo 6 imagens</span>
                  </div>
                  <div className="containerImages">
                    <div className="images">
                      {
                        imagesPreview.map((x, i) => {
                          return (
                            <div key={i} className="preview">
                              <img src={x} alt="" className="boxImages"/>
                              <button type='button' onClick={() => handleDeleteImage(i)}>
                                <Plus size={20} />
                              </button>
                            </div>
                          )
                        })
                      }
                      {
                        images.length >= 6 ? 
                          (
                            <></>
                          ) : (
                            <button type="button" className="box">
                              <label htmlFor="new"><Plus size={28} /></label>
                              <input id="new" onChange={handleAddImage} type="file" />
                            </button>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="chield">
                <div className="head">
                  <h2>Visitação</h2>
                  <hr />
                </div>
                <div className="input">
                    <label htmlFor="instruct">Instruções</label>
                    <textarea id="instruct" value={instructions} onChange={x => setInstructions(x.target.value)} />
                  </div>
                <div className="input">
                  <label htmlFor="hours">Horário das visitas</label>
                  <input id="hours" type="text" placeholder="Ex: Das 8:00 ate as 19:30" value={openTime} onChange={x => setOpenTime(x.target.value)} />
                </div>
                <div className="checkbox">
                  <label htmlFor="hours">Atende fim de semana?</label>
                  <input onChange={handleOpenWeek} type="checkbox" />
                </div>
              </div>
              <button className="submit" type="submit">Confirmar</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}