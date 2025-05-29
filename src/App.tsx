import { Box, Container, Divider, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProTip from './ProTip';
import Copyright from './Copyright';
import StateExamples_Counter from './components/useStateExamples';
import CallbackExamples_List from './components/useCallbackExamples';
import { RefExamples_Counter, RefExamples_Input } from './components/useRefExamples';
import { ContextExamples_Dashboard } from './components/useContextExamples';
import { ImperativeHandleExamples_Counter } from './components/useImperativeHandleExamples';

const useStyles = makeStyles(() => ({
    bgBlue: {
      backgroundColor: 'lightgray',
    }
  }));
  
export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>React examples using TypeScript, Material UI & Vite</Typography>

        <Grid container spacing={2}>
          <Grid size={4} padding={2} className={classes.bgBlue}>
            <Typography variant="h4">useState</Typography>
            <StateExamples_Counter />
          </Grid>

          <Grid size={4} padding={2} className={classes.bgBlue}>
            <Typography variant="h4">useRef</Typography>
            <RefExamples_Counter />
            <br />
            <Divider />
            <br />
            <RefExamples_Input />
          </Grid>

          <Grid size={4} padding={2} className={classes.bgBlue}>
            <Typography variant="h4">useContext</Typography>
            <ContextExamples_Dashboard />
          </Grid>

          <Grid size={4} padding={2} className={classes.bgBlue}>
            <Typography variant="h4">useImperativeHandle</Typography>
            <ImperativeHandleExamples_Counter />
          </Grid>

          <Grid size={4} padding={2} className={classes.bgBlue}>
            <Typography variant="h4">useCallback</Typography>
            <CallbackExamples_List />
          </Grid>
        </Grid>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
