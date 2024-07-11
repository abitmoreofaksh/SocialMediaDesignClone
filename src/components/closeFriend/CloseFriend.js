import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className='rightbarFriend'>
    <div className="onlineFriendItem">
    <img src={user.photo} alt="" className="friendImg" />
    <span className='friendbadge'></span>
    </div>
    <span className="friendName">{user.username}</span>
  </li>
  )
}
