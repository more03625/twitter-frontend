import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tweetApi } from '../../../data/api/tweet/tweet';
import { getUserInfo, notify } from '../../../helper/comman_helper';
import Sidebar from '../../layouts/Sidebar';
import Spinner from '../../layouts/Spinner';
import Tweet from '../../layouts/TweetCard/Tweet';

const Content = () => {
    const { userId } = useParams();
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
                size: 10,
                createdBy: userId
            }
            const response = await tweetApi(data, 'get');

            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                setTweets(response.data.data);
                notify(response.data.title, 'success');
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
        <>
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="row pt-5 mt-md-2">
                    <Sidebar />
                    <section className="col-lg-6">

                        {/* Wishlist*/}
                        {/* Item*/}
                        <div className="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom">
                            <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                                <a className="d-block flex-shrink-0 mx-auto me-sm-4" href="#" style={{ width: '10rem' }}>
                                    <img className='border rounded-circle' src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Product" />
                                </a>
                                <div className="pt-2">
                                    <h3 className="product-title fs-base mb-2"><a href="#">Rahul More</a></h3>
                                    <div className="fs-sm"><span className="text-muted me-2">Email:</span>rahulmore@gmail.com</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Total Tweets:</span>50</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Followers:</span>50</div>
                                </div>
                            </div>
                            <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">

                                {
                                    userId === getUserInfo().data._id ? (
                                        <Link to="/update-profile" class="btn btn-outline-primary rounded-pill">Edit profile</Link>
                                    ) : (<button type="button" class="btn btn-outline-primary rounded-pill">Follow</button>)
                                }

                            </div>
                        </div>

                        {loading ? (<Spinner />) : (tweets.length > 0 ? (
                            tweets.map(tweet => (
                                <Tweet key={tweet._id} tweet={tweet} />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center mt-2'>
                                There are no tweets!
                            </div>
                        ))}

                    </section>
                    <Sidebar />
                </div></div>
        </>


    );
};

export default Content;
