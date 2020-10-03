import React, { useState } from 'react';

// import { Container } from './styles';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return ();
}

export default EditUserForm