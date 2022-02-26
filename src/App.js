// import logo from './logo.svg';
import './App.css';

// Components
import TourCard from './components/TourCard/TourCard'

// Material Ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="App">
      <Container>

        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>

      </Container>
    </div>
  );
}

export default App;
