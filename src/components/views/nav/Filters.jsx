import { useSelector } from "react-redux";
import Filter from "./Filter";

function Filters() {
  const { filters } = useSelector((state) => state.filtersReducer);
  console.log(filters);
  return (
    <nav className="filters container">
      {filters && filters.map((filter, i) => <Filter key={i} info={filter} />)}
    </nav>
  );
}

export default Filters;
