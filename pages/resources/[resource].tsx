// import React from 'react';
// import { Card, ConfigProvider, theme, Tag } from 'antd';
// import { useTheme } from 'next-themes';
// import resourcesData from '../../components/data/resourceData';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// const { Meta } = Card;

// const ResourcePage = () => {
//     const router = useRouter();
//     const { resource } = router.query;
//     console.log("id", resource)
//     const { resolvedTheme, setTheme } = useTheme();
//     const { defaultAlgorithm, darkAlgorithm } = theme;

//     const resourceD = resourcesData?.find((topic) => topic.id === parseInt(resource as string));

//     if (!resourceD) {
//         return <div>Resource not found.</div>;
//     }

//     return (
//         <div>
//             <h1>{resourceD.title}</h1>
//             <ConfigProvider
//                 theme={{
//                     algorithm: resolvedTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
//                 }}
//             >
//                 {resourceD?.subtopics?.map((subtopic) => (
//                     <Card key={subtopic.id} style={{ marginBottom: '10px' }}>
//                         <Meta
//                             title={
//                                 <Link href={`/resources/${resourceD.id}/${subtopic.id}`}>
//                                     <a>{subtopic.title}</a>
//                                 </Link>
//                             }
//                         />
//                         <div style={{ marginTop: '10px' }}>
//                             {/* {subtopic?.url.map((link) => (
//                                 <div key={link.id}>
//                                     <Link href={`/resources/${resourceD.id}/${subtopic.id}/${link.id}`}>
//                                         <a>{link.title}</a>
//                                     </Link>
//                                 </div>
//                             ))} */}
//                         </div>
//                     </Card>
//                 ))}
//             </ConfigProvider>
//         </div>
//     );
// };

// export default ResourcePage;
import React from 'react';
import { List, ConfigProvider, theme, Divider } from 'antd';
import { useTheme } from 'next-themes';
import resourcesData from '../../components/data/resourceData';
import Link from 'next/link';
import { useRouter } from 'next/router';



const ResourcePage = () => {
    const router = useRouter();
    const { resource } = router.query;
    console.log("id", resource)
    const { resolvedTheme, setTheme } = useTheme();
    const { defaultAlgorithm, darkAlgorithm } = theme;


    const resourceD = resourcesData?.find((topic) => topic.id === parseInt(resource as string));

    if (!resourceD) {
        return <div>Resource not found.</div>;
    }

    return (
        <div className='w-full'>
            <h1>{resourceD.title}</h1>
            <ConfigProvider
                theme={{
                    algorithm: resolvedTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
                }}
            >
                <List
                    dataSource={resourceD.links}
                    renderItem={(link) => (
                        <List.Item>
                            <a href={link.url} target='blank'>{link.title}</a>
                        </List.Item>
                    )}
                />
                <Divider />
                <h1>Subtopics</h1>
                <List
                    dataSource={resourceD.subtopics}
                    renderItem={(subtopic) => (
                        <List.Item>
                            <h2>{subtopic.title}:</h2>

                            <List
                                dataSource={subtopic.subLinks}
                                renderItem={(subtopic) => (
                                    <List.Item>

                                        <a href={subtopic}>{subtopic}</a>

                                    </List.Item>
                                )}
                                className='ml-5'
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <h1>Moreover...</h1>
                <List
                    dataSource={resourceD.URLs}
                    renderItem={(url) => (
                        <List.Item>

                            <a href={url} target='blank'>{url}</a>


                        </List.Item>
                    )}
                />
                <Divider />

            </ConfigProvider>
        </div>
    );
};

export default ResourcePage;
