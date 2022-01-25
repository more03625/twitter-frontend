import React from 'react'
import { Toaster } from 'react-hot-toast'
import lightLogo from '../../assets/images/logo/Twitter-logo-footer.png'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pt-5">
                <Toaster />
                <div className="container pt-2 pb-3">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-4">
                            <div className="text-nowrap mb-3"><a className="d-inline-block align-middle mt-n2 me-2" href="#">
                                <img className="d-block" src={lightLogo} width="117" alt="Cartzilla" /></a><span className="d-inline-block align-middle h5 fw-light text-white mb-0">Marketplace</span></div>

                            <h6 className="d-inline-block pe-3 me-3 border-end border-light"><span className="text-primary">65,478 </span><span className="fw-normal text-white">Products</span></h6>
                         
                        </div>
                    </div>
                </div>
            </footer>
            <div className="handheld-toolbar">
                <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="#">
                    <span className="handheld-toolbar-icon"><i className="ci-heart"></i></span>
                    <span className="handheld-toolbar-label">Favorites</span>
                </a>
                    <a className="d-table-cell handheld-toolbar-item" href="#" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={window.scrollTo(0, 0)}>
                        <span className="handheld-toolbar-icon">
                            <i className="ci-menu"></i></span>
                        <span className="handheld-toolbar-label">Menu</span></a>
                    <a className="d-table-cell handheld-toolbar-item" href="marketplace-cart.html">
                        <span className="handheld-toolbar-icon">
                            <i className="ci-cart"></i>
                            <span className="badge bg-primary rounded-pill ms-1">3</span>
                        </span>
                        <span className="handheld-toolbar-label">$56.00</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
