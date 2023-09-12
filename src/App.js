import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Categories from './pages/categories/Categories';
import About from './pages/about/About';

const App=()=>{
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='shop' element={<Shop />} />
            <Route path='categories' element={<Categories />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
    </Fragment>
  );
};

export default App;