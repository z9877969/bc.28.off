import { connect, useDispatch, useSelector } from "react-redux";
import { changeStepIncr, changeStepDecr } from "../../redux/step/stepActions";

const StepSelect = ({ title, incr, decr, changeStepDecr, changeStepIncr }) => {
  // const dispatch = useDispatch();
  // const { incr, decr } = useSelector((state) => state.step);

  return (
    <>
      <h1>{title}</h1>
      <label>
        Decrement
        <select onChange={(e) => changeStepDecr(e.target.value)} value={decr}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <label>
        Increment
        <select onChange={(e) => changeStepIncr(e.target.value)} value={incr}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </>
  );
};

const mSTP = (state) => ({
  incr: state.step.incr,
  decr: state.step.decr,
});

const mDTP = {
  changeStepIncr: changeStepIncr,
  changeStepDecr: changeStepDecr,
};

export default connect(mSTP, mDTP)(StepSelect);

// {...props} + {incr, decr} + {changeStepIncr, changeStepDecr}
