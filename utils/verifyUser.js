// utils/verifyUser.js
import admin from "@/lib/firebaseAdmin";

export async function verifyUser(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Missing Authorization header");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return {
      uid: decoded.uid,
      email: decoded.email,
    };
  } catch (error) {
    console.error("Token verification failed:", error.message);
    throw new Error("Invalid or expired token");
  }
}
