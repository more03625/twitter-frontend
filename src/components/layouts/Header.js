import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/twitter-logo.png'
const Header = () => {
    return (
        <>
            <main className="page-wrapper">
                <header className="shadow-sm">
                    <div className="topbar topbar-dark bg-dark">
                        <div className="container">
                            <div className="topbar-text dropdown d-md-none"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="tel:00331697720"><i className="ci-support text-muted me-2"></i>(00) 33 169 7720</a></li>
                                    <li><a className="dropdown-item" href="order-tracking.html"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
                                </ul>
                            </div>
                            <div className="topbar-text text-nowrap d-none d-md-inline-block"><i className="ci-support"></i><span className="text-muted me-1">Support</span><a className="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
                            <div className="tns-carousel tns-controls-static d-none d-md-block">
                                <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}">
                                    <div className="topbar-text">Free shipping for order over $200</div>
                                    <div className="topbar-text">We return money within 30 days</div>
                                    <div className="topbar-text">Friendly 24/7 customer support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-sticky bg-light navbar-stuck">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand d-none d-sm-block flex-shrink-0" to="/">
                                    <img src={logo} width="142" alt="Cartzilla" /></Link>
                                <Link className="navbar-brand d-sm-none flex-shrink-0 me-2" to="/">
                                    <img src="img/logo-icon.png" width="74" alt="Cartzilla" />
                                </Link>
                                <div className="input-group d-none d-lg-flex mx-4">
                                    {/* <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" /><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i> */}
                                </div>
                                <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        {/* <span className="navbar-toggler-icon"></span> */}
                                    </button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                        <div className="navbar-tool-icon-box">
                                            <i className="navbar-tool-icon ci-menu"></i></div></a>


                                    <Link className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" to="signin">
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                        <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </main>
        </>
    )
}

export default Header