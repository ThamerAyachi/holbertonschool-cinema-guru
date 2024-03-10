import './navigation.css';
import { React, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activites, setActivities] = useState([]);
  const [showActivites, setShowActivites] = useState(false);

  function setPage(pageName) {
    setSelected = useState(pageName);
  }

  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get(process.env.REACT_APP_API_ACT, {
      headers: {authorization: `Bearer ${accessToken}`}
    }).then(res => setActivities(res.data));
  }, []);

  return(
    <nav className={`navBar ${collapse ? "collapse" : ""}`}
      onMouseEnter={() => {setSmall(false); setTimeout(() => setShowActivites(true), 500)}}
      onMouseLeave={() => {setSmall(true); setShowActivites(false)}}>
        <ul className='navList'>
          <li className={selected === 'home' ? 'active' : ''} onClick={() => {setSelected('home'); navigate('/')}}>
            <FontAwesomeIcon icon={faFolder} className="faIcon"/>
            {!small && "Home"} {showActivites && !small && selected === 'home' &&
            <FontAwesomeIcon icon={faArrowRight} className="faIcon-active" />}
          </li>
          <li className={selected === 'favorites' ? 'active' : ''} onClick={() => {setSelected('favorites'); navigate('/favorites')}}>
            <FontAwesomeIcon icon={faStar} className="faIcon"/>
            {!small && "Favorites"} {showActivites && !small && selected === 'favorites' &&
            <FontAwesomeIcon icon={faArrowRight} className="faIcon-active" />}
          </li>
          <li className={selected === 'watchLater' ? 'active' : ''} onClick={() => {setSelected('watchLater'); navigate('/watchlater')}}>
            <FontAwesomeIcon icon={faClock} className="faIcon"/>
            {!small && "Watch Later"} {showActivites && !small && selected === 'watchLater' &&
            <FontAwesomeIcon icon={faArrowRight} className="faIcon-active" />}
          </li>
        </ul>
        {!small && (
          <ul className='latest-activites'>
            <h1>Latest Activites</h1>
          </ul>
        )}
    </nav>
  )
}
