import "./rightbar.css" 

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/birthday.png" alt="" className="birthdayImg"></img>
                    <span className="birthdayText"> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt=""></img>
            <h4 className="rightBarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        {/* <img alt="rightbarProfileImg" src="assets/person/2.jpg"></img>   */}
                        <span className="rightbarOnline"></span> 
                    </div>
                    <span className="rightbarUsername">John Doe</span>
                </li>
            </ul>
        </div>
    )
}
