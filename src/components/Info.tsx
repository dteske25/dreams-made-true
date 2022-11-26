import { FunctionComponent } from "react";
import { contestantCategories, IContestantCategory } from "../categories";
import { dayOne, dayTwo } from "../eventDates";

const ContestantCategory: FunctionComponent<{
  category: IContestantCategory;
}> = ({ category }) => {
  return (
    <>
      <span key={category.ageStart}>
        {category.name}: {category.ageStart}
        {category.ageEnd ? `-${category.ageEnd}` : "+"}{" "}
      </span>
      <br />
    </>
  );
};

const Info = () => {
  const dateRange = `${dayOne.format("MMMM Do")}-${dayTwo.format(
    "Do, YYYY"
  )}`;
  return (
    <section id="info" className="content-section text-center">
      <div className="info-section">
        <div className="container">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Eleventh Annual Dreams Made True Pageant</h2>
            <h3>{dateRange}</h3>
            <p>
              The Eleventh Annual Dreams Made True Pageant will be held on{" "}
              {dateRange}, at a location to be determined.
            </p>
            <p>
              The fun will begin on{" "}
              {dayOne.format('MMMM Do')}
              , at 6:30 pm with check-in at the auditorium. We will have social
              time with snacks, giving the girls and their parents a chance to
              meet each other and their assigned buddies. We will also have a
              short rehearsal on Friday night.
            </p>
            <p>
              On {dayTwo.format('MMMM Do')}
              , the girls will participate in a private interview session with a
              panel of judges. A pizza party along with special entertainment to
              amaze the girls will follow around noon. After lunch each
              contestant will have a hair and makeup session in preparation for
              the pageant itself. The pageant competition begins at 3:00 pm.
            </p>
            <p>
              In the first round of competition, each girl will be introduced on
              stage wearing her pageant t-shirt and denim bottoms. The second
              round of competition will feature a casual wear outfit that
              showcases the unique personality of each special girl. The final
              round will bring each girl across that stage in her beautiful
              evening gown. Crowns, sashes, and trophies will be awarded in each
              of the following age groups:
              <br />
              {contestantCategories.map((c, i) => (
                <ContestantCategory key={i} category={c} />
              ))}
              <br />A celebration supper will be held following the pageant.
              Join us for a magical night of Dreams Made True for all!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Info;
