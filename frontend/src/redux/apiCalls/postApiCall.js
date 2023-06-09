import { postActions } from '../slices/postSlice'
import request from '../../utils/request'
import { toast } from 'react-toastify'

//fetch posts based on page number
export function fetchPosts (pageNumber) {
    return async dispatch => {
            try {
            const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`)
            dispatch(postActions.setPosts(data))
            } catch (error) {
            toast.error(error.response?.data.message)
            }
    }
}
//get posts count
export function getPostsCount (pageNumber) {
    return async dispatch => {
            try {
            const { data } = await request.get(`/api/posts/count`)
            dispatch(postActions.setPostsCount(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}
//fetch posts based on Category
export function fetchPostsBasedOnCategory (category) {
    return async dispatch => {
            try {
            const { data } = await request.get(`/api/posts?category=${category}`)
            dispatch(postActions.setPostsCate(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}

//create post
export function createPost (newPost) {
    return async (dispatch ,getState ) => {
            try {
                dispatch (postActions.setLoading())
            await request.post(`/api/posts`,newPost, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-type": "multipart/form-data"
                }
            })
            dispatch(postActions.setIsPostCreated())
            // setTimeout(()=>dispatch(postActions.clearIsPostCreated()),2000)
            } catch (error) {
            toast.error(error.response.data.message)
            dispatch(postActions.clearLoading())
            }
    }
}

//fetch single post
export function fetchSinglePost(postId) {
    return async dispatch => {
            try {
            const { data } = await request.get(`/api/posts/${postId}`)
            dispatch(postActions.setPost(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}
//toggle like post
export function toggleLikePost(postId) {
    return async( dispatch, getState) => {
            try {
            const { data } = await request.put(`/api/posts/like/${postId}`, {}, {
                headers : {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(postActions.setLike(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}
//update post Image
export function updatePostImage(newImage,postId) {
    return async( dispatch, getState) => {
            try {
            await request
            .put(`/api/posts/update-image/${postId}`, newImage, {
                headers : {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-type": "multipart/form-data",
                }
            })
            toast.success("new Post image uploaded successfully");
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}

//update post
export function updatePost(newPost,postId) {
    return async( dispatch, getState) => {
            try {
           const {data}= await request
            .put(`/api/posts/${postId}`, newPost, {
                headers : {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(postActions.setPost(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}

//delete post
export function deletePost(postId) {
    return async( dispatch, getState) => {
            try {
           const {data}= await request
            .delete(`/api/posts/${postId}`, {
                headers : {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(postActions.deletePost(data.postId))
            toast.success(data.message)
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}


//Get all posts
export function getAllPosts (pageNumber) {
    return async dispatch => {
            try {
            const { data } = await request.get(`/api/posts`)
            dispatch(postActions.setPosts(data))
            } catch (error) {
            toast.error(error.response.data.message)
            }
    }
}