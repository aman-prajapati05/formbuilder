import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDBGiufzOt9t_Oa8unVbekAF-1vG8luMY4",
        authDomain: "form-c9989.firebaseapp.com",
        projectId: "form-c9989",
        storageBucket: "form-c9989.appspot.com",
        messagingSenderId: "546095125921",
        appId: "1:546095125921:web:4a55b7bf599599929e67e0",
        measurementId: "G-8K4PGWGMK4"
   };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
    } catch (error) {
      console.error(
        "Error signing in: ",
        error.code,
        error.message,
        error.customData?.email,
        GoogleAuthProvider.credentialFromError(error)
      );
      throw error;
    }
};

export { db, analytics, auth };