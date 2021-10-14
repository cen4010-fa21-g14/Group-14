import "./post.css"
import {MoreVert} from '@mui/icons-material';
import {Users} from "../..//dummyData"

export default function post({post}) {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" alt="" src={Users.filter(u=>u.id === post.userId)[0].profilePicture}></img>
                        <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt="" src="/assets/like.png"></img>
                        <img className="likeIcon" alt="" src="/assets/heart.png"></img>
                        <span className="postLikeCounter">{post.like} people like it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">  {post.comment} Commented</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
