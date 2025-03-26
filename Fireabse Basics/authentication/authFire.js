import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth();

function createUser(){
    const  email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

}

document.getElementById("createUser").addEventListener("click", createUser);

async function signIn(){
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const signInText = document.getElementById("status");

    const userCred = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    signInText.innerText = "Signed In";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    signInText.innerText = errorMessage;
  });
  console.log(userCred);

}

document.getElementById("signIn").addEventListener("click",signIn);