import { Grid, Typography } from "@mui/material";
import Section from "./Section";

const About = () => (
  <Section sectionClassName='about' sectionTitle='About Dreams Made True, Inc.'>
    <Grid item>
      <Typography align='center'>
        Dreams Made True, Inc. was founded in 2010 by David and Dayna Teske
        after being inspired by their daughter, Daleney Marie Teske.
      </Typography>
    </Grid>
    <Grid item>
      <Typography align='center'>
        They took her initials, DMT, and created Dreams Made True, Inc., a
        non-profit organization dedicated to enhancing the lives of girls with
        special needs, ages 5-25, and providing their families the opportunity
        to connect with and learn from each other.
      </Typography>
    </Grid>
    <Grid item>
      <Typography align='center'>
        These young ladies will have the chance to unite and showcase their
        unique abilities through the beauty pageant format.
      </Typography>
    </Grid>
  </Section>
);
export default About;
