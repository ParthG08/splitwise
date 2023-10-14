import React from 'react';
import "../../styles/Dashboard.css";
import FriendList from './FriendList'
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriend">
            <div className = "content">
                <div className="friendHeader2">
                    <label htmlFor=""  ><u>FRIENDS</u></label>
                    <button onClick = {props.friend} className = "AddFrnd float-right">+Add</button>
                </div>
                <div className = "friendHeader" >
                    </div>
                    <div className = "Friend_List mx-2">
                        <FriendList/>
                </div>
            </div>

        </div>
    )
}