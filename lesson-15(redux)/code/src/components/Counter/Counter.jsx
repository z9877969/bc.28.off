import { useState } from "react";
import { connect } from "react-redux";
import StepSelect from "../StepSelect/StepSelect";
import s from "./Counter.module.css";
import {
  counterReset,
  counterIncrement,
  counterDecrement,
} from "../../redux/counter/counterActions";

const Counter = ({
  counter,
  stepIncr,
  stepDecr,
  counterResetProps,
  counterIncrement,
  counterDecrement,
}) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      {/* <select
        onChange={(e) => setStepIncr(e.target.value)}
        name="stepIncr"
        value={stepIncr}
      >
        <option value="10">10</option>
        <option value="15">15</option>
      </select> */}
      <StepSelect title={"Select"} />
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => counterDecrement(stepDecr)}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button onClick={counterResetProps} className={s.btn} type="button">
          0
        </button>
        <button
          onClick={() => counterIncrement(stepIncr)}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter, // 10
  stepIncr: state.step.incr,
  stepDecr: state.step.decr,
});

// const mapDispatchToProps = (dispatch) => ({
//   counterReset: () => {
//     // console.log("counterReset");
//     const action = counterReset();
//     dispatch(action);
//   },
// });
const mapDispatchToProps = {
  counterResetProps: counterReset, // () => dispatch(counterReset())
  counterIncrement: counterIncrement,
  counterDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// {...}

// {
//   const { getState, dispatch } = store;

//   export const fnConnect = (mapStateToProps, mapDispatchToProps) => {

//     const stateProps = mapStateToProps(getState());
//
//  const dispatchProps = mapDispatchToProps(dispatch);

//     return (Component) => {
//       return (props) => (
//         <Component {...props} {...stateProps} {...dispatchProps} />
//       );
//     };
//   };
// }

// fnConnect(mSTP, mDTP)(Counter);
