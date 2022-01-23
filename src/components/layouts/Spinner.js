import React from 'react';

const Spinner = (props) => {
    const { size } = props;
    return (
        <>
            {
                size === 'normal' && (<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)
            }
            {
                size === 'small' && (
                    <div class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {
                size === 'large' && (
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )
            }
        </>
    );
};

export default Spinner;
