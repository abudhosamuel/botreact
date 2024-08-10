import React from 'react';

function SortBar({ onSort }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>Sort By: </label>
      <select onChange={(e) => onSort(e.target.value)} style={{ padding: '5px' }}>
        <option value="">Select</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
