import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Biblioteca from "./pages/private/biblioteca";
import { Admin } from "./pages/private/admin";
import { VistaFamilinea } from "./pages/familinea";
import { Pagina404 } from './component/404'

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


import { Upload } from "./component/upload"

//create your first component
const Layout = () => {

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/recursos">
              <Navbar />
              <Biblioteca />
            </Route>
            <Route exact path="/familinea">
              <Navbar />
              <VistaFamilinea />
            </Route>
            <Route exact path="/admin">

              <Admin />
            </Route>
            <Route>
              <Pagina404 />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
