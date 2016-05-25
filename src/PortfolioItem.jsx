import React, {Component} from 'react'

export default class PortfolioItem extends Component {
  render() {
    const { title, date, img, sub_1, sub_2, sub_3 } = this.props.portfolioItem
    return (
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <img src={img} height='200'/>
        <p>{sub_1}</p>
        <p>{sub_2}</p>
        <p>{sub_3}</p>
        <hr/>
      </div>
    )
  }
}
