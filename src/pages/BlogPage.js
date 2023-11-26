import Header from "../components/Header";
import { my_blogs } from "../blogs";
import {useLocation} from "react-router-dom";
import {useState} from 'react';

const BlogPage = ()=>{
    let {state} = useLocation();
    let blog_id = state.blog_id;
    return(
        <div>
            <Header />
            <div className="container">
            <div className="inner-container">
                <h1 className="page-title">{my_blogs[blog_id].Title}</h1>
                <div className="title-sub">
                    <p className="blog-date">{my_blogs[blog_id].Author}</p>
                    <p className="blog-author">{my_blogs[blog_id].Date}</p>
                </div>
                <img src="./img/image.jpg" className="hero-image" alt=""/>
                <div className="blog-content">
                    <p className="blog-text">{my_blogs[blog_id].Content}</p>
                    </div>
            </div>
            </div>
        </div>
    ) 
}
export default BlogPage;