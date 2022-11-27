import { Container, Grid, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface ISectionProps {
  sectionTitle: ReactNode;
  sectionClassName: string;
  sectionSubtitle?: ReactNode;
  children: ReactNode;
}

const Section: FunctionComponent<ISectionProps> = ({
  sectionTitle,
  sectionClassName,
  sectionSubtitle,
  children,
}) => {
  return (
    <section className={sectionClassName}>
      <Container maxWidth='md'>
        <Grid
          container
          justifyContent='center'
          spacing={2}
          style={{ marginTop: 100 }}
        >
          <Grid item xs={12}>
            <Typography variant='h2' textAlign='center'>
              {sectionTitle}
            </Typography>
            {sectionSubtitle && (
              <Typography variant='h3' textAlign='center'>
                {sectionSubtitle}
              </Typography>
            )}
          </Grid>
          {children}
        </Grid>
      </Container>
    </section>
  );
};

export default Section;
