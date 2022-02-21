import React from "react";
import style from './MyPosts.module.css'
import PostElement from "./PostElement/PostElement";


const MyPosts = (props) => {


    let  postElement = props.postElementData
        .map(postElementMap => <PostElement  postMessageItem={postElementMap.postMessageItem} postLikeItem={postElementMap.postLikeItem} id={postElementMap.id} />)



    const newPostElement = React.createRef();

    // const addPost = () => {
    //     let newPostText = newPostText.current.value;
    //     props.addPost(newPostText)
    // };


    return <div className={style.myPostsElement}>
        my posts

        <div className={style.addTextPost} >
            <textarea className={style.inputTextPost} ref={newPostElement}></textarea>
        </div>
        <div>
            <button className={style.inputTextPostButton}   onClick={ props.addPost }>Add Post
            </button></div>


        <div> {postElement} </div>
    </div>


}

export default MyPosts