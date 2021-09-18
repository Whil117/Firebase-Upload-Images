import {initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apikey : `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain:`${process.env.NEXT_PUBLIC_API_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_MSGSENDERID}`,
  appId: `${process.env.NEXT_PUBLIC_APPID}`,
  measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENTID}`,
  };

  const app = initializeApp(firebaseConfig)

 export default app
