import React, { useState } from "react";
import "./SearchForm.css";

/** Used to search on CompanyList and JobList
 * 
 * Renders Search Form
 */

 function SearchForm({ searchFor }) {
    console.debug("SearchForm", "searchFor=", typeof searchFor);
  
    const [searchTerm, setSearchTerm] = useState("");
  
    
    function handleSubmit(evt) {
      // take care of search for just spaces
      evt.preventDefault();
      searchFor(searchTerm.trim() || undefined);
      setSearchTerm(searchTerm.trim());
    }
  
    /** Update form fields */
    function handleChange(evt) {
      setSearchTerm(evt.target.value);
    }
  
    return (
        <div className="SearchForm mb-4">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
                className="form-control form-control-lg flex-grow-1"
                name="searchTerm"
                placeholder="Enter search term.."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </form>
        </div>
    );
  }
  
  export default SearchForm;
  