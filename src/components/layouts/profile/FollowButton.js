import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { followApi } from '../../../data/api/follow/follow';
import { getUserInfo, notify, webErrors } from '../../../helper/comman_helper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsFollowingAction } from '../../../redux/actions/follow-unfollow-actions';
import Spinner from '../Spinner';

const FollowButton = (props) => {
    const { userId } = props;
    const reduxState = useSelector(state => state.isFollowing);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const followUnfollow = async (e) => {
        setLoading(true)
        try {
            let usersData = {
                following: userId
            }
            const response = await followApi(usersData, 'post');

            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                dispatch(setIsFollowingAction(response.data.title === 'Unfollowed' ? (false) : (true)))
                notify(response.data.title, 'success');
            }
        } catch (err) {
            notify(webErrors.catchError, 'error');
        }
        setLoading(false)
    }
    return (
        userId === getUserInfo().data._id ? (
            <Link to="/update-profile" className="btn btn-outline-primary rounded-pill">Edit profile</Link>
        ) : (<button type="button" className="btn btn-outline-primary rounded-pill" onClick={() => followUnfollow()}>
            {loading ? (<Spinner size={'small'} />) : (reduxState.isFollowing ? "Following" : "Follow")}
        </button>)
    )
}

export default FollowButton;
