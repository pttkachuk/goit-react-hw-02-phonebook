import { StyledSearchDiv, StyledSearchInput, StyledSearchLabel, StyledSearchSpan } from "./SearchBarStyled";

const SearchBar = ({ value, handleChangeFilterInput }) => {
    return (
        <StyledSearchDiv>
            <StyledSearchLabel >
                <StyledSearchSpan>Find contacts by name</StyledSearchSpan>
                <StyledSearchInput
                type="text"
                name="Search Bar"
                placeholder="Search contact..."
                value={value}
                onChange={handleChangeFilterInput}
                />
            </StyledSearchLabel>
            
        </StyledSearchDiv>
    )
};

export default SearchBar;