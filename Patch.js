import React from 'react'
let obj =[]

class Patch extends React.Component {

  static displayName = 'Patch'

  static propTypes = {
    
  }

  constructor (props) {
    super(props)

  }

  componentDidMount() {
 	this.generateValues()
  }

  generateValues(e){
  	for (let i = 0; i < 16; ++i){
  		obj.push(i)
  	}
  }

render() {
  let rSET = 20
  let red = obj.map((item, index) => {
   	 let r= index * index
   	 let g= 0
   	 let b= 0
   	 let rgb = "rgb(" + r + "," + g + "," + b + ")"
	 
	 let patchStyle = {background: rgb}
     return <div className="patch" key={index} style={patchStyle}>{index}RGB</div>     		 
    })

  let green = obj.map((item, index) => {
   	 let r= 0
   	 let g= index * item
   	 let b= 0
   	 let rgb = "rgb(" + r + "," + g + "," + b + ")"
	 
	 let patchStyle = {background: rgb}
     return <div className="patch" key={index} style={patchStyle}>{index}RGB</div>     		 
    })

  let blue = obj.map((item, index) => {
   	 let r= 0
   	 let g= 0
   	 let b= index * item
   	 let rgb = "rgb(" + r + "," + g + "," + b + ")"
	 
	 let patchStyle = {background: rgb}
     return <div className="patch" key={index} style={patchStyle}>{index}RGB</div>
     		   		 
    })


    return (
      <div className="Patches" width="100%" height="500px">
      <div className="logo">
  		<div className="circle" id="A"></div>
  		<div className="circle" id="B"></div>
  	  </div>
      {red}{green}{blue}
      {red}{green}{blue}
      {red}{green}{blue}
      </div>
    )
  }

 }

export default Patch