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


  render() {
    console.log("shop props", this.props)
    let shopItems = this.props.shop.shopItems
    let cardStyle = this.cardStyler()
    

    let shopDisplay = shopItems.map((item, index)=> {
      console.log(item.title, index)

      return <div style={cardStyle}>
              <p>{item.title}</p>
              <img src={item.images[0].src} height='150'/>
            </div>
    })

    return (
      <div>
        {shopDisplay}
      </div>
    )
  }
}