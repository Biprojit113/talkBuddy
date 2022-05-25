import "./sidebar.css";
import { PlayCircleFilledOutlined, RssFeed, Group, Chat, Event } from "@mui/icons-material";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
               <ul classname="sidebarList">
                   <li className="sidebarListItem">
                       <RssFeed className="sidebarIcon"/>
                       <span classname="sidebarListItemText">Feed</span>
                   </li>
                   <li className="sidebarListItem">
                       <Chat className="sidebarIcon"/>
                       <span classname="sidebarListItemText">Chat</span>
                   </li>
                   <li className="sidebarListItem">
                       <Group className="sidebarIcon"/>
                       <span classname="sidebarListItemText">Groups</span>
                   </li>
                   <li className="sidebarListItem">
                       <PlayCircleFilledOutlined className="sidebarIcon"/>
                       <span classname="sidebarListItemText">Videos</span>
                   </li>
                   <li className="sidebarListItem">
                       <Event className="sidebarIcon"/>
                       <span classname="sidebarListItemText">Events</span>
                   </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
               <ul className="sidebarFriendList">
                   <li className="sidebarFriend">
                       <img className="sidebarFriendImg" src="/assets/Image4.jpg" alt=""/>
                       <span className="sidebarFriendName">Ashraf Jaman</span>
                   </li>
                   <li className="sidebarFriend">
                       <img className="sidebarFriendImg" src="/assets/Image3.jpg" alt=""/>
                       <span className="sidebarFriendName">Biprojit Dey</span>
                   </li>
                   <li className="sidebarFriend">
                       <img className="sidebarFriendImg" src="/assets/Image2.jpeg" alt=""/>
                       <span className="sidebarFriendName">Jyotirmoy Raj</span>
                   </li>
                   <li className="sidebarFriend">
                       <img className="sidebarFriendImg" src="/assets/Image1.jpg" alt=""/>
                       <span className="sidebarFriendName">John the Don</span>
                   </li>
               </ul>
            </div>
        </div>
    )
}