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
import { isMobile } from './utils/screen';
import Backgrounds from './components/Backgrounds';

export const HomePage = () => (
	<div
		style={{
			width: '100%',
			overflowX: 'hidden',
			position: 'relative',
			zIndex: 1,
			backgroundColor: '#282c34',
		}}
	>
		<Backgrounds />
		<Landing />
		<Waves />
		<About />
		<Tour />
		<Songs />
		<Gallery />
		<Contact />
	</div>
);

const ElSalonPage = () => (
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
				marginTop: '2rem'
			}}
			onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ff6666'}
			onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
		>
			Back to home page
		</Link>
	</div>
);

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/elsalon" element={<ElSalonPage />} />
		</Routes>
	</Router>
);

export default App;
