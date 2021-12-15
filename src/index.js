import "./index.css";

import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,

  document.getElementById("root")
);

const firebaseConfig = {
  apiKey: "AIzaSyBTN9qmyvkWNtOJX0My1YjGTQeixNJcbDY",
  authDomain: "deren-test.firebaseapp.com",
  databaseURL: "https://deren-test.firebaseio.com",
  projectId: "deren-test",
  storageBucket: "deren-test.appspot.com",
  messagingSenderId: "797163391035",
  appId: "1:797163391035:web:1cdb029684f8e1f402b41e",
};

initializeApp(firebaseConfig);
