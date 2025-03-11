import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import MediaImg from "../media/MediaImg";
import PostDate from "../Meta/PostDate";
import PostAuthor from "../Meta/PostAuthor";


const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
         }, []
    );
    
    return(
        <>
    <div className="container blog">
        <h1>Blog</h1>
    <div>
    {posts.map(post => (
                <div className="row mb-5">
                    <div className="col-md-5">
                    <MediaImg id={post.featured_media} size="thumbnail" />
                    </div>

                    <div className="col-md-6 offset-md-1">
                    Autor: <PostAuthor authorId={post.author} /> Objavljeno: <PostDate date={post.date} />
                <Link to={/blog/+ post.slug}>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>       
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                
                    </div>
                </div>
            ))}
    
    </div>
    </div>
  </>
    );
    }

    export default Blog;