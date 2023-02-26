import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function AppFooter() {
  return (
    <footer>
      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        color="primary"
        sx={{ flexShrink: 0, position: 'relative', width: '100%', height: '2.5rem', clear: 'both' }}
      >
        <Grid xs={12}>


          <Typography variant="subtitle1" sx={{ color: 'inherit', letterSpacing: 2, fontWeight: 600, textAlign: 'center', }} >

            <small>
              Aurmor Designs
              <CopyrightIcon />
              2023

            </small>
          </Typography>


        </Grid>

      </Grid>
    </footer>

  );
}
