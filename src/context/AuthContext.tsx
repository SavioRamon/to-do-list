import type { User } from "firebase/auth";
import { createContext, useContext, useReducer } from "react";
import { authService } from "../services/firebase/login";

type AuthTypes = {
    user: User | null;
    load: boolean;
    error: boolean;
    signUpReq: (data: { email: string; password: string; }) => void;
    signInReq: (data: { email: string; password: string; }) => void;
    signOutReq: () => void;
    autoSignInReq: () => void;
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
                type: "signUpSuccess",
                payload: user,
            });
        } else {
            dispatch({
                type: "signUpError",
                payload: null
            })
        }
    }


    async function signInReq(data: { email: string; password: string; }) {
        const user: User | null = await authService.userSignIn(data);
        if(user) {
            dispatch({
                type: "signInSuccess",
                payload: user,
            });
        } else {
            dispatch({
                type: "signInError",
                payload: null
            })
        }
    }


    async function signOutReq() {
        const signOutSuccess: boolean = await authService.userSignOut();
        if(signOutSuccess) {
            dispatch({
                type: "signOutSuccess",
                payload: null
            })
        } else {
            dispatch({
                type: "signOutError",
                payload: null
            })
        }
    }


    async function autoSignInReq() {
        const user = authService.userAutoSignIn();

        if(user) {
            dispatch({
                type: "autoSignInSuccess",
                payload: user
            })
        }
    }


    return (

        <AccountContext.Provider value={{
            ...auth,
            signUpReq,
            signInReq,
            signOutReq,
            autoSignInReq
        }}>
            {props.children}
        </AccountContext.Provider>

    );
}


function authReducer(state: State, action: Action) {
    switch(action.type) {

        // SIGN UP
        case "signUpSuccess": {
            return {
                ...state,
                user: action.payload
            };
        }

        case "signUpError": {
            return {
                ...state,
                user: null
            };
        }

        // SIGN IN
        case "signInSuccess": {
            return {
                ...state,
                user: action.payload
            };
        }

        case "signInError": {
            return {
                ...state,
                user: null
            };
        }

        // SIGN OUT
        case "signOutSuccess": {
            return {
                ...state,
                user: null
            };
        }

        case "signOutError": {
            return {
                ...state
            };
        }

        // AUTO SIGN IN
        case "autoSignInSuccess": {
            return {
                ...state,
                user: action.payload
            };
        }


        default: {
            return state;
        }
    }
}