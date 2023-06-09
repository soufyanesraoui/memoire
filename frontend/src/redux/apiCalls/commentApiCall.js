import{ postActions } from '../slices/postSlice';
import request from '../../utils/request';
import { toast } from 'react-toastify';
import { commentActions } from '../slices/CommentSlice';

//Create Comment
export function createComment(newComment){
    return async (dispatch, getState)=>{
        try {
           const {data}=await request.post("/api/comments", newComment , {
            headers : {
                Authorization : "Bearer " + getState().auth.user.token
            }
           });
            dispatch(postActions.addCommentToPost(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

//update Comment
export function updateComment(commentId , comment){
    return async (dispatch, getState)=>{
        try {
           const {data}=await request.put(`/api/comments/${commentId}`, comment , {
            headers : {
                Authorization : "Bearer " + getState().auth.user.token
            }
           });
            dispatch(postActions.updateCommentPost(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

//delete Comment
export function deleteComment(commentId){
    return async (dispatch, getState)=>{
        try {
           await request.delete(`/api/comments/${commentId}` , {
            headers : {
                Authorization : "Bearer " + getState().auth.user.token
            }
           });
            dispatch(commentActions.deleteComments(commentId));
            dispatch(postActions.deleteCommentFromPost(commentId));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

//fetch all Comment
export function fetchAllComments(commentId){
    return async (dispatch, getState)=>{
        try {
          const {data} = await request.get(`/api/comments` , {
            headers : {
                Authorization : "Bearer " + getState().auth.user.token
            }
           });
            dispatch(commentActions.setComments(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}