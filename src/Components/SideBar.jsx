import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

 

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <>
    <div className='sidebar'>
      <Link to='/'><h4>Home</h4></Link>
      <h4>Shorts</h4>
      <h4>Subscriptions</h4>
      <hr style={{width:'9em',marginLeft:'-0.8em'}}/>
      
      <h4>Trending</h4>
      <h4>Music</h4>
      <h4>Films </h4>
      <h4>Live</h4>
      <h4>Gaming</h4>
      <h4>News</h4>
      <h4>Sport</h4>
      <h4>Learning</h4>
      <h4>Fashion&Beauty</h4>



    </div>
    </>
  )
}

export default SideBar