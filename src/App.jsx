import Navbar from './Components/Navbar.jsx'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Favs.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Routes/Home.jsx'
import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout.jsx'
import { useDentistContext } from './Components/Context/GlobalContext'



function App() {
  const { theme } = useDentistContext()
  
  return (
    <div className={theme}>
      <Layout>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path='*' element={<h1>Page not Found - Error 404</h1>}/>
        </Routes>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
