import React, {Component} from 'react'
import data from 'data'
import {connect} from 'react-redux'
import * as c from 'constants'
import Portfolio from 'Portfolio'
import * as shopifyActions from 'actions/shopifyActions'
import * as portfolioActions from 'actions/portfolioActions'
import {bindActionCreators} from 'redux'
import ShopifyBuy from 'shopify-buy'

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

  render() {
    return (
      <div>
        <Portfolio portfolio={this.props.portfolio}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {portfolio: state}
}

const mapDispatchToProps = (dispatch) => {
  return {'shopifyActions': bindActionCreators(shopifyActions, dispatch),
          'portfolioActions': bindActionCreators(portfolioActions, dispatch),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
