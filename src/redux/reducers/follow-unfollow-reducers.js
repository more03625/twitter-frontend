import * as actionTypes from '../action-types/follow-unfollow-action-types';

const initialState = {
    isFollowing: null
}
const followUnfollowReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_IS_FOLLOWING:
            return { ...state, isFollowing: action.payload }
        default:
            return state
    }
}

export default followUnfollowReducers;