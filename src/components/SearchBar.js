import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ submit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = function (e) {
    e.preventDefault();
    // submit(document.querySelector(".input").value);
    submit(term);
  };

  const handleOnChange = function (e) {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Text</label>
        <input value={term} onChange={handleOnChange} placeholder="Search" />
      </form>
    </div>
  );
}
export default SearchBar;
