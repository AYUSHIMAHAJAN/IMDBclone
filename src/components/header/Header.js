import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
          {/* this link will  become anchor tag */}
            <Link to="/"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png" alt="not found"></img></Link>
            <Link to="/movies/popular"  style={{textDecoration:"none" ,color:"white"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none" , color:"white"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"   style={{textDecoration:"none" , color:"white"}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header