import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/topbar'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <div className="profileLeft">
                <Sidebar />
                </div>
                <div className="profileRight">
                <div className="profileRightTop">
                    <img src="assets/coverimg.jpg" alt="" className="profileCover" />
                    <img src="assets/1.jpg" alt="" className="profilephoto" />
                    <div className="profileInfo">
                    <span className="userName">Akshit Bathla</span>
                    <span className="userBio">Front-End Developer</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
                </div>
                </div>
            </div>

        </>
    )
}
