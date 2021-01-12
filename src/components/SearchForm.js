import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <span>
          <input>
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          </input>
        </span>
        <span>
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </span>
      </div>
    </form>
  );
}

export default SearchForm;
