import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, number, name }) => {
                return (
                    <li key={id}>
                        <p>{name}: {number}</p>
                        <button
                            type="button"
                            name="delete"
                            onClick={() => handleDeleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ),
    handleDeleteContact: PropTypes.func.isRequired,
};