import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { ImageColorShadow } from './ImageColorShadow';
import { useEffect,useState } from 'react';
import { getPosts } from '../services/posts';

export default function MobileCardsSlider (){
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);
    
    return(
        <>
        <div className="w-full">
            <Splide
            aria-label="Portafolio"
            options={{
                perPage: 1,
                arrows: false,
                pagination: false,
                padding: { left: '6%', right: '6%' },
                gap: '1rem',
                drag: 'free',
                snap: true,
                paginationKeyboard: true,
                dragMinThreshold: 20
            }}>
                {posts.data && posts.data.map((item, index) => (
                    <SplideSlide key={index}>
                        <ImageColorShadow
                        id={item.id}
                        title={item.attributes.title}
                        description={item.attributes.content}
                        src={`http://localhost:1337${item.attributes.cover.data.attributes.url}`}
                        shadow="#B40C0A"
                        ></ImageColorShadow>
                    </SplideSlide>
                ))}
                {/* {posts.data.map((item, index) => (
                    <SplideSlide key={index}>
                        <ImageColorShadow
                        id={item.id}
                        title={item.attributes.title}
                        description={item.attributes.content}
                        src={`http://localhost:1337${item.attributes.cover.data.attributes.url}`}
                        shadow="#B40C0A"
                        ></ImageColorShadow>
                    </SplideSlide>
                ))} */}
                
            </Splide>
        </div>
        </>
        
    )

};