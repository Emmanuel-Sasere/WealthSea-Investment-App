 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBa1dSE295kZ6k1c1u7F2qA04BJjt1kEAg",
    authDomain: "wealth-sea-auth.firebaseapp.com",
    projectId: "wealth-sea-auth",
    storageBucket: "wealth-sea-auth.appspot.com",
    messagingSenderId: "720930846646",
    appId: "1:720930846646:web:7ecf917e1b28500ab77317"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email)
        user.appendChild(text);
        console.log(user);
        // is signed in
    } 
    else {
    alert("user not authenticated, kindly login or signup");
    window.location = "index.html"; 
    }
  });


//   logout function 

let signOutButton =document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("signed out");
    window.location = "index.html";
});