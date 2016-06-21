import React, {Component} from 'react'
import data from 'data'
import {connect} from 'react-redux'
import * as c from 'constants'
import Portfolio from 'Portfolio'
import Shop from 'Shop'
import * as appActions from 'actions/appActions'
import * as shopifyActions from 'actions/shopifyActions'
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

     this.props.shopifyActions.initShopClient(shopClient)

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
      return <Shop shop={this.props.shopify}/>
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
          'shopify': state.shopify,
          'portfolio': state.portfolioItems
         }
}

const mapDispatchToProps = (dispatch) => {
  return {
          'appActions': bindActionCreators(appActions, dispatch),
          'shopifyActions': bindActionCreators(shopifyActions, dispatch),
          'portfolioActions': bindActionCreators(portfolioActions, dispatch)
        }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App)
