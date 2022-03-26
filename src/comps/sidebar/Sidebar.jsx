import React from 'react'
import { LineStyle, Timeline, TrendingUp, HomeOutlined } from '@material-ui/icons'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    return (
        <div className='sidebar__container'>
         <div className="taps">Dashboard</div>
         <NavLink to='/'>
            <div className="link__wrapper">
                <LineStyle />
                <span>Home</span>
                 </div>
                 </NavLink>
            <div className="link__wrapper"> 
             < Timeline />
            <span>Analytics</span> </div>
            <div className="link__wrapper"> 
              <TrendingUp />
            <span>Sales</span></div>
         <div className="taps">Quick Menu</div>
            <NavLink to='/users'>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Users</span> </div>
                     </NavLink>
                       <NavLink to='/products'>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Products</span> 
                  </div>
                    </NavLink>
              <div className="link__wrapper">
                    <HomeOutlined />
                   <span>Transactions</span></div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Reports</span> </div>
         <div className="taps">Notifications</div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Mail</span></div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Feedback</span></div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Messages</span></div>
         <div className="taps">Staff</div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Manage</span></div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Analytics</span></div>
              <div className="link__wrapper">
                    <HomeOutlined />
                  <span>Reports</span></div>
        </div>
    )
}

export default Sidebar
