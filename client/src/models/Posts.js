/*
    Access to all the posts
*/

//import Session from "./Session";
import { api } from "../models/myFetch";


export function GetMyPosts(){
    return api("posts")
}

export function GetPostsForUser(handle){
    return api(`posts/${handle}`)
}

export function GetMyFeed(){
    return api("posts/feed")
}

export function AddPost(post){
    return api("posts", post);
}

export function DeletePost(post_id){
    // this wont actually delete the correct item unless you are an admin viewing all posts
    // TODO: add real ids to posts so that we can address them properly
    return api("posts/" + post_id, {  }, "DELETE" );
}