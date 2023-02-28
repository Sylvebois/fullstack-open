const PersonForm = ({newName, newPhone, handleNameChange, handlePhoneChange, handleAdd}) =>
    <form>
        <div>
            name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
            <button type="submit" onClick={handleAdd}>add</button>
        </div>
    </form>

export default PersonForm;