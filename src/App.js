import './App.css';
import SlideMenu from './components/SlideMenu';
import Navbar from './components/Navbar';
import AlgoMap from './components/Map';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { getMap } from './api/map';



function App() {
  const [key, setKey] = useState(null)

  useEffect(() => {
    (async () => {
      const result = await getMap()
      if (result.key){
        setKey(result.key)
      }
      else {
        console.log(result.error)
      }
    })()
    
  },[])
  return (
    <>
    <Navbar />
    <div className="slider">
      <SlideMenu />
    </div>
    {key && <AlgoMap key = {key} />}
    <Footer />
    </>
  );
}

export default App;
