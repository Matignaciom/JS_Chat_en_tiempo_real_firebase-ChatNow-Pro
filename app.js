// Importar Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

// Configuración de Firebase (usar la configuración que obtuviste en Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyD00pVVl6H81D5puZcuDQnpTNxRn1MYKug",
    authDomain: "chat-en-tiempo-real-testing.firebaseapp.com",
    projectId: "chat-en-tiempo-real-testing",
    storageBucket: "chat-en-tiempo-real-testing.appspot.com",
    messagingSenderId: "390191613519",
    appId: "1:390191613519:web:243a8d9d7bd4033eec0c3a"
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
