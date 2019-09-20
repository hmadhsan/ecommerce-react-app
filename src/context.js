import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();

 class ProductProvider extends Component {
     state = {
         products: [], //data se array uthaya h
         detailProduct: detailProduct
    
     };

     componentDidMount(){
         this.setProducts();
     }

     setProducts = () => {
         let tempProducts = [];
         storeProducts.forEach(item => {  //storeProducts hmara array hai jhana sara data para hai or for each se sara data utharae hn
             const singleItem = {...item};
             tempProducts = [...tempProducts, singleItem];
         } );
         this.setState(() => {
             return { products: tempProducts }
         });
     }

getItem = (id) =>{
   const product = this.state.products.find(item => item.id === id); 
} //sab arrays ki id se match krega

     handleDetail = (id) => {
         const product = this.getItem(id);
         this.setState( () => {
             return{detailProduct: product}
         
         })
     };
     addtoCart = (id)=> {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        
     }
    render() {
        return (
            <ProductContext.Provider value={{ //making object
                ...this.state, //using object destructuring
                handleDetail: this.handleDetail,
                addtoCart: this.addtoCart 
            }}>

                {this.props.children}  


            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };