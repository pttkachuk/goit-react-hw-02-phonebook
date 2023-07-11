

const SearchContact = ({ value, handleChangeFilterInput }) => {
    return (
        <div>
            Find contacts by name
            <input
                type="text"
                name="Search Contact"
                value={value}
                onChange={handleChangeFilterInput}
            />
        </div>
    )
};

export default SearchContact;