import React from 'react';
import UserImage from '../TweetCard/UserImage';
import FollowButton from './FollowButton';

const UserBioCard = (props) => {
    const { userId, userInfo } = props;

    return (
        <div className="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom">
            <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                <a className="d-block flex-shrink-0 mx-auto me-sm-4" href="#" style={{ width: '10rem' }}>

                    <UserImage userImage={userInfo && userInfo[0]?.createdBy.profileImage} />

                </a>
                <div className="pt-2">
                    <h3 className="product-title fs-base mb-2">
                        <span>{userInfo && userInfo[0]?.createdBy.name}</span>
                    </h3>
                </div>
            </div>
            <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
               <FollowButton 
                userId={userId}
               />
            </div>
        </div>
    );
};

export default UserBioCard;
