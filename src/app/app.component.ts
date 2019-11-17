import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCompras';
  firebaseConfig = {
    apiKey: "AIzaSyB0pcVMk8n0Zf43hA_nE2WlkNKKhG8afMg",
    authDomain: "comprasapp-bb34b.firebaseapp.com",
    databaseURL: "https://comprasapp-bb34b.firebaseio.com",
    projectId: "comprasapp-bb34b",
    storageBucket: "comprasapp-bb34b.appspot.com",
    messagingSenderId: "35093441216",
    appId: "1:35093441216:web:d5caa96090cad5e98adb25",
    measurementId: "G-R8C7R6B5QR"
  }
  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig);
  }
}
