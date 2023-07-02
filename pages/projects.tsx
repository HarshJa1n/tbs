import React from 'react';
import { Card, theme, ConfigProvider, Divider } from 'antd';
import projectsData from '../components/data/projectData';
import { LinkOutlined } from '@ant-design/icons';
import { useTheme } from 'next-themes';

const { Meta } = Card;

const ProjectsPage = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const { defaultAlgorithm, darkAlgorithm } = theme;
    return (
        <div >
            <h1 className='text-xl font-bold  mb-4'>My Projects</h1>
            {projectsData.map((project, index) => (
                <ConfigProvider
                    theme={{
                        algorithm: resolvedTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
                    }}
                    key={index}>
                    <Card key={index} style={{ width: '100%', marginBottom: 10 }}>
                        <Meta
                            title={<h2 style={{ fontWeight: 'bold' }}>{project.title}</h2>}
                        />
                        <Divider className="mt-2 mb-2" />
                        <p className='text-gray-500'>{project.duration}</p>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='mt-5 text-blue-500'>
                            Learn More<LinkOutlined style={{ marginLeft: 5, }} rev="wr" />
                        </a>
                    </Card>
                </ConfigProvider>
            ))}
        </div>
    );
};

export default ProjectsPage;
