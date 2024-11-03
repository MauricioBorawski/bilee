import {getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {executePromise} from "./api";
import app from "../firebase/config";

const auth = getAuth(app);

export function signUpWithEmailAndPassword(email: string, password: string ) {
   return executePromise(createUserWithEmailAndPassword(auth, email, password));
}

export function SignOut() {
    return executePromise(signOut(auth)).then(() => {
        return true;
    })
}
