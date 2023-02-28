const Persons = ({persons}) =>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {persons.map(person => <Line key={person.id} name={person.name} phone={person.number} />)}
        </tbody>
    </table>

const Line = ({ name, phone }) => <tr><td>{name}</td><td>{phone}</td></tr>

export default Persons;