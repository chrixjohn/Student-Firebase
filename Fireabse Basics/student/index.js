import { app } from "./firebaseConfig.js";
import { getDatabase, ref, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const db = getDatabase();

function writeUserData() {

  const rollno = document.getElementById("roll").value;
  const name = document.getElementById("name").value;
  x``
  set(ref(db, 'students/' + rollno), {
    studentName: name
  });
}

document.getElementById("submit").addEventListener("click", writeUserData);


function updateStudent() {

  const rollno = document.getElementById("roll").value;
  const name = document.getElementById("name").value;

  const updates = {};
  updates['students/' + rollno + '/studentName'] = name;

  update(ref(db), updates);
}

document.getElementById("update").addEventListener("click", updateStudent);

function removeUser() {

    const rollno = document.getElementById("roll").value;
    remove(ref(db, 'students/' + rollno));
}

document.getElementById("delete").addEventListener("click", removeUser);

