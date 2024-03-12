import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// HTML REFERENCES
const div = document.getElementById('app');
const btnSubmit = document.getElementById('btnSubmit');

const form = document.getElementById('userData');
form.style.display = 'none';

const getNumberOfRegisteredUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.size; 
}

const pushUserData = async () => {
  try {

    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
    }

    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




console.log(await getNumberOfRegisteredUsers());
if (await getNumberOfRegisteredUsers() > 5) {
  div.innerHTML = '<h1>Sorry, no more registrations available</h1>';
  
} else {
  form.style.display = 'block';
}

btnSubmit.addEventListener('click', () => {
  pushUserData();
  form.style.display = 'none';
  div.innerHTML = '<h1>Thank you for registering</h1>';
});