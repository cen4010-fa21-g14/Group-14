import "./post.css"
import {MoreVert} from '@mui/icons-material';
// import {Users} from "../..//dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post({post}) {
    
    const[like,setLike] = useState(post.like)
    const [ isLiked,setIsLiked] = useState(false);
    const [ user, setUser] = useState({});

    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);

        }
        fetchUser();
    },[]);

    const  likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className="postProfileImg" alt="" src={user.profilePicture}></img> */}
                        <span className="postUsername">{user.firstName} {user.lastName}</span>

                        {/* <span className="postDate">{post.date}</span> */}
                        <span className="postDate">{post.createdAt}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    {/* <img className="postImg" src={post.photo} alt=""></img> */}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt="" src="/assets/like.png" onClick={likeHandler}></img>
                        <img className="likeIcon" alt="" src="/assets/heart.png" onClick={likeHandler}></img>
                        <span className="postLikeCounter">{like} people like it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">  {post.comment} Commented</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
