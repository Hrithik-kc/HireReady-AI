// app/(auth)/authlogic.js
import { authFeature, googleProvider } from "../../lib/firebaseApp";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";

export async function loginWiththeEmail(email, password) {
  try {
    const result = await signInWithEmailAndPassword(
      authFeature,
      email,
      password
    );

    const user = result.user;

    if (!user.emailVerified) {
      alert("Please verify your email first");
      return;
    }

    const token = await user.getIdToken();

    const response = await fetch("/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log("Backend response:", data);

    return token;
  } catch (error) {
    console.error(error);
    alert("Invalid credentials");
  }
}

export async function createAccount(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(
      authFeature,
      email,
      password
    );
    await sendEmailVerification(result.user);
    alert("Verification email sent");
  } catch (error) {
    console.error(error);
  }
}

export async function ResetEmail(email) {
  try {
    await sendPasswordResetEmail(authFeature, email);
    alert("Password reset email sent");
  } catch (error) {
    console.error(error);
  }
}

export async function googlelogin() {
  try {
    const result = await signInWithPopup(authFeature, googleProvider);
    console.log("Google user:", result.user);
  } catch (error) {
    console.error(error);
  }
}
