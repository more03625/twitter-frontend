import React from 'react';
import { Link } from 'react-router-dom';
const Content = () => {
  return (
    <div className="container py-4 py-lg-5 my-4">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <h2 className="h4 mb-1 mb-3">Sign in</h2>

                    <form className="needs-validation" noValidate>
                        <div className="input-group mb-3"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                            <input className="form-control rounded-start" type="email" placeholder="Email" required />
                        </div>
                        <div className="input-group mb-3"><i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                            <div className="password-toggle w-100">
                                <input className="form-control" type="password" placeholder="Password" required />
                                <label className="password-toggle-btn" aria-label="Show/hide password">
                                    <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
                                </label>
                            </div>
                        </div>

                        <div className="text-end pt-4">
                            <button className="btn btn-primary" type="submit"><i className="ci-sign-in me-2 ms-n21" />Sign In</button>
                        </div>
                    </form>
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className='fs-sm'>Don't have an account?</p> <Link className='fs-sm' to="/signup">&nbsp; Signup here</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  );
};

export default Content;
