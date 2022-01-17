// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.

//액션 정의
export const CHANGE_FILTERS = "FILTERS/CHANGE_FILTER";
//상태의 변화가 필요할 때 발생하는 것을 액션(Action)
//액션 생성 함수
//액션(Action)을 생성해주는 함수
//파라미터를 받아 액션 객체 형태로 만들어주는 일
export const changeFilters = (category, activeIdx) => ({
  type: CHANGE_FILTERS,
  payload: { category, active: activeIdx },
});

//초기설정
const initalState = {
  filters: [
    {
      category: "year",
      k_category: "학년",
      names: ["전체", "고3, N수생", "고2", "고1", "중3", "중2", "중1"],
      active: 0,
    },
    {
      category: "subject",
      k_category: "과목",
      names: ["전체", "수학", "영어", "국어", "과학", "사회", undefined],
      active: 0,
    },
  ],
};

//리듀서(변화를 일으키는 함수)
const filtersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTERS:
      const newState = {};
      newState.filters = state.filters.map((filter) =>
        filter.category === payload.category
          ? {
              ...filter,
              active: payload.active,
            }
          : filter
      );
      return newState;
    // default를 쓰지 않으면 맨처음 state에 초기값이 undefined가 나옵니다 꼭 default문을 넣으세요
    default:
      return state;
  }
};
export default filtersReducer;
