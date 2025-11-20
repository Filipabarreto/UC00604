// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "ebook-filipa.firebaseapp.com",
      projectId: "ebook-filipa",
      storageBucket: "ebook-filipa.firebasestorage.app",
      messagingSenderId: "984630887256",
      appId: "1:984630887256:web:91c25479c12c5039731b2d"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}

