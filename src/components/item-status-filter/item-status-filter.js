import React, { Component } from "react";

import "./item-status-filter.css";

export default function ItemStatusFilter({ filter, filterClick }) {
  const buttonsType = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttons = buttonsType.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        onClick={() => filterClick(name)}
        key={name}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
}
