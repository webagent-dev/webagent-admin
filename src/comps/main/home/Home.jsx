import React from 'react'
import Box from './other/Box'
import './home.css'
import Members from './other/Member'
import { Avatar, Button} from '@material-ui/core'
import Chart from '../chart/Chart'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { data } from '../../../data'
const card = [1,2,3,4,5,6,7,8,9,10]
function Home() {
    return (
        <div className='home__container'>
                    <div className="home__first">
                               <Box head='Revanue' num= '$3456' tags='- 3.4' icon={< ArrowDownward className='color bad'/>}/>
                               <Box head='Sales'  num='$1234' tags='- 1.5' icon={< ArrowDownward className='color bad'/>}/>
                               <Box head='Cost' num='$45678' tags='+ 3.45' icon={< ArrowUpward className='color'/>}/>
                    </div>
                    <div className="home__chart">
                           {/* <h2>Active User Details</h2> */}
                            <div className="rechart">
                                <h2>User Analytics</h2>
                                <Chart  data={data} title='Active User' dataKey='name'/>
                            </div>
                     </div>
                     <div className="last__child">
                         <div className="last__child__first">
                             <h2>New Join Members</h2>
                             <div className="members">
                                {
                                    card.map((card,i) =>      <Members key={i} />)
                                }
                             </div>
                         </div>
                         <div className="last__child__second">
                             <h2>Latest Transactions</h2>
                             <div className="transaction__container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td className='head'>Customer</td>
                                                <td  className='head'>Date</td>
                                                <td  className='head'>Amount</td>
                                                <td  className='head'>Status</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                        {
                                                            card.map((data, i) => (
                                                                          <tr key={i}>
                                                        <td className='spin'>
                                                <Avatar />
                                            <span>Susan Carlson</span>
                                                </td>
                                                 <td className='data'>
                                                     23 may 2021
                                                 </td>
                                                 <td className='data'> 
                                                     $133.90
                                                 </td>
                                                 <td className='data'>
                                                          <button className='btn color green'>
                                                         Approved
                                                     </button>
                                                 </td>
                                            </tr>
                                                            ))
                                                        }
                                        </tbody>
                                    </table>
                             </div>
                         </div>
                     </div>
        </div>
    )
}

export default Home
