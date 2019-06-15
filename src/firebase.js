import { initializeApp } from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDxm5_Jrui_XeII6wzBOFm3tLRlRz0ZyHs",
  authDomain: "meetupjs-dev.firebaseapp.com",
  databaseURL: "https://meetupjs-dev.firebaseio.com",
  projectId: "meetupjs-dev",
  storageBucket: "meetupjs-dev.appspot.com",
  messagingSenderId: "902400933214",
  appId: "1:902400933214:web:0f2472d57d08b8c1"
};

export default initializeApp(firebaseConfig);
