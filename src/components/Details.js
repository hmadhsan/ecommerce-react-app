import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import {Link} from "react-router-dom";
import { ButtonContainer } from "./ButtonContainer";


export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value =>  {
                   const {id,company,img,info,price,title,inCart} = value.detailProduct;
                   return (
                       <div className="container py-5">
                           {/* title*/}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-warning my-5">
                                   <h1> {title} </h1>
                               </div>
                           </div>
                           {/* end title */}
                           {/* product info */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 ">
                                   <img src={img} className="img-fluid" alt="image"/>
                               </div>
                               {/* product text */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h3> Model: {title} </h3>
                                   <h4 className="text-uppercase text-title mt-3 mb-2">
                                       Made By: <span className="text-uppercase">
                                           {company}
                                       </span>
                                       <h5  className="text-black mt-3">
                                           <strong>
                                               Price: <span>$</span>
                                               {price}
                                           </strong>
                                       </h5>
                                   </h4>
                                   <p className="text-capitalize mt-3 mb-3">
                                       {info} </p>
                                   <div>
                                   
                                       <Link to="/">
                                           <ButtonContainer>
                                               Back to Products
                                               </ButtonContainer>
                                       </Link>
                                       <ButtonContainer
                                        disabled={inCart?true:false}
                                        onClick={() => {
                                            value.addtoCart(id)}
                                        }
                                        >
                                           {inCart ? 'In Cart' : 'Add to Cart'}
                                       </ButtonContainer>
                                      </div>
                                   </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
