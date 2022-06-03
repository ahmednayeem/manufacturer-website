
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Login/SignUp';
import ProductDetail from './Pages/ProductDetail';
import RequireAuth from './Pages/Login/RequireAuth'
import Blog from './Pages/Blog';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';







function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/product/:productId' element={
          
       <RequireAuth>
         <ProductDetail></ProductDetail>
       </RequireAuth>
         
        }></Route>
        <Route path="/about" element={<About></About>} />
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/myprotfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
