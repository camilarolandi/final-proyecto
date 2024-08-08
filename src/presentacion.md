Aplicacion de CHAT

El trabajo es una aplicacion de chat similar a WhatsApp, la inspiracion fué Whatsapp web.

Las funcionalidades son:
- Creacion un nuevo contacto a traves de un formulario solicitando al usuario nombre, apellido, telefono y foto. El formulario cuenta con validaciones a traves de las cuales no permite crear contacto si no se cumplen con los campos obligatorios nombre apellido y telefono. Respecto al campo foto permite colocar una foto (direccion https) o bien si no se coloca foto el contacto se registra con una foto por defecto.
-Envio de mensajes
- Cambio de colores del "contorno" de la aplicacion. A traves de un boton es posible cambiar colores en funcion a botones con opciones. Dicha funcionalidad cuenta con la aplicacion de LocalStorage para su persistencia.
-Busqueda de un contacto por nombre o por apellido.

Cuenta con tres paginas: principal, screen y contactosData.

Las problematicas presentadas en la elaboracion del trabajo fueron el redimensionamiento de la pantalla para poder pasar de desktop a mobile (la inspiracion fue WhatsApp web) y la implementacion de LocalStorage para el almacenamiento de contactos.

¡Aclaracion! 
Botones funcioanales 
En version mobile:
- Tres puntos horizontales a la izquierda
- Agregar color verde
- Configuracion parte iferior

En version desktop:
- Mensaje (segundo boton en la parte del header de la pantalla contactos)
- Foto de perfil
- Foto del contacto
- Tres puntos verticales