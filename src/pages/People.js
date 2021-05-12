import React, { useState, useEffect } from 'react';
import fetchPeople from '../utils/getData';
import PageView from '../components/PageView';

const People = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [response, setResponse] = useState({
    next: true,
    previous: false,
  });

  useEffect(() => {
    fetchPeople('people', page).then((response) => {
      const characters = response.results;
      setPeople(characters);
      setResponse({ next: response.next, previous: response.previous });
    });
  }, [page]);

  let rows = createArray(people);

  return (
    <PageView
      state={response}
      path="people"
      rows={rows}
      page={page}
      setPage={setPage}
    />
  );
};
function createArray(people) {
  return people.map((person, index) => {
    return {
      nombre: person.name,
      edad: person.birth_year,
      genero: person.gender,
      url: person.url,
    };
  });
}
export default People;
