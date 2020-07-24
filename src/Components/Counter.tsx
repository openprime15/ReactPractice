import React from "react";

type CounterProps = {
  countb: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({
  countb,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{countb}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(5)}>+5</button>
      </div>
    </div>
  );
}

export default Counter;
