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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleOnChange} placeholder="Search" />
      </form>
    </div>
  );
}
export default SearchBar;
