import {getApp,getApps,initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDNaXNOA9vKLH6ZUvuUgUGWN8epxlt9ilc",
    authDomain: "restaurantapp-7d8f7.firebaseapp.com",
    databaseURL: "https://restaurantapp-7d8f7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-7d8f7",
    storageBucket: "restaurantapp-7d8f7.appspot.com",
    messagingSenderId: "346730995145",
    appId: "1:346730995145:web:2da57d12c373a243cd9c18",
    
  };
  


const app=getApps.length >0 ? getApp():initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,firestore,storage};
