import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import * as personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const fetchPersons = () => {
    personService.getAll().then(data => setPersons(data))
  };

  const handleAdd = e => {
    e.preventDefault();

    if (newName.length > 0 && newPhone.length > 0) {
      const checkResult = persons.find(person => person.name === newName);

      const person = {
        name: newName,
        number: newPhone,
        id: checkResult ? checkResult.id : persons.length + 1
      };

      if (!checkResult) {
        personService
          .create(person)
          .then(data => {
            setPersons(persons.concat(data));
            setNewName('');
            setNewPhone('');
          })
          .catch(error => alert(`Error ${error.response.status} - ${error.response.statusText}`));
      }
      else if (window.confirm(`${checkResult.name} already exists in the phonebook, update the phone number ?`)) {
        personService
          .update(person.id, person)
          .then(data => {
            setPersons(persons.map(person => person.id === data.id ? data : person));
            setNewName('');
            setNewPhone('');
          })
          .catch(error => alert(`Error ${error.response.status} - ${error.response.statusText}`));
      }
    }
  }

  const handleDel = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(error => {
          alert(
            (error.response.status === 404) ?
              `${name} was already deleted from server !` :
              `Error ${error.response.status} - ${error.response.statusText}`
          );
          setPersons(persons.filter(person => person.id !== id))
        });
    }
  }

  const handleFilterChange = e => setFilterName(e.target.value.toLowerCase());
  const handleNameChange = e => setNewName(e.target.value);
  const handlePhoneChange = e => setNewPhone(e.target.value);

  useEffect(fetchPersons, []);

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
      <Persons
        persons={
          filterName === '' ?
            persons :
            persons.filter(person => person.name.toLowerCase().includes(filterName))
        }
        handleDel={handleDel}
      />
    </>
  )
}

export default App