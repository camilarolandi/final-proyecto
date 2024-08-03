/* es el q funciona bien */
import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useLocation } from 'react-router-dom'
import { MyProfile } from '../../Components/MyProfile/MyProfile'
import './contactos.css'
import '../../styles.css'
import { NuevoContacto } from '../../Components'


export const Contactos = ({ contactSelect, hideWelcome ,cambioColorOptions, colorTemas }) => {
    const location = useLocation() 
    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('') 
    const [showMyProfile, setShowMyProfile] = useState(false) 
    const [showFormNvoContacto, setshowFormNvoContacto] = useState(false) 
    const [windowObteinWidth, setWindowObteinWidth] = useState(window.innerWidth) 
    useEffect(() => {}, [location])

console.log("colores", colorTemas)
    const newContacto = (nuevoNombre, nuevoApellido, nuevoTelefono, nuevoThumbnail) => {
        const contactoExistente = MOOK_CONTACTOS.find(contacto => contacto.nombre === nuevoNombre && contacto.apellido === nuevoApellido)
    
        if (!contactoExistente) {
            const newId = (MOOK_CONTACTOS.length > 0 ? MOOK_CONTACTOS[MOOK_CONTACTOS.length - 1].id + 1 : 1)
            const contacto_nvo = {
                nombre: nuevoNombre,
                apellido: nuevoApellido,
                telefono: nuevoTelefono,
                estado: "En el trabajo",
                thumbnail: nuevoThumbnail || "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper-thumbnail.png",
                id: newId,
                mensajes: [
                    {
                        author: 'Envia un mensaje y comienza a chatear',
                        text: '',
                        estado: '',
                        day: '',
                        hour: '01:01',
                        id: '',
                    }
                ]
            };
    
            MOOK_CONTACTOS.push(contacto_nvo)
            setListaContactos([...MOOK_CONTACTOS])
        }
    }
    
    const contactoSeleccionado = listaContactos.find(contacto => contacto.is_selected === true)
    const chatSeleccionado = contactoSeleccionado !== undefined
    
    
    useEffect(() => {
        const handleResize = () => {
            setWindowObteinWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    let screenSize = (windowObteinWidth < 590 && !chatSeleccionado) || windowObteinWidth >= 590

    useEffect(() => {
        if (searchString) {
            const listaContactosFilter = MOOK_CONTACTOS.filter(contacto =>
                contacto.nombre.toLowerCase().includes(searchString.toLowerCase()) ||
                contacto.apellido.toLowerCase().includes(searchString.toLowerCase())
            )
            setListaContactos(listaContactosFilter)
        } else {

            setListaContactos(MOOK_CONTACTOS)
        }
    }, [searchString])

    const handleSearchString = (e) => {
        setSearchString(e.target.value)
    }

    const showProfile = () => setShowMyProfile(true)
    const showNvoContact = () => setshowFormNvoContacto(true)
    const hideProfile = () => setShowMyProfile(false)
    const hideNvoContact = () => setshowFormNvoContacto(false)

    return (
        <>
            {showFormNvoContacto && <NuevoContacto contactoNuevo={newContacto} onCloseNvoContact={hideNvoContact} />}
            {screenSize && (
                <div className="contact-screen">
                    
                    <header className={`photo-profile-cont ${colorTemas}`}>
                        <img
                            className='myprofile-photo'
                            src='https://www.creartuavatar.com/images/f17.svg'
                            onClick={showProfile}
                        />
                        {showMyProfile && <MyProfile onClose={hideProfile} />}
                        <div className='icons-fns-left'>
                            <i className="icons-left bi bi-people"></i>
                            <button className='btn-form' onClick={showNvoContact}> <i className="icons-left bi bi-chat-quote"></i></button>
                            <i className="icons-left bi bi-disc"></i>
                            <i className="icons-left bi bi-chat-right-dots"></i>
                            <button className='btn-form' onClick={cambioColorOptions}> <i className="icons-left bi bi-three-dots-vertical"></i></button>
                        </div>
                        
                        <div className={`mobile-icons-fns-left ${colorTemas}`} >
                            <button className='btn-form' onClick={cambioColorOptions}>  <i className=" punto bi bi-three-dots"></i></button>
                            <div className='icons-left'>
                                <i className=" punto bi bi-camera"></i>
                                <button className='btn-form' onClick={showNvoContact}> <i className=" add punto bi bi-plus-lg"></i></button>
                            </div>
                        </div>
                    </header>
                    <div className='contactos-header'>
                        <span className='titulos-contactos'>Chats</span>
                        <input
                            className="input-buscar"
                            type="text"
                            placeholder='Buscar contacto'
                            onChange={handleSearchString}
                            value={searchString}
                        />
                        {listaContactos.length === 0 && searchString !== '' && (
                            <span className="string">No se encuentran resultados</span>
                        )}
                        <div className='chat-options'>
                            <span className='opt my-data'>Todos</span>
                            <span className='opt my-data'>No leidos</span>
                            <span className='fav opt my-data'>Favoritos</span>
                            <span className='opt my-data'>Grupos</span>
                        </div>
                    </div>
                    <div className="contacts">
                        {listaContactos.map(contacto => (
                            <div className="contact-cont" key={contacto.id}>
                                <div className='contacto-data'>
                                    <Link className='photo-link' onClick={() => contactSelect(contacto)} to={"/screen/" + contacto.id}>
                                        <img
                                            className='photos'
                                            src={contacto.thumbnail}
                                            alt="profile-photos"
                                            onClick={hideWelcome}
                                        />
                                    </Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className="nombre-cont">{contacto.nombre} {contacto.apellido}</span>
                                        <p className="mensaje-cont">{contacto.mensajes[0].text}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={` container-opciones-mobile ${colorTemas}`}>
                        <div className='icons-mobile'>
                            <i className="bi bi-circle-square"></i>
                            <span>Novedades</span>
                        </div>
                        <div className="icons-mobile">
                            <i className="bi bi-telephone"></i>
                            <span>LLamadas</span>
                        </div>
                        <div className="icons-mobile">
                            <i className="bi bi-people-fill"></i>
                            <span>Comunidades</span>
                        </div>
                        <div className="icons-mobile">
                            <i className="bi bi-chat"></i>
                            <span>Chats</span>
                        </div>


                        <div className="icons-mobile">
                            <button style={{color:"white", background:"transparent", border:"none"}}  onClick={showProfile}>
                            <i className="bi bi-gear-wide-connected"></i>
                            </button>
                            <span>Configuracion</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
} 