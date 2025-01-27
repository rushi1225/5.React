import React from 'react'
import { Component } from 'react'


const MyComponent = () => {
  return (
    <div>

    </div>
  )
}



class MyCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

}

componentDidMount(){
  console.log("Mounted class comp")
}
//for start mount

componentDidUpdate(){
  console.log("update class component")
}
//update

componentWillUnmount(){
  console.log("class unmounted")
}
//


// class component its have contain extend Component and its also take render() method 
class Newcomponent extends Component {
  render() {
    return (
      <>
        <h1>hello from component</h1>
        <button onClick={() => this.setState}></button>
      </>

    )

  }
}



export default MyComponent
