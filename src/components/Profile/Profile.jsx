import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import AvaDescription from "./AvaDescription/AvaDescription";
import {addPost} from "../../redux/state";

const Profile = (props) => {

    return <div>

      <AvaDescription />

        <MyPosts postElementData={props.postElementData} addPost={props.addPost}/>
    </div>


}

export default Profile