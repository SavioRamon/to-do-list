
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from ".";

const auth = getAuth(app);

type SignUpData = {
    email: string;
    password: string;
}

export const authService = {
    async userSignUp({email, password}: SignUpData) {
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

    
}