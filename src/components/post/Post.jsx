import "./post.css"
import {MoreVert} from '@mui/icons-material';

export default function post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" alt="" src="/assets/person/4.jpg"></img>
                        <span className="postUsername">John Doe</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post :)</span>
                    <img className="postImg" src="/assets/post/1.jpg" alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt="" src="/assets/like.png"></img>
                        <img className="likeIcon" alt="" src="/assets/heart.png"></img>
                        <span className="postBottomRight">
                            <span className="postCommentText">9 Comments</span>
                        </span>
                    </div>
                    <div className="postBottomRight"></div>
                </div>
            </div>
        </div>
    )
}
