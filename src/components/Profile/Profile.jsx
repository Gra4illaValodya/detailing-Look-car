import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import AvaDescription from "./AvaDescription/AvaDescription";


const Profile = (props) => {

    return <div>

      <AvaDescription />

        <MyPosts postElementData={props.postElementData} addNewPost={props.addNewPost} />
    </div>


}

export default Profile