import s from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{100}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => console.log("counter decr")}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button onClick={() => console.log("to 0")} className={s.btn} type="button">
          0
        </button>
        <button
          onClick={() => console.log("counter incr")}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

{/* <select
        onChange={(e) => setStepIncr(e.target.value)}
        name="stepIncr"
        value={stepIncr}
      >
        <option value="10">10</option>
        <option value="15">15</option>
      </select> */}