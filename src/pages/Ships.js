import React, { useState, useEffect } from 'react';
import fetchShips from '../utils/getData';
import PageView from '../components/PageView';

const Ships = () => {
  const [page, setPage] = useState(1);
  const [ships, setShips] = useState([]);
  const [response, setResponse] = useState({
    next: true,
    previous: false,
  });

  useEffect(() => {
    fetchShips('starships', page).then((response) => {
      const ship = response.results;
      setShips(ship);
      setResponse(response);
    });
  }, [page]);

  let rows = createArray(ships);

  return (
    <PageView
      state={response}
      path="starships"
      rows={rows}
      page={page}
      setPage={setPage}
    />
  );
};

function createArray(ships) {
  return ships.map((ship, index) => {
    return {
      nombre: ship.name,
      Modelo: ship.model,
      Capacidad: ship.passengers,
    };
  });
}
export default Ships;
