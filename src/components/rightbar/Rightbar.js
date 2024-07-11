import './rightbar.css'
import {Users} from "../../data"
import CloseFriend from '../closeFriend/CloseFriend'



export default function Rightbar({profile}) {
  const HomeRightbar = () =>{
    return (
      <>
      <div className="birthdayContainer">
      <img src="/assets/gift.png" alt="" className='birthdayImg'/>
      <span className="birthdayText">
        <b>Shiv Saini</b> and <b>2 others</b> have birthday today.
      </span>
      </div>
      <h4 className='friendHeading'>Online Friends</h4>
      <ul className="onlineFriendslist">
        {Users.map((u)=>(
          <CloseFriend key={u.id} user={u}/>
        ))}
      </ul>
      </>
    )
  }
  
  const ProfileRightbar = () =>{
    return (
      <>
      <div className="profileRightbarContainer">
        <h4 className='infoTitle'>User Information</h4>
        <div className="userInfo">
        <div className="infoItem">
        <span className="infoKey">City :</span>
        <span className="infoValue"> Kurukshetra</span>
        </div>        
        <div className="infoItem">
        <span className="infoKey">State :</span>
        <span className="infoValue"> Haryana</span>
        </div>        
        <div className="infoItem">
        <span className="infoKey">Relationship :</span>
        <span className="infoValue"> Single</span>
        </div>
        </div>
        <h4 className="followingTitle">User Following</h4>
        <div className="followings">
        <div className="following">
            <img src="assets/1.jpg" alt="" className="followingImg" />
            <span className="followingName">Akshit Bathla</span>
          </div>        <div className="following">
            <img src="assets/Lavina.jpg" alt="" className="followingImg" />
            <span className="followingName">Lavina Gupta</span>
          </div>        <div className="following">
            <img src="assets/Gobind.jpg" alt="" className="followingImg" />
            <span className="followingName">Gobind Monga</span>
          </div>        <div className="following">
            <img src="assets/Shiv.jpg" alt="" className="followingImg" />
            <span className="followingName">Shiv Saini</span>
          </div>        <div className="following">
            <img src="assets/Jiya.jpg" alt="" className="followingImg" />
            <span className="followingName">Jiya Chugh</span>
          </div>        <div className="following">
            <img src="assets/Aditya.jpg" alt="" className="followingImg" />
            <span className="followingName">Aditya Jindal</span>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}
