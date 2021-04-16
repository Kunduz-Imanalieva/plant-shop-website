import classes from "./Location.module.css";
import locationBackground from "../../images/location.svg";

const Location = () => {
  return (
    <div>
      <div>
        <img src={locationBackground} alt="location" width="1311px" />
         <div className={classes.Location}>
             <h1>Location</h1>
             <p>No. 100, Ln. 00, Chifeng St., Datong Dist., Taipei City 103, Taiwan (R.O.C.)</p>
             <p>Open  11:00 - 22:00</p>
             
         </div>
      </div>
      
     
      
      
    </div>
  );
};

export default Location;
