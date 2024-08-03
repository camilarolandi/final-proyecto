/* La pantalla con la info del contacto */
import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useParams } from 'react-router-dom'
import './contactodata.css'
import '../../styles.css'

export const ContactoData = () => {
    const { contactoID } = useParams()
    const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID))

    return (
        <div className='contenedor-principal'>
            <div className='container-contact-data'>
                <div className='container'>
                    <div className='container-nombre-foto-opciones'>
                        <div className='container-nombre-foto'>
                            <span className='info-contact'>
                                Info. del contacto
                            </span>
                            <img className='photo' src={contacto.thumbnail} alt="profile-photos" />
                            <span className='data'>{contacto.nombre} {contacto.apellido}</span>
                            <span className='data'>{contacto.telefono}</span>
                        </div>
                        <div className='container-opciones'>
                            <div className="icon-mje-buscar">
                                <i className="bi bi-telephone"></i>
                                <span>LLamar</span>
                            </div>
                            <div className='icon-mje-buscar'>
                                <i className="bi bi-arrow-90deg-right"></i>
                                <span>Compartir</span>
                            </div>
                            <div className="icon-mje-buscar">
                                <i className="bi bi-search"></i>
                                <span>Buscar</span>
                            </div>
                        </div>
                    </div>
                    <div className='contenedor-fns'>
                        <div className='funciones'>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-image-fill"></i>
                                    <span>Archivos, enlaces y docs</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <span>12</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-star"></i>
                                    <span>Mensajes destacados</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <span>Ninguno</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-clock-history"></i>
                                    <span>Mensajes temporales</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <span>No</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className='funciones'>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-bell"></i>
                                    <span>Notificaciones</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <span>2</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-flower1"></i>
                                    <span>Fondo</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className='funcion'>
                                <div className='icons-fns-right'>
                                    <i className="bi bi-box-arrow-down"></i>
                                    <span>Guardar en Fotos</span>
                                </div>
                                <div className='icons-left-fns'>
                                    <span>Por defecto</span>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <Link style={{textDecoration:"none"}} to={"/screen/" + contacto.id}>
                            <span className="icon"> Close</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

