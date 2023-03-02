import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { } from "@mui/system";

export default function AppFooter() {
  return (
    <Container maxWidth="sm">
      <footer>
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          color="inherit"
          sx={{ flexShrink: 0, position: 'relative', width: '100%', clear: 'both', mt: 4, bottom: 0 }}
        >
          <Grid xs={12}>

            <Box sx={{ maxWidth: true }}>
              <Typography variant="subtitle1" sx={{ color: 'inherit', letterSpacing: 2, fontWeight: 600, textAlign: 'center', }} >

                <small>
                  Aurmor Designs
                  <CopyrightIcon />
                  2023

                </small>
              </Typography>
            </Box>



          </Grid>
          {/* <Grid xs={4}>
            <img alt="shopify-logo" src={SHOPIFY_LOGO} />
          </Grid> */}

        </Grid>
      </footer>

    </Container>


  );
}
