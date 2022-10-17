import {
  getFavourite,
  registerNewUser,
  userExists,
} from "../../firebase/config";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { like, masiveUpdate } from "./favouriteSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result));

    userExists(result.uid)
      .then((data) => {
        if (!data) {
          registerNewUser(result);
        }
      })
      .catch(() => console.log("Error al determinar si el usuario existe"));

    dispatch(login(result));
    getFavourite(result.uid)
      .then((data) => {
        dispatch(masiveUpdate(data));
      })
      .catch(() => console.log("Error al obtener los favoritos"));
  };
};

export const startCreatingUserWithEmail = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmail({
      email,
      password,
      displayName,
    });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result));
    userExists(result.uid)
      .then((data) => {
        if (!data) {
          registerNewUser(result);
        }
      })
      .catch(() => console.log("Error al determinar si el usuario existe"));
    dispatch(login(result));
    getFavourite(result.uid)
      .then((data) => {
        dispatch(masiveUpdate(data));
      })
      .catch(() => console.log("Error al obtener los favoritos"));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
