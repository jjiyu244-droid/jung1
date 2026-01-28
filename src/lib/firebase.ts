import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgcJo_5G1ZRKKENIO3AxM4EPHaxYfdSMQ",
  authDomain: "jung1-f0ad1.firebaseapp.com",
  projectId: "jung1-f0ad1",
  storageBucket: "jung1-f0ad1.firebasestorage.app",
  messagingSenderId: "122869132285",
  appId: "1:122869132285:web:086f0a2f280245012c0794",
  measurementId: "G-JZS5W15Q7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Firebase 연결 테스트
console.log('Firebase 초기화 완료');
console.log('프로젝트 ID:', firebaseConfig.projectId);
console.log('Firestore 객체:', db);

export default app; 