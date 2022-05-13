import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Talk Buddy</span>
            </div>
            <div className="topbarCenter">
                <div classname="searchbar">
                    <Search/>
                    <input placeholder="Search for friend" classname="searchInput"/>
                </div>
            </div>
        
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">4</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>
            </div>
    
        </div>
    );
}