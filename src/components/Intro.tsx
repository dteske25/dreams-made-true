import { Container, Grid, Typography, IconButton, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

import "./Intro.css";

const Intro = () => {
  return (
    <header className='intro' style={{ height: "100vh" }}>
      <Container maxWidth='lg' style={{ marginTop: 250 }}>
        <Grid container>
          <Grid
            item
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12}>
              <Typography variant='h1' align='center'>
                Dreams Made True
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center'>
                An organization dedicated to improving the lives of Iowa girls
                with special needs.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ScrollLink smooth spy to='about' offset={-100}>
                <IconButton>
                  <KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 70 }} />
                </IconButton>
              </ScrollLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Intro;
