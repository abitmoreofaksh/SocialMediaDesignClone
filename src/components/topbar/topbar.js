import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Topbar({ setLogin }) {

    return (
        <div className='topbar'>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <div className="logo">FriendsHub</div>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className='searchIcon' />
                        <input placeholder='Search for friends, photos or videos' className='topbarInput' />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="links">
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} onClick={() => setLogin(false)}>
                            <span className="hompage">Logout</span>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            <span className="timeline">Timeline</span>
                        </Link>
                    </div>
                    <div className="icons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="iconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="iconBadge">3</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="iconBadge">2</span>
                        </div>
                    </div>
                    <Link to="/profile">
                        <img src="/assets/1.jpg" alt='ProfileImg' className="profileImg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}