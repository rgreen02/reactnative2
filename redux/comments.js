//comments reducer
import * as ActionTypes from './ActionTypes';

export const comments = (state = {
    errMess: null,
    comments: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT: 
            //const newComment = action.payload;
            //return { ...state, errMess: null, comments: state.comments.push(newComment)};
            return { ...state, errMess: null, comments: action.payload };


        default:
            return state;
    }
};