import './index.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { ArrowLeft, Plus } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';

export default function CreateOrphanage() {

  const [ images, setImages ] = useState<File[]>([])
  const [ imagesPreview, setImagesPreview ] = useState<string[]>([])

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
            <form>
              <div className="chield">
                <div className="head">
                  <h2>Dados</h2>
                  <hr />
                </div>
                <div className="input">
                  <label htmlFor="name">Nome</label>
                  <input id="name" type="text" />
                </div>
                <div className="input">
                  <label htmlFor="about">Sobre</label>
                  <textarea id="about" />
                </div>
                <div className="input">
                  <label htmlFor="name">Número do Whatsapp</label>
                  <input id="name" type="number" />
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
                    <textarea id="instruct" />
                  </div>
                <div className="input">
                  <label htmlFor="hours">Horário das visitas</label>
                  <input id="hours" type="text" />
                </div>
                <div className="checkbox">
                  <label htmlFor="hours">Atende fim de semana?</label>
                  <input type="checkbox"/>
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