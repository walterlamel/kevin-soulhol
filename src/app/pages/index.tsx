/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Popup from '../components/popup/Popup';
import Home from './home/Home';
import { selectUser } from './slices/userSlice';

import {allPages} from "../../types/pagesType";
import useIsConnect from '../../hooks/useIsConnect';
import listGames from '../../data/listeGames';

import ReactGA from 'react-ga';
import { TRACKING_ID } from '../../services/GoogleAnalytics';
import { logoStructuredData } from '../../structuredData/logo';

ReactGA.initialize(TRACKING_ID, {
  debug: false,
  titleCase: false
});


function App() {
  const {isConnect} = useIsConnect(); //lance la détection de la session automatiquement. A garder !

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <BrowserRouter>
      <Helmet 
          titleTemplate="%s | Kevin Soulhol"
          defaultTitle="Kevin Soulhol"
          htmlAttributes={{ lang: "fr" }}
          ><link rel="icon" type="image/png" sizes="32x32" href="/logo.png"></link>
      </Helmet>
      
      <script type="application/ld+json">
        {JSON.stringify(logoStructuredData)}
      </script>

      <Popup />
      <Routes>
        {allPages.map(page => (
          <Route key={page.link} path={"/"+ page.link} element={page.authRequired ? <RequireAuth><Home openedPage={page.link} /></RequireAuth> : <Home openedPage={page.link} />} />
        ))}
        <Route path="/" element={<Home openedPage='home' />} />
        {listGames.map((game, key) => (
          <Route key={key} path={game.link} element={game.component} />
        ))}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


function  RequireAuth({children}: {children : JSX.Element }){
  const user = useSelector(selectUser);

  if(!user){
    return (<Navigate to="/" replace />)
  }

  return children;
}
