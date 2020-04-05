var firebaseConfig = {
    apiKey: "AIzaSyBj6JUMigPoMKmiTS4CIlNQ3K7RuXcqMBU",
    authDomain: "information-c0f5f.firebaseapp.com",
    databaseURL: "https://information-c0f5f.firebaseio.com",
    projectId: "information-c0f5f",
    storageBucket: "information-c0f5f.appspot.com",
    messagingSenderId: "79918375079",
    appId: "1:79918375079:web:38db0c792ed1aed4a03b82",
    measurementId: "G-8JC68P4HB4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef=firebase.database().ref('messages');


//listen the Submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(123);
  var name=document.getElementById('name').value;
  var company=document.getElementById('company').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var message=document.getElementById('message').value;
  saveMessage(name,company,email,phone,message);
  document.querySelector('.alert').style.display="block"
});


function saveMessage(name,company,email,phone,message){
  var newMessageRef=messagesRef.push();
  newMessageRef.set({
    name:name,
    company:company,
    email:email,
    phone:phone,
    message:message
  })
}
