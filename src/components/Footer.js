import React, { Fragment } from 'react';
import { BsFillTelephoneInboundFill, BsFillEnvelopeOpenFill, BsYoutube, BsFacebook, BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';
import {AiFillTwitterCircle } from 'react-icons/ai'

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <footer className='py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img className='me-5' src='images/newsletter.png' alt='' />
                <h3 className='mb-0 text-white'>Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group '>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your Email Account Here'
                  aria-label='Email Here'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text ' id='basic-addon2' >Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h6 className='py-3'>Contact Us</h6>
              <div>
                <address className='text-white fs-8'>
                    House-36, Road-06
                    Naogaon-Rajshahi Road
                    <p>Naogaon Sadar, Naogaon, Bangladesh</p>
                </address>
               <span><BsFillTelephoneInboundFill /> <a className='ms-3 text-white'>+8801710798318</a> <br/></span>
               <span><BsFillEnvelopeOpenFill/><a className='ms-3 text-white'>mranasrj@gmail.com</a></span>
               <div className='social-icon d-flex gap-4 my-4'>
                  <Link className='social-icon-item text-white' to='/'><BsGithub /></Link>
                  <Link className='social-icon-item text-white' to='/'><BsYoutube /></Link>
                  <Link className='social-icon-item text-white' to='/'><BsFacebook /></Link>
                  <Link className='social-icon-item text-white' to='/'><BsTelegram /></Link>
                  <Link className='social-icon-item text-white' to='/'><AiFillTwitterCircle /></Link>
                  <Link className='social-icon-item text-white' to='/'><BsLinkedin /></Link>
               </div>
              </div>
            </div>
            <div className='col-3'>
              <h6 className='py-3'>Informations</h6>
              <div className='footer-link d-flex flex-column'>
                  <Link to='/' className='text-white py-1 mb-1'>Policy</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Reaturn Policy</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Customer Support</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Replace Policy</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Others Policy</Link>
              </div>
            </div>
            <div className='col-3'>
              <h6 className='py-3'>Account</h6>
              <div className='footer-link d-flex flex-column'>
                  <Link to='/' className='text-white py-1 mb-1'>About Us</Link>
                  <Link to='/' className='text-white py-1 mb-1'>FAQ's</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Contacts</Link>
              </div>
            </div>
            <div className='col-2'>
              <h6 className='py-2'>Quick Links</h6>
              <div className='footer-link d-flex flex-column'>
                  <Link to='/' className='text-white py-1 mb-1'>Laptops</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Headphones</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Desktop Computers</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Cameras</Link>
                  <Link to='/' className='text-white py-1 mb-1'>Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-white'>&copy; Copyright {new Date().getFullYear()}; Powered by MR Soft Solutions </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;