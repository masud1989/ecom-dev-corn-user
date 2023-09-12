import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <Fragment>
            <header className='header-top-strip p-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-start text-white mb-0'>Free Shipping and free Return</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='+880-1710798318'>+880-1710798318</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-2'>
                <div className='container'>
                    <div className='row mt-2'>
                        <div className='col-2'>
                            <h2 className=''><Link to='/' className='text-white' >Digi-Com</Link></h2>
                        </div>
                        <div className='col-5'>
                            <div className='input-group '>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Search Product Here..'
                                    aria-label='Search Product Here..'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text py-1' id='basic-addon2' ><BsSearch /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-center justify-between text-white'>
                                <div>
                                    <Link className='d-flex align-center justify-content-between ms-5' to='/'>
                                        <img className='me-2' src='images/compare.svg' alt='compare' />
                                        <p className='text-white mb-0'>Compare <br /> Product</p>
                                    </Link>
                                </div>
                                <div >
                                    <Link className='d-flex justify-content-center justify-content-between ms-5' to='/'>
                                        <img className='me-2' src='images/wishlist.svg' alt='wishlist' />
                                        <p className='text-white mb-0'>Wish <br /> List</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex justify-content-center justify-content-between ms-5' to='/'>
                                        <img className='me-2' src='images/user.svg' alt='user' />
                                        <p className='text-white mb-0'>Login <br /> Profile</p>
                                    </Link>
                                </div>
                                <div className='ms-5'>
                                    <Link className='d-flex align-items-center gap-10 text-white  ' to='/'>
                                        <img className='me-2' src='images/cart.svg' alt='user' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-light text-dark'>0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center'>
                                <div>
                                    <div className='dropdown'>
                                        <button
                                            className='btn btn-secondary dropdown-toggle bg-transparent border-0 '
                                            type='button'
                                            id='dropDownMenuButton1'
                                            data-bs-toggle='dropdown'
                                            aria-expanded='false'
                                        >
                                            <img className='me-2' src='images/menu.svg' alt='' />
                                            <span className='me-5 d-online-block'>Shop Categories</span>
                                        </button>
                                        <ul className='dropdown-menu' area-aria-labelledby='dropDownMenuButton1'>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-1</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-2</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-3</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-4</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-5</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-5</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-5</a>
                                            </li>
                                            <li>
                                                <a className='dropdown-item' href='#'>Category-5</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='ms-5 menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/shop'>Shop</NavLink>
                                        <NavLink to='/categories'>Categories</NavLink>
                                        <NavLink to='/about'>About</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;