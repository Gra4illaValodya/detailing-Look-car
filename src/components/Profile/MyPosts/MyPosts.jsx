import React from "react";
import style from './MyPosts.module.css'
import PostElement from "./PostElement/PostElement";



const MyPosts = (props) => {

    const addNewPost = () => {
        props.addNewPost()
    };


    const  freshText = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text)


    }

    let  postElement = props.postElementData
        .map(postElementMap => <PostElement  postMessageItem={postElementMap.postMessageItem}
                                             postLikeItem={postElementMap.postLikeItem}
                                             id={postElementMap.id} />)



    const newPostElement = React.createRef();




    return <div className={style.myPostsElement}>
        my posts

        <div className={style.addTextPost} >
            <textarea  onChange={freshText}
                       className={style.inputTextPost}
                      ref={newPostElement}
                      value={props.textareaText}/>
        </div>
        <div>
            <button className={style.inputTextPostButton}
                    onClick={addNewPost}>
                Add Post
            </button>
        </div>


        <div> {postElement} </div>
    </div>


}

export default MyPosts