
const SearchBar = ({ value, handleChangeFilterInput }) => {
    return (
        <div>
            Find contacts by name
            <input
                type="text"
                name="Search Bar"
                value={value}
                onChange={handleChangeFilterInput}
            />
        </div>
    )
};

export default SearchBar;