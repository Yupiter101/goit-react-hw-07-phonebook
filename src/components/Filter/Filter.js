
import { useSelector, useDispatch } from "react-redux";
import { getFilter, setFilter } from "redux/filterSlice";
import css from "./Filter.module.css";



export function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function handleFilter(event) {
    console.log('filter', event.target.value);
    return dispatch(setFilter(event.target.value));
  }

    return (
      <label className={css.FilterLabel}>Find contacs by name
        <input
          className={css.FilterInput}
          type="text"
          name="search"
          title="find contacs by name"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    )
}

