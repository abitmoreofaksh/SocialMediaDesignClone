import "./friends.css"

export default function Friends({user}) {
  return (
    <div className="sidebarFriendItem">
    <img src={user.photo} alt="pfp" className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
    </div>
  )
}
