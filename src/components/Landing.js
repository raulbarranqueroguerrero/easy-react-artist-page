import React from "react";
import { isMobile } from "../utils/screen";
import MainPhoto from '../img/landing.jpg';
import { Spotify } from "react-spotify-embed";
import { HacerloBienSong } from "../constants";


const Landing = () => {
	const titleWords = ["Yo", "Vivo", "Navegando"];
	const [transforms, setTransforms] = React.useState(
		titleWords.map(() => ({ scale: 1, rotate: 0 }))
	);

	const randomTransform = () => ({
		scale: 1 + Math.random() * (isMobile ? 1.4 : 4),
		rotate: (Math.random() * (isMobile ? 40 : 60)) - (isMobile ? 1600 : 180),
	});

	const handleMouseEnter = (idx) => {
		const newTransforms = titleWords.map(() => ({ scale: 1, rotate: 0 }));
		newTransforms[idx] = randomTransform();
		setTransforms(newTransforms);
	};

	const handleMouseLeave = () => {
		setTransforms(titleWords.map(() => ({ scale: 1, rotate: 0 })));
	};

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				position: 'relative',
				overflow: 'hidden',
				background: 'black',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '100%',
					backgroundImage: `url(${MainPhoto})`,
					backgroundRepeat: 'repeat-x',
					backgroundSize: 'cover',
					filter: 'brightness(0.60)',
					transform: isMobile ? 'scale(1.35)' : 'scale(1.2)',
					animation: isMobile ? 'panBackground 200s linear infinite' : 'none',
				}}
			/>
			<div style={{
				width: '100%',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				textAlign: 'center',
				color: 'white',
				zIndex: 15
			}}>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h1
						style={{
							fontFamily: "'Bebas Neue', sans-serif",
							fontSize: isMobile ? '4.75rem' : "6rem",
							margin: 0,
							display: !isMobile && "flex",
							gap: "1rem",
							color: "white",
							letterSpacing: isMobile && '10px'
						}}
					>
						{titleWords.map((word, idx) => (
							<span
								key={idx}
								onMouseEnter={() => handleMouseEnter(idx)}
								onMouseLeave={handleMouseLeave}
								style={{
									display: "inline-block",
									transform: `scale(${transforms[idx].scale}) rotate(${transforms[idx].rotate}deg)`,
									transition: "transform 0.3s ease",
									cursor: "pointer",
									margin: '.35rem'
								}}
							>
								{word}
							</span>
						))}
					</h1>
				</div>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: isMobile ? '1rem' : '1.5rem',
					textAlign: 'center',
					marginTop: isMobile && '2rem'
				}}>
					<p style={{
						fontFamily: "'Montserrat', sans-serif",
						fontSize: isMobile ? '1.25rem' : '1.5rem',
						margin: 0,
						fontWeight: '300',
					}}>
						Bienvenido al valle del
					</p>
					<p style={{
						fontFamily: "'Montserrat', sans-serif",
						fontSize: isMobile ? '2rem' : '2.25rem',
						margin: 0,
						fontWeight: '300',
					}}>
						INDIE CHILL ROCK
					</p>
					<div style={{ marginTop: isMobile ? '0.5rem' : '1rem' }} >
						<Spotify
							link={HacerloBienSong}
							style={{ width: '100%', height: '100%' }}
						/>
					</div>
				</div>
			</div>


			<style>
				{`
					@keyframes panBackground {
						0% { background-position-x: 0; }
						100% { background-position-x: 100%; }
					}
				`}
			</style>

		</div >
	);
};

export default Landing;
