
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import { logoutUser } from "../../redux/apiCalls/authApiCall";


const HeaderRight = () => {
  const dispatch = useDispatch();
  const {user}= useSelector(state =>state.auth);
  const[dropdown , setDropdown]=useState(false);

  //logout handler
  const logoutHandler=()=>{
    setDropdown(false);
    dispatch(logoutUser())
  }
  return (
    <div className="header-right">
     {user ?
     <>
     <div className="header-right-user-info">
      <span
      onClick={()=>setDropdown(prev=>!prev)}className="header-right-username">
        {user?.username}
      </span>
      <img src={ user?.profilePhoto?.url }
        alt='user photoo'
        className="header-right-user-photo"
      />
      {dropdown && (
        <div className="header-right-dropdown">
        <Link to={`/profile/${user?._id}`} className="header-dorpdown-item"  onClick={()=>setDropdown(false)}>
            <i className="bi bi-file-person"></i>
            <span>Profile</span>
        </Link>
        <div onClick={logoutHandler} className="header-dorpdown-item" >
          <i className="bi bi-box-arrow-in-left"></i>
          <span>logout</span>
        </div>
       </div>
      )}
     </div>
     </>:(
     <>
      <Link className="header-right-link" to="/login">
        <i className="bi bi-box-arrow-in-right"></i>
        <span>Login</span>
      </Link>
      <Link className="header-right-link" to="/register">
        <i className="bi bi-person-plus"></i>
        <span>Register</span>
      </Link>
     </>)}
    </div>
  );
};

export default HeaderRight;