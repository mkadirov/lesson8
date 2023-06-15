import React, { Component } from 'react'
import "./Header.css"
import ThemeContext from '../../Contexts/ThemeContext'

export default class Header extends Component {

  static contextType = ThemeContext;
 
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, changeMode})=> {
          return  <header className={`shadow ${theme}`}>
          <div className="container d-flex justify-content-between align-items-center">
              <div className="left d-flex align-items-center">
                  <h5>Kavin Bennett</h5>
  
                  <ul >
                      <li className='me-3'>
                          <a href="#" >Section two</a>
                      </li>
                      <li className='me-3'>
                          <a href="#">Section three</a>
                      </li>
                      <li className='me-3'>
                          <a href="#">Section four</a>
                      </li>
                  </ul>
              </div>
  
              <div className="right d-flex">
                  <span className='me-2'>Dark mode</span>
                  <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode} />
                  </div>
              </div>
          </div>
        </header>
        }}

      </ThemeContext.Consumer>
    )
  }
}
