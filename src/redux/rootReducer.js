import {combineReducers} from 'redux';

import followUnfollowReducers from "./reducers/follow-unfollow-reducers"
const rootReducer = combineReducers({
    isFollowing:followUnfollowReducers
});

export default rootReducer;
