import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

const Footer = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <footer className="footer-area">
                <div className="footer-wrapper">
                    <div className="row align-items-end row--0">
                        <div className="col-lg-6">
                            <div className="footer-left">
                                <div className="inner">
                                    <span>{t('ready_to_do_this')}</span>
                                    <h2>{t('lets_get_to_work')}</h2>
                                    <a className="rn-button-style--2" href="/contact">
                                        <span>{t('contact_us')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-right" data-black-overlay="6">
                                <div className="row">
                                    {/* Start Single Widget  */}
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="footer-link">
                                            <h4>{t('contact_us')}</h4>
                                            <ul className="ft-link">
                                                <li><a href="/">{t('home')}</a></li>
                                                <li><a href="/about">{t('about')}</a></li>
                                                <li><a href="/service">{t('services')}</a></li>
                                                <li><a href="/blog">{t('blog')}</a></li>
                                                <li><a href="/contact">{t('contact')}</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <div className="footer-link">
                                           <h4>{t('our_services')}</h4>
                                            <ul className="ft-link">
                                                <li><a href="/hr-services">{t('hr_services')}</a></li>
                                                <li><a href="/hr-consulting">{t('hr_consulting')}</a></li>
                                                <li><a href="/hr-third-party">{t('hr_third_party_payroll_services')}</a></li>
                                                <li><a href="/business-consulting">{t('business_consulting')}</a></li>
                                                <li><a href="/employee-training">{t('employment_training_and_development')}</a></li>
                    
                                                <li><a href="/hr-compliance">{t('hr_compilance_and_legal_support')}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Widget  */}

                                    <div className="col-lg-12">
                                        <div className="copyright-text">
                                            <p>{t('copyright')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
