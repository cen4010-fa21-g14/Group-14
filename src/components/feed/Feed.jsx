import {useEffect, useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";



export default function Feed({username}) {
    const [posts,setPosts] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = username
            ? await axios.get("posts/profile/" + username)
            : await axios.get("posts/timeline/61771aaa41416215951d6b5e");
            setPosts(res.data);

        }
        fetchPosts();
    },[username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map(p=>(
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}
