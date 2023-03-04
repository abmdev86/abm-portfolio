import { Box, Grid, Paper, Typography } from '@mui/material';

export default function AboutMeCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ fontWeight: 700, wordSpacing: 25 }}>
          {`\u{1F44B}`}AUROIAH MORGAN
        </Typography>
        <Typography variant="h3" align="center">
          Fullstack Dev
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={24} sx={{ m: { xs: 2, md: 5 }, p: 4 }}>
          <Typography
            align="center"
            variant="h4"
            sx={{ fontWeight: 700, wordSpacing: 25 }}
          >
            Creativity. Innovation. Passion.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{
              letterSpacing: 1,
              lineHeight: 2,
              p: 3,
              fontWeight: 700,
              align: 'center',
            }}
          >
            Exceptional Fullstack software engineer {`\u{1F5A5}\uFE0F`},
            crafting creative, solid and scalable projects with great user
            experience, accessibility, optimized performance, and
            maintainability
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
