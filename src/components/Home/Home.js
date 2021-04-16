import classes from "./Home.module.css";
import homeBackground from "../../images/home.svg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div>
        <img src={homeBackground} alt="background" width="1311px" />
      </div>
    </div>
  );
};

export default Home;
