import "./rightbar.css" 
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {


    // const HomeRightbar= () =>{
    //     return(
    //     <>
    //      <div className="birthdayContainer">
    //                 <img src="assets/birthday.png" alt="" className="birthdayImg"></img>
    //                 <span className="birthdayText"> 
    //                     <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
    //                 </span>
    //             </div>
    //             <img className="rightbarAd" src="assets/ad.png" alt=""></img>
    //         </div>
            
    //         <h4 className="rightBarTitle">Online Friends</h4>
    //         <ul className="rightbarFriendList">
    //            {Users.map(u=>(
    //                <Online key={u.id} user={u}/>
    //            ))}
    //         </ul>
    //     </>
    //     );
    // }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/birthday.png" alt="" className="birthdayImg"></img>
                    <span className="birthdayText"> 
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt=""></img>
            </div>
            
            <h4 className="rightBarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
               {Users.map(u=>(
                   <Online key={u.id} user={u}/>
               ))}
            </ul>
        </div>
        
    )
}
