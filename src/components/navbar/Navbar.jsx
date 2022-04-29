import React, { useEffect } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/favicon.ico';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    const navigate = useNavigate();

    const homeIconClass = window.location.href.split('/').pop() === '#home' ? 'active' : '';
    const stakingIconClass = window.location.href.split('/').pop() === 'staking' ? 'active' : '';
    const faqIconClass = window.location.href.split('/').pop() === '#faq' ? 'active' : '';
    const teamIconClass = window.location.href.split('/').pop() === '#team' ? 'active' : '';
    const roadmapIconClass = window.location.href.split('/').pop() === '#roadmap' ? 'active' : '';

    useEffect(() => {
        const burger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar-flex');

        if (document.readyState === 'complete') {
            burger?.addEventListener('click', () => {
                burger.classList?.toggle('toggle');
                navbar.classList?.toggle('navbar-mobile-flex');
            });
        }
    }, []);

    const closeMobileNav = () => {
        const burger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar-flex');

        burger.classList.remove('toggle');
        navbar.classList.remove('navbar-mobile-flex');
    };

    return (
        <nav className="navbar-flex">
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul onClick={closeMobileNav}>
                <li className={homeIconClass}>
                    <a href="/#home">Home</a>
                </li>
                <li className={teamIconClass}>
                    <a href="/#team">Team</a>
                </li>
                <li className={roadmapIconClass}>
                    <a href="/#roadmap">Roadmap</a>
                </li>
                <li className={faqIconClass}>
                    <a href="/#faq">FAQ</a>
                </li>
                <li className={stakingIconClass}>
                    <a onClick={() => navigate('/staking')}>Staking</a>
                </li>
            </ul>

            <div className="social-nav-icons">
                <i>
                    <a href="https://twitter.com/SoulZ_NFT" target="_blank" rel="noreferrer">
                        <FaTwitter size={23} />
                    </a>
                </i>
                <i>
                    <a href="https://www.instagram.com/accounts/login/?next=/soulz_nft/" target="_blank" rel="noreferrer">
                        <FaInstagram size={23} />
                    </a>
                </i>
            </div>

            <div className="hamburger">
                <div className="stroke-1" />
                <div className="stroke-2" />
                <div className="stroke-3" />
            </div>
        </nav>
    );
};

export default Navbar;
