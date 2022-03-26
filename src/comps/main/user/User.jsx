import React from 'react'
// import { DataGrid } from ' @material-ui/data-grid'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar } from '@material-ui/core'

const colums = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'username', headerName: 'Username', width: 130},
    {field: 'Avatar', headerName: 'Image', width: 130},
    {field: 'email', headerName: 'Email', width:90},
    {field: 'status', headerName: 'Status',  width:60, },
    {field: 'transaction', headerName: 'Transaction',  width: 70},
]
const rows = [
    {id: 1, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 2, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 3, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 4, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 5, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 6, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 7, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 8, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
    {id: 9, username: 'snow john', avater:`${<Avatar />}`, email: 'snow john@gmail.com', status: 'active', transaction: '$200.00'},
   
]

function User() {
    return (
        <div className="user__container">
            <DataGrid rows={rows} colums={colums} pageSize={5} checkboxSelection />
         </div>
    )
}

export default User
