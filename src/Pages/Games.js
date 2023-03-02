import { Divider, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { GAMES } from '../data/';
import { orange } from '@mui/material/colors';
export default function Games() {
  return (
    <Grid container spacing={2}>
      {GAMES.map((game, index) => (
        <Grid
          key={index}
          xs={6}
          sx={{ width: { xs: '100%', md: '50%' }, m: 'auto', p: 4 }}
        >
          <Paper
            elevation={24}
            sx={{ textAlign: 'center', position: 'relative', m: 'auto', p: 1 }}
          >
            <Box
              sx={{
                p: 1.5,
                bgcolor: 'background.secondary',
                display: 'flex',
              }}
            >
              <img
                alt={`${game.title}'s thumbnail`}
                src={game.img}
                height={125}
                width={125}
                style={{ margin: 'auto' }}
              />
            </Box>
            <Typography variant="h3">{game.title}</Typography>
            <Divider sx={{ m: 2 }} />
            <Typography
              variant="h6"
              component="a"
              href={game.url}
              sx={{
                textDecoration: 'none',
                color: orange[700],
                backgroundColor: 'black',
                p: '0.5rem',
              }}
              align="center"
            >
              PLAY
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
