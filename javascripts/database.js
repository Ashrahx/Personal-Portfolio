document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
    var subject = getElementVal("subject");
  
    saveMessages(name, email, message, subject);
    
    document.querySelector('button[type="submit"]').classList.add("enviado");
  
    // Restablecer el formulario
    document.getElementById("contact-form").reset();
  
    // Mostrar el popover
    document.getElementById("popover").style.display = "block";
  });
  
  // Función cerrarPopover
  function cerrarPopover() {
    
    document.getElementById("popover").style.display = "none";
  
    document.querySelector('button[type="submit"]').classList.remove("enviado");
  }
  
  const firebaseConfig = {
    apiKey: "AIzaSyDfF5Io-IxZgj8EeB309JkeaClFuB3U4ck",
    authDomain: "portfolio-72ced.firebaseapp.com",
    databaseURL: "https://portfolio-72ced-default-rtdb.firebaseio.com",
    projectId: "portfolio-72ced",
    storageBucket: "portfolio-72ced.appspot.com",
    messagingSenderId: "395507657670",
    appId: "1:395507657670:web:b6b53979a057eae71f60c7"
  };
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referencia a tu base de datos
  var contactFormDB = firebase.database().ref("portfolio");
  
  // Función para obtener el valor de un elemento por su ID
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  // Función para guardar los mensajes en la base de datos
  const saveMessages = (name, email, message, subject) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      message: message,
      subject: subject,
    });
  };
  