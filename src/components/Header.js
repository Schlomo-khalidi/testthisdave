import {Link} from 'react-router-dom';

const Header = ()=> {
    return (
        <div className="header-container">
            <h1 className="header-title"> Allan Munene Kinyua Blogpage</h1>
            <div className="header-sub">
                <Link ClassName="header-buttons" to={"/"}>My Blogs</Link>
                <Link ClassName="header-buttons" to={"/author"}>About The Author</Link>
            </div>
        </div>
    )
}

export default Header;