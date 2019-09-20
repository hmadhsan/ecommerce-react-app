import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import {ButtonContainer} from "./ButtonContainer";


export default class Navbar extends Component {
    render() {
        return (
           <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5"> {/* px means paddng*/}
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
               
               <Link to="/"> {/* when click on logo it goes to homepage */}
                   <img src={logo} alt="store"
                   className="navbar-brand" />
                   </Link>
                   <ul className="navbar-nav align-items-center">
                       <li className="nav-item ml-5"> {/* ml-5 means margin-left */}
                        <Link to="/" className="nav-link">
                            Products
                        </Link>                           
                       </li>  
                       </ul> 

                       <Link to="./cart" className="ml-auto"> {/* that will redirect to cart page..ml-auto means margin-left jitna b posible ho */}
                           <ButtonContainer >
                               <span className="mr-2">
                               <i className="fa fa-cart-plus">My Cart</i>
                               </span>
                           </ButtonContainer>
                       </Link>
               
               
                </NavbarWrapper>
        )
    }
}

const NavbarWrapper = styled.nav`
color: white;
text-transform: capitalize;
background: rgb(46, 10, 10);
`;