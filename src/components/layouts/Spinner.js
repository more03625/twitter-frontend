import React from 'react';

const Spinner = (props) => {
    const { size } = props;
    return (
        <>
            {
                size === 'normal' && (
                    <div className='d-flex justify-content-center mt-2'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                size === 'small' && (
                    <div className='d-flex justify-content-center mt-2'>
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                size === 'large' && (
                    <div className='d-flex justify-content-center mt-2'>
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Spinner;
