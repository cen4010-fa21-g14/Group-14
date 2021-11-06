import "./online.css"

export default function online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" alt="" src={PF+user.profilePicture}></img>  
                <span className="rightbarOnline"></span> 
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
