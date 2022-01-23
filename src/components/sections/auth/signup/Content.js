import React from 'react';
import { Link } from 'react-router-dom';
const Content = () => {
    return (
        <div className="container py-4 py-lg-5 my-4">
            <div className="d-flex justify-content-center row">

                <div className="col-md-6 pt-4 mt-3 mt-md-0">
                    <h2 className="h4 mb-3">No account? Sign up</h2>
                    <p className="fs-sm text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
                    <form className="needs-validation" noValidate>
                        <div className="row gx-4 gy-3">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-fn">Name</label>
                                <input className="form-control" type="text" required id="reg-fn" />
                                <div className="invalid-feedback">Please enter your first name!</div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-email">E-mail Address</label>
                                <input className="form-control" type="email" required id="reg-email" />
                                <div className="invalid-feedback">Please enter valid email address!</div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-password">Password</label>
                                <input className="form-control" type="password" required id="reg-password" />
                                <div className="invalid-feedback">Please enter password!</div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-password-confirm">Confirm Password</label>
                                <input className="form-control" type="password" required id="reg-password-confirm" />
                                <div className="invalid-feedback">Passwords do not match!</div>
                            </div>

                            <div className="col-12 text-end">
                                <button className="btn btn-primary" type="submit"><i className="ci-user me-2 ms-n1" />Sign Up</button>
                            </div>

                        </div>
                    </form>
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className='fs-sm'>Already have an account?</p> <Link className='fs-sm' to="/signin">&nbsp; Signin here</Link>
                    </div>
                    <hr className="mt-4" />
                </div>

            </div>
        </div>
    );
};

export default Content;
