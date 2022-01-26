import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInApi } from '../../../../data/api/auth/auth';
import { defaultCredentials, EMAIL_REGEX, notify, webErrors } from '../../../../helper/comman_helper';
import { twitterTokenName } from '../../../../helper/constant';
import Spinner from '../../../layouts/Spinner';

const Content = () => {
    const [userInfo, setUserInfo] = useState({ email: defaultCredentials.email, password: defaultCredentials.password });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    const isValid = () => {
        let err;
        if (!userInfo.email || !EMAIL_REGEX(userInfo.email)) {
            err = webErrors.validEmailError;
            setError({ email: err });
            return false;
        } else if (!userInfo.password) {
            err = "Please enter your password";
            setError({ password: err });
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            if (isValid()) {
                setError({});

                const response = await signInApi(userInfo, 'post');

                if (response.data.error) {
                    notify(response.data.title, 'error');
                } else {
                    notify(response.data.title, 'success');
                    localStorage.setItem(twitterTokenName, JSON.stringify(response.data))
                    setTimeout(function () {
                        history.push("/");
                    }, 2000);
                }
            }
        } catch (error) {
            if (error.response.data.error) {
                notify(error.response.data.title, 'error');
            }
        }
        setLoading(false)
    }

    return (
        <div className="container py-4 py-lg-5 my-4">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="h4 mb-1 mb-3">Sign in</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="col-lg-12 mb-3">
                                    <div className="input-group">
                                        <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                                        <input className="form-control rounded-start" type="text" placeholder="Pleaes enter your email!" onChange={(e) => handleChange(e)} name="email" defaultValue={userInfo.email} />
                                    </div>
                                    {error.email && <span className="text-danger">{error.email}</span>}
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <div className="input-group">
                                        <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                                        <input className="form-control rounded-start" type="password" placeholder="Pleaes enter your password!" onChange={(e) => handleChange(e)} name="password" defaultValue={userInfo.password} />
                                    </div>
                                    {error.password && <span className="text-danger">{error.password}</span>}
                                </div>

                                <div className="text-end pt-4">
                                    <button className="btn btn-primary" type="submit" disabled={loading}>
                                        <i className="ci-sign-in me-2 ms-n21" />
                                        {loading ? (<Spinner size={'small'} />) : ('Sign In')}
                                    </button>
                                </div>
                            </form>
                            <div className="d-flex flex-wrap justify-content-center mt-3">
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
