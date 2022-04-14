import firebase from "firebase";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyATOkzZ8M03JDlexVfextL5fkPTW7jhL6Q",
//   authDomain: "yt-classroom-clone.firebaseapp.com",
//   projectId: "yt-classroom-clone",
//   storageBucket: "yt-classroom-clone.appspot.com",
//   messagingSenderId: "170227524980",
//   appId: "1:170227524980:web:78806688690ce40a7d3821",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDPsMd-ZD7PYCaG42lgD3dgEUVPQasU-C8",
  authDomain: "classroom-project-5e730.firebaseapp.com",
  databaseURL: "https://classroom-project-5e730-default-rtdb.firebaseio.com",
  projectId: "classroom-project-5e730",
  storageBucket: "classroom-project-5e730.appspot.com",
  messagingSenderId: "115989970622",
  appId: "1:115989970622:web:1abe82ba806b1c3ab4a8ef"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
