import React, { useState } from 'react';

function SearchComponent({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (!lowercasedValue) {
      setFilteredData([]);
      return;
    }

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(lowercasedValue)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <input type="button" value="Search Demos" />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;