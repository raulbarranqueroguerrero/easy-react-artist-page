// App.js
import 'remixicon/fonts/remixicon.css';
import React from "react";
import { Songs } from "./components/Songs";
import Landing from './components/Landing';
import About from './components/About';
import Fire from './img/fire_video.mp4';
import Tour from './components/Tour';
import Gallery from './components/Gallery';
import { Contact } from './components/Contact';
import Waves from './components/Waves';


const App = () => {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: '#282c34',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			<Landing />
			<Waves />
			<About />
			<Tour />
			<Songs />
			<Gallery />
			<Contact />

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


			<style>
				{`
					@keyframes noiseMove {
						0% { transform: translate(0,0); }
						50% { transform: translate(-10%, -10%); }
						100% { transform: translate(0,0); }
					}
					@keyframes fireMove {
						0% { transform: translateX(0); }
						100% { transform: translateX(-50%); }
					}

					@keyframes fireWave {
						0% { transform: translateY(0) scaleY(1); }
						50% { transform: translateY(-5%) scaleY(1.05); }
						100% { transform: translateY(0) scaleY(1); }
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
};

export default App;
