const MODIFY_TEST = "test/MODIFY_TEST" as const;
const MODIFY_TEST_B = "test/MODIFY_TEST_B" as const;

export const modifyTest = (a: string) => ({
  type: MODIFY_TEST,
  payload: a,
});

export const modifyTestB = (b: string) => ({
  type: MODIFY_TEST_B,
  payload: b,
});

export type TestState = { initiala: string; initialb: string };

type TestAction =
  | ReturnType<typeof modifyTest>
  | ReturnType<typeof modifyTestB>;

const initialState: TestState = {
  initiala: "스토어에서 받은 메세지입니다.",
  initialb: "2번째",
};

function testSS(
  state: TestState = initialState,
  action: TestAction
): TestState {
  switch (action.type) {
    case MODIFY_TEST:
      return { initiala: action.payload, initialb: state.initialb };
    case MODIFY_TEST_B:
      return { initiala: state.initiala, initialb: action.payload };
    default:
      return state;
  }
}

export default testSS;
