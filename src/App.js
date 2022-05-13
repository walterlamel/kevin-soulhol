import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Page from "./components/Page/Page";

import { PopupProvider } from "./context/PopupProvider";
import { SessionProvider } from "./context/SessionProvider";

function App() {
       return (
              <div className="App">
                     <Helmet>
                            <meta charSet="utf-8" />
                            <title>Kevin Soulhol | Développeur web</title>
                     </Helmet>

                     <SessionProvider>
                            <PopupProvider>
                                   <BrowserRouter>
                                          <Routes>
                                                 <Route
                                                        index
                                                        path="/"
                                                        element={<Page />}
                                                 />
                                          </Routes>
                                   </BrowserRouter>
                            </PopupProvider>
                     </SessionProvider>
              </div>
       );
}

export default App;
