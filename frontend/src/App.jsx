import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Slots from './pages/Slots'
import Reports from './pages/Reports'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import Medicine from './pages/Medicine'
import Booking from './pages/Booking'
import Doctor_1 from './pages/Doctor_1'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/doctor/:doctorId' element={<Doctor_1 />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/slots' element={<Slots />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
