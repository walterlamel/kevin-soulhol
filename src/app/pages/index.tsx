/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useIsConnect from '../../hooks/useIsConnect';
import Popup from '../components/popup/Popup';
import Jumper from '../games/jumper/Jumper';
import Home from './home/Home';
import { selectUser } from './slices/userSlice';

function App() {
  const {isConnect} = useIsConnect();

  return (
    <BrowserRouter>
      <Helmet 
          titleTemplate="%s | Kevin Soulhol"
          defaultTitle="Kevin Soulhol"
          htmlAttributes={{ lang: "fr" }}
          ></Helmet>
        <Popup />
      <Routes>
        <Route path="/" element={<Home openedPage="home" />} />
        <Route path="/home" element={<Home openedPage="home" />} />
        <Route path="/contacts" element={<Home openedPage="contact" />} />
        <Route path="/games" element={<Home openedPage="games" />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Home openedPage="dashboard" />
          </RequireAuth>
        } />
        <Route path="/jumper" element={<Jumper />} />
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
