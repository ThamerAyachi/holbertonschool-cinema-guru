import './navigation.css';


export default Header = ({
  userUsername,
  setIsLoggedIn,
}) => {
  function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <nav className="nav">
      <h1>Cinema Guru</h1>
      <span>
        <img src="https://picsum.photos/100/100"/>
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout}><p>Logout</p></span>
      </span>
    </nav>
  )
}