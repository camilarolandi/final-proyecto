
import React, { useState } from 'react'
import {MOOK_CONTACTOS } from '../../../Mook';
import { Link, useParams } from 'react-router-dom';
import "./header.css"
 import '../../styles.css'


export const Header = ({unselectContact, colorTema}) => {
const {contactoID } = useParams()

	const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID))
	return (

		<>
  
			<div className = {`header ${colorTema}`}>
				
				<Link className='flecha' onClick={() => unselectContact(contacto)} to = {"/"}><i class="bi bi-arrow-left"></i></Link>
					<div className='contenedor-contacto'>
					 {/* <Link 
					className='photo-link' to={"/contactodata/" + contacto.id + "/screen"}><img className='profile-photo' src= {contacto.thumbnail} alt="profile-photos" /></Link>	 */}
					<Link 
					className='photo-link' to={"/contactodata/" + contacto.id}><img className='profile-photo' src= {contacto.thumbnail} alt="profile-photos" /></Link>	
					<div className='contenedor-nombre'>
						<span className='nombre'>{contacto.nombre} {contacto.apellido}</span>
						<span className='mensaje-texto'>{contacto.estado_contacto} </span>
					</div>
					
				</div>
				<div className='btns-header'>
					<i class="btn-header bi bi-telephone"></i>
					<i class="btn-header bi bi-camera-video"></i>
					<i className= "btn-header bi bi-three-dots-vertical" ></i>
				</div>
			</div>
			</>
		)}











/* 		import React from 'react';
import { MOOK_CONTACTOS } from '../../../Mook';
import { Link, useParams } from 'react-router-dom';
import "./header.css";
import '../../styles.css';

export const Header = ({ unselectContact, contactoSeleccionado }) => {
  const { contactoID } = useParams();
  
  // Encuentra el contacto basado en el contactoID de los parámetros de la URL
  const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID));

  // Maneja el evento de desmarcar el contacto y la navegación
  const handleUnselect = () => {
    unselectContact(); // Desmarcar el contacto
  };

  return (
    <div className='header'>
      <Link
        className='flecha'
        to={contactoSeleccionado ? "/" : "#"}
        onClick={contactoSeleccionado ? handleUnselect : undefined} // Desmarca solo si el contacto está seleccionado
      >
        <i className="bi bi-arrow-left"></i>
      </Link>
      <div className='contenedor-contacto'>
        <Link className='photo-link' to={`/contactodata/${contacto.id}`}>
          <img className='profile-photo' src={contacto.thumbnail} alt="profile-photos" />
        </Link>
        <div className='contenedor-nombre'>
          <span className='nombre'>{contacto.nombre} {contacto.apellido}</span>
          <span className='mensaje-texto'>{contacto.estado_contacto}</span>
        </div>
      </div>
      <div className='btns-header'>
        <i className="btn-header bi bi-telephone"></i>
        <i className="btn-header bi bi-camera-video"></i>
        <i className="btn-header bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};
 */