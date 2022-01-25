import React, { useState } from 'react';
import { convertToBase64, getUserInfo, notify } from '../../../helper/comman_helper';
import demoTweet from '../../../assets/images/tweet/demo-tweet-1.jpg'
import Spinner from '../../layouts/Spinner';
import { tweetApi } from '../../../data/api/tweet/tweet';
const TweetArea = (props) => {
    const {effect, setEffect}= props;

    const [error, setError] = useState({});
    const [tweet, setTweet] = useState({});
    const [buttonStatus, setButtonStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setTweet({ ...tweet, [e.target.name]: e.target.value });
    }
    const uploadImages = async (e) => {
        let files = e.target.files;
        let base64Images = [];
        for (let i = 0; i < files.length; i++) {
            const singleBase64Image = await convertToBase64(files[i]);
            base64Images.push(singleBase64Image);
        }
        setTweet({ ...tweet, images: base64Images });
    }
    const isValid = () => {
        let err;
        if (!tweet.tweet && !tweet.images) {
            err = "Tweet Cannot be empty!";
            setError({ tweet: err });
            notify(err, 'error');
            return false;
        } else {
            return true
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            if (isValid()) {

                const response = await tweetApi(tweet, 'post');

                if (response.data.error) {
                    notify(response.data.title, 'error');
                } else {
                    setEffect(!effect)
                    notify(response.data.title, 'success');
                }
            }
        } catch (error) {
            if (error.response.data.error) {
                notify(error.response.data.title, 'error');
            }
        }
        setLoading(false);
    }
    const reset = (e) => {
        e.target.reset();
        setTweet(null);
    }
    return (
        <form className="w-100 ms-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <textarea className="form-control" rows={4} placeholder="What's in your mind?..." name="tweet" onChange={(e) => handleChange(e)} >{tweet.tweet}</textarea>
                {error.tweet && <span className="text-danger">{error.tweet}</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Choose image!</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple onChange={(e) => uploadImages(e)} />
            </div>
            {
                tweet.images?.length > 0 && (
                    <div className='blog-end-column mt-3'>
                        <img className='blog-entry-thumb mb-3' src={tweet.images[0]} alt={'demoTweet'} />
                    </div>
                )
            }
            <button className="btn btn-primary btn-sm" type="submit" disabled={(loading || Object.keys(tweet).length < 1)}>
                {
                    loading ? (<Spinner />) : ('Tweet')
                }
            </button>
            {
                Object.keys(tweet).length > 0 && (
                    <button className="mx-2 btn btn-primary btn-sm" type="reset" onClick={() => reset()}>
                        Reset
                    </button>
                )
            }
        </form>
    );
};

export default TweetArea;