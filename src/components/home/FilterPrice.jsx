import React from "react";
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = Number(e.target.from.value)
    const to = Number(e.target.to.value)
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form className="price" onSubmit={handleSubmit}>
      <h3 className="price__title">Price</h3>
      <div className="price__from-container">
        <label className="price__from" htmlFor="from">From</label>
        <input type="number" id="from" />
      </div>
      <div className="price__to-container">
        <label className="price__to" htmlFor="to">To</label>
        <input type="number" id="to" />
      </div>
      <button className="filter-price__btn">Filter</button>
    </form>
  );
};

export default FilterPrice;
