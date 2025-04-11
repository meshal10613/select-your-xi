import React from 'react';
import '../../src/App.css'
import Swal from 'sweetalert2'

const Footer = () => {
    const handleSubBtn = () => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    return (
        <div className='mt-5'>
            <div className='my-element-footer mx-auto w-11/12 md:w-9/12 rounded-3xl flex flex-col items-center justify-center space-y-5 relative top-40 z-10 text-center'>
                <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                <p className='text-xl text-gray-400'>Get the latest updates and news right in your inbox!</p>
                <form action="" className='md:flex md:gap-5 space-y-5'>
                    <input type="email" name="" id="email-1" required
                    placeholder='Enter Your Email' 
                    className='bg-white border-2 border-gray-400 rounded-md w-88 h-10 pl-5'/>
                    <button onClick={() => {handleSubBtn()}} className='btn rounded-md px-5 bg-gradient-to-r from-blue-300 to-orange-200'>Subscribe</button>
                </form>
            </div>
            <div className='bg-black h-full text-white flex flex-col items-center pt-52'>
                <div>
                    <img src="./logo-footer.png" alt="" />
                </div>
                <div className=''>
                    <footer className="footer sm:footer-horizontal text-white p-10 md:gap-96">
                        <nav>
                            <h6 className="footer-title">About Us</h6>
                            <p className='text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Quick Links</h6>
                            <a className="link link-hover text-gray-400">Home</a>
                            <a className="link link-hover text-gray-400">Services</a>
                            <a className="link link-hover text-gray-400">About</a>
                            <a className="link link-hover text-gray-400">Contact</a>
                        </nav>
                        <form>
                            <h6 className="footer-title">Subcribe</h6>
                            <p className='text-gray-400'>Subscribe to our newsletter for the <br /> latest updates.</p>
                            <fieldset className="w-80 rounded-md">
                                <div className="join">
                                    <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                    <button className="join-item btn px-5 bg-gradient-to-r from-blue-300 to-orange-200">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </footer>
                </div>
                <div>
                    <p className='text-gray-400 text-xl'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;