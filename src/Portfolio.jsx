import React, {Component} from 'react'
import PortfolioItem from 'PortfolioItem'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        {this.props.portfolioItems.map(i => (
           <PortfolioItem key={i.title} portfolioItem={i}/>
        ))}
      </div>
    )
  }
}
