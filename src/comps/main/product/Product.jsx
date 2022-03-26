import React from 'react'
import './product.css'
import { Button, Avatar} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Second from './other/Second'
function Product() {
    return (
        <div className="product__container">
         <div className="product__header">
                <h1>Product </h1>
                <NavLink to='/new_product'>
        <Button variant='contained' color='primary'>Create</Button>
        </NavLink>
         </div>
            <div className="product__wrapper">
                    <div className="first__card">
                        <div className="card__one">
                        <h2>Sales Performance (last 3 months)</h2> 
                        </div>
                        <div className="card__one">
                        <div className="second">
                            <Avatar src='/codelogo.jpg' />
                            <h2>Product Name</h2>
                        </div>
                        <div className="second__detail">
                            <Second text='id:' num={232} />
                            <Second text='sales' num={2345}/>
                            <Second text='active' num='yes'/>
                            <Second text='in stock' num='no' style={{color: 'red'}}/>

                        </div>
                        </div>
                    </div>
                    <div className="second__card">
                        <div className="product__detail">
                                <h2>Product Name</h2>
                                <h5>Bit Minners</h5>
                                <div className="underline"></div>
                                 <label htmlFor="InStock">In stock</label>
                                <select >
                                    <option value="No">No</option>
                                </select>
                                 <label htmlFor="active">Active</label>
                                <select >
                                    <option value="Yes">Yes</option>
                                </select>
                        </div>
                        <div className="product__image">
                            <div className="product__image__container">
                                    <div className="product__image__wrapper">
                                            <img src="/codelogo.jpg" alt="product__image" />
                                    </div>
                                    #$
                            </div>
                            <Button variant='contained' color='primary'>Update</Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Product
