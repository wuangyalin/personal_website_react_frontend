import React, { useState } from 'react';



const ContactForm = () => {
    const [inputval, setUsername] = useState('');

    const handleChange = (event) => {
        setUsername(event.target.value);
        console.log(inputval);
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + inputval);
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
};

export default ContactForm;