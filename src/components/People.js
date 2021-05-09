import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const fetchPeople = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const People = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [state, setState] = useState({
    count: undefined,
    next: true,
    previous: false,
    results: [],
  });

  useEffect(() => {
    fetchPeople(page).then((response) => {
      const characters = response.results;
      setPeople(characters);
      setState(response);
    });
  }, [page]);

  const hasNext = !!state.next;
  const hasPrevious = !!state.previous;
  return (
    <>
      <ol>
        {people.map((person) => {
          return <li key={uuidv4()}>{person.name}</li>;
        })}
      </ol>
      {hasNext && <button onClick={() => setPage(page + 1)}>Next</button>}
      {hasPrevious && <button onClick={() => setPage(page - 1)}>Back</button>}
    </>
  );
};

export default People;
