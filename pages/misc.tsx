
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import { Audio } from 'react-loader-spinner';
import Link from 'next/link';
import { Card, ConfigProvider, theme, Tag, Divider } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useTheme } from 'next-themes';
import { Divide } from 'react-feather';
// import 'antd/dist/antd.css'; // Import the Ant Design CSS


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
                <section className=" flex">
                    {/* TITLE STARTS */}
                    {/* ... */}
                    {/* TITLE ENDS */}
                    {/* LATEST POSTS STARTS */}


                    <div className=" flex justify-center flex-wrap w-full">
                        {posts?.map((post: any, index) =>

                        (
                            <div key={index} className=" m-2 w-full m-2 flex-shrink-0">
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
                                        className='dark:inverse'
                                        // extra={<a href={post.link}>Read More</a>}

                                        size="small"

                                    // title={<div style={{ wordBreak: "break-word", overflow: "hidden", whiteSpace: "nowrap" }}>{post.title}</div>}
                                    // headStyle={{ wordBreak: 'break-word' }}
                                    // headStyle={{ fontWeight: 'bold', display: 'flex', flexWrap: 'nowrap' }}
                                    ><div className='flex justify-between'>

                                            <h2 style={{ fontWeight: 'bold' }}>{post.title}</h2>
                                            <a href={post.link} className='text-blue-500 ml-3'>Read More</a>
                                        </div>
                                        <Divider className='mt-2' />
                                        <Card.Meta

                                            description={getDescriptionSnippet(post["content:encodedSnippet"]).split(" ").slice(0, 42).join(" ") + '...'}
                                        />
                                        <div className=" align-items-center mt-2 flex justify-between">
                                            <div className="d-flex ">
                                                {post.categories.map((category: string, index: number) => (
                                                    <Tag key={index} color="blue" className='mt-1'>{category}</Tag>
                                                ))}
                                            </div>
                                            <div className="">
                                                <CalendarOutlined rev="wtf" />
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

