import React, { Component, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import BrandTwo from "../elements/BrandTwo";
import ContactFour from "./contact/ContactFour";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { Background } from "react-parallax";

import Toggle from "../component/Toggle/Toggle";
import { useTranslation } from 'react-i18next';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const MainContact = () => {

    const { t } = useTranslation();

    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>

            <PageHelmet pageTitle='Contact' />

            {/* Start Breadcrump Aresa */}
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-dark" />

     



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
                                    <h4 className="title title1">{t('contact_num')}</h4>
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
                                    <h4 className="title title1">{t('email_add')}</h4>
                                    <p><a href="mailto:info@alcaenat.ae">info@alcaenat.ae</a></p>
                                    <p><a href="mailto:support@alcaenat.ae">support@alcaenat.ae</a></p>
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
                                    <h4 className="title title1">{t('location')}</h4>

                                    <p><a href="https://maps.app.goo.gl/h838hfMdJAc6NcHy6" target="_blank">Address: SCB, Level 5, Downtown, Burj Khalifa, Dubai.</a> </p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Address  */}

                    </div>
                </div>
            </div>

            
            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactFour />
            </div>

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

export default MainContact;