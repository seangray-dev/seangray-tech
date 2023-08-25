import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import ContactLink from './ContactLink';

const social_links = [
	{
		icon: <Linkedin size={30} />,
		href: 'https://www.linkedin.com/in/seangray-dev/',
	},
	{
		icon: <Github size={30} />,
		href: 'https://github.com/seangray-dev',
	},
];

const Header = () => {
	return (
		<header className='mt-5 flex flex-col gap-5 md:gap-24'>
			<div className='md:flex md:justify-between'>
				<div className='text-center mb-5 md:mb-0'>
					<Link
						className='font-bold text-3xl hover:text-primary transition-all duration-300'
						href={'/'}>
						seangray
					</Link>
				</div>
				<div className='flex justify-center gap-10'>
					{social_links.map((link) => {
						return (
							<a
								className='text-2xl hover:text-primary transition-all duration-300'
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'>
								{link.icon}
							</a>
						);
					})}
				</div>
			</div>
			<div className='text-center md:text-left md:max-w-md xl:max-w-3xl flex flex-col gap-6 md:gap-16'>
				<h1 className='text-4xl md:text-7xl font-bold'>
					Nice to meet you! I'm <br />
					<span className='underline underline-offset-8 decoration-primary'>
						Sean Gray
					</span>
					.
				</h1>
				<p className='font-medium md:text-[18px]'>
					Based in Canada, I'm a web/software developer and founder of{' '}
					<Link
						className='text-primary hover:text-white hover:underline transition-all duration-300'
						href={'https://filelaunch.io'}
						target='_blank'
						rel='noopener noreferrer'>
						filelaunch.io
					</Link>
				</p>
				<ContactLink />
			</div>
		</header>
	);
};

export default Header;
