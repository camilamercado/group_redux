import React, {Component} from 'react'

export default class Product extends Component {

  selectFunc(value, e){
    console.log(e.target.value)
  }

  inputFunc(event){
    console.log(event.target.value)
  }

  selectMe(item){
    this.props.shopActions.selectItem(item.id)
  }


  render() {    
    const {item, index} = this.props

    return (

      <div className="ShopItem" key={index} id={item.attrs.product_id}>
              <img src={item.attrs.images[0].src} height='150'/>
               <p>{item.title}</p>
                
                <select defaultValue onChange={this.selectFunc.bind(null, item)}>
                  
                  {item.attrs.variants.map((item, index) => {
                    return <option key={index}>{item.title} : ${item.price}</option>
                   })}
               
                </select>

                <div className="QtyInput">
                QTY : <input defaultValue="1" onChange={this.inputFunc.bind(this)}/>
                </div>
               <div className="Buttons">
                 <div className="Inc_Button"
                  onClick= {() => this.selectMe(item)}>+</div>
                 <div className="Inc_Button">-</div>
               </div>
              
            </div>
       
    )
  }
}

