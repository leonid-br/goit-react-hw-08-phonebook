const url = 'http://localhost:3000/contacts';

const addNewContact = async (data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

const getAllContacts = async () => {
    const response = await fetch(url);
    const result = await response.json();

    return result;
};

const deleteContact = async id => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    const result = await response.json();

    return result;
};

export { deleteContact, getAllContacts, addNewContact };
