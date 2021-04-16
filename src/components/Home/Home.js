import classes from "./Home.module.css";
import homeBackground from "../../images/home.svg";

const Home = () => {
  return (
    <div>
      <div>
        <img src={homeBackground} alt="background" width="1311px" />
        <div className={classes.Home}>
          <h1>Let’s find your love plants.</h1>
          <p>Add some color to your home, give it a little attention, the plants will accompany you quietly</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
