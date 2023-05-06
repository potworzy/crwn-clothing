import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4CQW0BzQfCzRu3F5Zl011Vbj_gFy1kow",
  authDomain: "crwn-clothing-db-b3091.firebaseapp.com",
  projectId: "crwn-clothing-db-b3091",
  storageBucket: "crwn-clothing-db-b3091.appspot.com",
  messagingSenderId: "394304472925",
  appId: "1:394304472925:web:3c5bf39e834aa6aa520ab4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapdhot = await getDoc(userDocRef)

  console.log(userSnapdhot)

  if(!userSnapdhot.exists()){
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
          displayName,
          email,
          photoURL,
          createdAt
        }
      )
    }
    catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userDocRef
}
