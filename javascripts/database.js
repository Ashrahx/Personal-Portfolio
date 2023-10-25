// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBn23XPatdtlX5sOKlyyz9y_Aq9hi9QMR0",
  authDomain: "portfolio-2a160.firebaseapp.com",
  projectId: "portfolio-2a160",
  storageBucket: "portfolio-2a160.appspot.com",
  messagingSenderId: "4733360869",
  appId: "1:4733360869:web:76d33a86f990c04bbf520c",
  measurementId: "G-CHB0NSNBDV",
};

firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.firestore();

// Envío del formulario
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = document.querySelector('input[name="subject"]').value;

  // Agrega la información a Firestore
  await db.collection("contact").add({
    name: name,
    email: email,
    message: message,
    subject: subject,
  });
  

  // Limpia el formulario después de enviar
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("Message sent");
});
