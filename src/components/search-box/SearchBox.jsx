import React from 'react';
import './SearchBox.css'

function SearchBox({placeholder,handleChange}) {
    return (
        <div className="mySearchBox col-sm-4">
           <input type="search" placeholder={placeholder} onChange={handleChange} className="form-control" />  
        </div>
    );
}

export default SearchBox;