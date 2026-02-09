// lib/firebaseAdmin.js
import admin from "firebase-admin";

if (!admin.apps.length) {
  // If emulator is used, applicationDefault() is enough
  if (process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    console.log("Using Firebase Auth Emulator");
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  } else {
    // Real Firebase project
    if (
      !process.env.PROJECT_ID ||
      !process.env.CLIENT_EMAIL ||
      !process.env.PRIVATE_KEY
    ) {
      throw new Error(
        "Missing Firebase Admin environment variables"
      );
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
    });
  }
}

export default admin;
export const adminAuth = admin.auth();
export const adminDB = admin.firestore();
