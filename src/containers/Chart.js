import { connect } from "react-redux";
import Chart from "../components/Chart";
// import { removeCar } action here

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
export default connect(mapStateToProps)(Chart);
