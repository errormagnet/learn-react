import React from "react";

const Search = (props: any): JSX.Element => {
    const handleLangChange = (keyStrokeEvent: any) => {
        props.search(keyStrokeEvent);
    }

    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                name='searchBox'
                placeholder='Search Robots'
                onChange={ handleLangChange }
            />
        </div>
    );
};

export default Search;
