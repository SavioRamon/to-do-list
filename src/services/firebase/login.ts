
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { app } from ".";
import { userCustomizations } from "./userCustomizations";

const auth = getAuth(app);

type AuthData = {
    email: string;
    password: string;
}

export const authService = {
    async userSignUp({ email, password }: AuthData) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            userCustomizations.setDefaultUserIcon(user);

            return user;

        } catch(error: any) {
            const code = error.code;
            const message = error.message;
            return null;
        }
    },

    async userSignIn({ email, password }: AuthData) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return user;

        } catch(error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            return null;
        }
    },

    async userSignOut() {
        try {
            signOut(auth);
            return true;

        } catch(error: any) {
            const code = error.code;
            const message = error.message;
            return false;
        }
    },

    userAutoSignIn() {

        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                resolve(user);
            });

            unsubscribe();
        })
    }
}