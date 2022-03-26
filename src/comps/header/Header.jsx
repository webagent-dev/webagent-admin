import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import { Avatar  } from '@material-ui/core'
import './header.css'
function Header() {
    return (
        <div className='header__container'>
           <div className="logo">
               <h3>webagentadmin</h3>
           </div>
           <div className="other__header">
            <div className="other__icon">
                <div className="icons">
                       <NotificationsNone size='50px'/>
                       <sub  className="bar">2</sub>
                </div>
                <div className="icons">
                       < Language size='50px' />
                            <sub  className="bar">4</sub>
                </div>
                <div className="icons">
                      <Settings size='50px'/>
                </div>
            </div>
                    <Avatar />
           </div>
        </div>
    )
}

export default Header
