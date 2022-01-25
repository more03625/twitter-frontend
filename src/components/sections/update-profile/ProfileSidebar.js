import React from 'react'
import { Link } from 'react-router-dom';
import UserImage from '../../layouts/TweetCard/UserImage';

const ProfileSidebar = (props) => {
    const { userInfo } = props;
    return (
        <>
            <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
                <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                    <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                        <div className="d-md-flex align-items-center">
                            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" style={{ width: "3.375rem" }}>
                                <UserImage userImage={userInfo?.profileImage} />
                            </div>
                            <div className="ps-md-3">
                                <h3 className="fs-base mb-0">{userInfo?.name}</h3><span className="text-accent fs-sm">{userInfo?.email}</span>
                            </div>
                        </div><a className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i>Account menu</a>
                    </div>
                    <div className="d-lg-block collapse" id="account-menu">
                        <div className="bg-secondary px-4 py-3">
                            <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                        </div>
                        <ul className="list-unstyled mb-0">
                            <li className="border-bottom mb-0">
                                <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/update-profile">
                                    <i className="ci-user opacity-60 me-2"></i>Profile info
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default ProfileSidebar
