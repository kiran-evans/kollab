import * as fb from 'firebase-admin';

export const firebase = fb.initializeApp({
    credential: fb.credential.cert({
        projectId: process.env.FB_PROJECT_ID,
        privateKey: process.env.FB_PRIVATE_KEY,
        clientEmail: process.env.FB_CLIENT_EMAIL
    })
});