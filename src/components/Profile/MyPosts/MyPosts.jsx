import React from "react";
import style from './MyPosts.module.css'
import PostElement from "./PostElement/PostElement";
import {addNewPostActionCreator, updatePostActionCreator} from "../../../redux/state";





const MyPosts = (props) => {

    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    };

    const  updatePost = () => {
        let postText = newPostElement.current.value;
        let action = updatePostActionCreator(postText)
        props.dispatch( action)
    }

    let  postElement = props.postElementData
        .map(postElementMap => <PostElement  postMessageItem={postElementMap.postMessageItem}
                                             postLikeItem={postElementMap.postLikeItem}
                                             id={postElementMap.id} />)


    const newPostElement = React.createRef();

    return <div className={style.myPostsElement}>
        my posts
        <div className={style.addTextPost} >
                 <textarea  onChange={updatePost}
                            className={style.inputTextPost}
                            ref={newPostElement}
                            value={props.textareaText}/>
        </div>
        <div>
                 <button     className={style.inputTextPostButton}
                             onClick={addNewPost}>

                        Add Post
            </button>
        </div>
        <div> {postElement} </div>
    </div>


}

export default MyPosts