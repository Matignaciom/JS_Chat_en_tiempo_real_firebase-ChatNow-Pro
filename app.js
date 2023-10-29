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

const chatList = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Evento para enviar mensajes
sendButton.addEventListener('click', async () => {
    const messageText = messageInput.value;
    if (messageText) {
        try {
            await addDoc(collection(db, 'messages'), {
                text: messageText,
                timestamp: new Date().getTime()
            });
            messageInput.value = '';
        } catch (e) {
            console.error("Error al agregar mensaje:", e);
        }
    }
});

// Consulta para ordenar los mensajes por marca de tiempo
const q = query(collection(db, 'messages'), orderBy('timestamp'));

// Escuchar cambios en la base de datos
const unsubscribe = onSnapshot(q, (snapshot) => {
    chatList.innerHTML = '';
    snapshot.forEach((doc) => {
        const message = doc.data();
        const paragraph = document.createElement('p');
        paragraph.textContent = message.text;
        paragraph.style.marginLeft = '5%'; // Agregar margen a la izquierda
        chatList.appendChild(paragraph);
    });
});
