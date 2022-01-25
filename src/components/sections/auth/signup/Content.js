import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUpApi } from '../../../../data/api/auth/auth';
import { EMAIL_REGEX, notify, webErrors } from '../../../../helper/comman_helper';
import Spinner from '../../../layouts/Spinner';

const Content = () => {
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const isValid = () => {
        let err;
        if (!userInfo.name) {
            err = "Please enter your name";
            setError({ name: err });
            return false;
        } else if (!userInfo.email || !EMAIL_REGEX(userInfo.email)) {
            err = webErrors.validEmailError;
            setError({ email: err });
            return false;
        } else if (!userInfo.password) {
            err = "Please enter your password";
            setError({ password: err });
            return false;
        } else if (!userInfo.confirmPassword) {
            err = "Please confirm your password";
            setError({ confirmPassword: err });
            return false;
        } else if (userInfo.confirmPassword !== userInfo.password) {
            err = "Confirm password mismatch!";
            setError({ confirmPassword: err });
            return false;
        }
        else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if (isValid()) {
                const response = await signUpApi(userInfo, 'post');

                if (response.data.error) {
                    notify(response.data.title, 'error');
                } else {
                    setTimeout(function () {
                        history.push("/signin");
                    }, 2000);
                    notify(response.data.title, 'success');
                }
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }
    return (
        <div className="container py-4 py-lg-5 my-4">
            <div className="d-flex justify-content-center row">

                <div className="col-md-6 pt-4 mt-3 mt-md-0">
                    <h2 className="h4 mb-3">No account? Sign up</h2>
                    <p className="fs-sm text-muted mb-4">Registration takes less than a minute but gives you full control over your twitter.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row gx-4 gy-3">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-fn">Name</label>
                                <input className="form-control" type="text" name="name" onChange={(e) => handleChange(e)} />
                                {error.name && <span className="text-danger">{error.name}</span>}
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-email">E-mail Address</label>
                                <input className="form-control" type="email" name="email" onChange={(e) => handleChange(e)} />
                                {error.email && <span className="text-danger">{error.email}</span>}
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-password">Password</label>
                                <input className="form-control" type="password" name="password" onChange={(e) => handleChange(e)} />
                                {error.password && <span className="text-danger">{error.password}</span>}
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-password-confirm">Confirm Password</label>
                                <input className="form-control" type="password" name="confirmPassword" onChange={(e) => handleChange(e)} />
                                {error.confirmPassword && <span className="text-danger">{error.confirmPassword}</span>}
                            </div>

                            <div className="col-12 text-end">
                                <button className="btn btn-primary" type="submit" disabled={loading}>
                                    <i className="ci-user me-2 ms-n1" />
                                    {loading ? (<Spinner size={'small'}/>) : ('Sign Up')}
                                </button>
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
