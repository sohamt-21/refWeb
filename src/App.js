import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './Components/Pages/Landing';
import SplineDesign from './Components/Design/SplineDesign';
import OverView from './Components/Pages/OverView';
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
        {Loading ? <> <Route path='/' Component={SplineDesign} /></> : <> <Route path='/' Component={Landing} /></>}
        <Route path='/overview' Component={OverView}/>
      </Routes>

    </>
  )
}

export default App