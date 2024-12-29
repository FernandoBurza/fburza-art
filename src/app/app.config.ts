import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() =>
    initializeApp({
      "projectId": "fernandoburzaart-eda64",
      "appId": "1:442049802628:web:e9e6c7bfd22f03c9db2dd1",
      "storageBucket": "gs://fernandoburzaart-eda64.firebasestorage.app",
      "apiKey": "AIzaSyAQ6DbIBqpJbsW5ZbGEbOQ9IqBFERnim14",
      "authDomain": "fernandoburzaart-eda64.firebaseapp.com",
      "messagingSenderId": "442049802628",
      "measurementId": "G-R3NVLSM8GC"
    })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  provideStorage(() => getStorage())]
};
