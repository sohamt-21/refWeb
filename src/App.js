import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './Components/Pages/Landing';
import SplineDesign from './Components/Design/SplineDesign';
import Footer from './Components/ToBeUsed/Footer';

function App() {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);



  return (
    <>
      <Routes>
        {Loading ? <> <Route path='/' Component={Footer} /></> : <> <Route path='/' Component={Footer} /></>}
      </Routes>

    </>
  )
}

export default App