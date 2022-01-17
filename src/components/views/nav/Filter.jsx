import { useDispatch } from "react-redux";
import { changeFilters } from "../../../reducers/filters";

function Filter({ info }) {
  const dispatch = useDispatch();

  return (
    <div className={"filter " + info.category}>
      <span className="category">{info.k_category}</span>
      <span className="check-set">
        {info.names.map((name, i) =>
          name ? (
            <div
              className={info.active === i ? "active" : ""}
              onClick={() => dispatch(changeFilters(info.category, i))}
            >
              {name}
            </div>
          ) : (
            <div style={{ visibility: "hidden" }}></div>
          )
        )}
      </span>
    </div>
  );
}

export default Filter;
