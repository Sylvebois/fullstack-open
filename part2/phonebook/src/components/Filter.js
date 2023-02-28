const Filter = ({ filter, handleChange }) =>
    <div>
        Filter by name containing : <input value={filter} onChange={handleChange} />
    </div>

export default Filter;