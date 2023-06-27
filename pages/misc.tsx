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
import Link from 'next/link';
import { Card } from 'antd';
// import 'antd/dist/antd.css'; // Import the Ant Design CSS

// Rest of your code



const Style = {
    height: 498,
    width: 680,
    frameborder: 0
};

const Misc: NextPage<unknown> = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [posts, setPosts] = useState([]);

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
                <section className="blog flex main-section flex-column-mobile" id="blog">
                    {/* TITLE STARTS */}
                    {/* ... */}
                    {/* TITLE ENDS */}
                    {/* LATEST POSTS STARTS */}


                    <div className="latestposts flex flex-column-mobile justify-center flex-wrap ">
                        {posts.map((post: any, index) => (
                            <div key={index} className="animated-layer dark:inverse fade-in-right-animation fadeInUp wow m-2 w-full">
                                <Card
                                    bordered={false}
                                    style={{ width: '100%' }}
                                    cover={<img alt="" src="public/images/projects/rules.png" />}
                                    className='dark:inverse'
                                >
                                    <Card.Meta
                                        title={post.title}
                                        description={post["content:encodedSnippet"].split(" ").slice(0, 12).join(" ") + '...'}
                                    />
                                    <div className="meta d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="fa-regular fa-calendar" />
                                            <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa-regular fa-comments" />
                                            <span>17 comments</span>
                                        </div>
                                    </div>
                                </Card>
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

