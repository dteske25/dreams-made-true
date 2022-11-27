import { Button, Grid, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import "./Contact.css";
import Section from "./Section";

const Contact = () => (
  <Section sectionTitle='Contact Dreams Made True' sectionClassName='contact'>
    <Grid item>
      <a href='mailto:info@dreams-made-true.org'>
        <Button variant='outlined' startIcon={<EmailOutlinedIcon />}>
          Email
        </Button>
      </a>
    </Grid>
    <Grid item>
      <a href='https://www.facebook.com/dreamsmadetruepageant/' target='_blank'>
        <Button variant='outlined' startIcon={<FacebookOutlinedIcon />}>
          Facebook
        </Button>
      </a>
    </Grid>
    <Grid item>
      <a
        href='https://www.instagram.com/dreamsmadetruepageant/'
        target='_blank'
      >
        <Button variant='outlined'>Instagram</Button>
      </a>
    </Grid>
  </Section>

  // <section className='contact'>
  //   <Grid container justifyContent='center' spacing={2}>
  //     <Grid item xs={12}>
  //       <Typography variant='h3'>Contact Dreams Made True</Typography>
  //     </Grid>

  //   </Grid>
  // </section>
);
export default Contact;
