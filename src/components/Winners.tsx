import { Grid, GridProps, Typography, Divider } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import Section from "./Section";

import "./Winners.css";

interface IWinnerProps {
  category: ReactNode;
  name: ReactNode;
}

const Winner: FunctionComponent<IWinnerProps & Partial<GridProps>> = ({
  category,
  name,
  ...gridProps
}) => {
  return (
    <Grid {...gridProps} item xs={12} md={6}>
      <Typography variant='h5' textAlign='center'>
        {category}
      </Typography>
      <Typography textAlign='center'>{name}</Typography>
    </Grid>
  );
};

const results: { [key: string]: IWinnerProps[] } = {
  drawings: [
    {
      category: "Mom's Pedicure",
      name: "Michelle Sandbulte",
    },
    { category: "Dad's Barbeque Set", name: "Jeremy Heinrichs" },
    { category: "6-Pack I-Cubs Tickets", name: "Alivia Romesburg" },
    { category: "Adventureland Tickets", name: "Mia Fine" },
    { category: "4-Pack I-Cubs Tickets", name: "Emily Brown" },
  ],
  spirit: [{ category: "Spirit of DMT Award", name: "Sue Behrens-Hudson" }],
  judges: [
    { category: "Judge's Choice", name: "Brianna Moore" },
    { category: "Judge's Choice", name: "Abby Heinrichs" },
    { category: "Judge's Choice", name: "Becky Russell" },
    { category: "Judge's Choice", name: "Paris Mulder" },
  ],
  special: [
    { category: "Best Casual Wear", name: "Sheyanne Ackerson" },
    { category: "Best Formal Wear", name: "Elizabeth Esdohr" },
    { category: "Miss Congeniality", name: "Emily Brown" },
    { category: "Miss Photogenic", name: "Alivia Romesburg" },
    { category: "People's Choice", name: "Maddie Farrell" },
  ],
  littleMiss: [
    { category: "Little Miss Dreams Made True", name: "Leighton Buckley" },
    { category: "First Runner Up", name: "Gracie Kobold" },
  ],
  juniorMiss: [
    { category: "Junior Miss Dreams Made True", name: "Audrey Page" },
    { category: "First Runner Up", name: "Mia Fine" },
  ],
  teenMiss: [
    { category: "Teen Miss Dreams Made True", name: "Furaha Vicent" },
    { category: "First Runner Up", name: "Rachel Miller" },
  ],
  miss: [
    { category: "Miss Dreams Made True", name: "Olivia Siepker" },
    { category: "First Runner Up", name: "Christina Lampe" },
  ],
};

interface IWinnerSectionProps {
  sectionTitle: string;
  winners: IWinnerProps[];
}

const WinnerSection: FunctionComponent<IWinnerSectionProps> = ({
  sectionTitle,
  winners,
}) => {
  return (
    <Grid item container justifyContent='center' spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h3' textAlign='center'>
          {sectionTitle}
        </Typography>
      </Grid>
      {winners.map((w, i) => (
        <Winner key={i} category={w.category} name={w.name} />
      ))}
    </Grid>
  );
};

const Winners = () => (
  <Section sectionTitle='2019 Winners' sectionClassName='winners'>
    <WinnerSection sectionTitle='Drawings' winners={results.drawings} />
    <WinnerSection sectionTitle='Spirit of DMT' winners={results.spirit} />
    <WinnerSection sectionTitle="Judge's Choice" winners={results.judges} />
    <WinnerSection
      sectionTitle='Little Miss Dreams Made True'
      winners={results.littleMiss}
    />
    <WinnerSection
      sectionTitle='Junior Miss Dreams Made True'
      winners={results.juniorMiss}
    />
    <WinnerSection
      sectionTitle='Teen Miss Dreams Made True'
      winners={results.teenMiss}
    />
    <WinnerSection
      sectionTitle='Miss Dreams Made True'
      winners={results.miss}
    />
  </Section>
);
export default Winners;
