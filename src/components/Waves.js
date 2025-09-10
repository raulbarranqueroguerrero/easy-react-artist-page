import React, { useState, useEffect } from "react";
import Wave from "./../img/waves.png";

const Waves = () => {
	const [triggerWave, setTriggerWave] = useState(false);
	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const threshold = window.innerHeight * 0.8;
			if (e.clientY >= threshold && !triggerWave && !hasPlayed) {
				setTriggerWave(true);
				setHasPlayed(true);
				setTimeout(() => setTriggerWave(false), 3000);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [triggerWave, hasPlayed]);

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				height: "800px",
				pointerEvents: "none",
				overflow: "hidden",
				zIndex: 20,
			}}
		>
			{triggerWave && (
				<img
					src={Wave}
					alt="waves"
					style={{
						position: "absolute",
						bottom: 0,
						width: "50%",
						height: "auto",
						animation: "waveSlide 1.4s linear forwards",
					}}
				/>
			)}

			<style>
				{
					`
					@keyframes waveSlide {
						0% { left: -100%; opacity: 1; }
						50% { opacity: 1; }
						100% { left: 100%; opacity: 0; }
					}
					`
				}
			</style>
		</div>
	);
};

export default Waves;
