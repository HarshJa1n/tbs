import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
	title: string;
	href: string;
}

const NavLink = ({ title, href }: Props): JSX.Element => {
	const router = useRouter();
	const [isHref, setIsHref] = useState(false);

	useEffect(() => {
		if (router.asPath === href) {
			setIsHref(true);
		} else {
			setIsHref(false);
		}
	}, [router.asPath, href]);

	console.log(router.asPath)

	return (
		<Link href={href}>
			<button
				type="button"
				// className="rounded-lg no-underline flex h-8 mr-0 pr-5 pl-5 items-center border-none cursor-pointer font-bold text-sm bg-auto"
				className={`rounded-lg no-underline flex h-8 mr-0 pr-5 pl-5 
					items-center border-none cursor-pointer font-bold text-sm 
					${isHref ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-auto'}`}
			>
				{title}
			</button>
		</Link>
	);
};

export default NavLink;
