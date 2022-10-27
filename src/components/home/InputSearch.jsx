import React from "react";
import "./styles/inputSearch.css";

const InputSearch = ({ setInputText, inputText }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="input__container">
      <div className="input__box">
        <input
          className="input"
          placeholder="Search Your Product"
          id="input"
          value={inputText}
          onChange={handleChange}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputSearch;
