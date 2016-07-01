import React, {Component} from 'react'
import Product from 'Product'

export default class Shop extends Component {
  
  constructor (props){
    super(props)
    this.state = {value:1}
  }

  selectMe(item){
    this.props.shopActions.selectItem(item.id)
  }

  render() {
    // console.log("shop props", this.props)
    let shopItems = this.props.shop.shopItems
    let cart2Render =  this.props.cart2Render
    

    let shopDisplay = shopItems.map((item, index)=> {
  
      return <Product key={index}
                      item={item}       
                      index={index} 
                      shopActions={this.props.shopActions}/>
    })

    let renderCart = cart2Render.map((item, index)=> {
      let BuyVal = item.selectedVariant

      return <div className="CartItem"
              key={index}
              onClick= {() => this.selectMe(item)}>
              <img src={item.attrs.images[0].src} height='60'/>
              <p>{item.title}</p>
              <p>{BuyVal.title} : {BuyVal.price}</p>
            </div>
    })

  

    return (
      <div className="Shop_Container">
        
        <div className="Cart">
          <div className="Title">Cart</div>
            <div className="CartItems">
               {renderCart}
            </div>
        </div>

        <div className="Shop">
          <div className="Title">Shop</div>
            <div className="ShopItems">
              {shopDisplay}
            </div>
          </div>
      </div>
    )
  }
}