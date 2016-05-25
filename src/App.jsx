import React, {Component} from 'react'
import data from 'data'
import {connect} from 'react-redux'
import * as c from 'constants'
import Portfolio from 'Portfolio'

class App extends Component {

  componentDidMount() {
    data.portfolio.forEach(item =>
      this.props.dispatch({
        type: c.ADD_PORTFOLIO_ITEM,
        portfolioItem: item
      })
    )
  }

  render() {
    return (
      <div>
        <Portfolio portfolioItems={this.props.portfolioItems}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE: ', state);
  return {portfolioItems: state}
}

export default connect(mapStateToProps)(App)
