import"./share.css"
import {PermMedia, Label,Room,EmojiEmotions} from "@mui/icons-material"

export default function Share() {
    return (
        <div classname="share">
            <div className="shareWrapper">
                <div classname="shareTop">
                <img className="shareProfileImg" src="assets/image4.jpg" alt=""/>
                <input
                placeholder="What's in your mind?"
                className="shareInput"
                />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span classname="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span classname="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span classname="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span classname="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}

