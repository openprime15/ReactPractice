import { RootState } from "../modules";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { modifyTest, modifyTestB } from "../modules/test";

export default function useTest() {
  const testA = useSelector((state: RootState) => {
    return state.test;
  });

  const dispatch = useDispatch();
  const modifyTestA = useCallback((a: string) => dispatch(modifyTest(a)), [
    dispatch,
  ]);
  const modifyTestb = useCallback((b: string) => dispatch(modifyTestB(b)), [
    dispatch,
  ]);

  return { testA, modifyTestA, modifyTestb };
}
