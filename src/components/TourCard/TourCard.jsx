import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { AccessTime } from '@mui/icons-material';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: 'body2',
					},
					style: {
						fontSize: '1.1rem',
					},
				},
				{
					props: {
						variant: 'body3',
					},
					style: {
						fontSize: '1rem',
					},
				},
			],
		},
	},
});

const TourCard = (props) => {
	const tour = props.tour;
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper elevation={3}>
					<img src={tour.image} alt={tour.name} className='img' />
					<Box paddingX={1}>
						<Typography variant='subtitle1' component='h3'>
							{tour.name}
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}>
							<AccessTime
								sx={{
									width: 12.5,
								}}
							/>
							<Typography variant='body2' component='p' marginLeft={0.5}>
								{tour.duration} Hour{tour.duration > 1 && 's'}
							</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
							paddingX={1}
							marginTop={2}>
							<Rating
								name='read-only'
								value={4.5}
								readOnly
								precision={0.5}
								size='small'
							/>
							<Typography variant='body2' component='p' marginLeft={0.5}>
								{tour.rating}
							</Typography>
							<Typography variant='body3' component='p' marginLeft={1.5}>
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
							paddingX={1}
							marginTop={2}
							paddingBottom={1}>
							<Typography variant='h6' component='h3' marginTop={0}>
								From £149
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
