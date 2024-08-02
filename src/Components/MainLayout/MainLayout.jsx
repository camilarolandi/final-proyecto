/* import React, { useEffect, useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useLocation, useParams} from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import "./mainlayout.css"
import '../../styles.css'



export const MainLayout = () => {
	const location = useLocation()
	const [showWelcome, setShowWelcome] = useState(true)
	

	useEffect(() => {
        if (location.pathname.includes('/screen/') || location.pathname.includes('/contactodata/')) {
            setShowWelcome(false);
        } else {
            setShowWelcome(true);
        }
    }, [location]);



	
	const hideWelcome = () => {
		setShowWelcome(false)
		}

	const contactSelect = (contact) => {
		contact.is_selected = true
		}

	
	return (
		<div className="main-layout">
			<Contactos contactSelect={contactSelect} hideWelcome={hideWelcome} />
			<Routes>	
				<Route path="/screen/:contactoID" element={<Screen />} />
				<Route path="/contactodata/:contactoID/screen" element={
					<>
						<ContactoData />
						<Screen />
					</>
				}/> 
			</Routes> 
			{showWelcome && (
			<div className="welcome-screen">
				<h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
				<p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
			</div> )}
		</div>
	)
}
 */

import React, { useEffect, useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import './mainlayout.css'
import '../../styles.css'

export const MainLayout = () => {
    const location = useLocation();
    const [showWelcome, setShowWelcome] = useState(true)
    const [showListaColores, setShowListaColores] = useState(false)
    const [colorTema, setColorTema] = useState('default')

    useEffect(() => {
        if (location.pathname.includes('/screen/') || location.pathname.includes('/contactodata/')) {
            setShowWelcome(false)
        } else {
            setShowWelcome(true)
        }
    }, [location]);

    const hideWelcome = () => {
        setShowWelcome(false);
    };

    const contactSelect = (contact) => {
        contact.is_selected = true
    };

    const cambioColorOptions = () => {
        setShowListaColores(!showListaColores)
    }

    const changeColorTheme = (color) => {
        setColorTema(color)
        setShowListaColores(false)
    }

    const listaDeColores = [
        { color: 'default', bgColor: "rgba(44, 43, 43, 0.984)" },
        { color: 'green', bgColor: 'rgba(1, 37, 0, 0.965)' },
        { color: 'red', bgColor: 'rgba(37, 0, 0, 0.965)' },
        { color: 'purple', bgColor: 'rgba(56, 0, 39, 0.965)' }
    ]


    return (
        <div className= "main-layout" >
            <Contactos 
				colorTemas={colorTema} 
                hideWelcome={hideWelcome} 
                cambioColorOptions={cambioColorOptions} 
                contactSelect={contactSelect}
				
            />
            <Routes>    
                <Route path="/screen/:contactoID" element={<Screen colorTema={colorTema} />} />
                <Route path="/contactodata/:contactoID/screen" element={
                    <>
                        <ContactoData />
                        <Screen colorTema={colorTema} />
                    </>
                }/> 
            </Routes>

            {showWelcome && (
                <div className="welcome-screen">
                    <h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
                    <p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
                </div>
            )}

		{showListaColores && (
		
                <div className='contenedor-btns-colores'>
                    {listaDeColores.map(colorItem => (
                        <div>
						<button
                            key={colorItem.color}
                            className="color-option"
                            style={{ backgroundColor: colorItem.bgColor }}
                            onClick={() => changeColorTheme(colorItem.color)}
                        >
                            {colorItem.color}
                        </button>
						<span>{colorItem.color}</span>
						</div>
                    ))}
					
                </div>
				
            )}


        </div>
    );
};
