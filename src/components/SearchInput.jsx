import React from 'react';
// import { setSearchTerm, fetchSearchResults } from './Redux/features/movies/movieSlice';

const SearchInput = () => {



  return (
    <div className="search-input">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="error">Error: {error}</p>}
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
