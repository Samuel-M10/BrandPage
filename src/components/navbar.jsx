import '../index.css'
const Navigation = ()=>{
    return(
        <nav>
        <div className='logo'>
          <img src="https://logolook.net/wp-content/uploads/2021/06/Nike-Logo.svg" alt="" />
        </div>
        <ul>
          <a href=""><li>Menu</li></a>
          <a href=""><li>Location</li></a>
          <a href="http://"><li>About</li></a>
          <a href="http://"><li>Contact</li></a>
        </ul>
        <button href=''>Login</button>
      </nav>
    );
};

export default Navigation;