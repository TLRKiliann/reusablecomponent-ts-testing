import { useState, Component } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import TogetherComp from './components/TogetherComp'
import './App.css'

class App extends Component<{}> {
  render() {
    return (
      <div className="App">

        <Header />

        <Button />

        <TogetherComp />

      </div>
    )
  }
}

export default App
