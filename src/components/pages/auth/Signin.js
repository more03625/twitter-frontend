import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Content from '../../sections/auth/signin/Content';
const Signin = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>

    )
};

export default Signin;
