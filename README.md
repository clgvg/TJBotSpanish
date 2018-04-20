# TJBotSpanish

> TJBot tambien puede hablar en español.

Este proyecto fue creado para el workshop de Talent Land 2018. El objetivo principal es conocer acerca de los servicios de IBM Watson en la nube (mejor conocido como IBM Cloud) usando un código muy sencillo y escrito en Node.JS

## Comenzando 🚀

Esta aplicación usa algunos servicios de Watson para que TJBot pueda hablar en español. Los servicios que usa son IBM Watson Conversation, IBM Speech to Text, IBM Text to Speech. 
Con estos servicios TJBot puede responder sobre el hardware y software que lo compone; puede controlar el hardware por ejemplo prender o apagar el led de la cabeza, puede mover el brazo también, tomar fotografias, etc.

### Pre requisitos 📋

### Hardware 🔩🔧

Pueden comprar el kit de TJBot en: https://www.sparkfun.com/products/14515

O si lo prefieren pueden armarlo con su harware actual: 
  * Raspberry Pi 3 Model B
  * Servo Motor
  * NeoPixel
  * Camara Pi
  * USB Speaker
  * USB Microfono 
  * Cables dupon tipo H-M 
  * Carbboard de TJBot https://ibmtjbot.github.io/images/TJBotLasercutLines.zip 
  * o impresion 3D https://ibmtjbot.github.io/images/TJBot3DPrintFiles.zip
  

Para mas informacion oficial aqui: https://ibmtjbot.github.io/ 

*Si no se cuenta con el hardware y aun asi quieren practicar lo pueden hacer desde el siguiente link: https://my-tjbot.mybluemix.net/ *


### Software: 💿 
Para poder ejecutar y usar este proyecto necesitas:

1. Crear una cuenta de IBM Cloud: https://console.bluemix.net/ 
  Crear los servicios de:
    * IBM Watson Conversation y guardar las credenciales
    * IBM Speech to Text y guardar las credenciales
    * IBM Text to Speech y guardar las credenciales

2. Importar el file: `workspace-e0d548dd-54d6-4b51-9a19-43c4b233b518.json` al servicio de Conversation.
  Todos los intents en el servicio de conversación son: 
    * #apagaled
    * #enciendeled
    * #hardware
    * #presentate
    * #saludoservo
    * #watsonservicios

## Ejecucion del software dentro de la Raspberry: 
1. Importar el proyecto dentro de la Raspberry con `git@github.com:ingkenai/TJBotSpanish.git`

2. Dentro del archivo de config.js escribir el `conversationWorkspaceId` que se creo importo en le paso 2 de la secciopn de software y setear todos los usuarios y passwords para cada IBM Watson Services que se crearon en el paso 1. 

3. Dentro de la carpeta de: TJBotSpanish instalar la paqueteria con npm: `sudo npm install` ⏱ 

4. Dentro del archivo de conSpanish.js en la sección de los intents de la conversación sustituimos por ejemplo con:

```
if (typeintent == "presentate") {
  tj.wave(); //tjbot saluda
  tj.speak(response.description);
}
``` 
    Para mas información Todas las capacidades de TJBot se encuntran en: https://github.com/ibmtjbot/tjbotlib

5. Una vez terminado de setear el proyecto posicionarse en la carpeta de TJBotSpanish y ejecutar el programa de Node.JS con: `sudo node conSpanish.js`


## Autores

* **Claudia G Villanueva Gallegos** - *Initial work* - [IngKenai](https://github.com/ingkenai)
* **Daniel Chavez**  - [TBD](https://github.com/TBD)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
