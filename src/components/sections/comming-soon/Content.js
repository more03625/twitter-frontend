import React from 'react';
import Sidebar from '../../layouts/Sidebar';
const Content = () => {
    return (


        <div className="container-fluid pb-5 mb-2 mb-md-4">
            <div className="row pt-5 mt-md-2">
                <Sidebar />

                <section className='col-md-6 border'>
                    <div className='d-flex justify-content-center mt-2'>
                        <span>Comming Soon</span>
                    </div>
                </section>

                <Sidebar />
            </div>
        </div>

    );
};

export default Content;
