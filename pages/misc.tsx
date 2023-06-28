
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import { Audio } from 'react-loader-spinner';
import Link from 'next/link';
import { Card, ConfigProvider, theme, Tag } from 'antd';
import { useTheme } from 'next-themes';
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
    const { resolvedTheme, setTheme } = useTheme();
    const { defaultAlgorithm, darkAlgorithm } = theme;


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/medium-feed");
            const feed = await response.json();
            setPosts(feed.items); // Display top 5 latest posts
        };
        fetchPosts();
        console.log(posts);
        setLoading(false);
    }, []);


    const getDescriptionSnippet = (description: string) => {
        // const startIndex = description.indexOf('Umang Bhalla ');
        return description.slice(19);
    };


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
                        {posts?.map((post: any, index) =>

                        (
                            <div key={index} className="animated-layer dark:inverse fade-in-right-animation fadeInUp wow m-2 w-full">
                                <ConfigProvider
                                    theme={{
                                        algorithm: resolvedTheme == "dark" ? darkAlgorithm : defaultAlgorithm,
                                    }}
                                >

                                    <Card
                                        bordered={false}
                                        style={{
                                            width: '100%'
                                        }}
                                        cover={<img alt="" src="public/images/projects/rules.png" />}
                                        className='dark:inverse'
                                        extra={<a href={post.link}>Read More</a>}
                                        size="small" title={post.title}
                                    >
                                        <Card.Meta

                                            description={getDescriptionSnippet(post["content:encodedSnippet"]).split(" ").slice(0, 42).join(" ") + '...'}
                                        />
                                        <div className="meta d-flex align-items-center mt-2 flex justify-between">
                                            <div className="d-flex ">
                                                {post.categories.map((category: string, index: number) => (
                                                    <Tag key={index} color="blue">{category}</Tag>
                                                ))}
                                            </div>
                                            <div className="d-flex">
                                                <i className="fa-regular fa-calendar" />
                                                <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </ConfigProvider>
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

