import React, { useState } from 'react';

import { Input } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export default function Search(path) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  let pathSearch = path.path;

  const search = async (e) => {
    e.preventDefault();
    const url = `https://swapi.dev/api/${pathSearch}/?search=${query}`;
    try {
      const res = await fetch(url);
      const response = await res.json();

      setData(response.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {
        <form className="form" onSubmit={search}>
          <label className="label" htmlFor="query">
            STAR WARS
          </label>

          <Input
            type="text"
            className="input"
            name="query"
            placeholder=" Star Wars"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      }
      {data.length > 0 && (
        <Redirect
          push
          to={{
            pathname: '/result',
            state: { data: data },
          }}
        />
      )}
    </>
  );
}
