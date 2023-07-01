import ExtLink from './ExtLink'
import data from './data/personalInfo.json'
import React from 'react'
import { Card, ConfigProvider, Tag, Divider, theme } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import experienceData from '../components/data/experienceData';
import { useTheme } from 'next-themes';


const Education = (): JSX.Element => {
    const { resolvedTheme, setTheme } = useTheme();
    const { defaultAlgorithm, darkAlgorithm } = theme;
    return (
        <div>
            <h1 className="text-xl font-bold mt-12 mb-4">Research Experience</h1>
            {experienceData
                .filter((item) => item.category === 'Research Experience')
                .map((item, index) => (
                    <div key={index} className="m-2 w-full m-2 flex-shrink-0">
                        <ConfigProvider theme={{
                            algorithm: resolvedTheme == "dark" ? darkAlgorithm : defaultAlgorithm,
                        }}>
                            <Card
                                bordered={false}
                                style={{ width: '100%' }}
                                className="dark:inverse"
                                size="small"
                            >
                                <div className="flex justify-between">
                                    <h2 style={{ fontWeight: 'bold' }}>{item.title},<p className='text-gray-500'>{item.role}</p></h2>
                                    <div className="m-2">
                                        <CalendarOutlined rev="what" />
                                        <span className='ml-1'>{item.duration}</span>
                                    </div>
                                </div>
                                <Divider className="mt-2" />
                                <Card.Meta description={item.description} />
                                <div className="align-items-center mt-2 flex justify-between">
                                    <div className="d-flex">
                                        {item?.skills.map((category, index) => (
                                            <Tag key={index} color="blue" className="mt-1">
                                                {category}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </ConfigProvider>
                    </div>
                ))}
            <h1 className="text-xl font-bold mt-12 mb-4">Professional Experience</h1>
            {experienceData
                .filter((item) => item.category === 'Professional Experience')
                .map((item, index) => (
                    <div key={index} className="m-2 w-full m-2 flex-shrink-0">
                        <ConfigProvider
                            theme={{
                                algorithm: resolvedTheme == "dark" ? darkAlgorithm : defaultAlgorithm,
                            }}>
                            <Card
                                bordered={false}
                                style={{ width: '100%' }}
                                className="dark:inverse"
                                size="small"
                            >
                                <div className="flex justify-between">
                                    <h2 style={{ fontWeight: 'bold' }}>{item.title},<h3 className='text-gray-500'>{item.role}</h3></h2>
                                    <div className="m-2">
                                        <CalendarOutlined rev="what" />
                                        <span className='ml-1'>{item.duration}</span>
                                    </div>
                                </div>
                                <Divider className="mt-2" />
                                <Card.Meta description={item.description} />
                                <div className="align-items-center mt-2 flex justify-between">
                                    <div className="d-flex">
                                        {item.skills.map((category, index) => (
                                            <Tag key={index} color="blue" className="mt-1">
                                                {category}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </ConfigProvider>
                    </div>
                ))}
        </div>
    );
};



export default Education;
