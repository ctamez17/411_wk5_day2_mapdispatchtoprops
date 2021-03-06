import { connect } from "react-redux";
import { removeCar } from "../redux/actions";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars,
  };
};

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    removeCar: (index) => dispatch(removeCar(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
