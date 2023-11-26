import { my_blogs } from "../blogs";
import Header from  "../components/Header";
import {useNavigate} from "react-router-dom";

const BlogListPage = ()=>{
    let navigate = useNavigate();
    return(
        <div>
            <Header />
            <div className="container">
                <div className = "inner-container">
                    <h1 className="page-title">My blogs</h1>
                    <div className="blog-list">
                        {Object.keys(my_blogs).map((blog, index)=>(
                            <div className="blog-preview" key={index} onClick={ ()=>{
                                navigate('/blog', {state:{blog_id:blog}})
                            }}>
                    <div className="blog-preview-left">
                        <h1 className="blog-title">{my_blogs[blog].Title}</h1>
                        <p className = "blog-author">{my_blogs[blog].Author}</p>
                    </div>
                    <p className="blog-date">{my_blogs[blog].date}</p>
                    </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogListPage