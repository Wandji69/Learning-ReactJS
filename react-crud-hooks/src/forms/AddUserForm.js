import React, { useState } from 'react';

const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState);

const handleInputForm = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [namme]: value })

    console.log(e);
}



const AddUserForm = (props) => {
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user, name || !user.username) return
                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputForm}
            />
            <label>UserName</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputForm}
            />
            <button>Add new user</button>
        </form>
    );
};

export default AddUserForm;