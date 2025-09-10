import { isMobile } from "../utils/screen";
import { Links } from "./Links";

export const Contact = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div
			style={{
				width: '100%',
				height: isMobile ? '75vh' : '75vh',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: 'Arial, sans-serif',
				zIndex: 12,
			}}
		>
			<h2
				style={{
					marginBottom: '1rem',
					textAlign: 'center',
					fontFamily: "'Bebas Neue', sans-serif",
					fontSize: isMobile ? '4rem' : '10rem',
					margin: 0,
					letterSpacing: '5px',
				}}
			>
				Contact
			</h2>
			<p
				style={{
					fontSize: '1.25rem',
					maxWidth: '700px',
					marginBottom: isMobile ? '2rem' : '5rem',
					fontFamily: "'Montserrat', sans-serif",
					marginTop: '0'
				}}
			>

				mail@yovivonavegando.com
			</p>
			<div style={{ marginTop: '2rem' }}>

				<Links />
			</div>
			<button
				onClick={scrollToTop}
				style={{
					marginTop: '2rem',
					backgroundColor: 'transparent',
					color: 'white',
					border: 'solid white 2px',
					padding: '0.8rem 1.2rem',
					borderRadius: '50px',
					fontSize: '1rem',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					gap: '0.5rem',
					boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
					zIndex: 1000,
				}}
				onMouseOver={e => (e.currentTarget.style.backgroundColor = '#ff6666')}
				onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
			>
				↑ O piénsalo dos veces
			</button>
		</div>
	);
};
