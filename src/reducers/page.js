const SIZE = 5; //보여지는 리뷰 수
const GAP = 5; //보여지는 페이지 숫자 수

export const SELECT_PAGE = "PAGE/SELECT_PAGE";
export const NEXT_PAGE = "PAGE/NEXT_PAGE";
export const PREVIOUS_PAGE = "PAGE/PREVIOUS_PAGE";
export const NEXT_OFFSET = "PAGE/NEXT_OFFSET";
export const PREVIOUS_OFFSET = "PAGE/PREVIOUS_OFFSET";
export const RENEW_TOTAL_DATA = "PAGE/RENEW_TOTAL_DATA";

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
