const Filter = ({ filterValue, handleChange }) =>
    <div>
        Find countries : <input value={filterValue} onChange={handleChange} />
    </div>

export default Filter;