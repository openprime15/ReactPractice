import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";
import Counter from "../Components/Counter";

function CounterContainer() {
  const countc = useSelector((aaa: RootState) => aaa.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      countb={countc}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
