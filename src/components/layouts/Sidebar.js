import React from 'react';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="col-lg-3">
            {/* Sidebar*/}
            <div className="fixed offcanvas offcanvas-collapse offcanvas-end border-start border-end ms-lg-auto" id="blog-sidebar" style={{ maxWidth: '22rem' }}>
                <div className="offcanvas-header align-items-center shadow-sm">
                    <h2 className="h5 mb-0">Sidebar</h2>
                    <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="d-lg-block collapse" id="account-menu">
                    <div className="bg-secondary px-4 py-3">
                        <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                    </div>
                    <ul className="list-unstyled mb-0">

                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/">
                                <CottageOutlinedIcon />&nbsp; Home
                            </Link>
                        </li>
                       
                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/comming-soon">
                                <TagOutlinedIcon />&nbsp; Explore
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/comming-soon">
                                <NotificationsOutlinedIcon />&nbsp; Notifications
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/comming-soon">
                                <MailOutlineOutlinedIcon />&nbsp; Messages
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/comming-soon">
                                <BookmarkBorderOutlinedIcon />&nbsp; Bookmark
                            </Link>
                        </li>
                        <li className="border-bottom mb-0">
                            <Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/update-profile">
                                <PersonIcon />&nbsp; Profile
                            </Link>
                        </li>



                    </ul>


                </div>


            </div>
        </aside>
    );
};

export default Sidebar;
