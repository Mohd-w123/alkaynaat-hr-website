import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { useState } from "react";

import Toggle from "../component/Toggle/Toggle";

const BlogDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const [isDark, setIsDark] = useState(true);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Blog Details' />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title">Posted Workers Directive: <br/> A1 Requirements Employers Need to Know</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />May 18, 2020</li>
                                    <li><FiUser />NipaBali</li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="section-title">
                                    
                                    <p className="mt--40">Organizations with operations in the EU need to adjust to a new directive that has been transposed into legislation. Under the recent EU Transparent and Predictable Working Directive, UK-based employers operating in the EU must prepare in advance when sending an employee out to work in one of its Member States. This also covers employees who currently function in an operational role within one of these countries.

As far as social security is concerned, the insurability of posted workers is controlled by Regulation (EC) No 883/2004, a regulation that provides a legal framework for employers. Essentially, it determines which Member States a posted worker can be insured in, as well as other conditions that must be satisfied for the person to remain covered by the country’s social security legislation. It also minimizes the risks of social security contributions fraud due to this formality.

The EU’s recently adopted Directive on Transparent and Predictable Working Conditions requires each worker to be informed of any essential aspects of their employment, including project work and changes to working conditions, well in advance. This includes a requirement for employers to provide information to workers sent to a different Member State before their departure to their intended destination.</p>
                                   
                              
                                    <h2 className="mt--25 mt_sm--5">What is a posted worker?</h2>
                                    <p className="mt--25 mt_sm--5">A posted worker is a UK-based employee sent out to an EU Member State, or between multiple Member States, such as France or Italy, on a temporary basis. Typically, they will carry out a service on behalf of their organization during this time.</p>

                                    <h2 className="mt--25 mt_sm--5">What is an A1 certificate?</h2>
                                    <p className="mt--25 mt_sm--5">An A1 certificate confirms which of a country or Member State’s social security laws apply to employees temporarily working in another EEA member country. They also ensure that posted workers only remain subject to social security in their home country. UK employees must hold a relevant A1 certificate to conduct business overseas, especially if it lasts more than eight days. The A1 form is also designed to provide security, minimizing the number of fraud cases relating to social security contributions.</p>

                                    <h2 className="mt--25 mt_sm--5">Do I need an A1 certificate for every trip?</h2>
                                    <p className="mt--25 mt_sm--5">Yes, unless you’re visiting the EU for short trips amounting to less than eight days. A1 certificates are usually valid for up to two years or the duration of the business trip, depending on the issuing state. If an employee will be traveling to member states on a regular basis, employers can apply for A1 certificates valid for up to two years.</p>

                                   


                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details */}

            {/* Start BLog Comment Form  */}
            <div className="blog-comment-form pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="rnform-group">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="rnform-group">
                                                <input type="text" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group">
                                                <textarea type="text" placeholder="Comment"></textarea>
                                            </div>

                                        </div>
                                        <div className="col-lg-12">
                                            <div className="blog-btn">
                                                {/* <a className="rn-button-style--2 btn-solid" href="#"></a> */}
                                                <Link className="rn-button-style--2 btn-solid" to="/blog-details"><span>SEND MESSAGE</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End BLog Comment Form  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

            <div className="toggle-button">

<Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

</div>

        </div>
    );

}
export default BlogDetails;
