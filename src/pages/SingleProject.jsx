import { AnimatedLink } from "../components/AnimatedLink";
import { getSinglePost } from "../services/posts";
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";

export function SingleProject(props){
    const [post, setPost] = useState([]); 
    
    let { id } = useParams();
    let title = post.data && post.data.attributes.title;
    let description = post.data && post.data.attributes.content;
    let cover = post.data && post.data.attributes.cover.data.attributes.url;
    useEffect(() => {
        getSinglePost({id}).then(data => {
            setPost(data);
        });
    }, []);
    
    
    return(
        <>
        <AnimatedLink to="/">Back</AnimatedLink>
        <div className='relative '>
            <div  className='z-10 absolute inset-x-0 top-10 px-10'>
                <h1
                style={{viewTransitionName: 'title-' + id }}
                className='text-white font-bold text-xl opacity-80'
                >
                    {title}
                </h1>
                <p
                style={{viewTransitionName: 'desc-' + id }}
                className='text-white text-sm opacity-80'
                >
                    {description}
                </p>
            </div>
            <img
            style={{viewTransitionName: 'cover-' + id }}
            className='project-cover' 
            src={`http://localhost:1337${cover}`} alt="Image 1"/>
        </div>
        </>
    )
}