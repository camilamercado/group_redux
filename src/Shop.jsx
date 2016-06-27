import React, {Component} from 'react'
//import PortfolioItem from 'PortfolioItem'

export default class Shop extends Component {
  

  cardStyler() {
      return {
        "font-family" : "andale mono",
        "width": "150px",
        "text-align": "center",
        "position" : "relative",
        "float": "left",
        "margin-top": "2px"
      }
  }

  cartStyler() {
      return {
        "font-family" : "andale mono",
        "width": "80px",
        "text-align": "center",
        "position" : "relative",
        "float": "left",
        "margin-top": "20px",
        "font-size": "10px"
      }
  }

  selectMe(item){
    console.log("selecting >>>", item.id)
    this.props.shopActions.selectItem(item.id)
  }


  render() {
    // console.log("shop props", this.props)
    let shopItems = this.props.shop.shopItems
    let cart2Render =  this.props.cart2Render
    let cardStyle = this.cardStyler()
    let cartStyle = this.cartStyler()
    

    let shopDisplay = shopItems.map((item, index)=> {
     // console.log(item.title, index)

      return <div className="ShopItem" style={cardStyle} 
              onClick= {() => this.selectMe(item)}>
              <img src={item.attrs.images[0].src} height='150'/>
               <p>{item.title}</p>
            </div>
    })

    let renderCart = cart2Render.map((item, index)=> {
     // console.log(item.title, index)

      return <div className="CartItem" style={cartStyle} 
              onClick= {() => this.selectMe(item)}>
              <img src={item.attrs.images[0].src} height='60'/>
              <p>{item.title}</p>
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