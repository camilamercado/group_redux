import React, {Component} from 'react'
import data from 'data'
import {connect} from 'react-redux'
import * as c from 'constants'
import Portfolio from 'Portfolio'
import Shop from 'Shop'
import * as appActions from 'actions/appActions'
import * as shopActions from 'actions/shopActions'
import * as cartActions from 'actions/cartActions'
import * as portfolioActions from 'actions/portfolioActions'
import {bindActionCreators} from 'redux'
import ShopifyBuy from 'shopify-buy'
import ReactCSSTransitionGroup from 'React-addons-css-transition-group'


let collectionID = 305808326

let shopClient = ShopifyBuy.buildClient({
  apiKey: '1bbcdc4227365db72405d2029139c4c6',
  myShopifyDomain: 'shop-redux',
  appId: '6'
});



class App extends Component {

  componentDidMount() {

     data.portfolio.forEach(item =>
     this.props.portfolioActions.initPortfolio(item)
    )

     this.props.shopActions.initShopClient(shopClient)
     this.props.cartActions.initCart(shopClient)

  }

  Styler() {
      return {
        "font-family" : "andale mono",
        "width": "50%",
        "height": "30px",
        "text-align": "center",
        "position" : "relative",
        "float": "left",
        "background": "lightgrey",
        "color": "white",
        "line-height": "30px"
      }
  }

  newLink(link){
    this.props.appActions.setLink(link)

  }

  startRequest(){
    if (this.props.app.link === "portfolio"){
      console.log("portfolio")
      return <Portfolio portfolio={this.props.portfolio}/>
    }if (this.props.app.link === "shop"){
      return <Shop shop={this.props.shop}
                   cart={this.props.cart}
                   cart2Render={this.props.cart2Render}
                   shopActions={this.props.shopActions}/>
      console.log("portfolio")
    }
  }

  render() {
        console.log(this.props)
        let linkStyle = this.Styler()

    return (
      <div className="App">
        <div Classname="link" id="A" style={linkStyle} onClick={() => this.newLink("portfolio")}>PORTFOLIO</div>
        <div Classname="link" id="B" style={linkStyle} onClick={() => this.newLink("shop")}>SHOP</div>
        <div className="Actor" onClick={this.props.cartActions.changeName}>***</div>


        <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={800} transitionLeaveTimeout={2100}>
          {this.startRequest()}
        </ReactCSSTransitionGroup>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
          'app': state.app,
          'shop': state.shop,
          'cart': state.cart,
          'portfolio': state.portfolioItems,
          'cart2Render': state.cart.mockCart.map(id => state.shop.shopByID[id])
         }
}



const mapDispatchToProps = (dispatch) => {
  return {
          'appActions': bindActionCreators(appActions, dispatch),
          'shopActions': bindActionCreators(shopActions, dispatch),
          'cartActions': bindActionCreators(cartActions, dispatch),
          'portfolioActions': bindActionCreators(portfolioActions, dispatch)
        }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App)
