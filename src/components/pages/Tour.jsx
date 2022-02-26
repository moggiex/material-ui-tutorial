import { useParams } from 'react-router-dom';

// Components
import TourCard from '../TourCard/TourCard';
import SearchAppBar from '../Appbar/Appbar';
import ImageCollage from '../ImageCollage/ImageCollage';
import CustomizedAccordions from '../Accordian/Accordian';
import BottomNavigation from '../BottomNav/BottomNav';

// Material Ui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import cities from '../../data.json';
import { Typography } from '@mui/material';

const Tour = () => {
	// This is dirty, but hey it'll work

	const { tourId } = useParams();

	return (
		<>
			<Container>
				<Typography variant='h2' component='h1' marginTop={5} marginBottom={3}>
					Explore the World
				</Typography>
				<Box margnTop={3} sx={{ display: 'flex' }}>
					<img
						src='https://media.timeout.com/images/105124791/750/422/image.jpg'
						alt='las vegas'
						height={325}
					/>
					<ImageCollage />
				</Box>
				<Box>
					<Typography variant='h6' component='h4' marginTop={3}>
						About this ticket
					</Typography>
					<Typography variant='paragraph' component='p' marginTop={3}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
						vel? Totam provident quidem cupiditate cum enim quod ad hic,
						laudantium nisi et sint inventore architecto saepe aliquid
						quibusdam, dolorum omnis. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Tempora, vel? Totam provident quidem cupiditate
						cum enim quod ad hic, laudantium nisi et sint inventore architecto
						saepe aliquid quibusdam, dolorum omnis.
					</Typography>
				</Box>
				<Box>
					<Typography
						variant='h6'
						component='h4'
						marginTop={3}
						marginBottom={2}>
						Frequently asked Questions
					</Typography>
					<CustomizedAccordions />
				</Box>

				<Paper
					sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
					elevation={3}>
					<BottomNavigation />
				</Paper>
			</Container>
		</>
	);
};

export default Tour;
