import { isMobile } from "../utils/screen";

export const LinkIcon = ({ href, alt, icon }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			alt={alt}
			className={icon}
			style={{
				fontSize: isMobile ? '2rem' : '3.5rem',
				margin: '0 1rem',
				color: 'white',
				textDecoration: 'none',
				outline: 'none'
			}}
			onMouseDown={(e) => e.preventDefault()}
		>
		</a>
	);
};
