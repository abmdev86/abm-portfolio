import { Typography, Paper, Container, Box } from '@mui/material';

import CopyrightIcon from '@mui/icons-material/Copyright';

export default function AppFooter() {
  return (
    <Paper
      sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
      component="footer"
      variant='outlined'
    >
      <Container maxWidth="md">
        <Box sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          my: 1
        }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'inherit',
              letterSpacing: 2,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            <small>
              Aurmor Designs
              <CopyrightIcon />
              2023
            </small>
          </Typography>

        </Box>
      </Container>

    </Paper>
  );
}
