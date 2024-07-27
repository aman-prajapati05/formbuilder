// "use client"
// import React, { useState } from 'react'
// import { signInWithGoogle } from '../firebase/firebase';

// const Signup = () => {
//     const [user, setUser] = useState(null);

//     const handleSignIn = async () => {
//         try {
//           const userInfo = await signInWithGoogle();
//           setUser(userInfo);
//           console.log("Signed in user:", userInfo);
//         } catch (error) {
//           console.error("Sign-in failed:", error);
//         }
//     };

//     return (
//         <button
//             type="button"
//             onClick={handleSignIn}
//             className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//             Get started
//         </button>
//     )
// }

// export default Signup
"use client"

import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../firebase/firebase';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/home');
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  if (user) {
    router.push('/home');
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleSignIn}
      className="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Get started
    </button>
  );
};

export default Login;