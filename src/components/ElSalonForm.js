// ElSalonForm.js
import React from "react";
import { Link } from "react-router-dom";

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
				padding: '2rem',
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

			<Link
				to="/"
				style={{
					marginTop: '2rem',
					color: 'white',
					textDecoration: 'none',
					border: '2px solid white',
					padding: '0.8rem 1.2rem',
					borderRadius: '50px',
					cursor: 'pointer',
					transition: '0.3s',
					textAlign: 'center',
				}}
				onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ff6666'}
				onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
			>
				Back to home page
			</Link>
		</div>
	);
};

export default ElSalonForm;
