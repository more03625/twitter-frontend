import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tweetApi } from '../../../data/api/tweet/tweet';
import { notify, webErrors } from '../../../helper/comman_helper';
import Sidebar from '../../layouts/Sidebar';
import Spinner from '../../layouts/Spinner';
import Tweet from '../../layouts/TweetCard/Tweet';
import { isFollowingApi } from '../../../data/api/follow/follow';
import UserBioCard from '../../layouts/profile/UserBioCard';
import { setIsFollowingAction } from '../../../redux/actions/follow-unfollow-actions';
import { useDispatch } from 'react-redux';
import { defaultPageSize } from '../../../helper/constant';

const Content = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const [tweets, setTweets] = useState([]);
    const [effect, setEffect] = useState(true);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [pageNumber, setPageNumber] = useState(1);

    const isFollowing = async () => {
        try {
            let isIamFollowing = {
                following: userId
            }
            const response = await isFollowingApi(isIamFollowing, 'post');

            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                dispatch(setIsFollowingAction(response.data.isFollowing))
            }
        } catch (err) {
            notify(webErrors.catchError, 'error');
        }
    }

    const getTweets = async () => {
        setLoading(true);
        try {
            let data = {
                page: pageNumber,
                size: defaultPageSize || 35,
                createdBy: userId
            }
            const response = await tweetApi(data, 'get');

            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                setTweets(response.data.data);
            }
        } catch (err) {
            notify(webErrors.catchError, 'error');
        }
        setLoading(false);
    }

    useEffect(() => {
        isFollowing();
    }, [])
    useEffect(() => {
        getTweets();
    }, [effect])
    return (
        <>
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="row pt-5 mt-md-2">
                    <Sidebar />
                    <section className="col-lg-6">

                        {/* Wishlist*/}
                        {/* Item*/}
                        <UserBioCard
                            userId={userId}
                            userInfo={tweets}
                        />

                        {loading ? (<Spinner size={'small'} />) : (tweets?.length > 0 ? (
                            tweets.map(tweet => (
                                <Tweet key={tweet._id} tweet={tweet} />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center mt-2'>
                                There are no tweets!
                            </div>
                        ))}
                        {tweets.length > 0 ? ("") : ("")}

                    </section>
                    <Sidebar />
                </div>
            </div>
        </>


    );
};

export default Content;
