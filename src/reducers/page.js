const SIZE = 5; //보여지는 리뷰 수
const GAP = 5; //보여지는 페이지 숫자 수

export const SELECT_PAGE = "PAGE/SELECT_PAGE";
export const NEXT_PAGE = "PAGE/NEXT_PAGE";
export const PREVIOUS_PAGE = "PAGE/PREVIOUS_PAGE";
export const NEXT_OFFSET = "PAGE/NEXT_OFFSET";
export const PREVIOUS_OFFSET = "PAGE/PREVIOUS_OFFSET";
export const RENEW_TOTAL_DATA = "PAGE/RENEW_TOTAL_DATA";
//상태의 변화가 필요할 때 발생하는 것을 액션(Action)
//액션 생성 함수
//액션(Action)을 생성해주는 함수
//파라미터를 받아 액션 객체 형태로 만들어주는 일
export const selectPage = (offset) => ({
  type: SELECT_PAGE,
  payload: { offset },
});
export const nextPage = () => ({
  type: NEXT_PAGE,
});
export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});
export const nextOffet = () => ({
  type: NEXT_OFFSET,
});
export const previousOffet = () => ({
  type: PREVIOUS_OFFSET,
});
export const renewTotalData = (total) => ({
  type: RENEW_TOTAL_DATA,
  payload: { total },
});
//초기설정
const initalState = {
  size: SIZE,
  gap: GAP,
  offset: 1, // 1이 시작
  totalReview: 0,
  start: 0,
  end: 5,
};

//리듀서(변화를 일으키는 함수)
const pageReducer = (state = initalState, { type, payload }) => {
  let newOffset;
  let totalPage = Math.ceil(state.totalReview / state.size);
  switch (type) {
    case SELECT_PAGE:
      return {
        ...state,
        offset: payload.offset,
      };
    case NEXT_PAGE:
      return {
        ...state,
        offset: state.offset + 1,
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        offset: state.offset - 1,
      };
    case NEXT_OFFSET:
      newOffset = state.offset + SIZE;
      return {
        ...state,
        offset: newOffset > totalPage ? totalPage : newOffset,
      };
    case PREVIOUS_OFFSET:
      newOffset = state.offset - SIZE;
      return {
        ...state,
        offset: newOffset < 1 ? 1 : newOffset,
      };
    case RENEW_TOTAL_DATA:
      return {
        ...state,
        totalReview: payload.total,
      };
    default:
      return state;
  }
};
export default pageReducer;
