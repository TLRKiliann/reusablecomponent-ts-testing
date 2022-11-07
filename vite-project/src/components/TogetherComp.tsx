import { Component } from 'react'
import Header from './Header'
import Button from './Button'

type PrivateProps = {
  Header: React.ComponentType
  Button: React.ComponentType
}

export default class TogetherComp extends Component<PrivateProps> {
  render() {
    return(
      <>
        <Header />
        <Button />
      </>
    )
  }
}