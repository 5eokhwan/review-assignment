export const CHANGE_FILTERS = "FILTERS/CHANGE_FILTER";

export const changeFilters = (category, activeIdx) => ({
  type: CHANGE_FILTERS,
  payload: { category, active: activeIdx },
});

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
    default:
      return state;
  }
};
export default filtersReducer;
