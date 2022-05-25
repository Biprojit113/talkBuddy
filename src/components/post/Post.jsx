import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post(){
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/image1.jpg" alt=""/>
                        <span className="postUsername">Billy</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post</span>
                    <img className="postImg" src="assets/image1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like1.jpg" alt=""/>
                    <img className="likeIcon" src="assets/love.jpg" alt=""/>
                    <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="postCommentText">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}