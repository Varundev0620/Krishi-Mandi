import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import UploadCropPage from './Pages/UploadCropPage';

function App() {
  return (
    <>
      <HomePage/>
      
    </>
  );
}

export default App;

// function App(){
//   return(
//     <>
//     <Router>
//       <Navbar/>
//       <Routes>
//           <Route path='/'  element ={ <HomePage/>}/>
//           <Route path='/UploadCrop'  element ={ <UploadCropPage/>}/>

          

          
//       </Routes>
//       <Footer/>
//     </Router>
//     </>
//   );
// }

// export default App;