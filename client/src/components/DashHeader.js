import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/dashHeader.css'
 const DashHeader = (props)=>{
    
    return (
        <nav className = "DashboardNav fixed-top">
        <NavLink to = "/Dashboard"><h3 className = "landing-name logo">S P L I T W I S E</h3></NavLink> 
     
     <div className = "Dashfloat">
     <NavLink to = "/login"><button className = "logoutbtn my-1" onClick = {()=>{
       localStorage.removeItem('jwtToken');
     }
     }>Log Out</button></NavLink>
      
      {console.log("inside DashHeader")}
     
      <img className = "profile" src={require('../images/person-profile.png')} alt="" srcSet=""/>
      <label htmlFor="" className="my-1">{props.user.username}</label>
     </div>
        

    </nav>
    )
}

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(DashHeader);

