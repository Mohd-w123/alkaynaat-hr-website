import React, { Component, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { Background } from "react-parallax";
import Breadcrumb from "./common/Breadcrumb";

import Toggle from "../component/Toggle/Toggle";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };

    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>

            <PageHelmet pageTitle='Contact' />

            {/* Start Breadcrump Aresa */}
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />

            {/* <div className="rn-page-title-area pt--120 pb--190" data-black-overlay="0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Partner With Us</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Breadcrumb title={'For Client'} />
            {/* End Breadcrump Area */}


            {/* Start Contact Top Area  */}

            {/* End Contact Top Area  */}

            {/* Start Contact Page Area  */}
            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactTwo targetValue='client' />
            </div>
            {/* End Contact Page Area  */}






            {/* Start Brand Area */}
            <div className="rn-brand-area brand-separation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Brand Area */}

            <div className="rn-contact-top-area ptb--120 bg_color--5">
                <div className="container">

                    <div className="row">
                        {/* Start Single Address  */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rn-address">
                                <div className="icon">
                                    <FiHeadphones />
                                </div>
                                <div className="inner">
                                    <h4 className="title">Contact With Phone Number</h4>
                                    <p><a href="tel:+057 254 365 456">Mobile: +1 240 799 2086</a></p>
                                    <p><a href="tel:+057 254 365 456">Landline: +971-04-313-2481 </a></p>

                                </div>
                            </div>
                        </div>
                        {/* End Single Address  */}

                        {/* Start Single Address  */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                            <div className="rn-address">
                                <div className="icon">
                                    <FiMail />
                                </div>
                                <div className="inner">
                                    <h4 className="title">Email Address</h4>
                                    <p><a href="info@alcaenat.ae">info@alcaenat.ae</a></p>
                                    <p><a href="support@alcaenat.ae">support@alcaenat.ae</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Address  */}

                        {/* Start Single Address  */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                            <div className="rn-address">
                                <div className="icon">
                                    <FiMapPin />
                                </div>
                                <div className="inner">
                                    <h4 className="title">Location</h4>
                                    <p>Address: SCB, Level 5, Downtown, Burj Khalifa, Dubai. </p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Address  */}

                    </div>
                </div>
            </div>




            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}


            <div className="toggle-button">

                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

            </div>

            <Footer />

        </div>
    )
}

export default Contact