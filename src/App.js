import './App.css'
import UsersContainer from './components/UsersContainer'
import ItemsContainer from './components/ItemsContainer'
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='App-header'>
            <h1>React Assignment</h1>
          </div>
          <Routes>
            <Route exact path='/' element={<UsersContainer />} />
            <Route path='/users/:id' element={<ItemsContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
