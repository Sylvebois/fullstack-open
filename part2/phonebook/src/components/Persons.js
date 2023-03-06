const Persons = ({ persons, handleDel }) =>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                persons.map(person =>
                    <Line
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        phone={person.number}
                        handleDel={handleDel}
                    />)
            }
        </tbody>
    </table>

const Line = ({ id, name, phone, handleDel }) =>
    <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
            <button onClick={() => handleDel(id, name)}>delete</button>
        </td>
    </tr>

export default Persons;