import { Component } from 'react'

interface DataProps {
  isClicked: boolean
  description: string
}

export default class Button extends Component<DataProps> {
  state = {
      isClicked: false,
      description: "it's false"
  }

  handleClick = (event: MouseEvent<HTMButtonElement>) => {
    {this.state.isClicked 
      ? this.setState({isClicked: false, description: "it's false"})
      : this.setState({isClicked: true, description: "it's true"})}
  }

  render() {
    return(
      <>
      <button data-testid="btnid" onClick={this.handleClick} >
        my btn
      </button>
      <input
        data-testid="inputid"
        value={this.state.description} 
        onChange={this.handleClick}
        placeholder="inputplace"
      />
    </>
    )
  }
}
