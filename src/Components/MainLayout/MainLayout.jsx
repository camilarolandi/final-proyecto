import React, { useEffect, useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useLocation} from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import "./mainlayout.css"
import '../../styles.css'



export const MainLayout = () => {
	const location = useLocation()
	const [showWelcome, setShowWelcome] = useState(true) /* se inicia en true o sea que se muestra */
	


	/* lo que quiero es que si hay un id de contacto o de contactodata no se renderice welcame */
	useEffect(() => {
        if (location.pathname.includes('/screen/') || location.pathname.includes('/contactodata/')) {
            setShowWelcome(false)
        } else {
            setShowWelcome(true)
        }
    }, [location])


	const hideWelcome = () => setShowWelcome(false)
	

	const contactSelect = (contact) => contact.is_selected = true
		

	
return (
	<div className="main-layout">
		<Contactos ContactSelect={contactSelect} hideWelcome={hideWelcome} />
		<Routes>	
			<Route path="/screen/:contactoID" element={<Screen />} />
			{/* <Route path="/contactodata/:contactoID/screen" element={
				<>
					<ContactoData />
					<Screen />
				</>
			}/>  */}
		</Routes> 
		{showWelcome && (
		<div className="welcome-screen">
			<h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
			<p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
		</div> )}
	</div>
	)}
