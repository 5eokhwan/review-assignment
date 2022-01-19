import { useDispatch } from "react-redux";
import { changeFilters } from "../../../reducers/filters";
import { selectPage } from "../../../reducers/page";

function Filter({ filter }) {
  const dispatch = useDispatch();

  return (
    <div className={"filter " + filter.category}>
      <span className="category">{filter.k_category}</span>
      <span className="check-set">
        {filter.names.map((name, i) =>
          name ? (
            <div
              className={filter.active === i ? "active" : ""}
              onClick={() => {
                dispatch(changeFilters(filter.category, i));
                dispatch(selectPage(1));
              }}
              key={i}
            >
              {name}
            </div>
          ) : (
            <div style={{ visibility: "hidden" }} key={i}></div>
          )
        )}
      </span>
    </div>
  );
}

export default Filter;
