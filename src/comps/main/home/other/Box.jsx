import React from 'react'
function Box({head, num, tags,icon}) {
    return (
        <div className='box__container'>
            <h2>{head}</h2>
            <div className="box__other">
                <h3>{num}</h3>
                <div className="other">
                       <span>{tags}</span>
                       {icon}
                </div>
            </div>
             <p>Compared to last month</p>
        </div>
    )
}

export default Box
