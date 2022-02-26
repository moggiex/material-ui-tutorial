// Components
// import TourCard from '../TourCard/TourCard';
import SearchAppBar from '../Appbar/Appbar';

// Material Ui
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import cities from '../../data.json';
import { Typography } from '@mui/material';

const NotFound = () => {
	return (
		<>
			<SearchAppBar />

			<Container>
				<Typography variant='h1' component='div' marginTop={5} marginBottom={3}>
					404
				</Typography>
				<Typography variant='body' component='p' marginTop={5} marginBottom={3}>
					Ah balls, no findy this page.
				</Typography>
			</Container>
		</>
	);
};

export default NotFound;
