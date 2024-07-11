import './sidebar.css'
import { RssFeed, Chat,PlayCircle,Groups, Bookmark,HelpOutlineOutlined, Work, CalendarToday, School } from '@mui/icons-material'
import {Users} from "../../data"
import Friends from '../friends/Friends'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarOptions">
                <div className="sidebarOptionItem">
                    <RssFeed className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Feed</span>
                </div>        <div className="sidebarOptionItem">
                    <Chat className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Chat</span>
                </div>
                <div className="sidebarOptionItem">
                    <PlayCircle className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Videos</span>
                </div>
                <div className="sidebarOptionItem">
                    <Groups className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Groups</span>
                </div>
                <div className="sidebarOptionItem">
                    <Bookmark className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Bookmarks</span>
                </div>
                <div className="sidebarOptionItem">
                    <HelpOutlineOutlined className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Questions</span>
                </div>
                <div className="sidebarOptionItem">
                    <Work className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Jobs</span>
                </div>        <div className="sidebarOptionItem">
                    <CalendarToday className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Events</span>
                </div>
                <div className="sidebarOptionItem">
                    <School className='sidebarIcons'/>
                    <span className='SidebarOptionBadge'>Courses</span>
                </div>
            </div>
            <button className="siderbarButton">Show More</button>
            <hr className="sidebarHr" />
            <div className="sidebarFriends">
                {Users.map((u)=>(
                    <Friends key={u.id} user={u}/>
                ))}
            </div>
        </div>
    )
}
