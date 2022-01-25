import React, { useState, useEffect } from 'react'
import Header from '../layouts/Header'
import PageTitle from '../layouts/PageTitle';
import { useHistory } from 'react-router';
import { Host, Endpoints, getUserInfo, notify, catchError, convertToBase64, webErrors } from '../../helper/comman_helper';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Spinner from '../layouts/Spinner';
import ProfileSidebar from '../sections/update-profile/ProfileSidebar';
import { profileApi } from '../../data/api/Profile/profile';
import Footer from '../layouts/Footer';

const Profile = () => {
    const [error, setError] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState({ loading: false, apiLoading: false });
    const history = useHistory();


    const handleChange = async (e) => {
        if (e.target.name === 'profileImage') {
            let base64Image = await convertToBase64(e.target.files[0]);
            setUserInfo({ ...userInfo, profileImage: base64Image });
            return;
        }

        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
    const isValid = () => {
        let err;
        if (!userInfo.name) {
            err = 'Please enter name';
            setError({ name: err });
            notify(err, 'error')
            return false;
        }
        else if (!userInfo.email) {
            err = 'Please enter email';
            setError({ email: err });
            notify(err, 'error')
            return false;
        }
        else {
            return true
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading({ loading: true });
        try {

            if (isValid()) {

                const { createdAt, updatedAt, ...updateUserObject } = userInfo;
                const response = await profileApi(updateUserObject, 'patch');
                if (response.data.error) {
                    notify(response.data.title, 'error')
                } else {
                    notify(response.data.title, 'success')
                }
            }
        }
        catch (err) {
            notify(webErrors.catchError, 'error')
        }
        setLoading({ loading: false });

    }
    const getUserDetails = async () => {
        setLoading({ apiLoading: true });

        try {
            let data = {
                userId: getUserInfo().data._id
            }
            const response = await profileApi(data, 'get');
            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                setUserInfo(response.data.data);
            }
        } catch (err) {
            notify(webErrors.catchError, 'error');
        }
        setLoading({ apiLoading: false });
    }

    useEffect(() => {
        getUserDetails();
    }, [])
    return (
        <>
            <Header />
            <PageTitle title={'Profile Info'} />
            <Toaster />
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <ProfileSidebar userInfo={userInfo} />
                    <section className="col-lg-8">
                        <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
                            <h6 className="fs-base text-light mb-0">Update you profile details below:</h6><a className="btn btn-primary btn-sm" href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</a>
                        </div>
                        {loading.apiLoading ? (<Spinner size={'normal'} />) : (
                            <form onSubmit={handleSubmit}>
                                <div className="bg-secondary rounded-3 p-4 mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded" src={userInfo?.profileImage} width="90" alt={userInfo?.username} />
                                        <div className="ps-3">
                                            <button className="btn btn-light btn-shadow btn-sm mb-2" type="button" onClick={() => document.getElementById('profile-image').click()}>

                                                <i className="ci-loading me-2"></i>Change avatar
                                            </button>
                                            <input className="d-none" type="file" name="profileImage" id="profile-image" onChange={(e) => handleChange(e)} />
                                            <div className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-4 gy-3">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label required" htmlFor="checkout-fn">Full Name</label>
                                                <input className="form-control" type="text" name="name" onChange={(e) => handleChange(e)} defaultValue={userInfo?.name} />
                                                {error.name && <span className="text-danger">{error.name}</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                            <div className="mb-3">
                                                <label className="form-label required" htmlFor="checkout-email">E-mail Address</label>
                                                <input className="form-control" type="email" name="email" onChange={(e) => handleChange(e)} defaultValue={userInfo?.email} />
                                                {error.email && <span className="text-danger">{error.email}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <hr className="mt-2 mb-3" />
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <button className="btn btn-primary mt-3 mt-sm-0" type="submit" disabled={loading.loading}>
                                                {loading.loading ? <Spinner size="normal" /> : 'Update profile'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                    </section>
                </div>
            </div>
        </>
    )
}

export default Profile
