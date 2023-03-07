
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { app } from ".";

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
}