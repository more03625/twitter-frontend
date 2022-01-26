import React, { useEffect, useState } from 'react';
import { tweetApi } from '../../../data/api/tweet/tweet';
import { getUserInfo, notify } from '../../../helper/comman_helper';
import Spinner from '../../layouts/Spinner';
import Tweet from '../../layouts/TweetCard/Tweet';
import Sidebar from '../../layouts/Sidebar';
import UserImage from '../../layouts/TweetCard/UserImage';
import TweetArea from './TweetArea';
import { defaultPageSize } from '../../../helper/constant';
const Content = () => {
    const [tweets, setTweets] = useState([]);
    const [effect, setEffect] = useState(true);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [pageNumber, setPageNumber] = useState(1)
    const getTweets = async () => {
        setLoading(true);
        try {
            let data = {
                page: pageNumber,
                size: defaultPageSize || 35
            }
            const response = await tweetApi(data, 'get');

            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                setTweets(response.data.data);
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }
    useEffect(() => {
        getTweets()
    }, [effect])
    return (
        <div className="container-fluid pb-5 mb-2 mb-md-4">
            <div className="row pt-5 mt-md-2">
                <Sidebar />
                <section className='col-md-6 border'>
                    <div className="card border-0 shadow mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <UserImage userImage={getUserInfo()?.data.profileImage} />
                                <TweetArea effect={effect} setEffect={setEffect} />
                            </div>
                        </div>
                    </div>
                    {loading ? (<Spinner size={'normal'} />) : (
                        tweets.map(tweet => (
                            <Tweet key={tweet._id} tweet={tweet} />
                        )))}
                </section>
                <Sidebar />
            </div>
            <div class="handheld-toolbar">
                <div class="d-table table-layout-fixed w-100">
                    <a class="d-table-cell handheld-toolbar-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#blog-sidebar">
                        <span class="handheld-toolbar-icon">
                            <i class="ci-sign-in"></i>
                        </span>
                        <span class="handheld-toolbar-label">Sidebar</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Content;
