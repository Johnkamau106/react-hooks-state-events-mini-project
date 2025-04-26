import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
