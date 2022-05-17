import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Page from "./components/Page/Page";

import { PopupProvider } from "./context/PopupProvider";
import { SessionProvider } from "./context/SessionProvider";
import { ConversationProvider } from "./context/ConversationProvider";
import MiniGameRunner from "./pages/MiniGame/MiniGameRunner";

function App() {
       return (
              <div className="App">
                     <Helmet>
                            <meta charSet="utf-8" />
                            <title>Kevin Soulhol | Développeur web</title>
                     </Helmet>

                     <SessionProvider>
                            <PopupProvider>
                                   <ConversationProvider>
                                          <BrowserRouter>
                                                 <Routes>
                                                        <Route
                                                               index
                                                               path="/"
                                                               element={
                                                                      <Page />
                                                               }
                                                        />
                                                        <Route
                                                               index
                                                               path="/runner"
                                                               element={
                                                                      <MiniGameRunner />
                                                               }
                                                        />
                                                 </Routes>
                                          </BrowserRouter>
                                   </ConversationProvider>
                            </PopupProvider>
                     </SessionProvider>
              </div>
       );
}

export default App;
