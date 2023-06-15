import React, { Component } from 'react'
import "./Main.css"
import ThemeContext from '../../Contexts/ThemeContext'

export default class Main extends Component {

    static contextType = ThemeContext;
  render() {
    return (
      <div>

       <div className={`main ${this.context.theme}`}>
       <div className='text-box'>
            
            <div className='top'>
                 <div className="img-box">
                    <img src="https://media1.popsugar-assets.com/files/thumbor/ut8worfjqiybS182g-Bu2KajFGg/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/732/n/1922398/74a21e065b4cc94bb5f104.30104778_/i/Orlando-Bloom.jpg" alt="" />
                 </div>
                <h2>Hello. <br /> My name is Kevin.</h2>
            </div>

            <div className="down">
                <p>I'm a Digital Product and UI Designer
                     – creating digital experiences that are
                      intuitive for real people and making complex processes easy to use. <br />
                      <br />
                      Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across 
                      a whole load of brands – leading a great team across design, UI engineering,  
                      accessibility and customer experience. I'm lucky to be part of a great team of 
                      designers, writers, engineers, PMs and data specialists – amongst others –
                       testing, iterating and optimising our platforms and products.
                       <br />
                       <br />
                      I've got some work on Dribbble, some previous work at Saga and
                       you can find me over on twitter and sometimes 
                       on Medium too. I also take too many photos.</p>
            </div>
        </div>
       </div>
      </div>
    )
  }
}
