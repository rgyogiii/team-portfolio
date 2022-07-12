import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'
class contact extends Component {
  
    render() {
        return (
        //   <div id="contact" className="container bg-dark rounded-3 text-dark text-white rounded bg-opacity-75 shadow">
        //    <h1 className="fw-bold titleheader">CONTACT US</h1>
        //   <div className="border"></div>
        //   <form className='contact-form'>
        //     <input type="text" className='contact-form-text' placeholder='Name' />
        //     <input type="email" className='contact-form-text' placeholder='Email' />
        //     <input type="text" className='contact-form-text' placeholder='Your phone number' />
        //     <textarea className="contact-form-text" placeholder='Your message'></textarea>
        //     <input type="submit" value="Send" className='contact-form-btn' />
        //   </form>
        // </div>


        <div id="contact" class="container px-2">
        <div class="container px-4 pb-5">
          <div
            class="p-5 m-3 bg-dark rounded-3 text-dark text-white rounded bg-opacity-75 shadow"
          >
            <h1 className="fw-bold titleheader">CONTACT US</h1>
            <div className="border"></div>
              <form className='contact-form'>
                <input type="text" className='contact-form-text' placeholder='Name' />
                <input type="email" className='contact-form-text' placeholder='Email' />
                <input type="text" className='contact-form-text' placeholder='Your phone number' />
                <textarea className="contact-form-text" placeholder='Your message'></textarea>
                <input type="submit" value="Send" className='contact-form-btn' />
              </form>
            </div>
        </div>
        </div>
        )
    }
}

export default contact;