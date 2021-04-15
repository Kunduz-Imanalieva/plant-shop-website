import classes from "./Home.module.css";
import homeBackground from "../../images/home.svg"

const Home = () => {
    return ( <div className={classes.Home}>
        <img src={homeBackground} alt="background" />
    </div> );
}
 
export default Home;