import * as actionTypes from '../action-types/follow-unfollow-action-types';

export const setIsFollowingAction = (data) => {
    return {
        type: actionTypes.SET_IS_FOLLOWING,
        payload: data
    }
}