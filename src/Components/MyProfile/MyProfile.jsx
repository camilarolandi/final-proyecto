import React from 'react'
import "./myprofile.css"
import '../../styles.css'

export const MyProfile = ({ onClose, colorTemas }) => {
    return (
        
        <section className='my-profile'>
            <header  className={`myProfile-header ${colorTemas}`}>
                <button className='flecha-profile' onClick={onClose}> 
                    <i class="bi bi-arrow-left"> </i>
                </button>
                <span className='profile-title'>Perfil</span>
            </header>
            
            <img className='my-photo' src='https://www.creartuavatar.com/images/f17.svg' alt="profile-photos"/>
        
            <div className='container-myProfile'>
                <span className='my-data'>Tu nombre</span>
                <div className='myInfo-container'>
                    <span className='my-data'>Camila</span>
                    <i className="my-data bi bi-pencil"></i>
                </div>
            </div>

            <p className='profile-mje'>Este no es tu nombre de usuario o PIN. Este nombre sera visible para todos tus contactos</p>
            
            <div className='container-myProfile'>
                <span className='my-data'>Info.</span>
                <div className='myInfo-container'>
                    <span className='my-data'>Amo el frio</span>
                    <i className="my-data bi bi-pencil"></i>
                </div>
            </div> 
        </section>
    )
}
