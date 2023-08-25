import Link from 'next/link';
import React from 'react';

const ContactLink = () => {
	return (
		<Link
			href={'#contact'}
			className='font-bold uppercase hover:bg-transparent underline underline-offset-8 decoration-primary hover:text-primary transition-all duration-300'>
			Contact Me
		</Link>
	);
};

export default ContactLink;
