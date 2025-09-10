
import React from "react";
import { isMobile } from "../utils/screen";
import TourPhoto from '../img/live_pic_08.jpg';

const Tour = () => {
	React.useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://widget.bandsintown.com/main.min.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			style={{
				width: '100%',
				minHeight: '80vh',
				display: 'flex',
				flexDirection: isMobile ? 'column' : 'row',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'black',
				gap: '2rem',
				marginBottom: '2rem',
			}}
		>
			<div
				style={{
					width: isMobile ? '90%' : '50%',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: 'Arial, sans-serif',
					zIndex: 12
				}}
			>
				<h2
					style={{
						textAlign: 'center',
						fontFamily: "'Bebas Neue', sans-serif",
						fontSize: isMobile ? '4rem' : '5.5rem',
						margin: 0,
						paddgingBottom: '4rem',
						letterSpacing: '5px',
						padding: '1rem'
					}}
				>
					Tour
				</h2>

				<a
					className="bit-widget-initializer"
					data-artist-name="Yo Vivo Navegando"
					data-display-local-dates="true"
					data-display-past-dates="true"
					data-auto-style="true"
					data-background-color="transparent"
					data-link-text-color="#ffffff"
					data-text-color="#ffffff"
					data-display-limit="3"
				></a>
			</div>

			<div
				style={{
					width: isMobile ? '100%' : '50%',
					height: isMobile ? '65vh' : '80vh',
					overflow: 'hidden',
					borderRadius: !isMobile && '12px',
				}}
			>
				<img
					src={TourPhoto}
					alt="Yo Vivo Navegando live"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "50% 80%", // desplaza la imagen hacia abajo
						transition: "object-position 0.5s ease-in-out",
						transform: isMobile ? 'scale(1.6)' : 'scale(1.2)',

					}}
				/>

			</div>

			<style>
				{`
					.bit-widget {
						background: transparent !important;
						border: none !important;
						font-family: 'Arial', sans-serif !important;
					}

					.bit-widget iframe {
						width: 100% !important;
						min-height: 400px;
						filter: grayscale(100%) contrast(120%);
						background: transparent !important;
					}

					.bit-widget a {
						color: #fff !important;
						text-decoration: none !important;
					}

					.bit-play-my-city-button {
						background: none !important;
						background-color: none !important;
						color: #fff !important;
						border: 1px solid #fff !important;
						border-radius: 4px;
						padding: 0.4rem 0.8rem;
						font-size: 0.9rem;
						margin-bottom: 0.5rem;
					}
					.bit-widget .bit-event .bit-details a,
					.bit-widget .bit-event .bit-offers-menu a {
						background: none !important;
						color: #fff !important;
						border: 1px solid #fff !important;
						border-radius: 4px;
						padding: 0.4rem 0.8rem;
						font-size: 0.9rem;
						margin-bottom: 0.5rem;
						text-decoration: none !important; /* opcional, por si quieres quitar subrayado */
					}

					.bit-widget .bit-event .bit-rsvp-container {
					display: none !important;
					}

					.bit-play-my-city-button {
						background: rgba(255, 255, 255, 0.5) !important; /* white, 50% transparent */
						color: black !important;
					}

					.bit-event-list-title,
					.bit-clickable,
					.bit-show-past {
						color: #7088adff !important;
					}

					.bit-venue {
					color: #ad7070ff !important;
						font-weight: 700;
					}
					.bit-logo-mobile,
					.bit-logo-desktop {
						display: none !important; 
					}
				`}
			</style>
		</div>
	);
};

export default Tour;
