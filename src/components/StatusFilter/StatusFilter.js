import { useDispatch, useSelector } from "react-redux"

import { statusFilters } from "../../redux/constants";
import { Button } from "../Button/Button";
import { getStatusFilter } from "../../redux/selectors";

import css from "./StatusFilter.module.css"
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
        <Button 
          onClick={() => handleFilterChange(statusFilters.all)} 
          type="button" 
          selected={filter === statusFilters.all}>
          All
        </Button>
        <Button onClick={() => handleFilterChange(statusFilters.active)} type="button" selected={filter === statusFilters.active}>Active</Button>
        <Button onClick={() => handleFilterChange(statusFilters.completed)} type="button" selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  )
}