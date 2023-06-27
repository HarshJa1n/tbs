// import { useState } from 'react';
// import { NextPage } from 'next';
// import { Audio } from 'react-loader-spinner';


// const Style = {
//     height: 498,
//     width: 680,
//     frameborder: 0
// }

// const Misc: NextPage<unknown> = () => {
//     const [loading, setLoading] = useState(true);
//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-full">
//                 <Audio color="#3B82F6" height={80} width={80} />
//             </div>
//         );
//     }

//     return (
//         <div className="items-center">
//             TBD
//             {/*<a class="twitter-timeline" width="280" height="300" href="https://twitter.com/jk_rowling?ref_src=twsrc%5Etfw">Tweets by jk_rowling</a> {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}*/}
//         </div>
//     );
// };

// export default Misc;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import { Audio } from 'react-loader-spinner';
import Link from "next/link";
import { useTheme } from 'next-themes';


const Style = {
    height: 498,
    width: 680,
    frameborder: 0
};

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [posts, setPosts] = useState([]);
    const { resolvedTheme, setTheme } = useTheme();

    console.log(resolvedTheme);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/medium-feed");
            const feed = await response.json();
            setPosts(feed.items.slice(0, 3)); // Display top 5 latest posts
        };
        fetchPosts();
        setLoading(false);
    }, []);


    return (
        <div className="items-center">
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <Audio color="#3B82F6" height={80} width={80} />
                </div>
            ) : (
                <section className="blog main-section flex-column-mobile" id="blog">
                    {/* TITLE STARTS */}
                    {/* ... */}
                    {/* TITLE ENDS */}
                    {/* LATEST POSTS STARTS */}
                    <div className="latestposts flex-column-mobile">
                        {posts.map((post: any, index) => (
                            console.log(post),
                            <div
                                key={index}
                                className="animated-layer fade-in-right-animation fadeInUp wow"
                            >
                                <Link href={post.link} legacyBehavior passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <span className="img-holder">
                                            {/* You might need to find a way to display post images */}
                                            <img src="assets/blog/blog-post-1.jpg" alt="" />
                                        </span>
                                        <div className="content">
                                            {/* get categorofy if not then set it as machine learning */}
                                            <span className="category">{post.categories[0] ?? "Machine Learning"}</span>
                                            {/* get the title of the post */}
                                            <span className="title">{post.title}</span>
                                            <p>
                                                {/* get only 13 words from post content:encodedSnippet */}
                                                {post["content:encodedSnippet"].split(" ").slice(0, 12).join(" ")}...
                                            </p>
                                            <div className="meta d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-regular fa-calendar" />
                                                    <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Comments count is not available in the RSS feed */}
                                                    <i className="fa-regular fa-comments" />
                                                    <span>17 comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* LATEST POSTS ENDS */}
                </section>
            )}
        </div>
    );
};

export default Misc;

