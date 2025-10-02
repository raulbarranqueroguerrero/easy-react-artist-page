// ElSalonForm.js
import React from "react";
import { isMobile } from "react-device-detect";

const ElSalonForm = () => {
	const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScatm9dm58AccPB9xkGg9wsA3P-6qQMR6v8MBqOztBKxRD--g/viewform?usp=sharing&ouid=104438470978826541180";

	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: isMobile ? '1.25rem' : '2rem',
				backgroundColor: '#282c34',
				boxSizing: 'border-box',
			}}
		>
			<iframe
				src={formUrl}
				title="Formulario El Salón"
				width="100%"
				height="800px"
				style={{
					border: 'none',
					borderRadius: '16px',
					maxWidth: '800px',
					width: '100%',
					height: '80vh',
					boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
					backgroundColor: 'white',
				}}
			/>
		</div>
	);
};

export default ElSalonForm;
