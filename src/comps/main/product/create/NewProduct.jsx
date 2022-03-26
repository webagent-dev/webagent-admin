import React from 'react'
import './newproduct.css'
import { Button } from '@material-ui/core'
function NewProduct() {
    return (
        <div className="NewProduct__container">
                <h1>New Product</h1>
                <form>
                    <label htmlFor='file'>Image</label>
                    <input type="file" />
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder='New Product Name' />
                    <label htmlFor="Stock">Stock</label>
                    <input type="text" placeholder='123'/>
                    <label htmlFor="Active">Active</label>
                    <select>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <Button variant='contained'  color='primary' gutterTop >Create</Button>
                </form>
        </div>
    )
}

export default NewProduct
