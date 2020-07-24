import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import test from "./test";

const rootReducer = combineReducers({
  counter,
  todos,
  test,
});

export default rootReducer;

//이 부분은 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해 useSelector 사용시 필요
export type RootState = ReturnType<typeof rootReducer>;
