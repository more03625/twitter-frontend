import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from './UserImage';
const Tweet = (props) => {
    const { tweet } = props;

    return (
        <>
            <div className="d-flex align-items-start py-4 p-3 border-bottom">
                <UserImage userImage={tweet?.createdBy.profileImage} />
                <div className="ps-3">
                    <div className="d-flex justify-content-between mb-2">
                        <h6 className="fs-md mb-0"><Link to={`/profile/${tweet.createdBy._id}`}>{tweet.createdBy.name}</Link> <span className="fs-ms text-muted">
                            {new Date(tweet.createdAt).toDateString()}
                        </span>
                        </h6>
                    </div>
                    <p className="fs-md mb-1">
                        {tweet.tweet}
                    </p>
                    {tweet.images.length > 0 ? (
                        <div className='blog-end-column mt-3'>
                            <img className='blog-entry-thumb mb-3' src={tweet.images[0]} alt={'tweeetImg'} />
                        </div>
                    ) : ("")}
                </div>
            </div>
        </>


    );
};

export default Tweet;
