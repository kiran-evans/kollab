import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/cordova';
import { getStorage } from 'firebase/storage';

const app = initializeApp({
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID
});

const auth = getAuth(app);
await setPersistence(auth, browserLocalPersistence);
const storage = getStorage(app);

const google = new GoogleAuthProvider();

export const fb = {
    app,
    auth,
    storage,
    google
}