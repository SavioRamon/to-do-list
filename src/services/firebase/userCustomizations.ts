import { updateProfile, User } from "firebase/auth";
import { getStorage } from "firebase/storage";

const storage = getStorage();

export const userCustomizations = {
    async setDefaultUserIcon(user: User) {
        const url = "https://firebasestorage.googleapis.com/v0/b/todolistmgr.appspot.com/o/images%2FuserDefaultIcon.svg?alt=media&token=e6e44562-c10c-40ba-a0c3-ecf990d5ba56";

        updateProfile(user, {
            photoURL: url
        });
    }
}