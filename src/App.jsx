import React, {Component} from 'react'
import data from 'data'
import {connect} from 'react-redux'
import * as c from 'constants'
import Portfolio from 'Portfolio'
import * as shopifyActions from 'actions/shopifyActions'
import * as portfolioActions from 'actions/portfolioActions'

import {bindActionCreators} from 'redux'


class App extends Component {

  componentDidMount() {

     data.portfolio.forEach(item =>
     this.props.portfolioActions.initPortfolio(item)
    )

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
