import React from 'react'
import { Avatar } from '@material-ui/core'
import { Button, CssBaseline} from '@material-ui/core'
import {Visibility} from '@material-ui/icons'
function Member() {
    return (
        <>
        <CssBaseline />
        <div  className="member__container">
            <Avatar />
            <div className="member__detail">
                <h2>wiz kenny</h2>
                    <p>web developer</p>
            </div>
         <button className='btn'>  <Visibility /> Display </button>
        </div>
        </>
    )
}

export default Member
