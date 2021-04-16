import classes from "./Service.module.css";
import serviceBackground from "../../images/service.svg";

const Service = () => {
  return (
    <div>
      <div>
        <img src={serviceBackground} alt="service" width="1311px" />
        <div className={classes.Service}>
          <h1>Service for home plants.</h1>
          <p>If you don’t know what plants you can add to the space,we can provide you with selected plants,and configure your space.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
