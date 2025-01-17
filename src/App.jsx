import { useState } from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkmodecontext";
import MyList from "./pages/mylist/MyList";

function App() {
  const [ darkMode ] = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User"/>}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path="productId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Products"/>}
              />
            </Route>
            <Route path="category">
              <Route index element={<MyList />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
