import React, {Component} from 'react'
import PortfolioItem from 'PortfolioItem'

export default class Portfolio extends Component {
  render() {
    console.log(this.props)
	let portfolioItems = this.props.portfolio

    return (
      <div>
        {portfolioItems.map(i => (
           <PortfolioItem key={i.title} portfolioItem={i}/>
        ))}
      </div>
    )
  }
}
