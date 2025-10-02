// App.js
import 'remixicon/fonts/remixicon.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Landing from './components/Landing';
import Waves from './components/Waves';
import About from './components/About';
import Tour from './components/Tour';
import { Songs } from './components/Songs';
import Gallery from './components/Gallery';
import { Contact } from './components/Contact';
import ElSalonForm from './components/ElSalonForm';
import Fire from './img/fire_video.mp4';

const HomePage = () => (
	<div
		style={{
			width: '100%',
			height: '100vh',
			minHeight: '100vh',
			backgroundColor: '#282c34',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			overflow: 'hidden',
			position: 'relative',
		}}
	>
		<div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 10 }}>
			<video
				src={Fire}
				autoPlay
				loop
				muted
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
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
				@keyframes noiseMove {
				0% { transform: translate(0,0); }
				50% { transform: translate(-10%, -10%); }
				100% { transform: translate(0,0); }
				}
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

const ElSalonPage = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
				padding: '2rem',
				backgroundColor: '#282c34',
				boxSizing: 'border-box',
			}}
		>
			<ElSalonForm />
			<button
				onClick={() => navigate("/")}
				style={{
					marginTop: '2rem',
					padding: '0.75rem 1.5rem',
					fontSize: '1rem',
					cursor: 'pointer',
					borderRadius: '6px',
					border: 'none',
					backgroundColor: '#fff',
					color: '#282c34',
				}}
			>
				Back to Home
			</button>
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
