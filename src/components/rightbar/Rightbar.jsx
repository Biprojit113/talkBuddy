import {} from "@mui/icons-material"
import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b> Hridoy</b> and <b>2 other friends</b> have birthday today 
                        </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                            className="rightbarProfileImg"
                            src="assets/image2.jpeg"
                            alt=""
                            />
                            <span className="rightbarOnline"></span>
                        </div>   
                        <span className="rightbarUsername">Jyotirmoy Raj</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                            className="rightbarProfileImg"
                            src="assets/image3.jpg"
                            alt=""
                            />
                            <span className="rightbarOnline"></span>
                        </div>   
                        <span className="rightbarUsername">Biprojit Dey</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                            className="rightbarProfileImg"
                            src="assets/image5.jpg"
                            alt=""
                            />
                            <span className="rightbarOnline"></span>
                        </div>   
                        <span className="rightbarUsername">Mr Oggy</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                            className="rightbarProfileImg"
                            src="assets/image1.jpg"
                            alt=""
                            />
                            <span className="rightbarOnline"></span>
                        </div>   
                        <span className="rightbarUsername">John the Don</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img
                            className="rightbarProfileImg"
                            src="assets/image6.png"
                            alt=""
                            />
                            <span className="rightbarOnline"></span>
                        </div>   
                        <span className="rightbarUsername">Thomas Jasper</span>
                    </li>
                </ul>
            </div>    
        </div>
    );
}