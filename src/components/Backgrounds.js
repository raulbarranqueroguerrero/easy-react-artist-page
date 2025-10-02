import React from "react";
import Fire from '../img/fire.gif';

const Backgrounds = () => (
	<div
		style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			overflow: 'hidden',
			zIndex: 10
		}}
	>
		{/* Fuego */}
		<img
			src={Fire}
			alt="fire"
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '150%',
				height: '150%',
				objectFit: 'cover',
				opacity: 0.025,
				mixBlendMode: 'screen',
				animation: 'fireCircle 10s ease-in-out infinite'
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
				opacity: 0.55,
				mixBlendMode: 'screen',
				animation: 'noiseMove 60s infinite linear',
			}}
		/>

		<style>
			{`
        @keyframes fireCircle {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          25%  { transform: translate(2%, -1%) rotate(1deg); }
          50%  { transform: translate(0%, 2%) rotate(0deg); }
          75%  { transform: translate(-2%, -1%) rotate(-1deg); }
          100% { transform: translate(0%, 0%) rotate(0deg); }
        }

        @keyframes noiseMove {
          0% { transform: translate(0,0); }
          50% { transform: translate(-10%, -10%); }
          100% { transform: translate(0,0); }
        }
      `}
		</style>
	</div>
);

export default Backgrounds;
