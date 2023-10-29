# Chat en Tiempo Real (Chat Now Pro)

Este proyecto consiste en un chat en tiempo real basado en Firebase que permite a los usuarios enviar mensajes y ver los mensajes en tiempo real en una página web. Utiliza Firebase para la gestión de la base de datos en tiempo real y se integra en una página web.

## Ejemplo de Código

A continuación, se muestra un ejemplo de código en JavaScript (app.js) que implementa la funcionalidad del chat:

```javascript
// Importar Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

// Configuración de Firebase (usar la configuración que obtuviste en Firebase Console)
const firebaseConfig = {
    apiKey: "tu_api_key",
    authDomain: "tu_auth_domain",
    projectId: "tu_project_id",
    storageBucket: "tu_storage_bucket",
    messagingSenderId: "tu_messaging_sender_id",
    appId: "tu_app_id"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos en tiempo real de Firebase
const db = getFirestore(firebaseApp);

// ... Resto del código para enviar y recibir mensajes ...
```

## Configuración

1. Asegúrate de tener una cuenta en [Firebase](https://firebase.google.com/) y haber creado un proyecto.
2. Reemplaza las variables en `firebaseConfig` con los valores proporcionados por Firebase Console.
3. Asegúrate de tener instaladas las dependencias de Firebase necesarias utilizando npm de la siguiente manera (asegúrate de tener npm instalado):

   ```bash
   npm install -g firebase
   ```

   Esto instalará Firebase de forma global en tu sistema.

4. Para ejecutar el proyecto, crea una página HTML (como el proporcionado en index.html) y asegúrate de que incluya el script de `app.js`.

## Requisitos

Para ejecutar este proyecto, necesitarás:

- Una cuenta de Firebase y un proyecto configurado.
- Los valores de configuración de Firebase (apiKey, authDomain, projectId, etc.).
- Node.js y npm instalados en tu sistema si deseas instalar Firebase globalmente.

Una vez que hayas configurado Firebase y tengas todo en su lugar, podrás ejecutar este chat en tiempo real en tu página web.

## Capturas del proyecto
![image](https://github.com/Matignaciom/JS_Chat_en_tiempo_real_firebase-ChatNow-Pro/assets/66745824/d6635189-b06b-441b-a560-ce4e8a5e12db)


## Futuras Mejoras
En esta versión inicial básica, la funcionalidad de autenticación de Firebase aún no está habilitada, pero esperamos tenerla completamente funcional en una próxima actualización.

## Agradecimientos

Hecho con ❤️ por Matias Ignacio - https://github.com/Matignaciom
