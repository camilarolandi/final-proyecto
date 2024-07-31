/* import React, { useEffect, useState } from 'react'
	import { MOOK_CONTACTOS } from '../../../Mook';
	import { Link, useLocation } from 'react-router-dom';
	import { MyProfile } from '../../Components/MyProfile/MyProfile';
	import './contactos.css';
	import '../../styles.css';
	import { NuevoContacto } from '../../Components/NuevoContacto/NuevoContato';
	
	export const Contactos = ({ ContactSelect, hideWelcome }) => {
		const location = useLocation()
		const [listaContactos, setListaContactos] = useState([])
		const [searchString, setSearchString] = useState('')
		const [showMyProfile, setShowMyProfile] = useState(false)
		const [showFormNvoContacto, setshowFormNvoContacto] = useState(false)
		const [windowWidthObtein, setWindowWidthObtein] = useState(window.innerWidth)
	
		useEffect(() => {}, [location])
	
		const newContacto = (nuevoNombre, nuevoApellido, nuevoTelefono, nuevoThumbnail) => {
			const newId = MOOK_CONTACTOS[MOOK_CONTACTOS.length - 1].id + 1
			const contacto_nvo = {
				nombre: nuevoNombre,
				apellido: nuevoApellido,
				telefono: nuevoTelefono,
				estado: "En el trabajo",
				thumbnail: nuevoThumbnail,
				id: newId,
				mensajes: [
					{
						author: 'Yo',
						text: 'Buenas',
						estado: 'Visto',
						day: 'Hoy',
						hour: '01:45',
						id: '1'
					}
				]
			}
			
			const updatedContactos = [...MOOK_CONTACTOS, contacto_nvo];
	  
		setListaContactos(updatedContactos);
		}
		const selectedContactIndex = listaContactos.findIndex(contacto => contacto.is_selected === true);
		const chatSeleccionado = selectedContactIndex >= 0;
	
		useEffect(() => {
			const handleResize = () => {
				setWindowWidthObtein(window.innerWidth);
			}
	
			window.addEventListener('resize', handleResize);
	
			return () => {
				window.removeEventListener('resize', handleResize);
			}
		}, [])
	
		let renderizarScreen = (windowWidthObtein < 590 && !chatSeleccionado) || windowWidthObtein >= 590
	
		useEffect(() => {
			if (searchString) {
				const listaContactosFilter = MOOK_CONTACTOS.filter(contacto =>
					contacto.nombre.toLowerCase().includes(searchString.toLowerCase()) ||
					contacto.apellido.toLowerCase().includes(searchString.toLowerCase())
				);
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
				{renderizarScreen && (
					<div className="contact-screen">
						<header className='photo-profile-cont'>
							<img
								className='myprofile-photo'
								src='https://www.creartuavatar.com/images/f17.svg'
								onClick={showProfile}
							/>
							{showMyProfile && <MyProfile onClose={hideProfile} />}
							<div className='icons-fns-left'>
								<i className="icons-left bi bi-people"></i>
								<button className='btn-form' title="Nuevo contacto" onClick={showNvoContact}>   <i className="icons-left bi bi-chat-quote"></i></button>
                                <i className="icons-left bi bi-disc"></i>
								<i className="icons-left bi bi-chat-right-dots"></i>
								<i className="icons-left bi bi-three-dots-vertical"></i>
							</div>
							<div className='mobile icons-fns-left'>
								<i className=" punto bi bi-three-dots"></i>
								<div className='icons-left'>
									<i className=" punto bi bi-camera"></i>
									<button className='btn-form' title="Nuevo contacto" onClick={showNvoContact}><i className=" add punto bi bi-plus-lg"></i></button>
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
										<Link className='photo-link' onClick={() => ContactSelect(contacto)} to={"/screen/" + contacto.id}>
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
						<div className='container-opciones-mobile'>
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
								<i className="bi bi-gear-wide-connected"></i>
								<span>Configuracion</span>
							</div>
						</div>
					</div>
				)}
			</>
		)
	}
  */
 
 
 
 /* import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {json, Link, useParams} from 'react-router-dom'
import { MyProfile } from '../../Components/MyProfile/MyProfile'
import "./contactos.css"
import '../../styles.css'
import { useLocation } from 'react-router-dom'
import { NuevoContacto} from '../../Components/NuevoContacto/NuevoContato'


export const Contactos = ({ContactSelect,hideWelcome}) => {
    const location = useLocation();
    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('')
    const [modoChange, setModoChange] = useState(false)
    const [showMyProfile, setShowMyProfile] = useState(false)
    const [showFormNvoContacto, setshowFormNvoContacto] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    

const newContacto = (nuevoNombre,nuevoApellido,nuevoTelefono,nuevoThumbnail) => {
		
		const newId = (listaContactos.length > 0 ? listaContactos[listaContactos.length - 1].id + 1 : 1)
			const contacto_nvo =   {
			nombre: nuevoNombre ,
			apellido: nuevoApellido ,
			telefono:nuevoTelefono ,
			estado:"En el trabajo",
			thumbnail: nuevoThumbnail,
			id: newId,
            mensajes: [
                {   
                    author: 'Yo',
                    text: 'Buenas  ',
                    estado: 'Visto',
                    day: 'Hoy',
                    hour: '01:45',
                    id: '1'
                }] 
        }
    setListaContactos ([...listaContactos, contacto_nvo])
    

    }

    const isChatSelected = listaContactos.some(contact => contact.is_selected === true)
    useEffect(() => {}, [location])
    


    useEffect (() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    let shouldRenderHtml = false;

    if ((windowWidth < 590 && ! isChatSelected) || windowWidth >= 590) {
        shouldRenderHtml = true
    }


    useEffect ( () => {
        if (searchString ){
            const listaContactosFilter = MOOK_CONTACTOS.filter(contacto=> contacto.nombre.toLowerCase().includes(searchString.toLowerCase()) || contacto.apellido.toLowerCase().includes(searchString.toLowerCase()))
            
            setListaContactos(listaContactosFilter)
        }
        else {

            setListaContactos(MOOK_CONTACTOS)
            
        }
    },
    [searchString]
)

const handleSearchString = (e) =>{
    setSearchString(e.target.value)
}

const showProfile = () => {
    setShowMyProfile(true)
}
const showNvoContact = () => {
    setshowFormNvoContacto(true)
}

const hideProfile = () => {
    setShowMyProfile(false)
}

const hideNvoContact = () => {
    setshowFormNvoContacto(false)
}


    return (
        <>
            {showFormNvoContacto &&  <NuevoContacto contactoNuevo={newContacto} onCloseNvoContact={hideNvoContact}/> }
            {
                shouldRenderHtml &&
                <div className ="contact-screen" >
                <header className='photo-profile-cont'>
                    <img className='myprofile-photo' 
                    src='https://www.creartuavatar.com/images/f17.svg'
                    onClick={showProfile}
                    />
                    {showMyProfile && <MyProfile onClose={hideProfile}/>}

                    <div className='icons-fns-left'>
                        <i className="icons-left bi bi-people"></i>
                        <button className='btn-form' onClick={showNvoContact}><i className= "icons-left bi bi-disc" ></i></button>
                        <i className= "icons-left bi bi-chat-quote" ></i>
                        <i className= "icons-left bi bi-chat-right-dots"></i>
                        <i className= "icons-left bi bi-three-dots-vertical" ></i>
                        </div>
                        <div className='mobile icons-fns-left'>
                            <i class=" punto bi bi-three-dots"></i>  
                            <div className='icons-left'>
                            <i className=" punto bi bi-camera"></i>
                            <i className=" add punto bi bi-plus-lg"></i>
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
                    value={searchString} />
                    {listaContactos.length === 0 && searchString !== '' && (
                    < span className= "string"  >No se encuentran resultados</span>)}

                    <div className='chat-options'>
                        <span className='opt my-data'>Todos</span>
                        <span className='opt my-data'>No leidos</span>
                        <span className='fav opt my-data'>Favoritos</span>
                        <span className='opt my-data'>Grupos</span>
                    </div>
                </div>
                <div className="contacts" >
                    {listaContactos.map(contacto=>{
                        return(
                            <div className= "contact-cont"  key = {contacto.id}>
                                <div className='contacto-data'>
                                    <Link className='photo-link' onClick={() => ContactSelect(contacto)} to = {"/screen/" + contacto.id}>
                                    <img className='photos' 
                                    src= {contacto.thumbnail} 
                                    alt="profile-photos"
                                    onClick={hideWelcome}
                                    />
                                    </Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className="nombre-cont">{contacto.nombre} {contacto.apellido}</span>
                                        <p> className="mensaje-cont" </p>
                                    </div>
                                </div>
                                    
                                <div>
                                    
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                                
                            </div>
                        )
                    })}
                </div> 
            <div className='container-opciones-mobile'>
                <div className='icons-mobile'>
                    <i class="bi bi-circle-square"></i>
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
                    <i className="bi bi-gear-wide-connected"></i>
                    <span>Configuracion</span>
                </div>
                </div>                    
                </div>
            }
        </>
    )
}
 */





import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useLocation } from 'react-router-dom'
import { MyProfile } from '../../Components/MyProfile/MyProfile'
import './contactos.css'
import '../../styles.css'
import { NuevoContacto } from '../../Components/NuevoContacto/NuevoContato'

export const Contactos = ({ ContactSelect, hideWelcome }) => {
    const location = useLocation() /* datos de la url */
    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('') /* para el buscador */
    const [showMyProfile, setShowMyProfile] = useState(false) /* inicia oculto */
    const [showFormNvoContacto, setshowFormNvoContacto] = useState(false) /* inicia oculto */
    const [windowObteinWidth, setWindowObteinWidth] = useState(window.innerWidth) /* medidas de la pantalla */
    
    useEffect(() => {}, [location])

    const newContacto = (nuevoNombre, nuevoApellido, nuevoTelefono, nuevoThumbnail) => {
        const index = MOOK_CONTACTOS.findIndex(contacto => contacto.nombre === nuevoNombre && contacto.apellido === nuevoApellido)

        if (index === -1) {
            const newId = (MOOK_CONTACTOS.length > 0 ? MOOK_CONTACTOS [MOOK_CONTACTOS.length - 1].id + 1 : 1)
            const contacto_nvo = {
                nombre: nuevoNombre,
                apellido: nuevoApellido,
                telefono: nuevoTelefono,
                estado: "En el trabajo",
                thumbnail: nuevoThumbnail,
                id: newId,
                mensajes: [
                    {
                        author: 'Yo',
                        text: 'Buenas',
                        estado: 'Visto',
                        day: 'Hoy',
                        hour: '01:45',
                        id: '1'
                    }
                ]
            }
            
            MOOK_CONTACTOS.push(contacto_nvo)
            setListaContactos([...MOOK_CONTACTOS])
        }
    }

    const contactIndex = listaContactos.findIndex(contacto => contacto.is_selected === true)
    const chatSeleccionado = contactIndex !== -1

    useEffect(() => {
        const handleResize = () => {
            setWindowObteinWidth(window.innerWidth)
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

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
                    <header className='photo-profile-cont'>
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
                            <i className="icons-left bi bi-three-dots-vertical"></i>
                        </div>
                        <div className='mobile icons-fns-left'>
                            <i className=" punto bi bi-three-dots"></i>
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
                                    <Link className='photo-link' onClick={() => ContactSelect(contacto)} to={"/screen/" + contacto.id}>
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
                    <div className='container-opciones-mobile'>
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
                            <i className="bi bi-gear-wide-connected"></i>
                            <span>Configuracion</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};





