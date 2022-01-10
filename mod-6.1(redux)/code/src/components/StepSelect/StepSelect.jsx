import { connect } from "react-redux";
import { changeStepDecr, changeStepIncr } from "../../redux/step/stepAction";

const StepSelect = ({ title, incr, decr, changeIncr, changeDecr }) => {
  // const [stateIncr, setStateIncr] = useState(5)
  // const [stateDecr, setStateDecr] = useState(10)
  return (
    <>
      <h1>{title}</h1>
      <label>
        <p>Increment</p>
        <select
          onChange={(e) => changeIncr(+e.target.value)}
          //   name="stepDecr"
          value={incr}
          // value={stateIncr}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <label>
        <p>Decrement</p>
        <select
          onChange={(e) => changeDecr(+e.target.value)}
          //   name="stepDecr"
          value={decr}
        >
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
  changeIncr: changeStepIncr,
  changeDecr: changeStepDecr,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelect);
