import { FilterStyled, Input } from "./Filter.styled"
import PropTypes from 'prop-types';


export const Filter = ({value, onChange}) => {
    return <FilterStyled><label htmlFor="filter">Filter
    <Input type="text" name="filter" value={value} onChange={onChange}/>
  </label></FilterStyled>
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}