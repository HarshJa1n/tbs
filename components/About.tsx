import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'
import React from 'react';


const About = (): JSX.Element => {
	return (
		<section className="grid " id="about">
			<h1 className="text-4xl font-bold  mb-2 md:pb-0">{personalInfo.name}</h1>
			<p className="text-sm text-gray-600 mb-10">
				RESEARCH ASSISTANT UOFT AND UBC | RESEARCH INTERN IIIT DELHI |
				KAGGLE EXPERT | STUDENT IIIT BHOPAL
			</p>
			<div className="flex justify-between">

				<div className="flex flex-col max-w-xl w-full justify-evenly pr-4">

					<p className='mb-4'>
						{/* I am a {personalInfo.about.year} PhD student
						in <ExtLink href={personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href={personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink>
						advised by <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}. </ExtLink>
						<br /><a className="text-sm">✉️ {personalInfo.about.email}</a> */}
						{/* {personalInfo.about.description} */}
						My goal as a highly motivated BTech student is to pursue an academic path that will allow me to challenge myself,
						broaden my knowledge and skills, and make a meaningful contribution to the field of data science and research.
					</p>
					<p>
						I am
						excited to work with outstanding academics that have a wealth of experience and expertise, as well as cooperate
						with like-minded individuals who are motivated to attaining mutual goals.
					</p>

					<p className="text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
					<p className="text-sm text-gray-400">
						Under construction......<br />
						Re-architecting this site with some modern web technologies.
					</p>
				</div>
				<div className="mr-8 hidden md:block ">
					<ProfileImage></ProfileImage>
				</div>
			</div>

		</section >
	);
};

export default About;
