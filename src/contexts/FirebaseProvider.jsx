import React, { createContext } from "react";

import { auth } from "../services/firebase.config";
import { firestore } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const teste = () => {
    console.log("Funcionou!!");
  };

  const signIn = (email, password) => {
    if (email === "" || password === "") {
      alert("campo vazio!!");
      return;
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          const user = userCredencial.user.uid;
          alert("login efeituado..");
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  const signUp = (name, email, password, confirmPassword) => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Campo vazio");
      return;
    }
    if (password != confirmPassword) {
      alert("A senha e a confirmação não são iguais");
      return;
    } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredencial) => {
            const user = userCredencial.user;


            

            alert("Cadastrado " + email);
            console.log(`usuario ${email} cadastrado com sucesso`);
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
          });
      }
    };

  return (
    <FirebaseContext.Provider value={{ teste, signIn, signUp }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
