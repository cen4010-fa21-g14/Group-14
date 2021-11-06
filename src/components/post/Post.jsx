import "./post.css"
// import {MoreVert} from '@mui/icons-material';
// import {Users} from "../..//dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js"

export default function Post({post}) {
    
    const[like,setLike] = useState(post.likes.length)
    const [ isLiked,setIsLiked] = useState(false);
    const [ user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);

        }
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[post.userId]);

    const  likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" alt="" src={user.profilePicture || PF+"person/noAvatar.png"}></img>
                        <span className="postUsername">{user.firstName} {user.lastName}</span>

                        <span className="postDate">{format(post.createdAt)}</span>
                        <span className="postDate">{post.createdAt}</span>
                    </div>
                    <div className="postTopRight">
                        {/* <MoreVert/> */}
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.img} alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt="" src={'${PF}like.png'} onClick={likeHandler}></img>
                        <img className="likeIcon" alt="" src={'${PF}heart.png'} onClick={likeHandler}></img>
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
