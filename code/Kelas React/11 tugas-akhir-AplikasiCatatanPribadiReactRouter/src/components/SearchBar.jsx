import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchChangeEventHandler = (event) => {
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                type='text'
                id='search'
                placeholder='Cari berdasarkan judul ...'
                value={this.props.searchKey}
                onChange={this.onSearchChangeEventHandler}
                />
                <span className="clear" onClick={this.props.onReset}>x</span>
            </div>
        );
    }
}

SearchBar.propTypes = {
    searchKey: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default SearchBar;