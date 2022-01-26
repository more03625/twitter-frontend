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
                <div className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar data-simplebar-auto-hide="true">
                    {/* Categories*/}
                    <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                        {/* <h3 className="widget-title">Blog categories</h3> */}
                        <ul className="widget-list">
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3 active" to="/">
                                    <CottageOutlinedIcon />&nbsp; Home
                                </Link>
                            </li>
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3 active" to="/update-profile">
                                    <PersonIcon />&nbsp; Profile
                                </Link>
                            </li>
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3" to="/comming-soon">
                                    <TagOutlinedIcon />&nbsp; Explore
                                </Link>
                            </li>
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3" to="/comming-soon">
                                    <NotificationsOutlinedIcon />&nbsp; Notifications
                                </Link>
                            </li>
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3" to="/comming-soon">
                                    <MailOutlineOutlinedIcon />&nbsp; Messages
                                </Link>
                            </li>
                            <li className="widget-list-item border-bottom mb-0">
                                <Link className="widget-list-link nav-link-style d-flex align-items-center px-4 py-3" to="/comming-soon">
                                    <BookmarkBorderOutlinedIcon />&nbsp; Bookmark
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
