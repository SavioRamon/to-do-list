import type { User } from "firebase/auth";
import { createContext, useContext, useReducer } from "react";
import { authService } from "../services/firebase/login";

type AuthTypes = {
    user: User | null;
    load: boolean;
    error: boolean;
    signUpReq: (data: { email: string; password: string; }) => void;
    signInReq: (data: { email: string; password: string; }) => void;
    logoutReq: () => void;
    autoLoginReq: () => void;
}

type Props = {
    children: JSX.Element;
}

type State = {
    user: User | null;
    load: boolean;
    error: boolean;
}

type Action = {
    type: string;
    payload: any
}


const AccountContext = createContext({} as AuthTypes);

const initialState: State = {
    user: null,
    load: false,
    error: false
}

export const useAuth = () => useContext(AccountContext);

export default function AuthProvider(props: Props) {
    const [auth, dispatch] = useReducer(authReducer, initialState);

    async function signUpReq(data: { email: string; password: string; }) {
        const user: User | null = await authService.userSignUp(data);
        if(user) {
            dispatch({
                type: "signupSuccess",
                payload: user,
            });
        } else {
            dispatch({
                type: "signupError",
                payload: null
            })
        }
    }

    async function signInReq(data: { email: string; password: string; }) {
        const user: User | null = await authService.userSignIn(data);
        if(user) {
            dispatch({
                type: "signinSuccess",
                payload: user,
            });
        } else {
            dispatch({
                type: "signinError",
                payload: null
            })
        }
    }

    async function logoutReq() {
        console.log("logout");
    }

    async function autoLoginReq() {
        console.log("autologin");
    }

    return (

        <AccountContext.Provider value={{
            ...auth,
            signUpReq,
            signInReq,
            logoutReq,
            autoLoginReq
        }}>
            {props.children}
        </AccountContext.Provider>

    );
}


function authReducer(state: State, action: Action) {
    switch(action.type) {

        // SIGN UP
        case "signupSuccess": {
            return {
                ...state,
                user: action.payload
            };
        }

        case "signupError": {
            return {
                ...state,
                user: null
            };
        }

        // SIGN IN
        case "signinSuccess": {
            return state;
        }

        case "signinError": {
            return state;
        }

        // LOGOUT
        case "logoutSuccess": {
            return state;
        }

        case "logoutError": {
            return state;
        }

        // AUTO LOGIN
        case "autoLoginSuccess": {
            return state;
        }

        case "autoLoginError": {
            return state;
        }


        default: {
            return state;
        }
    }
}