import React from 'react'
import './App.css'
import Header from './comps/header/Header'
import Sidebar from './comps/sidebar/Sidebar'
import Container from './comps/Container'
function App() {
    return (
        <div className='app__container'>
          <Header />
          <div className="app__wrapper">
                <Sidebar />
                <Container />
          </div>
        </div>
    )
}

export default App
