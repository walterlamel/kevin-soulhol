import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";

import { PopupProvider } from "./context/PopupProvider";
import { SessionProvider } from "./context/SessionProvider";

import useIsConnect from "./hooks/useIsConnect";

function App() {
       const { isConnect } = useIsConnect();

       return (
              <SessionProvider>
                     <PopupProvider>
                            <div className="App">
                                   <Helmet>
                                          <meta charSet="utf-8" />
                                          <title>
                                                 Kevin Soulhol | Développeur web
                                          </title>
                                   </Helmet>
                                   <BrowserRouter>
                                          <Routes>
                                                 <Route
                                                        index
                                                        path="/"
                                                        element={<Home />}
                                                 />
                                                 <Route
                                                        index
                                                        path="/account"
                                                        element={<Account />}
                                                 />
                                          </Routes>
                                   </BrowserRouter>
                            </div>
                     </PopupProvider>
              </SessionProvider>
       );
}

export default App;
