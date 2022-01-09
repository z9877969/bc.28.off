import { connect } from "react-redux";
import { changeStepIncr, changeStepDecr } from "../../redux/step/stepActions";

const StepSelect = ({
  title,
  stepIncr,
  stepDecr,
  changeStepIncr,
  changeStepDecr,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <label>
        Decrement
        <select
          onChange={(e) => changeStepDecr(Number(e.target.value))}
          //   name="stepDecr"
          value={stepDecr}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <label>
        Increment
        <select
          onChange={(e) => changeStepIncr(Number(e.target.value))}
          //   name="stepIncr"
          value={stepIncr}
        >
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
  stepIncr: state.step.incr,
  stepDecr: state.step.decr,
});
// {stepIncr, stepDecr}

const mapDispatchToProps = {
  changeStepIncr,
  changeStepDecr,
};
// {changeStepIncr, changeStepDecr}

export default connect(mapStateToProps, mapDispatchToProps)(StepSelect);
