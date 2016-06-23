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
        "margin-top": "100px"
      }
  }

  cartStyler() {
      return {
        "font-family" : "andale mono",
        "width": "50px",
        "text-align": "center",
        "position" : "relative",
        "float": "left",
        "margin-top": "100px",
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

      return <div style={cardStyle} 
              onClick= {() => this.selectMe(item)}>
              <p>{item.title}</p>
              <img src={item.images[0].src} height='150'/>
            </div>
    })

    let renderCart = cart2Render.map((item, index)=> {
     // console.log(item.title, index)

      return <div style={cartStyle} 
              onClick= {() => this.selectMe(item)}>
              <p>{item.title}</p>
              <img src={item.attrs.images[0].src} height='50'/>
            </div>
    })

        let renderCart2 = cart2Render.map((item, index)=> {
     // console.log(item.title, index)

      return <div style={cartStyle}>
              <p>{item.title}</p>
              <img src={item.attrs.images[0].src} height='50'/>
            </div>
    })


    return (
      <div>
        {shopDisplay}
        {renderCart}
                {renderCart2}

      </div>
    )
  }
}