import React, {Component} from 'react'
import PortfolioItem from 'PortfolioItem'

export default class Portfolio extends Component {
  render() {

	let portfolioItems = this.props.portfolio.portfolioItems

    return (
      <div>
        {portfolioItems.map(i => (
           <PortfolioItem key={i.title} portfolioItem={i}/>
        ))}
      </div>
    )
  }
}
