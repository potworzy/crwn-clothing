import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp()
    console.log('user',user)
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  )
}
export default SignIn;
