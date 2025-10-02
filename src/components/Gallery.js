import React, { useState } from "react";
import live_pic_01 from ".././img/live_pic_01.webp";
import live_pic_02 from ".././img/live_pic_02.webp";
import live_pic_04 from ".././img/live_pic_04.webp";
import live_pic_14 from ".././img/live_pic_14.webp";
import live_pic_16 from ".././img/live_pic_16.webp";
import live_pic_17 from ".././img/live_pic_17.webp";
import PressKit from '../docs/Press_kit.pdf';

import { isMobile } from "../utils/screen";



const Gallery = () => {
	const images = [live_pic_01, live_pic_02, live_pic_04, live_pic_14, live_pic_16, live_pic_17];
	const [currentIndex, setCurrentIndex] = useState(0);

	React.useEffect(() => {
		images.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	});

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const downloadPressKit = () => {
		const link = document.createElement('a');
		link.href = PressKit;
		link.download = 'YoVivoNavegando_PressKit.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				cursor: "pointer",
				margin: isMobile ? '2rem' : '4rem'
			}}
		>

			<h2
				style={{
					marginBottom: '3.5rem',
					textAlign: 'center',
					fontFamily: "'Bebas Neue', sans-serif",
					fontSize: isMobile ? '4rem' : '5.5rem',
					margin: isMobile ? '2rem' : 0,
					letterSpacing: '5px',
					color: 'white'
				}}
			>
				Shows
			</h2>
			<div
				style={{
					maxWidth: "800px",
					boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
					background: "black",
					overflow: "hidden",
					borderRadius: "16px",
					margin: isMobile ? '1rem auto' : "0 auto",
					zIndex: 12
				}}
			>
				<img
					src={images[currentIndex]}
					alt={`gallery-${currentIndex}`}
					loading="lazy"
					style={{
						width: "100%",
						maxHeight: "70vh",
						minHeight: "60vh",
						objectFit: "contain",
						display: "block",
						backgroundColor: "black",
						transition: "all 0.5s ease",
						transform: isMobile && 'scale(1.9)',
					}}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: isMobile ? '2.5rem 0 4rem 0' : '2rem',
				}}
			>
				<button
					onClick={downloadPressKit}
					style={{
						backgroundColor: 'transparent',
						color: 'white',
						border: 'solid white 2px',
						padding: '0.8rem 1.2rem',
						borderRadius: '50px',
						fontSize: '1rem',
						cursor: 'pointer',

						alignItems: 'center',
						gap: '0.5rem',
						boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
						zIndex: 1000,
					}}
					onMouseOver={e => (e.currentTarget.style.backgroundColor = '#ff6666')}
					onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
				>
					Download Press Kit
				</button>
			</div>

			<div
				onClick={prevSlide}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "50%",
					height: "100%",
					zIndex: 12,
				}}
			/>

			<div
				onClick={nextSlide}
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					width: "50%",
					height: "100%",
					zIndex: 12,
				}}
			/>
		</div>
	);
};

export default Gallery;
