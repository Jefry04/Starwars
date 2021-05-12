import React, { useState, useEffect } from 'react';
import fetchPlanets from './../utils/getData';
import PageView from '../components/PageView';

const Planets = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [response, setResponse] = useState({
    next: true,
    previous: false,
  });

  useEffect(() => {
    fetchPlanets('planets', page).then((response) => {
      const characters = response.results;
      setPlanets(characters);
      setResponse(response);
    });
  }, [page]);

  let rows = createArray(planets);

  return (
    <PageView
      state={response}
      path="planets"
      rows={rows}
      page={page}
      setPage={setPage}
    />
  );
};

function createArray(planets) {
  return planets.map((planet, index) => {
    return {
      nombre: planet.name,
      clima: planet.climate,
      poblacion: planet.population,
    };
  });
}
export default Planets;
