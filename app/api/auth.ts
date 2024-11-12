import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {executePromise} from "./api";
import app from "../firebase/config";

const auth = getAuth(app);

export function signUpWithEmailAndPassword(email: string, password: string ) {
   return executePromise(createUserWithEmailAndPassword(auth, email, password));
}

export function logInWithEmailAndPassword(email: string, password: string) {
    return executePromise(signInWithEmailAndPassword(auth, email, password));
}

export function logOut() {
    return executePromise(signOut(auth)).then(() => {
        return true;
    })
}
