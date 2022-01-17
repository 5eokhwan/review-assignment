import { useSelector } from "react-redux";
import Filter from "./Filter";

function Filters() {
  const { filters } = useSelector((state) => state.filtersReducer);
  return (
    <nav className="filters container">
      {filters.map((filter, i) => (
        <Filter key={i} info={filter} />
      ))}
    </nav>
  );
}

export default Filters;
