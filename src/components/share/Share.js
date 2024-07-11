import './share.css'
import {Label, PermMedia,LocationOn,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
  return (
    <div className='share'>
      <div className="shareContainer">
        <div className="shareSearch">
        <img src="/assets/1.jpg" alt="" className="sharePfp" />
        <input placeholder="What's on your mind Akshit ?" className="shareInput" />
        </div>
        <hr className="searchHr" />
        <div className="shareOptions">
            <div className="shareOptionItem">
                <PermMedia htmlColor='tomato'/>
                <span className="shareOptionBadge">Photo or Video</span>
            </div>            <div className="shareOptionItem">
                <Label htmlColor='blue'/>
                <span className="shareOptionBadge">Tag</span>
            </div>            <div className="shareOptionItem">
                <LocationOn htmlColor='green'/>
                <span className="shareOptionBadge">Location</span>
            </div>            <div className="shareOptionItem">
                <EmojiEmotions style={{color:"rgb(246, 201, 0)"}}/>
                <span className="shareOptionBadge">Feelings</span>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
