import { connect, useDispatch, useSelector } from "react-redux";
import s from "./Counter.module.css";
import {
  increment,
  decrement,
  reset,
} from "../../redux/counter/counterActions";
import StepSelect from "../../components/StepSelect/StepSelect";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { incr, decr } = useSelector((state) => state.step);

  console.log("props :>> ", counter);

  // const { incr, decr } = step;

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>

      <StepSelect title={"Select"} />
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        {/* <button onClick={() => decrement(decr)} className={s.btn} type="button"> */}
        <button
          onClick={() => dispatch(decrement(decr))}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className={s.btn}
          type="button"
        >
          0
        </button>
        <button
          onClick={() => dispatch(increment(incr))}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter,
//   step: state.step,
// });

// const mapDispatchToProps = (dispatch) => ({
// increment: (step) => dispatch(increment(step)),
// decrement: (step) => dispatch(decrement(step)),
// reset: () => dispatch(reset()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
