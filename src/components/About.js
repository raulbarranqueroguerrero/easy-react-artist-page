import { isMobile } from "../utils/screen";
import AboutPhoto from '../img/live_pic_07.jpg';

const About = () => {
	return (
		<div
			style={{
				width: '100%',
				height: isMobile ? '100%' : '80vh',
				display: 'flex',
				flexDirection: isMobile ? 'column' : 'row',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'black',
				gap: '2rem'
			}}
		>
			{!isMobile
				&& <>
					<div
						style={{
							width: isMobile ? '80%' : '50%',
							height: isMobile ? 'auto' : '80vh',
							overflow: 'hidden',
							borderRadius: '12px',
						}}
					>
						<img
							src={AboutPhoto}
							alt="Yo Vivo Navegando live"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								transform: 'scale(1.2)',
								transition: 'transform 0.5s ease-in-out',
							}}
						/>
					</div>
					<div style={{
						color: 'white',
						width: isMobile ? '90%' : '50%',
						fontSize: isMobile ? '1rem' : '1.2rem',
						lineHeight: '1.6',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '5rem'
					}}>
						<p
							style={{
								textAlign: isMobile ? 'center' : 'left',
								fontFamily: "'Montserrat', sans-serif",
							}}
						>
							Alabados estudios científicos
							demuestran que acariciar a tu gatito
							durante 10 minutos al día reduce la
							presión arterial.
							<br /><br />
							Eso es exactamente lo que buscamos
							<br /><br />
							Una banda que mezcla indie, bossa, rock y psicodelia.
							<br /><br />

							Ellos lo llaman <b>INDIE CHILL ROCK 420

							</b>

						</p>
					</div>
				</>
			}
			{isMobile
				&& <div style={{ margin: '2rem 0' }}>
					<div style={{
						color: 'white',
						width: isMobile ? '90%' : '72%',
						fontSize: isMobile ? '1rem' : '1.2rem',
						lineHeight: '1.6',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: isMobile ? '0 auto' : '0 2rem'
					}}>
						<p
							style={{
								textAlign: isMobile ? 'center' : 'left',
								fontFamily: "'Montserrat', sans-serif",
								fontSize: isMobile && '14px',
								padding: '0 0 2rem 0 '
							}}
						>
							Alabados estudios científicos
							demuestran que acariciar a tu gatito
							durante 10 minutos al día reduce la
							presión arterial.
							<br /><br />
							Eso es exactamente lo que buscamos
							<br /><br />
							Una banda que mezcla indie, bossa, rock y psicodelia.
							<br /><br />

							Ellos lo llaman <b>INDIE CHILL ROCK 420</b>

						</p>
					</div>

					<div
						style={{
							width: isMobile ? '100%' : '50%',
							height: isMobile ? '65vh' : '80vh',
							overflow: 'hidden',
							borderRadius: '12px',
							margin: isMobile && '0 auto'
						}}
					>
						<img
							src={AboutPhoto}
							alt="Yo Vivo Navegando live"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								transform: 'scale(1.9)',
								transition: 'transform 0.5s ease-in-out',

							}}
						/>
					</div>
				</div>
			}
		</div>
	);
};

export default About;
