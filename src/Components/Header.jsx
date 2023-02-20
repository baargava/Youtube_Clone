import React, { useState ,useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {toggleMenu} from '../UTILS/appSlice';
import {YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_API} from '../UTILS/constants';
import {cacheResults} from '../UTILS/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';

const Header = () => {
  const[searchQuery,setSearchQuery]=useState('')
  const[showSuggestions,setShowSuggestions]=useState(false)
  const[suggestions,setSuggestions]=useState([])
  const API_KEY = "AIzaSyBiNmien1UOkDQpMFEJAJcbX5iIkIt2kDk";


  const cacheSearch=useSelector((store)=>store.search)
  const dispatch=useDispatch()

  useEffect(() => {
    const timer=setTimeout(() => {
      if (searchQuery[cacheSearch]) {
          setSuggestions(searchQuery[cacheSearch])
      } else {
        getSearchSugsestions();

      }
    }, 200);
  
    return () => {
   clearTimeout(timer) 
   }
  }, [searchQuery])
  const getSearchSugsestions=async()=>{
  const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
  const searchjson=await data.json();
  console.log(searchjson[1]);
  setSuggestions(searchjson[1])
  dispatch(
    cacheResults({
      [searchQuery]: searchjson[1],
    })
  );

  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <>
    <div className='navbar' style={{display:'flex',margin:'1em'}}>
    <div className='imgbox flex'>
    <IconButton sx={{marginLeft:"1em",paddingInline:'0em',cursor:'pointer'}} onClick={() => toggleMenuHandler()}
 > <MenuIcon className='icon'/>
      </IconButton>
    <a href='/' className='aimg'>
    <img className='logoimg' style={{height:'1.3em',width:'10em',marginLeft:'3em',cursor:'pointer'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="logo"/>
    </a>
    </div>
    <div style={{marginLeft:'4em',marginTop:'0em',paddingInline:'5em'}} className="searchmain">
      <div className='searchdiv'>
      <input type='text' style={{paddingInline:'10em',paddingBlock:'0.5em'}}
      value={searchQuery} onChange={e=>{setSearchQuery(e.target.value)}}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            id="search"/>
      <button style={{fontSize:'1.3em', marginTop:'0.2em'}}>🔍</button>
      </div>
    </div>
    {showSuggestions&&(
      <div>
        <ul className='list'>
          {suggestions.map((s)=>(
            <li key={s} className="listsuggest">🔍{s}</li>
          ))}
        </ul>
      </div>
    )}
    <div>

      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="avatar" style={{width:'3em' ,height:'3em',marginLeft:'5em',cursor:'pointer'}} id="avatarimg"/>
    </div>
    </div>
    </>
  )
}

export default Header