import { connect } from "react-redux";
// import { changeStepDecr, changeStepIncr } from "../../redux/step/stepAction"; // actions created with createActions
import { changeDecr, changeIncr } from "../../redux/step/stepSlice"; // actions created with createSlice

const StepSelect = ({ title, incr, decr, changeIncr, changeDecr }) => {
  return (
    <>
      <h1>{title}</h1>
      <label>
        <p>Increment</p>
        <select onChange={(e) => changeIncr(+e.target.value)} value={incr}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <label>
        <p>Decrement</p>
        <select onChange={(e) => changeDecr(+e.target.value)} value={decr}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  incr: state.step.incr,
  decr: state.step.decr,
});

const mapDispatchToProps = {
  changeIncr,
  changeDecr,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelect);
