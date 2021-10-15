import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpg" alt=""></img>
                        <img className="profileUserImg" src="assets/person/8.jpg" alt=""></img>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Andres Botia</h4>
                        <span className="profileInfoDesc">hello hello hello</span>
                    </div>
                </div>
                <div className="profileRightBottom"></div>
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        </>
    )
}
