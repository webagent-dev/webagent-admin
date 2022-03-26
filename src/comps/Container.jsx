import React from 'react'
import Home from './main/home/Home'
import User from './main/user/User'
import Product from './main/product/Product'
import { Routes, Route } from 'react-router-dom'
import NewProduct from './main/product/create/NewProduct'
function Container() {
    return (
        <div className='container'>
            <Routes>
                    <Route path='/'  element={<Home />}/>
                    <Route path='/users' element={<User /> } />
                    <Route path='/products' element={<Product />} />
                    <Route path='/new_product' element={<NewProduct />} />
            </Routes>
        </div>
    )
}

export default Container
