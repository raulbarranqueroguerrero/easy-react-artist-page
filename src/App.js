// App.js
import 'remixicon/fonts/remixicon.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from './components/Landing';
import Waves from './components/Waves';
import About from './components/About';
import Tour from './components/Tour';
import { Songs } from './components/Songs';
import Gallery from './components/Gallery';
import { Contact } from './components/Contact';
import ElSalonForm from './components/ElSalonForm';
import Fire from './img/fire_video.mp4';
import { isMobile } from './utils/screen';

export const HomePage = () => {
	return (
		<div
			style={{
				width: '100%',
				overflowX: 'hidden',
				position: 'relative',
				backgroundColor: '#282c34',
			}}
		>
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					overflow: 'hidden',
					zIndex: -1,
				}}
			>
				<video
					src={Fire}
					autoPlay
					loop
					muted
					style={{
						width: '150%',
						height: '150%',
						objectFit: 'cover',
						opacity: 0.015,
						mixBlendMode: 'screen',
						animation: 'fireCircle 10s ease-in-out infinite',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '200%',
						height: '200%',
						backgroundImage: `url("https://www.transparenttextures.com/patterns/noisy.png")`,
						backgroundRepeat: 'repeat',
						opacity: 0.5,
						mixBlendMode: 'screen',
						animation: 'noiseMove 60s infinite linear',
					}}
				/>
			</div>

			<Landing />
			<Waves />
			<About />
			<Tour />
			<Songs />
			<Gallery />
			<Contact />

			<style>
				{`
					@keyframes fireCircle {
						0%   { transform: translate(0%, 0%) rotate(0deg); }
						25%  { transform: translate(2%, -1%) rotate(1deg); }
						50%  { transform: translate(0%, 2%) rotate(0deg); }
						75%  { transform: translate(-2%, -1%) rotate(-1deg); }
						100% { transform: translate(0%, 0%) rotate(0deg); }
					}
				`}
			</style>
		</div>
	);
};


const ElSalonPage = () => {
	return (
		<div
			style={{
				width: isMobile ? '100vw' : '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				overflowX: isMobile ? 'hidden' : 'visible',
				padding: '1rem',
				boxSizing: 'border-box',
				backgroundColor: '#282c34',
			}}
		>
			<div
				style={{
					width: isMobile ? '100vw' : '800px',
					maxWidth: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ElSalonForm style={{ width: '100%', maxWidth: '100%' }} />
			</div>
			<Link
				to="/"
				style={{
					color: 'white',
					textDecoration: 'none',
					border: '2px solid white',
					padding: '1rem 1.5rem',
					borderRadius: '50px',
					cursor: 'pointer',
					transition: '0.3s',
					textAlign: 'center',
					display: 'inline-block',
				}}
				onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ff6666'}
				onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
			>
				Back to home page
			</Link>

		</div>
	);
};

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/elsalon" element={<ElSalonPage />} />
		</Routes>
	</Router>
);

export default App;
