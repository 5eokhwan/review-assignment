export const CHANGE_PAGE = "PAGE/CHANGE_PAGE";
//상태의 변화가 필요할 때 발생하는 것을 액션(Action)
//액션 생성 함수
//액션(Action)을 생성해주는 함수
//파라미터를 받아 액션 객체 형태로 만들어주는 일
export const changePage = (offset) => ({
  type: CHANGE_PAGE,
  payload: { offset },
});

//초기설정
const initalState = {
  size: 5,
  offset: 1, // or 0?
};

//리듀서(변화를 일으키는 함수)
const pageReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        offset: payload.offset,
      };
    default:
      return state;
  }
};
export default pageReducer;
