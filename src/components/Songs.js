import { Spotify } from "react-spotify-embed";
import { ElCaminoMasargoAlbum, PatriciaAlbum, YoNoQuieroSerTuAmigoSong, } from "../constants";
import { isMobile } from "../utils/screen";

export const Songs = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				margin: isMobile ? '3rem 0 auto' : "8rem 2rem 4rem 2rem",
				gap: '4rem',
				alignItems: 'center',
				flexDirection: isMobile && 'column',
				zIndex: 12,
			}}
		>
			<h2
				style={{
					marginBottom: '3.5rem',
					textAlign: 'center',
					fontFamily: "'Bebas Neue', sans-serif",
					fontSize: isMobile ? '4rem' : '5.5rem',
					margin: 0,
					letterSpacing: '5px',
					color: 'white'
				}}
			>
				Music
			</h2>

			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: isMobile && 'column',
					margin: isMobile ? '1rem 0' : '2rem 0',
					alignItems: 'center'
				}}
			>
				<Spotify
					link={ElCaminoMasargoAlbum}
					style={{
						marginRight: !isMobile && '1rem',
						filter: 'grayscale(45%) contrast(120%)'
					}}
				/>
				<Spotify
					link={YoNoQuieroSerTuAmigoSong}
					style={{
						width: isMobile && '90%',
						margin: !isMobile && '0 5rem',
						marginTop: isMobile && '2.5rem',
						filter: 'grayscale(45%) contrast(120%)'

					}}
				/>
				{!isMobile
					&& <Spotify
						link={PatriciaAlbum}
						style={{
							marginRight: !isMobile && '1rem',
							filter: 'grayscale(45%) contrast(120%)'
						}}
					/>
				}
				s			</div>
		</div >
	);
};