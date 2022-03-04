import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import AvaDescription from "./AvaDescription/AvaDescription";



const Profile = (props) => {

    return <div>

      <AvaDescription />

        <MyPosts postElementData={props.postElementData}
                 dispatch={props.dispatch}
                 textareaText={props.textareaText}/>
    </div>


}

export default Profile