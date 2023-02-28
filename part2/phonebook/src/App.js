import { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [filterName, setFilterName] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (newName.length > 0 && newPhone.length > 0) {
      const checkResult = persons.find(person => person.name === newName || person.phone === newPhone);

      if (checkResult) {
        alert(`${checkResult.name === newName ? newName : newPhone} is already added to phonebook`)
      }
      else {
        const person = {
          name: newName,
          phone: newPhone,
          id: persons.length + 1
        };

        setPersons(persons.concat(person));
        setNewName('');
        setNewPhone('');
      }
    }
  }

  const handleFilterChange = e => setFilterName(e.target.value.toLowerCase());
  const handleNameChange = e => setNewName(e.target.value);
  const handlePhoneChange = e => setNewPhone(e.target.value);

  return (
    <>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <Filter
        filter={filterName}
        handleChange={handleFilterChange}
      />
      <h3>Add</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleAdd={handleAdd}
      />
      <h3>Numbers</h3>
      <Persons persons={
        filterName === '' ?
          persons :
          persons.filter(person => person.name.toLowerCase().includes(filterName))
      } />
    </>
  )
}

export default App